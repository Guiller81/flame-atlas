/*
  Flame Atlas: the selector (Experiment | Material), filter chips, cards, your conditions,
  the status sentence and the Details panel. Everything here is computed in the browser.
  Team Flame Atlas, NASA Space Apps Challenge 2026. Licence: Apache-2.0.
  Written with an AI coding assistant (Claude Code), directed by the team.
*/
import {
  data, state, D, GROUPS, GRAVITIES, GRAVITY_NAME, OUTCOMES, OUTCOME_NAME, CONDS, CHIP_GROUPS, CABINS,
  matById, expById, testById, expTotal, distance, testName, testSubject, num, pct, plural, sourceUrl, sourceLabel, hasSelection, condKeysSet,
  materialFacts, offKeys, setView, select, openMaterial, toggleChip, setCond, setWin, tapCabin, activeCabin, tapTests,
  setHighlight, clearHighlight, clearAll, clearConds, changed, selectionWords, conditionWords, highlightUseful, missingWords, reportedWords,
} from "./state.js";

export const hooks = { ask: () => {} };     // set by the chat

const $ = (id) => document.getElementById(id);
function h(tag, props, ...kids) {
  const n = document.createElement(tag);
  for (const k in props || {}) {
    const v = props[k];
    if (v == null || v === false) continue;
    if (k === "class") n.className = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (k === "hidden" || k === "disabled") n[k] = !!v;
    else n.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) n.append(kid);
  return n;
}
const link = (text, url, title) => (url ? h("a", { class: "src", href: url, target: "_blank", rel: "noopener", title }, text + " ↗") : h("span", { class: "src-plain" }, text));
const srcLink = (t) => link(sourceLabel(t.src, t.page, t.loc) + (t.sheet ? ` · PSI sheet "${t.sheet}", row ${t.row}` : ""), sourceUrl(t.src, t.page), (data.sources[t.src] || {}).title);

/* ====================== selector ====================== */
function cells(counts, onPick, picked) {
  return GRAVITIES.map(([g, label]) => {
    const n = counts[g] || 0;
    if (!n) return h("span", { class: "cell none", title: `No ${label} tests` });
    return h("button", { class: "cell" + (picked === g ? " on" : ""), type: "button", title: `${plural(n, "test")} in ${GRAVITY_NAME[g]}`,
      onclick: (e) => { e.stopPropagation(); onPick(g); } }, String(n));
  });
}
function countsBy(tests) {
  const c = {};
  for (const t of tests) c[t.g] = (c[t.g] || 0) + 1;
  return c;
}
const matchSearch = (text) => text.toLowerCase().includes(state.search.trim().toLowerCase());

function experimentList() {
  const rows = [];
  rows.push(h("div", { class: "row head" }, h("span", { class: "rank" }), h("span", { class: "name" }, "Experiment"),
    GRAVITIES.map(([, label]) => h("span", { class: "cell-head" }, label))));
  for (const group of GROUPS) {
    let exps = data.experiments.filter((e) => e.group === group.id);
    if (state.search.trim()) {
      exps = exps.filter((e) => {
        const mats = D.expStats.get(e.id).tests.map((t) => (matById.get(t.mat) || {}).name || "").join(" ");
        return matchSearch([e.name, e.title, e.sample || "", mats].join(" "));
      });
    }
    if (!exps.length) continue;
    const stat = (e) => D.expStats.get(e.id);
    exps.sort((a, b) => {
      const A = stat(a), B = stat(b);
      if (A.rank != null || B.rank != null) return (A.rank ?? 1e9) - (B.rank ?? 1e9);
      return (B.n > 0) - (A.n > 0) || a.name.localeCompare(b.name);
    });
    const open = state.openGroups.has(group.id) || !!state.search.trim() || exps.some((e) => e.id === state.exp);
    rows.push(h("button", { class: "row group", type: "button", "aria-expanded": String(open),
      onclick: () => { state.openGroups.has(group.id) ? state.openGroups.delete(group.id) : state.openGroups.add(group.id); changed(); } },
      h("span", { class: "caret" }, open ? "▾" : "▸"), h("span", { class: "name" }, group.name), h("span", { class: "group-n" }, plural(exps.length, "experiment"))));
    if (!open) continue;
    for (const e of exps) {
      const s = stat(e);
      const picked = state.exp === e.id && !state.mat;
      const hasTests = s.n > 0;
      const expOpen = state.openExps.has(e.id) || (state.exp === e.id && !!state.mat);   // a selected material is always in view
      rows.push(h("div", { class: "row exp" + (picked ? " on" : "") + (hasTests ? "" : " summary"), role: "button", tabindex: "0",
        onclick: () => select({ exp: e.id }),
        onkeydown: (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); select({ exp: e.id }); } } },
        h("span", { class: "rank" }, s.rank != null ? String(s.rank) : ""),
        h("span", { class: "name", title: e.title },
          hasTests ? h("button", { class: "caret-btn", type: "button", "aria-label": (expOpen ? "Hide" : "Show") + " materials", "aria-expanded": String(expOpen),
            onclick: (ev) => { ev.stopPropagation(); expOpen ? state.openExps.delete(e.id) : state.openExps.add(e.id); changed(); } }, expOpen ? "▾" : "▸") : null,
          e.name),
        hasTests ? cells(s.byG, (g) => select({ exp: e.id, g }), picked ? state.g : null)
          : h("span", { class: "summary-note" }, expTotal(e.id) ? "0 tests with these filters" : group.summary || "Summary only")));
      if (hasTests && expOpen) {
        const byMat = new Map();
        for (const t of s.tests) { if (!byMat.has(t.mat)) byMat.set(t.mat, []); byMat.get(t.mat).push(t); }
        for (const [matId, tests] of [...byMat].sort((a, b) => b[1].length - a[1].length)) {
          const on = state.exp === e.id && state.mat === matId;
          rows.push(h("div", { class: "row sub" + (on ? " on" : ""), role: "button", tabindex: "0", onclick: () => select({ exp: e.id, mat: matId }) },
            h("span", { class: "rank" }), h("span", { class: "name" }, (matById.get(matId) || {}).name || matId),
            cells(countsBy(tests), (g) => select({ exp: e.id, mat: matId, g }), on ? state.g : null)));
        }
      }
    }
  }
  return rows;
}

function materialList() {
  const rows = [];
  rows.push(h("div", { class: "row head" }, h("span", { class: "rank" }), h("span", { class: "name" }, "Material"),
    GRAVITIES.map(([g, label]) => h("button", { class: "cell-head pick" + (state.g === g && !state.mat && !state.cls ? " on" : ""), type: "button",
      title: `All materials, ${GRAVITY_NAME[g]}`, onclick: () => select({ g }) }, label))));
  const classes = [...new Set(data.materials.map((m) => m.cls))];
  for (const cls of classes) {
    let mats = data.materials.filter((m) => m.cls === cls);
    if (state.search.trim()) mats = mats.filter((m) => matchSearch(m.name + " " + m.cls));
    if (!mats.length) continue;
    const open = !state.closedClasses.has(cls) || !!state.search.trim() || mats.some((m) => m.id === state.mat);
    const clsTests = D.chipTests.filter((t) => (matById.get(t.mat) || {}).cls === cls);
    const clsOn = state.cls === cls;
    rows.push(h("div", { class: "row group cls" + (clsOn ? " on" : ""), role: "button", tabindex: "0", onclick: () => select({ cls }) },
      h("button", { class: "caret-btn", type: "button", "aria-expanded": String(open), "aria-label": (open ? "Close " : "Open ") + cls,
        onclick: (ev) => { ev.stopPropagation(); open ? state.closedClasses.add(cls) : state.closedClasses.delete(cls); changed(); } }, open ? "▾" : "▸"),
      h("span", { class: "name" }, cls),
      cells(countsBy(clsTests), (g) => select({ cls, g }), clsOn ? state.g : null)));
    if (!open) continue;
    for (const m of mats) {
      const on = state.mat === m.id;
      const tests = D.chipTests.filter((t) => t.mat === m.id);
      rows.push(h("div", { class: "row mat" + (on ? " on" : ""), role: "button", tabindex: "0", "data-mat": m.id, onclick: () => select({ mat: m.id }) },
        h("span", { class: "rank" }), h("span", { class: "name", title: m.name.length > 30 ? m.name : null }, m.name),
        cells(countsBy(tests), (g) => select({ mat: m.id, g }), on ? state.g : null)));
    }
  }
  return rows;
}

function renderSelector() {
  document.querySelectorAll("#view-switch button").forEach((b) => {
    const on = b.dataset.view === state.view;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", String(on));
  });
  const search = $("search");
  search.placeholder = state.view === "experiment" ? "Search experiments" : "Search materials";
  if (search.value !== state.search) search.value = state.search;

  const cabin = activeCabin();
  const note = $("order-note");
  if (state.view === "material") note.textContent = "Grouped by material class.";
  else if (condKeysSet().length) note.textContent = `Ranked for ${cabin ? cabin.name : "your conditions"} (${conditionWords()}): 1 = the experiment that tested closest to it.`;
  else note.textContent = "Set your conditions or tap a cabin to rank the experiments.";

  const list = $("list");
  const top = list.scrollTop;
  list.replaceChildren(...(state.view === "experiment" ? experimentList() : materialList()));
  list.scrollTop = top;
  const on = list.querySelector(".row.on");
  if (on && renderSelector.lastOn !== on.textContent) on.scrollIntoView({ block: "nearest" });   // a selected row is always fully in view
  renderSelector.lastOn = on ? on.textContent : null;
  $("clear-all").hidden = !hasSelection() && !condKeysSet().length && !state.tapped.size && !state.highlight.size;
}

function renderChips() {
  const box = $("chips");
  const groups = [];
  for (const c of CHIP_GROUPS) {
    const counts = D.chipCounts[c.key] || new Map();
    if (counts.size < 2) continue;                       // nothing to filter on
    groups.push(h("div", { class: "chip-group" }, h("span", { class: "chip-label" }, "Filter by " + c.label.toLowerCase()),
      h("div", { class: "chip-row" }, [...counts].sort((a, b) => String(a[0]).localeCompare(String(b[0]))).map(([value, n]) => {
        const on = state.chips[c.key].has(value);
        return h("button", { class: "fchip" + (on ? " on" : ""), type: "button", "aria-pressed": String(on), disabled: !n && !on,
          title: `${plural(n, "test")} left with this filter`, onclick: () => toggleChip(c.key, value) },
          String(value), h("span", { class: "fchip-n" }, String(n)));
      }))));
  }
  // No heading line: each group's label says "Filter by ...". With the heading and wider chips the column scrolled.
  box.replaceChildren(...groups);
}

/* ====================== cards ====================== */
function highlightButton(ids, owner, label = "Highlight them") {
  // shown only when it points at tests the page does not already single out
  const active = state.highlightOwner === owner;
  if (!active && !highlightUseful(ids)) return null;
  return h("button", { class: "link-btn hl-btn", type: "button", onclick: () => (active ? clearHighlight() : setHighlight(ids, owner)) },
    active ? "Clear highlight" : label);
}

function rangeText(tests, key, unit) {
  const v = tests.map((t) => t[key]).filter((x) => x != null);
  if (!v.length) return null;
  const lo = Math.min(...v), hi = Math.max(...v);
  return (lo === hi ? num(lo) : num(lo) + "–" + num(hi)) + unit;
}

function experimentCard(e) {
  const s = D.expStats.get(e.id);
  const group = GROUPS.find((g) => g.id === e.group);
  const facts = [];
  const fact = (label, value) => { if (value) facts.push(h("div", { class: "fact" }, h("span", { class: "fact-label" }, label), h("span", { class: "fact-value" }, value))); };

  let key;
  if (!s.n && expTotal(e.id)) key = `None of its ${plural(expTotal(e.id), "test")} fits the filters you set.`;
  else if (!s.n) key = (group.summary || "Summary only: its tests are not in the data") + ".";
  else if (e.group === "earth") key = "The 1-g tests that space results are compared with. Shown, not ranked.";
  else if (s.rank == null) key = "Tap a cabin or set your conditions to rank it.";
  else {
    const t = s.bestTest;
    const closest = [t.o2 != null ? pct(t.o2) + " O2" : null, t.p != null ? num(t.p) + " kPa" : null, state.cond.flow != null && t.flow != null ? num(t.flow) + " cm/s" : null].filter(Boolean).join(", ");
    key = `#${s.rank} in ${group.name.toLowerCase()} for your conditions. Closest test: ${closest} · ${s.near ? plural(s.near, "test") + " near your conditions" : s.part ? `none reports all your conditions; ${plural(s.part, "test")} fit on what they report` : "none near your conditions"}.`;
  }

  fact("Objective", e.objective ? h("span", { class: "clamp", title: e.objective }, e.objective) : null);
  fact("Sample", e.sample);
  if (s.n) {
    fact("Tested", [rangeText(s.tests, "o2", "% O2"), rangeText(s.tests, "p", " kPa"), rangeText(s.tests, "flow", " cm/s")].filter(Boolean).join(" · "));
    const varied = [], held = [];
    const names = { o2: "oxygen", p: "pressure", flow: "airflow", mat: "material", shape: "shape" };
    for (const k of Object.keys(names)) {
      const distinct = new Set(s.tests.map((t) => t[k]).filter((v) => v != null));
      if (distinct.size > 1) varied.push(names[k]); else if (distinct.size === 1) held.push(names[k]);
    }
    fact("Changed", (varied.length ? varied.join(", ") : "nothing") + (held.length ? " (held: " + held.join(", ") + ")" : ""));
  }
  fact("Measured", e.measured);
  const reports = e.reports || [];
  fact("Source", h("span", null, e.psi ? link(`PSI record ${e.psi}`, e.url, e.title) : null,
    reports.length ? h("span", { class: "muted" }, (e.psi ? " + " : "") + plural(reports.length, "report")) : null));

  return [
    h("h3", { class: "card-title" }, e.name, h("span", { class: "card-sub" }, [e.platform, e.burn_time].filter(Boolean).map((x) => " · " + x).join(""))),
    h("p", { class: "card-key" }, key),
    h("div", { class: "facts" }, facts),
    h("div", { class: "card-actions" }, h("button", { class: "ai-btn", type: "button",
      onclick: () => hooks.ask(`What did ${e.name} find, and how far can I trust it?`, "ask") }, "What did it find?")),
  ];
}

function earthHeadline(f) {
  const your = state.cond.o2;
  if (your == null || f.rating == null) return null;
  const label = f.m.earth.label.toLowerCase();                       // "earth rating" or "earth limit"
  const L = label.charAt(0).toUpperCase() + label.slice(1);
  const pts = (d) => plural(+Math.abs(d).toFixed(1), "point");
  const dR = f.rating - your;
  let text;
  let warn = false;
  // Colour: red above the Earth reference (it burns in the Earth test), orange between it and the lowest space burn,
  // neutral below both. Never green: "under the lowest space burn so far" is not a verdict that the material is safe.
  const over = dR < 0;
  if (over) {
    text = `${pts(dR)} above the ${L}` + (label === "earth rating" ? ", so it would fail the Earth test." : ", so it also burns on Earth.");
  } else {
    const under = dR === 0 ? `at the ${L}` : `${pts(dR)} under the ${L}`;
    if (f.lowestSpaceBurn == null) text = `${under}; ${f.space.length ? "no space test of it burned" : "no space tests of it yet"}.`;
    else {
      const dS = your - f.lowestSpaceBurn;
      if (dS > 0) { text = `${under}, but ${pts(dS)} above the lowest space burn.`; warn = true; }
      else if (dS === 0) { text = `${under}, but at the lowest space burn.`; warn = true; }
      else text = `${under} and ${pts(dS)} under the lowest space burn so far.`;
    }
  }
  return h("p", { class: "headline" + (over ? " over" : warn ? " warn" : "") }, h("strong", null, `Your ${pct(your)} O2: `), text);
}

function earthCard(matId) {
  const f = materialFacts(matId);
  const m = f.m;
  const out = [h("h3", { class: "card-title" }, m.earth ? `${m.earth.label} vs space tests` : "Earth vs space tests", h("span", { class: "card-sub" }, " · " + m.name))];
  const head = earthHeadline(f);
  if (head) out.push(head);
  const lines = [];
  if (f.lead) {
    lines.push(h("p", { class: "lead" }, f.lead.text + " ",
      link(sourceLabel(f.lead.space.src, f.lead.space.page), sourceUrl(f.lead.space.src, f.lead.space.page)), " · ",
      link(sourceLabel(f.lead.earth.src, f.lead.earth.page), sourceUrl(f.lead.earth.src, f.lead.earth.page))));
  }
  if (m.earth && !f.lead) {                                           // the lead already states its Earth limit, with its page
    const basis = m.earth.basis ? ` (${m.earth.basis})` : "";
    lines.push(h("p", null, `${m.earth.label}${basis}: ${m.earth.kind === "MOC" ? "passes up to" : "limit at"} ${pct(m.earth.o2)} O2 · `,
      link(sourceLabel(m.earth.src, m.earth.page, m.earth.loc), sourceUrl(m.earth.src, m.earth.page))));
  } else if (!m.earth) lines.push(h("p", { class: "muted" }, "No Earth rating or limit for this material in the data."));
  // A comparison the source's authors make for one form of this material (PMMA rods) is stated on the card whenever the
  // material is selected with no shape filter, always labelled with that form: it does not hold for the other forms.
  if (m.lead && !f.lead && state.chips.shape.size === 0) {
    lines.push(h("p", null, h("strong", null, `For ${m.lead.shape}s only: `), m.lead.text + " ",
      link(sourceLabel(m.lead.space.src, m.lead.space.page), sourceUrl(m.lead.space.src, m.lead.space.page)), " · ",
      link(sourceLabel(m.lead.earth.src, m.lead.earth.page), sourceUrl(m.lead.earth.src, m.lead.earth.page))));
  }
  const ratingWords = m.earth ? `at or below ${pct(m.earth.o2)}` : "";
  // A paper often prints only the limit it found, not the single burns behind it: the card counts both kinds of row,
  // so its numbers add up to the grid's. A side with limits only says what is there, in the legend's words and with its
  // diamond; it never says "tests: 0" or "no tests", which reads as if nothing was tested.
  const diamond = () => h("span", { class: "swatch out-limit card-swatch" });
  const limitsOnly = (side, n, tail = "") => [`${side}: ${plural(n, "burn limit")} `, diamond(),
    `, ${n === 1 ? "" : "each "}from many tests${tail} `];
  // Space counts are split by gravity under the grid's own column names, so each number can be matched to a grid cell.
  const gSplit = (list) => {
    const parts = GRAVITIES.filter(([g]) => g !== "earth").map(([g, label]) => [label.toLowerCase(), list.filter((t) => t.g === g).length]).filter(([, n]) => n);
    return parts.length === 1 ? (list.length === 1 ? "" : "all ") + parts[0][0] : parts.map(([label, n]) => `${n} ${label}`).join(", ");
  };
  const limitsButton = (list, owner) => highlightButton(list.map((t) => t.id), owner, list.length === 1 ? "Highlight the limit" : "Highlight the limits");
  if (f.earth.length || (m.earth && !f.earthLimits.length)) {
    lines.push(h("p", null, `Earth tests: ${f.earth.length}` + (m.earth && f.earth.length ? ` · ${f.earthBurnedBelow.length} burned ${ratingWords} ` : " "),
      highlightButton(f.earthBurnedBelow.map((t) => t.id), "card-earth")));
  }
  if (f.earthLimits.length) {
    lines.push(h("p", null, f.earth.length ? ["Earth burn limits ", diamond(), `: ${f.earthLimits.length} `] : limitsOnly("Earth", f.earthLimits.length),
      limitsButton(f.earthLimits, "card-earth-limits")));
  }
  let space = `Space tests: ${f.space.length}` + (!f.space.length ? "" : f.spaceGravities.length === 1 ? `, ${gSplit(f.space)}` : ` (${gSplit(f.space)})`);
  if (f.space.length && m.earth) space += ` · ${f.spaceBurnedBelow.length} burned ${ratingWords}` + (f.lowestSpaceBurn != null ? (f.lead ? ` (a flame lasted down to ${pct(f.lowestSpaceBurn)})` : ` (lowest ${pct(f.lowestSpaceBurn)})`) : "");
  else if (f.space.length && f.lowestSpaceBurn != null) space += ` · lowest burn ${pct(f.lowestSpaceBurn)}`;
  if (f.space.length || !f.spaceLimits.length) lines.push(h("p", null, space + " ", highlightButton((m.earth ? f.spaceBurnedBelow : []).map((t) => t.id), "card-space")));
  if (f.spaceLimits.length) {
    lines.push(h("p", null, f.space.length ? ["Space burn limits ", diamond(), `: ${f.spaceLimits.length} (${gSplit(f.spaceLimits)}; lowest ${pct(f.lowestLimit)}) `]
      : limitsOnly("Space", f.spaceLimits.length, ` (${gSplit(f.spaceLimits)}; lowest ${pct(f.lowestLimit)})`),
      limitsButton(f.spaceLimits, "card-limits")));
  }
  out.push(h("div", { class: "card-lines" }, lines));
  if (f.sizes.length) {
    const range = (s) => (s.earthLo === s.earthHi ? pct(s.earthLo) : num(s.earthLo) + "–" + pct(s.earthHi));
    out.push(h("div", { class: "sizes" },
      h("p", { class: "muted" }, "By rod diameter, one size at a time (sizes are not comparable):"),
      f.sizes.map((s) => h("p", null, h("strong", null, num(s.d, 2) + " mm"), " · ",
        s.earthN ? `Earth limits ${range(s)} (${s.earthN}, by set-up)` : "no Earth limit in the data", " · ",
        s.spaceLow != null ? `space: flames down to ${pct(s.spaceLow)}` : s.spaceN ? "space: no flame lasted" : "no space tests", " ",
        highlightButton(s.ids, "card-size-" + s.d, "Highlight"))),
      f.unsized ? h("p", { class: "muted" }, `${f.unsized} more rod rows print no diameter.`) : null));
  }
  const cw = conditionWords();
  out.push(h("div", { class: "card-actions" },
    h("button", { class: "ai-btn", type: "button", onclick: () => hooks.ask(`What do the papers add for ${m.name}${cw ? " at " + cw : ""}?`, "brief") }, "What do the papers add?"),
    h("span", { class: "ai-hint" }, "A short AI brief with page links, answered in the chat (right).")));
  return out;
}

function hintCard() {
  const out = [h("h3", { class: "card-title" }, "Earth rating vs space tests"),
    h("p", { class: "muted" }, state.view === "experiment"
      ? "Pick an experiment to see what it tested, or one of its materials to compare its Earth rating with the space tests."
      : "Pick a material in the grid, or name it in the chat, to compare its Earth rating with the space tests.")];
  if (state.cls) {
    let worst = null;
    for (const m of data.materials.filter((x) => x.cls === state.cls)) {
      const f = materialFacts(m.id);
      if (f.rating == null || f.lowestSpaceBurn == null) continue;
      const gap = f.rating - f.lowestSpaceBurn;
      if (!worst || gap > worst.gap) worst = { gap, f };
    }
    if (worst && worst.gap > 0) {
      out.push(h("p", null, `Largest gap in ${state.cls}: ${worst.f.m.name}, ${worst.f.m.earth.label.toLowerCase()} ${pct(worst.f.rating)}, burned in space from ${pct(worst.f.lowestSpaceBurn)}.`));
    }
  }
  return out;
}

function renderCard() {
  const card = $("card");
  let kids;
  if (state.mat) kids = earthCard(state.mat);
  else if (state.exp) kids = experimentCard(expById.get(state.exp));
  else kids = hintCard();
  card.replaceChildren(...kids);
}

/* ====================== test results header ====================== */
const LIMIT_TIP = "The oxygen level a paper gives as the border for one material: below it the flame goes out, above it the material burns. A conclusion from many tests, not one test.";
function renderLegend() {
  const present = new Set(data.tests.map((t) => t.out));
  const items = OUTCOMES.filter(([k]) => (k !== "no-ignition" && k !== "limit") || present.has(k)).map(([k, label]) =>
    h("span", { class: "legend-item", title: k === "limit" ? LIMIT_TIP : null }, h("span", { class: "swatch out-" + k }), k === "limit" ? label + " (from many tests)" : label));
  if (state.highlight.size) {
    items.push(h("span", { class: "legend-item hl" }, h("span", { class: "swatch ring" }), `${state.highlight.size} highlighted `,
      h("button", { class: "x-btn", type: "button", "aria-label": "Clear highlight", onclick: () => clearHighlight() }, "✕")));
  }
  $("legend").replaceChildren(...items);
}

function buildConds() {
  const box = $("conds");
  box.append(h("span", { class: "conds-title" }, "Your conditions"));
  for (const c of CONDS) {
    const value = h("input", { type: "number", id: "cond-" + c.key, step: String(c.step), inputmode: "decimal", "aria-label": `Your ${c.label} in ${c.unit}`, placeholder: c.key === "flow" ? "any" : "" });
    const win = h("input", { type: "number", id: "win-" + c.key, class: "win", step: String(c.step), min: "0", "aria-label": `Window for ${c.label}, plus or minus` });
    value.addEventListener("input", () => setCond(c.key, value.value === "" ? null : parseFloat(value.value)));
    win.addEventListener("change", () => setWin(c.key, parseFloat(win.value)));
    box.append(h("label", { class: "cond" }, h("span", { class: "cond-label" }, c.key === "o2" ? "O2 %" : c.unit), value,
      h("span", { class: "win-wrap", id: "winwrap-" + c.key }, "±", win)));
  }
}
function renderConds() {
  for (const c of CONDS) {
    const value = $("cond-" + c.key);
    const win = $("win-" + c.key);
    const v = state.cond[c.key];
    if (document.activeElement !== value) value.value = v == null ? "" : num(v);
    if (document.activeElement !== win) win.value = num(state.win[c.key]);
    $("winwrap-" + c.key).style.visibility = v == null ? "hidden" : "visible";   // an empty box hides its ± window
  }
}

function renderStatus() {
  const p = $("status");
  const sel = hasSelection();
  const n = D.selected.length;
  if (sel && !n) { p.replaceChildren(`No test matches ${selectionWords()}. That combination was never tested.`); return; }
  if (!condKeysSet().length) { p.replaceChildren("Drag the target or type your conditions to see which tests match."); return; }
  const k = D.matchingSelected.length;
  const part = D.partSelected.length;
  const word = sel ? "selected " : "";
  // Tests that match on what they report, but whose source gives no value for one of your conditions,
  // are counted apart: they are possible matches, never confirmed ones.
  const one = part === 1;
  const have = reportedWords(D.partSelected);
  const miss = missingWords(D.partSelected);
  if (k) {
    const more = part ? ` ${part} more ${one ? "matches" : "match"} ${have ? "your " + have : "on what " + (one ? "it reports" : "they report")}, but ${one ? "its" : "their"} ${miss} was not recorded.` : "";
    p.replaceChildren(`${k} of ${n} ${word}tests ${k === 1 ? "matches" : "match"} your conditions (larger dots).` + more);
    return;
  }
  if (part) {
    p.replaceChildren(`${part} of ${n} ${word}tests ${one ? "matches" : "match"} ${have ? "your " + have : "on what " + (one ? "it reports" : "they report")}. ${one ? "Its" : "Their"} ${miss} was not recorded, so ${one ? "it is not" : "none is"} a confirmed match.`);
    return;
  }
  const kids = [`No ${word}test at your conditions.`];
  if (D.closest) {
    kids.push(" Closest: ", h("button", { class: "link-btn test-link", type: "button", title: D.closest.id, onclick: () => tapTests([D.closest.id]) }, testName(D.closest)));
  }
  p.replaceChildren(...kids);
}

function renderCabins() {
  const lit = activeCabin();
  $("cabins").replaceChildren(h("span", { class: "cabins-title" }, "Cabin conditions"), ...CABINS.map((c) =>
    h("button", { class: "cabin" + (lit && lit.id === c.id ? " on" : ""), type: "button", title: c.tip, "aria-pressed": String(!!lit && lit.id === c.id),
      onclick: () => tapCabin(c.id) }, c.name)),
    // The way back from any conditions, typed, dragged or from a cabin: the shaded windows go, your selection and the
    // ± windows stay. Always in the row (greyed out with nothing to clear), so the cabin buttons never shift.
    h("button", { class: "cabin-clear", type: "button", id: "conds-clear", disabled: !condKeysSet().length,
      title: "Clear your conditions (your selection stays)", onclick: clearConds }, "✕ Clear"));
}

/* ====================== details ====================== */
// e.g. "Burned until suppressed", "Burn limit · MOC (maximum oxygen concentration)"
const KIND_NAME = { MOC: "MOC (maximum oxygen concentration)", ULOI: "ULOI (upward limiting oxygen index)", LOI: "LOI (limiting oxygen index)",
  OI: "OI (oxygen index)", HOI: "HOI (high gas velocity oxygen index)" };
const outName = (t, spelled = false) => t.out_label || (t.out === "limit" && t.kind && t.kind !== "limit" ? "Burn limit · " + ((spelled && KIND_NAME[t.kind]) || t.kind) : OUTCOME_NAME[t.out] || t.out);
const dash = (v, unit = "") => (v == null || v === "" ? "not reported" : (typeof v === "number" ? num(v, 2) : v) + unit);

function summaryView() {
  const tests = D.selected;
  if (!tests.length) return [h("p", { class: "muted" }, "No tests in this selection.")];
  const mats = new Set(tests.map((t) => t.mat));
  const exps = [...new Set(tests.map((t) => t.exp))].map((id) => expById.get(id)).filter(Boolean);
  const byOut = OUTCOMES.map(([k, label]) => [k === "limit" ? "burn limits" : label.toLowerCase(), tests.filter((t) => t.out === k).length]).filter((x) => x[1]);
  const srcs = new Map();
  for (const t of tests) if (!srcs.has(t.src)) srcs.set(t.src, t);
  const srcList = [...srcs.keys()];
  const expNames = exps.slice(0, 4).map((e) => e.name).join(", ") + (exps.length > 4 ? ` +${exps.length - 4} more` : "");
  const row = (label, ...value) => h("div", { class: "fact" }, h("span", { class: "fact-label" }, label), h("span", { class: "fact-value" }, ...value));
  return [h("div", { class: "facts wide" },
    row(hasSelection() ? "Selected" : "All tests", `${plural(tests.length, "test")} from ${plural(mats.size, "material")} in ${plural(exps.length, "experiment")}` + (expNames ? `: ${expNames}` : "")),
    row("Results", byOut.map(([label, n]) => `${n} ${label}`).join(", ")),
    row("Range tested", [rangeText(tests, "o2", "% O2"), rangeText(tests, "p", " kPa"), rangeText(tests, "flow", " cm/s")].filter(Boolean).join(" · ")),
    row("Sources", ...srcList.slice(0, 6).map((id) => link(sourceLabel(id), sourceUrl(id), (data.sources[id] || {}).title)),
      srcList.length > 6 ? h("span", { class: "muted" }, `+${srcList.length - 6} more`) : null),
    data.note ? row("Data status", h("span", { class: "muted" }, data.note)) : null)];
}

// Column widths you dragged in a Details table, kept while the page stays open (a reload brings the standard widths back).
const colWidths = new Map();
// Puts a grip on the right edge of every heading: drag it to change that column's width, double-click it to reset.
// kind names the set of columns ("fit", "plain", "mats"), so a width follows its column when the table is drawn again.
function resizableColumns(table, kind) {
  const cols = [...table.querySelectorAll("col")];
  [...table.querySelectorAll("thead th")].forEach((th, i) => {
    const col = cols[i];
    if (!col) return;
    const key = kind + ":" + i;
    if (colWidths.has(key)) col.style.width = colWidths.get(key) + "px";
    const grip = h("span", { class: "col-grip", title: "Drag to change the column width (double-click to reset)" });
    grip.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const startW = th.getBoundingClientRect().width;
      grip.setPointerCapture(e.pointerId);
      grip.classList.add("on");
      const move = (ev) => {
        const w = Math.max(36, Math.round(startW + ev.clientX - startX));
        col.style.width = w + "px";
        colWidths.set(key, w);
      };
      const up = () => {
        grip.classList.remove("on");
        grip.removeEventListener("pointermove", move);
        grip.removeEventListener("pointerup", up);
        grip.removeEventListener("pointercancel", up);
      };
      grip.addEventListener("pointermove", move);
      grip.addEventListener("pointerup", up);
      grip.addEventListener("pointercancel", up);
    });
    grip.addEventListener("dblclick", () => { colWidths.delete(key); col.style.width = ""; });
    th.append(grip);
  });
  return table;
}

// Every row is one line: a cell that is too long ends in "…" and shows its full text on hover.
// fitOf (optional): adds a first column saying how a test fits your conditions, and puts a dash
// in the cell of a condition you set that the source does not give.
function tableView(tests, fitOf) {
  const cols = [fitOf ? ["Fit", "c-fit"] : null, ["Test", "c-test"], ["Material", "c-mat"], ["Gravity", "c-grav"], ["O2 %", "c-num"], ["kPa", "c-num"], ["cm/s", "c-num"],
    ["Result", "c-res"], ["Source", "c-src"]].filter(Boolean);
  const UNIT = { o2: "% O2", p: " kPa", flow: " cm/s" };
  const value = (t, k) => {
    if (fitOf && t[k] == null && state.cond[k] != null) return h("span", { class: "not-recorded", title: "Not recorded in the source" }, "—");
    if (fitOf && fitOf(t).off === k) return h("span", { class: "off-value", title: `Outside your window: yours is ${num(state.cond[k])} ±${num(state.win[k])}${UNIT[k]}` }, num(t[k]));
    return num(t[k]);
  };
  const cell = (text, ...kids) => h("td", { title: text }, ...(kids.length ? kids : [text]));
  return [h("div", { class: "table-wrap" }, resizableColumns(h("table", { class: "tests" + (fitOf ? " with-fit" : "") },
    h("colgroup", null, cols.map((c) => h("col", { class: c[1] }))),
    h("thead", null, h("tr", null, cols.map((c) => h("th", null, c[0])))),
    h("tbody", null, tests.map((t) => {
      const mat = (matById.get(t.mat) || {}).name || t.mat;
      const src = sourceLabel(t.src, t.page, t.loc) + (t.sheet ? ` · PSI sheet "${t.sheet}", row ${t.row}` : "");
      const srcTitle = (data.sources[t.src] || {}).title;
      return h("tr", null,
        fitOf ? h("td", { title: fitOf(t).label }, h("span", { class: "fit " + fitOf(t).kind }, fitOf(t).label)) : null,
        cell(testName(t) === t.id ? t.id : `${testName(t)} (${t.id})`, h("button", { class: "link-btn test-link", type: "button", onclick: () => tapTests([t.id]) }, testName(t))),
        cell(mat, state.mat === t.mat ? mat : h("button", { class: "link-btn test-link", type: "button", title: `Select ${mat}: its card and its tests`,
          onclick: () => openMaterial(t, false) }, mat)),
        cell(t.g_detail || GRAVITY_NAME[t.g] || t.g),
        h("td", { class: "numcol" }, value(t, "o2")), h("td", { class: "numcol" }, value(t, "p")), h("td", { class: "numcol" }, value(t, "flow")),
        cell(outName(t), h("span", { class: "swatch out-" + t.out }), " ", outName(t)),
        h("td", null, link(src, sourceUrl(t.src, t.page), src + (srcTitle ? " · " + srcTitle : ""))));
    }))), fitOf ? "fit" : "plain"))];
}

function recordView(t) {
  const e = expById.get(t.exp) || {};
  const m = matById.get(t.mat) || { name: t.mat };
  const item = (label, ...value) => h("div", { class: "rec" }, h("span", { class: "fact-label" }, label), h("span", { class: "rec-value" }, ...value));
  const verb = t.out === "burned" ? "burned" : t.out === "went-out" ? "went out" : "did not ignite";
  const isLimit = t.out === "limit";
  const askText = isLimit
    ? `What does the burn limit ${t.id} (${m.name}, ${pct(t.o2)} O2) mean, and how was it measured?`
    : `Why did test ${t.id} (${m.name}, ${pct(t.o2)} O2) ${t.out === "burned" ? "burn" : t.out === "went-out" ? "go out" : "not ignite"}?`;
  // A test without a name from its source: the chat shows the question without the internal key (the key still goes to the AI).
  const named = testName(t) === t.id;
  const what = `${testSubject(t, true)}${t.o2 != null ? ", " + pct(t.o2) + " O2" : ""}`;
  const askShown = named ? null : isLimit
    ? `What does this burn limit mean, and how was it measured? (${what})`
    : `Why did this test ${t.out === "burned" ? "burn" : t.out === "went-out" ? "go out" : "not ignite"}? (${what})`;
  return [h("div", { class: "record" },
    h("div", { class: "rec-head" }, h("strong", { title: testName(t) === t.id ? null : t.id }, testName(t)), h("span", { class: "swatch out-" + t.out }), outName(t, true),
      h("button", { class: "ai-btn small", type: "button", onclick: () => hooks.ask(askText, "why_test", askShown ? { test_id: t.id, shown: askShown } : { test_id: t.id }) }, isLimit ? "Ask about this limit" : `Ask why it ${verb}`)),
    h("div", { class: "rec-grid" },
      item("Experiment", e.name || t.exp), item("Platform", dash(t.platform)), item("Burn time", dash(e.burn_time)),
      item("Material", h("button", { class: "link-btn", type: "button", title: "Show this material's Earth rating card", onclick: () => openMaterial(t) }, m.name)),
      item("Class", dash(m.cls)), item("Gravity", t.g_detail || GRAVITY_NAME[t.g] || t.g), item("Shape", dash(t.shape)), t.dia_mm != null ? item("Diameter", num(t.dia_mm, 2) + " mm") : item("Thickness", dash(t.thick_mm, " mm")),
      item("O2", (t.o2_approx && t.o2 != null ? "about " : "") + dash(t.o2, "%")), t.o2_start != null ? item("O2 at start", num(t.o2_start) + "% (the dot is the last reading)") : null,
      item("Pressure", dash(t.p, " kPa") + (t.p_disputed ? " (disputed in the source)" : "")), item("Airflow", dash(t.flow, " cm/s")), item("Direction", dash(t.dir)), item("Enclosure", dash(t.enc)),
      item("Spread rate", dash(t.spread, " mm/s")), item("Flame length", dash(t.burn_len, " mm")),
      item("Printed as", dash(t.printed)), t.mat_basis ? item("Material from", t.mat_basis) : null, item("Airflow as printed", dash(t.flow_printed)),
      item("Source", srcLink(t)),
      t.also ? item("Also in", ...t.also.map((id) => link(sourceLabel(id), sourceUrl(id), (data.sources[id] || {}).title))) : null))];
}

// With conditions set and nothing tapped, Details lists the tests under your shaded window in one table, closest first:
// the tests that match every condition you set (the larger dots), then the possible matches, which fit on what they
// report but whose source does not give one of your conditions, then the near misses (the faded dots): inside the
// window on one chart, but their source reports a condition outside your window. The Fit column says which is which;
// a near miss is marked in light red, with the value that is off in red.
function matchView() {
  const byDistance = (a, b) => distance(a).d - distance(b).d;
  const tests = D.matchingSelected.slice().sort(byDistance);
  const part = D.partSelected.slice().sort(byDistance);
  const near = D.nearSelected.slice().sort(byDistance);
  const n = tests.length;
  const possible = (k) => `${k} ${k === 1 ? "is a possible match" : "are possible matches"}`;
  const misses = (k, more) => `${k}${more ? " more" : ""} ${k === 1 ? "misses" : "miss"} on one condition (marked in red)`;
  let lead;
  if (n) {
    const mats = new Set(tests.map((t) => t.mat));
    const exps = new Set(tests.map((t) => t.exp));
    const byOut = OUTCOMES.map(([k, label]) => [k === "limit" ? "burn limit" : label.toLowerCase(), tests.filter((t) => t.out === k).length]).filter((x) => x[1]);
    lead = [h("strong", null, `${plural(n, "test")} ${n === 1 ? "matches" : "match"} your conditions`), ` (${conditionWords()}): `,
      byOut.map(([label, k]) => `${k} ${label}${label === "burn limit" && k > 1 ? "s" : ""}`).join(", "),
      `, from ${plural(mats.size, "material")} in ${plural(exps.size, "experiment")}.`, part.length ? ` ${part.length} more ${part.length === 1 ? "is a possible match" : "are possible matches"}.` : "",
      near.length ? ` ${misses(near.length, true)}.` : ""];
  } else {
    lead = [h("strong", null, "No test matches all your conditions"), ` (${conditionWords()}).`, part.length ? ` ${possible(part.length)}.` : "",
      near.length ? ` ${misses(near.length, part.length > 0)}.` : ""];
  }
  const NAMES = { o2: "oxygen", p: "pressure", flow: "airflow" };
  const cap = (words) => words[0].toUpperCase() + words.slice(1);
  const nearIds = new Set(near.map((t) => t.id));
  const fits = new Map();
  const fitOf = (t) => {                                  // kind: all = matches every condition you set, part = possible match, off = near miss
    if (fits.has(t.id)) return fits.get(t.id);
    let fit;
    const off = nearIds.has(t.id) ? offKeys(t) : [];
    const miss = condKeysSet().filter((k) => t[k] == null).map((k) => NAMES[k]);
    if (off.length) fit = { kind: "off", off: off[0], label: cap(off.map((k) => NAMES[k]).join(" and ")) + (off.length === 1 ? " does not match" : " do not match") };
    else if (miss.length) fit = { kind: "part", label: cap(miss.join(" and ")) + " not recorded" };
    else fit = { kind: "all", label: "All your conditions" };
    fits.set(t.id, fit);
    return fit;
  };
  return [h("p", { class: "match-head" }, ...lead, " Closest first."), ...tableView([...tests, ...part, ...near], fitOf)];
}

// A class or an experiment selected (no single material): Details lines its materials up side by side, one row each.
// Counts and lowest values come from the tests in your selection, by the card's rules; the Earth rating or limit is the
// material's own reference, as on its card. Most-tested first: the order shows how much evidence there is, never which
// material is better. Nothing here ranks materials.
function groupMaterials() {
  if (state.mat || !(state.cls || (state.exp && expTotal(state.exp)))) return [];
  const ids = [...new Set(D.selected.map((t) => t.mat))];
  return ids.length < 2 ? [] : ids;
}
function materialsView(ids) {
  const lowest = (list) => list.filter((t) => t.o2 != null).sort((a, b) => a.o2 - b.o2)[0] || null;
  const rows = ids.map((id) => {
    const sel = D.selected.filter((t) => t.mat === id);
    const tests = sel.filter((t) => t.out !== "limit");
    const limits = sel.filter((t) => t.out === "limit" && t.o2 != null);
    const space = tests.filter((t) => t.g !== "earth");
    const spaceLimits = limits.filter((t) => t.g !== "earth");
    return { id, m: materialFacts(id).m, space, spaceLimits, earthN: tests.length - space.length, earthLimitsN: limits.length - spaceLimits.length,
      burn: lowest(space.filter((t) => t.out === "burned")), limit: lowest(spaceLimits) };
  });
  const spaceN = (r) => r.space.length + r.spaceLimits.length;
  rows.sort((a, b) => spaceN(b) - spaceN(a) || (b.earthN + b.earthLimitsN) - (a.earthN + a.earthLimitsN) || a.m.name.localeCompare(b.m.name));
  const inSpace = rows.filter((r) => spaceN(r) > 0).length;
  const diamond = () => h("span", { class: "swatch out-limit card-swatch" });
  const none = () => h("span", { class: "not-recorded" }, "—");
  const open = (t, text) => h("button", { class: "link-btn", type: "button", title: "Open this test's record", onclick: () => tapTests([t.id]) }, text);
  const gSplit = (list) => GRAVITIES.filter(([g]) => g !== "earth").map(([g, label]) => [label.toLowerCase(), list.filter((t) => t.g === g).length])
    .filter(([, n]) => n).map(([label, n]) => `${n} ${label}`).join(", ");
  const cols = [["Material", "c-mname"], ["Space tests", "c-count"], ["Burned in space from", "c-low"], [["Space burn limits ", diamond()], "c-low"],
    ["Earth tests", "c-count"], [["Earth burn limits ", diamond()], "c-count2"], ["Earth rating or limit", "c-earth"]];
  const lead = [h("strong", null, `${rows.length} materials in your selection`), selectionWords() ? ` (${selectionWords()})` : "",
    `: ${inSpace} with space tests, ${rows.length - inSpace} without. Most-tested first; the order shows how much evidence there is, not which material is better.`];
  return [h("p", { class: "match-head" }, ...lead),
    h("div", { class: "table-wrap" }, resizableColumns(h("table", { class: "tests mats" },
      h("colgroup", null, cols.map((c) => h("col", { class: c[1] }))),
      h("thead", null, h("tr", null, cols.map((c) => h("th", null, c[0])))),
      h("tbody", null, rows.map((r) => {
        const e = r.m.earth;
        return h("tr", null,
          h("td", { title: r.m.name }, h("button", { class: "link-btn test-link", type: "button", title: `Select ${r.m.name}: its card and its tests`,
            onclick: () => select(state.exp ? { exp: state.exp, mat: r.id } : { mat: r.id }) }, r.m.name)),
          h("td", { class: "numcol", title: gSplit(r.space) || null }, String(r.space.length)),
          h("td", { class: "numcol" }, r.burn ? open(r.burn, pct(r.burn.o2)) : r.space.length ? "none burned" : none()),
          h("td", { class: "numcol", title: gSplit(r.spaceLimits) || null }, r.limit ? [`${r.spaceLimits.length} · lowest `, open(r.limit, pct(r.limit.o2))] : none()),
          h("td", { class: "numcol" }, String(r.earthN)),
          h("td", { class: "numcol" }, r.earthLimitsN ? String(r.earthLimitsN) : none()),
          h("td", { title: e ? `${e.label}${e.basis ? " (" + e.basis + ")" : ""} · ${sourceLabel(e.src, e.page, e.loc)}` : "No Earth rating or limit for this material in the data" },
            e ? link(`${pct(e.o2)} · ${e.label}`, sourceUrl(e.src, e.page)) : h("span", { class: "not-recorded" }, "not in the data")));
      }))), "mats"))];
}

function renderDetails() {
  const tapped = [...state.tapped].map((id) => testById.get(id)).filter(Boolean);
  const box = $("details");
  const atCond = D.matchingSelected.length + D.partSelected.length;
  const haveList = condKeysSet().length > 0 && (atCond > 0 || D.nearSelected.length > 0);
  // A group of materials: its table opens first for a class; for an experiment the tests at your conditions keep the
  // first place. A link in the heading switches between the two when both exist.
  const mats = groupMaterials();
  const tab = state.detailsTab || (state.cls ? "materials" : "tests");
  const showMats = mats.length > 0 && (!haveList || tab === "materials");
  const listing = !tapped.length && haveList && !showMats;
  const sw = $("details-switch");
  sw.hidden = !!tapped.length || !mats.length || !haveList;
  sw.textContent = showMats ? (atCond ? `Tests at your conditions (${atCond})` : `Tests that miss on one condition (${D.nearSelected.length})`) : `Materials in this selection (${mats.length})`;
  sw.onclick = () => { state.detailsTab = showMats ? "tests" : "materials"; changed(); };
  if (!tapped.length && showMats) box.replaceChildren(...materialsView(mats));
  else if (listing) box.replaceChildren(...matchView());
  else if (!tapped.length) box.replaceChildren(...summaryView());
  else if (tapped.length === 1) box.replaceChildren(...recordView(tapped[0]));
  else box.replaceChildren(...tableView(tapped));
  // "Filtered": the tapped mark holds more tests than your selection shows
  const hiddenHere = state.tappedPoint.filter((id) => !state.tapped.has(id));
  if (tapped.length && hiddenHere.length) {
    box.prepend(h("p", { class: "filtered-tag" }, h("span", { class: "tag" }, "Filtered: " + (selectionWords() || "your selection")),
      ` ${plural(tapped.length, "test")} of ${state.tappedPoint.length} at this point. `,
      h("button", { class: "link-btn", type: "button", onclick: () => tapTests(state.tappedPoint, state.tappedPoint) }, `Show all ${state.tappedPoint.length} at this point`)));
  }
  const atPoint = tapped.length > 1 && state.tappedPoint.length > 0;      // a tapped mark; otherwise a list opened from a link
  $("details-title").textContent = tapped.length ? (tapped.length === 1 ? "Details · test record" : `Details · ${tapped.length} tests${atPoint ? " at this point" : ""}`)
    : showMats ? "Details · materials in your selection" : listing ? (atCond ? "Details · tests at your conditions" : "Details · tests close to your conditions") : "Details";
  $("details-back").hidden = !tapped.length;
  $("details-back").textContent = showMats ? "Back to the materials" : haveList ? "Back to the list" : "Back to the summary";
}

function downloadCsv() {
  const cols = [["id", "test"], ["exp", "experiment"], ["mat", "material"], ["g", "gravity"], ["platform", "platform"], ["shape", "shape"], ["thick_mm", "thickness_mm"], ["dia_mm", "rod_diameter_mm"],
    ["o2", "o2_pct"], ["o2_start", "o2_start_pct"], ["p", "pressure_kpa"], ["flow", "airflow_cm_s"], ["dir", "airflow_direction"], ["enc", "enclosure"], ["out", "result"],
    ["spread", "spread_rate_mm_s"], ["burn_len", "flame_length_mm"], ["src", "source"], ["page", "page"], ["loc", "locator"]];
  // curation_note: how the row was read from the source (the team's working note; not shown on the page)
  const esc = (v) => (v == null ? "" : /[",\n]/.test(String(v)) ? '"' + String(v).replace(/"/g, '""') + '"' : String(v));
  const lines = [cols.map((c) => c[1]).concat("experiment_name", "material_name", "source_url", "curation_note").join(",")];
  for (const t of D.selected) {
    lines.push(cols.map((c) => esc(t[c[0]])).concat(esc((expById.get(t.exp) || {}).name), esc((matById.get(t.mat) || {}).name), esc(sourceUrl(t.src, t.page)), esc(t.note)).join(","));
  }
  const a = h("a", { href: URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" })), download: "flame-atlas-tests.csv" });
  document.body.append(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ====================== wiring ====================== */
export function initPanels() {
  document.querySelectorAll("#view-switch button").forEach((b) => b.addEventListener("click", () => setView(b.dataset.view)));
  $("search").addEventListener("input", (e) => { state.search = e.target.value; changed(); });
  $("clear-all").addEventListener("click", clearAll);
  $("csv").addEventListener("click", downloadCsv);
  $("details-back").addEventListener("click", () => tapTests([]));
  buildConds();
  if (String(data.version || "").startsWith("DEV")) $("dev-banner").hidden = false;
}
export function renderPanels() {
  renderSelector();
  renderChips();
  renderCard();
  renderLegend();
  renderConds();
  renderStatus();
  renderCabins();
  renderDetails();
}
