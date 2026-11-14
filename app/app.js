/*
  Flame Atlas dashboard script. Team Flame Atlas, NASA Space Apps Challenge 2026.
  Licence: Apache-2.0. Written with an AI coding assistant (Claude Code), directed by the team.

  The page computes everything on the left by itself from data/tests.json.
  Only the chat calls the backend (one request per question).
*/
(() => {
  "use strict";

  const CHAT_URL = "https://guillec81.app.n8n.cloud/webhook/fif/chat";
  const DATA_URL = "data/tests.json";
  const GIVE_UP_MS = 95000;          // the page stops waiting here
  const MAX_CHARS = 2000;
  const HISTORY_LIMIT = 50;          // turns the AI still reads

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
  const newId = (prefix) => {
    const rnd = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
    return prefix + "-" + rnd;
  };
  const userId = store.get("fa.user") || (() => { const id = newId("u"); store.set("fa.user", id); return id; })();
  let conversationId = store.get("fa.conv") || (() => { const id = newId("c"); store.set("fa.conv", id); return id; })();

  /* ---------- data file ---------- */
  const data = { sources: {}, experiments: [], materials: [], tests: [], version: null };
  const dataReady = fetch(DATA_URL, { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("data " + r.status))))
    .then((d) => { Object.assign(data, d); })
    .catch(() => { /* the chat still works; source links are left out */ });

  /* ---------- screen context sent with every question (filled in as the left side is built) ---------- */
  function screenText() {
    return "Nothing selected.";
  }

  /* ---------- chat state ---------- */
  let messages = [];                 // {role: "user"|"answer"|"error", ...}
  let pending = null;                // {token, abort}
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

  /* ---------- rendering ---------- */
  function sourceLink(src) {
    const known = data.sources[src.source_id];
    if (!known || !known.url) return null;             // unknown IDs are dropped
    const a = el("a", "src");
    a.href = known.url + (Number.isInteger(src.page) ? "#page=" + src.page : "");
    a.target = "_blank";
    a.rel = "noopener";
    let label = known.short || src.source_id;
    if (Number.isInteger(src.page)) label += ", p." + src.page;
    if (src.locator) label += " · " + src.locator;
    a.textContent = label + " ↗";
    a.title = known.title || "";
    return a;
  }

  function pointItem(p) {
    const li = el("li", "point");
    if (p.heading) li.append(el("strong", "point-heading", p.heading + " "));
    li.append(el("span", "point-text", p.text));
    const links = (p.sources || []).map(sourceLink).filter(Boolean);
    if (links.length) {
      const wrap = el("span", "srcs");
      links.forEach((a) => wrap.append(a));
      li.append(wrap);
    }
    return li;
  }

  function answerNode(m) {
    const box = el("div", "msg answer");
    const a = m.answer;
    const isBrief = m.kind === "brief";
    if (a.data && a.data.length) {
      box.append(el("h3", "part-h", isBrief ? "From the papers" : "Data shows"));
      const ul = el("ul", "points");
      a.data.forEach((p) => ul.append(pointItem(p)));
      box.append(ul);
    }
    if (a.inferred && a.inferred.length) {
      box.append(el("h3", "part-h inferred-h", "Inferred"));
      const ul = el("ul", "points inferred");
      a.inferred.forEach((p) => ul.append(pointItem(p)));
      box.append(ul);
    }
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
        ask(m.question.text, m.question.kind);
      });
      box.append(b);
    }
    return box;
  }

  function render() {
    log.querySelectorAll(".msg").forEach((n) => n.remove());
    welcome.hidden = messages.length > 0 || !!pending;
    newConv.hidden = messages.length === 0 && !pending;
    for (const m of messages) {
      if (m.role === "user") log.append(el("div", "msg user", m.text));
      else if (m.role === "answer") log.append(answerNode(m));
      else if (m.role === "error") log.append(errorNode(m));
    }
    if (pending) log.append(pending.node);
    // While waiting: the bottom. With an answer: its question at the top, so the answer reads from its start.
    const questions = log.querySelectorAll(".msg.user");
    const lastQuestion = questions[questions.length - 1];
    if (pending || !lastQuestion) log.scrollTop = log.scrollHeight;
    else log.scrollTop = lastQuestion.offsetTop - log.offsetTop - 4;
  }

  /* ---------- waiting indicator: a round flame that pulses, and one word ---------- */
  const WAIT_WORDS = ["Floating", "Orbiting", "Sparking", "Gravitating", "Oxidizing", "Glowing", "Drifting", "Citing"];
  function waitingNode() {
    const box = el("div", "msg waiting");
    box.setAttribute("role", "status");
    box.append(el("span", "flame"));
    const word = el("span", "wait-word", "Igniting…");
    box.append(word);
    const order = WAIT_WORDS.slice();
    for (let i = order.length - 1; i > 0; i -= 1) {       // shuffled per question
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const started = Date.now();
    const timer = setInterval(() => {
      const t = Date.now() - started;
      let next = "Igniting…";                              // first 2 s
      if (t >= 30000) next = "Still smoldering…";          // stays from 30 s
      else if (t >= 2000) next = order[Math.floor((t - 2000) / 3000) % order.length] + "…";
      if (word.textContent !== next) word.textContent = next;
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

  async function ask(text, kind = "ask", extra = {}) {
    text = String(text || "").trim().slice(0, MAX_CHARS);
    if (!text || pending) return;
    const question = { role: "user", text, kind };
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
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abort.signal,
        body: JSON.stringify({
          user_id: userId,
          conversation_id: conversationId,
          kind,
          message: text,
          screen: screenText(),
          ...extra,
        }),
      });
      const body = await res.json();
      if (body && body.error) {
        outcome = { role: "error", message: body.error.message || ERR.unreachable, retry: body.error.code !== "monthly_limit", question };
      } else if (body && Array.isArray(body.data)) {
        outcome = { role: "answer", kind, answer: body };
      } else {
        outcome = { role: "error", message: ERR.bad, retry: true, question };
      }
    } catch {
      outcome = { role: "error", message: timedOut ? ERR.timeout : ERR.unreachable, retry: true, question };
    }
    clearTimeout(giveUp);

    if (!pending || pending.token !== token) return;   // a New conversation dropped this reply
    pending.node.stop();
    pending = null;
    await dataReady;                                    // links need the source map
    messages.push(outcome);
    saveMessages();
    setBusy(false);
    render();
  }

  function setBusy(busy) {
    sendBtn.disabled = busy;
    input.disabled = false;
    if (!busy) input.focus();
  }

  /* ---------- composer ---------- */
  function updateCounter() {
    const n = input.value.length;
    counter.hidden = n < MAX_CHARS - 200;
    counter.textContent = n + " / " + MAX_CHARS;
  }
  function submit() {
    if (pending) return;
    const text = input.value;
    if (!text.trim()) return;
    input.value = "";
    updateCounter();
    ask(text, "ask");
  }
  $("chat-form").addEventListener("submit", (e) => { e.preventDefault(); submit(); });
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
    saveMessages();
    setBusy(false);
    render();
  });

  dataReady.then(render);
  render();
})();
