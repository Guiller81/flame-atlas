/*
  Flame Atlas: the chat column. One request per question to the n8n backend; the answer comes back
  as data points and inferred points, each with source IDs, pages and test IDs. The page builds the
  links and the chart highlights from its own copy of the data file and drops any ID it does not know.
  Team Flame Atlas, NASA Space Apps Challenge 2026. Licence: Apache-2.0.
  Written with an AI coding assistant (Claude Code), directed by the team.
*/
import {
  data, state, D, CONDS, CHIP_GROUPS, matById, expById, testById, GRAVITY_NAME, OUTCOME_NAME, num, pct, plural,
  hasSelection, isEmptyPage, materialFacts, selectionWords, conditionWords, snapshot, restore, sameView, viewFor,
  aboutWords, highlightUseful, setHighlight, clearHighlight, onChange,
} from "./state.js";

const CHAT_URL = "https://guillec81.app.n8n.cloud/webhook/fif/chat";
const GIVE_UP_MS = 95000;          // the page stops waiting here
const MAX_CHARS = 2000;
const HISTORY_LIMIT = 50;          // turns the AI still reads
const DATASHEET_TYPES = ["application/pdf", "image/png", "image/jpeg"];
const DATASHEET_MAX = 5 * 1024 * 1024;

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* ---------- storage (falls back to a per-visit memory if the browser blocks it) ---------- */
const memory = {};
const store = {
  get(key) {
    try { const v = localStorage.getItem(key); return v == null ? memory[key] : v; }
    catch { return memory[key]; }
  },
  set(key, value) {
    memory[key] = value;
    try { localStorage.setItem(key, value); } catch { /* per-visit only */ }
  },
};
const newId = (prefix) => prefix + "-" + (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
const userId = store.get("fa.user") || (() => { const id = newId("u"); store.set("fa.user", id); return id; })();
let conversationId = store.get("fa.conv") || (() => { const id = newId("c"); store.set("fa.conv", id); return id; })();

/* ---------- screen context sent with every question ---------- */
function screenText() {
  const lines = [];
  lines.push("Selector side: " + (state.view === "experiment" ? "Experiment" : "Material"));
  const sel = [];
  if (state.exp && expById.has(state.exp)) sel.push(`experiment ${state.exp} (${expById.get(state.exp).name})`);
  if (state.mat && matById.has(state.mat)) sel.push(`material ${state.mat} (${matById.get(state.mat).name})`);
  if (state.cls) sel.push(`material class ${state.cls}`);
  if (state.g) sel.push(`gravity ${state.g}`);
  lines.push("Selected: " + (sel.length ? sel.join(", ") : "nothing"));
  const chips = CHIP_GROUPS.filter((c) => state.chips[c.key].size).map((c) => `${c.label}: ${[...state.chips[c.key]].join(" or ")}`);
  if (chips.length) lines.push("Filters: " + chips.join("; "));
  const conds = CONDS.filter((c) => state.cond[c.key] != null).map((c) => `${c.label} ${num(state.cond[c.key])} ${c.unit} (window ±${num(state.win[c.key])})`);
  lines.push("User's conditions: " + (conds.length ? conds.join(", ") + (state.cond.flow == null ? ", airflow any" : "") : "none set"));
  if (hasSelection() || conds.length) {
    lines.push(`Tests in the selection: ${D.selected.length}`);
    if (conds.length) {
      const ids = D.matchingSelected.map((t) => t.id);
      lines.push(`Tests matching the conditions: ${ids.length}` + (ids.length ? ` (${ids.slice(0, 50).join(", ")}${ids.length > 50 ? ", ..." : ""})` : ""));
      if (!ids.length && D.closest) lines.push(`Closest test: ${D.closest.id}`);
    }
  }
  const tapped = [...state.tapped];
  if (tapped.length === 1) {
    const t = testById.get(tapped[0]);
    if (t) lines.push(`Test open in Details: ${t.id} (${(matById.get(t.mat) || {}).name || t.mat}, ${GRAVITY_NAME[t.g] || t.g}, ${pct(t.o2)} O2, ${t.p == null ? "pressure not reported" : num(t.p) + " kPa"}, ${OUTCOME_NAME[t.out] || t.out})`);
  } else if (tapped.length > 1) lines.push(`Tests open in Details: ${tapped.slice(0, 50).join(", ")}`);
  if (state.mat && matById.has(state.mat)) {
    const f = materialFacts(state.mat);
    const card = [];
    if (f.rating != null) card.push(`${f.m.earth.label} ${pct(f.rating)} O2`);
    card.push(`Earth tests ${f.earth.length}`, `space tests ${f.space.length}`);
    if (f.lowestSpaceBurn != null) card.push(`lowest space burn ${pct(f.lowestSpaceBurn)} O2`);
    lines.push("Card on screen (the user already sees these numbers): " + card.join(", "));
  }
  return lines.join("\n").slice(0, 4000);
}

/* ---------- chat state ---------- */
let messages = [];                 // {role: "user"|"answer"|"error", ...}
let pending = null;                // the question on its way
let shown = null;                  // the one answer shown on the charts: {id, undo}
let attached = null;               // datasheet waiting to be sent: {name, mime, data}
try { messages = JSON.parse(store.get("fa.messages") || "[]"); } catch { messages = []; }
if (!Array.isArray(messages)) messages = [];
while (messages.length && messages[messages.length - 1].role === "user") messages.pop();   // a question that never got its answer
const saveMessages = () => store.set("fa.messages", JSON.stringify(messages.filter((m) => m.role !== "error")));

const log = $("chat-log");
const welcome = $("chat-welcome");
const input = $("chat-input");
const sendBtn = $("chat-send");
const counter = $("chat-counter");
const newConv = $("new-conversation");
const fileInput = $("datasheet-file");
const attachedBox = $("attached");

/* ---------- buttons that depend on what the charts show ---------- */
let live = [];                     // update functions of the buttons now on screen
onChange(() => live.forEach((fn) => fn()));

/* ---------- rendering ---------- */
function sourceLink(src) {
  const known = data.sources[src.source_id];
  if (!known || !known.url) return null;             // unknown IDs are dropped
  const a = el("a", "src");
  const paged = Number.isInteger(src.page) && known.kind !== "psi-record" && known.kind !== "psi-file";
  a.href = known.url + (paged ? "#page=" + src.page : "");
  a.target = "_blank";
  a.rel = "noopener";
  let label = known.short || src.source_id;
  if (paged) label += ", p." + src.page;
  if (src.locator) label += " · " + src.locator;
  a.textContent = label + " ↗";
  a.title = known.title || "";
  return a;
}

function pointItem(p, owner) {
  const li = el("li", "point");
  if (p.heading) li.append(el("strong", "point-heading", p.heading + ". "));
  li.append(el("span", "point-text", p.text));
  const seen = new Set();                              // the same page cited twice shows once
  const links = (p.sources || []).map(sourceLink).filter((a) => a && !seen.has(a.textContent) && seen.add(a.textContent));
  const ids = [...new Set((p.test_ids || []).filter((id) => testById.has(id)))];   // unknown test IDs are dropped
  if (links.length || ids.length) {
    const wrap = el("span", "srcs");
    links.forEach((a) => wrap.append(a));
    if (ids.length) {
      // "Highlight N tests": only when it points at tests the page does not already single out
      const btn = el("button", "link-btn hl-btn");
      btn.type = "button";
      const update = () => {
        const active = state.highlightOwner === owner;
        btn.textContent = active ? "Clear highlight" : "Highlight " + plural(ids.length, "test");
        btn.hidden = !active && !highlightUseful(ids);
      };
      btn.addEventListener("click", () => (state.highlightOwner === owner ? clearHighlight() : setHighlight(ids, owner)));
      live.push(update);
      update();
      wrap.append(btn);
    }
    li.append(wrap);
  }
  return li;
}

function aboutLine(m) {
  const isBrief = m.kind === "brief";
  const words = isBrief ? m.caseWords : aboutWords(m.answer.about);
  if (!words) return null;
  const row = el("div", "about");
  const text = el("span", "about-text");
  text.append(el("span", "about-label", "About: "), words);
  const btn = el("button", "show-btn");
  btn.type = "button";
  const target = () => (isBrief ? m.case : viewFor(m.answer.about));
  const update = () => {
    const active = !!shown && shown.id === m.id;
    btn.textContent = active ? "Undo" : "Show on charts";
    btn.classList.toggle("active", active);
    // hidden (space kept) while the charts already show this answer's case; Undo always shows
    btn.style.visibility = active || !sameView(target(), snapshot()) ? "visible" : "hidden";
  };
  btn.addEventListener("click", () => {
    if (shown && shown.id === m.id) {
      const undo = shown.undo;
      shown = null;
      restore(undo);
    } else {
      showOnCharts(m);
    }
  });
  live.push(update);
  update();
  row.append(text, btn);
  return row;
}

// Sets the view only (material and conditions). Pointing at tests is the job of the Highlight buttons.
function showOnCharts(m) {
  const undo = shown ? shown.undo : snapshot();       // only one answer is shown at a time
  const target = m.kind === "brief" ? m.case : viewFor(m.answer.about);
  shown = { id: m.id, undo };
  restore(target);
  document.dispatchEvent(new CustomEvent("fa:show-tab", { detail: "explore" }));   // on a phone, go and look
}

function answerNode(m) {
  const box = el("div", "msg answer");
  const a = m.answer;
  const isBrief = m.kind === "brief";
  if (a.datasheet_read) {
    const p = el("p", "datasheet-read");
    p.append(el("span", "about-label", "Read from the datasheet: "), a.datasheet_read);
    box.append(p);
  }
  if (data.version) {                                  // the About line needs the data file
    const about = aboutLine(m);
    if (about) box.append(about);
  }
  if (a.data && a.data.length) {
    box.append(el("h3", "part-h", isBrief ? "From the papers" : "Data shows"));
    const ul = el("ul", "points");
    a.data.forEach((p, i) => ul.append(pointItem(p, `chat:${m.id}:d${i}`)));
    box.append(ul);
  }
  if (a.inferred && a.inferred.length) {
    box.append(el("h3", "part-h inferred-h", "Inferred"));
    const ul = el("ul", "points inferred");
    a.inferred.forEach((p, i) => ul.append(pointItem(p, `chat:${m.id}:i${i}`)));
    box.append(ul);
  }
  if (isBrief) box.append(el("p", "not-covered", "Not covered: quantity, placement, ignition sources, qualification rules."));
  if (a.turn > HISTORY_LIMIT) {
    box.append(el("p", "history-note",
      "Long conversation: the AI now uses only your last " + HISTORY_LIMIT + " questions. Start a New conversation for a new topic."));
  }
  return box;
}

function errorNode(m) {
  const box = el("div", "msg error");
  box.append(el("span", null, m.message));
  if (m.retry) {
    const b = el("button", "link-btn", "Try again");
    b.type = "button";
    b.addEventListener("click", () => {
      messages = messages.filter((x) => x !== m && x !== m.question);
      ask(m.question.text, m.question.kind, m.extra || {});
    });
    box.append(b);
  }
  return box;
}

function render() {
  live = [];
  log.querySelectorAll(".msg").forEach((n) => n.remove());
  welcome.hidden = messages.length > 0 || !!pending;
  newConv.hidden = messages.length === 0 && !pending;
  for (const m of messages) {
    if (m.role === "user") {
      const bubble = el("div", "msg user", m.text);
      if (m.file) bubble.append(el("span", "file-tag", "📎 " + m.file));
      log.append(bubble);
    } else if (m.role === "answer") log.append(answerNode(m));
    else if (m.role === "error") log.append(errorNode(m));
  }
  if (pending) log.append(pending.node);
  // While waiting: the bottom. With an answer: its question at the top, so the answer reads from its start.
  const questions = log.querySelectorAll(".msg.user");
  const lastQuestion = questions[questions.length - 1];
  if (pending || !lastQuestion) log.scrollTop = log.scrollHeight;
  else log.scrollTop = lastQuestion.offsetTop - log.offsetTop - 4;
}

/* ---------- waiting indicator: a round flame that pulses, and one word whose letters flip ---------- */
const WAIT_WORDS = ["Floating", "Orbiting", "Sparking", "Gravitating", "Oxidizing", "Glowing", "Drifting", "Citing"];
const LETTER_GAP = 70;             // ms between letters
const HALF_TURN = 160;             // ms for each half of a letter's turn

// Letters turn over one at a time, left to right, like a departure board.
function flipTo(node, word) {
  node.setAttribute("aria-label", word);              // screen readers get the whole word
  const letter = (ch) => { const s = el("span", "flip", ch); s.setAttribute("aria-hidden", "true"); return s; };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.replaceChildren(...[...word].map(letter));
    return;
  }
  const spans = [...node.children];
  const n = Math.max(spans.length, word.length);
  for (let i = 0; i < n; i += 1) {
    let s = spans[i];
    const ch = word[i];
    if (!s) { s = letter(""); s.style.transform = "rotateX(90deg)"; node.append(s); }
    setTimeout(() => {
      s.style.transition = `transform ${HALF_TURN}ms ease-in`;
      s.style.transform = "rotateX(90deg)";
      setTimeout(() => {                               // the letter swaps while edge-on
        if (ch === undefined) { s.remove(); return; }  // extra letters fold away
        s.textContent = ch;
        s.style.transition = `transform ${HALF_TURN}ms ease-out`;
        s.style.transform = "rotateX(0deg)";
      }, HALF_TURN);
    }, i * LETTER_GAP);
  }
}

function waitingNode() {
  const box = el("div", "msg waiting");
  box.setAttribute("role", "status");
  box.append(el("span", "flame"));
  const word = el("span", "wait-word");
  box.append(word);
  const order = WAIT_WORDS.slice();
  for (let i = order.length - 1; i > 0; i -= 1) {       // shuffled per question
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  let current = "";
  const show = (next) => { if (next !== current) { current = next; flipTo(word, next); } };
  show("Igniting…");
  const started = Date.now();
  const timer = setInterval(() => {
    const t = Date.now() - started;
    if (t >= 30000) show("Still smoldering…");          // stays from 30 s
    else if (t >= 2000) show(order[Math.floor((t - 2000) / 3000) % order.length] + "…");
  }, 250);
  box.stop = () => clearInterval(timer);
  return box;
}

/* ---------- asking ---------- */
const ERR = {
  timeout: "That took too long.",
  unreachable: "Can't reach the AI right now.",
  bad: "Something went wrong with this answer.",
};

export async function ask(text, kind = "ask", extra = {}) {
  text = String(text || "").trim().slice(0, MAX_CHARS);
  if (!text || pending) return;
  const question = { role: "user", text, kind };
  if (extra.datasheet) question.file = extra.datasheet.name;
  const brief = kind === "brief" ? { case: snapshot(), caseWords: [selectionWords(), conditionWords()].filter(Boolean).join(" · ") } : {};
  messages.push(question);
  const token = {};
  const abort = new AbortController();
  pending = { token, abort, node: waitingNode() };
  setBusy(true);
  render();

  let timedOut = false;
  const giveUp = setTimeout(() => { timedOut = true; abort.abort(); }, GIVE_UP_MS);
  let outcome;
  try {
    const body = { user_id: userId, conversation_id: conversationId, kind, message: text, screen: screenText() };
    if (extra.test_id) body.test_id = extra.test_id;
    if (extra.datasheet) body.datasheet = { mime: extra.datasheet.mime, data: extra.datasheet.data };
    const res = await fetch(CHAT_URL, { method: "POST", headers: { "Content-Type": "application/json" }, signal: abort.signal, body: JSON.stringify(body) });
    const reply = await res.json();
    if (reply && reply.error) {
      outcome = { role: "error", message: reply.error.message || ERR.unreachable, retry: reply.error.code !== "monthly_limit", question, extra };
    } else if (reply && Array.isArray(reply.data)) {
      outcome = { role: "answer", id: newId("a"), kind, answer: reply, ...brief };
    } else {
      outcome = { role: "error", message: ERR.bad, retry: true, question, extra };
    }
  } catch {
    outcome = { role: "error", message: timedOut ? ERR.timeout : ERR.unreachable, retry: true, question, extra };
  }
  clearTimeout(giveUp);

  if (!pending || pending.token !== token) return;     // a New conversation dropped this reply
  pending.node.stop();
  pending = null;
  messages.push(outcome);
  saveMessages();
  setBusy(false);
  // On an empty page the first answer is shown on the charts by itself, with Undo available.
  if (outcome.role === "answer" && kind !== "brief" && data.version && isEmptyPage()
      && aboutWords(outcome.answer.about) && !sameView(viewFor(outcome.answer.about), snapshot())) {
    shown = { id: outcome.id, undo: snapshot() };
    restore(viewFor(outcome.answer.about));
  }
  render();
}

function setBusy(busy) {
  sendBtn.disabled = busy;
  if (!busy && window.matchMedia("(min-width: 900px)").matches) input.focus();
}

/* ---------- datasheet: PDF, PNG or JPEG, at most 5 MB, checked here before sending ---------- */
function showAttached(note) {
  attachedBox.replaceChildren();
  attachedBox.hidden = !attached && !note;
  if (attached) {
    attachedBox.append(el("span", "file-tag", "📎 " + attached.name));
    const x = el("button", "x-btn", "✕");
    x.type = "button";
    x.setAttribute("aria-label", "Remove the datasheet");
    x.addEventListener("click", () => { attached = null; showAttached(); });
    attachedBox.append(x);
  } else if (note) attachedBox.append(el("span", "attach-note", note));
}
fileInput.addEventListener("change", () => {
  const f = fileInput.files[0];
  fileInput.value = "";
  if (!f) return;
  if (!DATASHEET_TYPES.includes(f.type)) { attached = null; showAttached("A datasheet must be a PDF, PNG or JPEG file."); return; }
  if (f.size > DATASHEET_MAX) { attached = null; showAttached("That file is over 5 MB. Try a smaller one."); return; }
  const reader = new FileReader();
  reader.onload = () => {
    attached = { name: f.name, mime: f.type, data: String(reader.result).split(",")[1] };
    showAttached();
    input.placeholder = "Ask about this datasheet, or just press Ask";
    input.focus();
  };
  reader.readAsDataURL(f);
});
document.querySelectorAll("[data-attach]").forEach((b) => b.addEventListener("click", () => fileInput.click()));

/* ---------- composer ---------- */
function updateCounter() {
  const n = input.value.length;
  counter.hidden = n < MAX_CHARS - 200;
  counter.textContent = n + " / " + MAX_CHARS;
}
function submit() {
  if (pending) return;
  const text = input.value.trim();
  if (!text && !attached) return;
  input.value = "";
  updateCounter();
  if (attached) {
    const datasheet = attached;
    attached = null;
    showAttached();
    input.placeholder = input.dataset.placeholder;
    ask(text || "How does the material on this datasheet compare with the tests?", "datasheet", { datasheet });
  } else ask(text, "ask");
}
$("chat-form").addEventListener("submit", (e) => { e.preventDefault(); submit(); });
input.dataset.placeholder = input.placeholder;
input.addEventListener("input", updateCounter);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); submit(); }
});
document.querySelectorAll("[data-try]").forEach((chip) => {
  chip.addEventListener("click", () => ask(chip.dataset.try, "ask"));
});

newConv.addEventListener("click", () => {
  if (pending) {                                       // a reply still on its way is dropped
    const p = pending;
    pending = null;
    p.node.stop();
    p.abort.abort();
  }
  conversationId = newId("c");
  store.set("fa.conv", conversationId);
  messages = [];
  shown = null;
  saveMessages();
  setBusy(false);
  if (String(state.highlightOwner || "").startsWith("chat:")) clearHighlight();   // the rings the chat set; selection and conditions stay
  render();
});

export function initChat() {
  render();
}
