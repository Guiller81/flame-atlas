/*
  Flame Atlas: data, selection state and everything computed from them (no AI here).
  Team Flame Atlas, NASA Space Apps Challenge 2026. Licence: Apache-2.0.
  Written with an AI coding assistant (Claude Code), directed by the team.
*/

export const DATA_URL = "data/tests.json";

export const data = { version: null, sources: {}, experiments: [], materials: [], tests: [] };
export const matById = new Map();
export const expById = new Map();
export const testById = new Map();
const testsPerExp = new Map();        // an experiment without test rows only opens its card: it filters nothing

// "Partial-g" holds lunar, Martian and other partial-gravity tests; each test's record says which.
export const GRAVITIES = [["micro", "Micro-g"], ["partial", "Partial-g"], ["earth", "Earth"]];
export const GRAVITY_NAME = { micro: "micro-g", partial: "partial gravity (lunar, Martian)", earth: "Earth gravity" };
// A "burn limit" is the oxygen level a document states as the border between going out and burning, not one test.
export const OUTCOMES = [["burned", "Burned"], ["went-out", "Went out"], ["no-ignition", "No sustained ignition"], ["limit", "Burn limit"]];
export const OUTCOME_NAME = Object.fromEntries(OUTCOMES);
export const GROUPS = [
  { id: "solid", name: "Solid materials and emulators", ranked: true },
  { id: "earth", name: "Earth reference (1-g, not ranked)", ranked: false },
  { id: "droplet", name: "Fuel droplets", ranked: false, summary: "Summary only, no material tests" },
  { id: "gas", name: "Gas flames", ranked: false, summary: "Summary only, no material tests" },
  { id: "smoke", name: "Smoke and detection (not ranked)", ranked: false, summary: "Detection study, no fire tests" },
];
export const CONDS = [
  { key: "o2", label: "O2", unit: "%", step: 0.5 },
  { key: "p", label: "Pressure", unit: "kPa", step: 0.5 },
  { key: "flow", label: "Airflow", unit: "cm/s", step: 1 },
];
export const CHIP_GROUPS = [
  { key: "shape", label: "Shape" },
  { key: "dir", label: "Airflow direction" },
  { key: "enc", label: "Enclosure" },
];
// Real cabin atmospheres. Sources are named in the hover text.
export const CABINS = [
  { id: "iss", name: "ISS", o2: 24.1, p: 101.3, tip: "International Space Station: up to 24.1% O2 at 101.3 kPa (JSC 29353B, p.4)" },
  { id: "airlock", name: "Airlock", o2: 30, p: 70.3, tip: "Airlock before a spacewalk: 30% O2 at 70.3 kPa (JSC 29353B, p.4)" },
  { id: "lander", name: "Moon lander", o2: 28.5, p: 66.2, tip: "First lunar landings: 28.5% O2 at 66.2 kPa (9.6 psia), below 30% for early missions (ICES-2026-324, slides 4, 6)" },
  { id: "base", name: "Moon base", o2: 34, p: 56.5, tip: "Surface habitat and rover: 34% O2 at 56.5 kPa (8.2 psia), materials certified to 37%; also the long-term goal for landers (NESC TM-20260003925, pp.10–11, 33)" },
];

const OPENING_CABIN = "base";

export const state = {
  view: "experiment",                 // which side of the selector is showing
  exp: null, mat: null, cls: null, g: null,
  chips: { shape: new Set(), dir: new Set(), enc: new Set() },
  cond: { o2: null, p: null, flow: null },
  win: { o2: 3, p: 10, flow: 5 },
  cabinUndo: null,                    // conditions before the lit cabin button was tapped
  tapped: new Set(),                  // tests you tapped (black ring)
  tappedPoint: [],                    // every test at the tapped mark, including those your selection hides
  highlight: new Set(),               // tests the chat or a Highlight button points at (violet ring)
  highlightOwner: null,
  search: "",
  openGroups: new Set(["solid", "earth"]),
  openExps: new Set(),
  closedClasses: new Set(),
  detailsTab: null,                   // "materials" or "tests" once you pick one in Details; null = the page decides
};

const listeners = [];
export const onChange = (fn) => listeners.push(fn);
export function changed() {
  derive();
  listeners.forEach((fn) => fn());
}

export async function loadData() {
  const res = await fetch(DATA_URL, { cache: "no-cache" });
  if (!res.ok) throw new Error("data file " + res.status);
  Object.assign(data, await res.json());
  data.materials.forEach((m) => matById.set(m.id, m));
  data.experiments.forEach((e) => expById.set(e.id, e));
  data.tests.forEach((t) => { testById.set(t.id, t); testsPerExp.set(t.exp, (testsPerExp.get(t.exp) || 0) + 1); });
  // Opening view: the Experiment side, ranked for the Moon base cabin (the statement asks to rank investigations
  // for crew habitats). Tapping the lit cabin button clears the conditions.
  const cabin = CABINS.find((c) => c.id === OPENING_CABIN);
  if (cabin) { state.cond.o2 = cabin.o2; state.cond.p = cabin.p; state.cabinUndo = { o2: null, p: null }; }
  derive();
  // The experiment ranked first for that cabin opens selected, so the page starts on the top result (its tests on the
  // charts, its card filled in) rather than on every test at once. "Clear all" gives the blank page.
  const top = data.experiments.find((e) => e.group === "solid" && D.expStats.get(e.id).rank === 1);
  if (top) { state.exp = top.id; derive(); }
}

/* ---------- formatting ---------- */
export const num = (v, digits = 1) => (v == null ? "" : String(+(+v).toFixed(digits)));
export const pct = (v) => num(v) + "%";
export const plural = (n, one, many) => n + " " + (n === 1 ? one : many || one + "s");
export function sourceUrl(id, page) {
  const s = data.sources[id];
  if (!s || !s.url) return null;
  return s.url + (Number.isInteger(page) && s.kind !== "psi-record" && s.kind !== "psi-file" ? "#page=" + page : "");
}
export function sourceLabel(id, page, loc) {
  const s = data.sources[id];
  let label = (s && s.short) || id;
  const paged = !s || (s.kind !== "psi-record" && s.kind !== "psi-file");   // PSI records and spreadsheets have no pages
  if (paged && Number.isInteger(page)) label += ", p." + page;
  if (loc) label += " · " + loc;
  return label;
}

// The name a test is shown under. A test its source names keeps that name ("BASS:11"). A row its source gives no name
// (a limit or a point read from a table or figure) has only curation's long internal key; it is shown as what was tested:
// material and form, what happened, and the oxygen level ("PMMA rod · quenching limit at 21.7% O2"). The key stays its id.
const FORM_IN_NAME = /fabric|film|wire|paper|patch|felt/i;
// What was tested: the material and its form ("PMMA rod"). whole = true keeps a very long material name in full
// (for a sentence, where there is room); otherwise it is cut so a one-line name still shows the result and the oxygen.
export function testSubject(t, whole = false) {
  const full = (matById.get(t.mat) || {}).name || t.mat;
  let mat = full.replace(/ in the source$/, "").replace(/\s*\([^)]{13,}\)$/, "");   // a long bracket (a blend, a trade name) is left to the Material column
  if (mat.length > 34) return whole ? mat : mat.slice(0, 32).trimEnd() + "…";
  if (t.shape && !FORM_IN_NAME.test(full) && !full.toLowerCase().includes(t.shape)) mat += " " + t.shape;
  return mat;
}
export function testName(t) {
  if (!/:[0-9a-f]{8}$/.test(t.id)) return t.id;
  const mat = testSubject(t);
  const what = t.out === "limit" ? (t.kind && t.kind !== "limit" ? t.kind.replace(/\s*\(.*\)$/, "") : "burn limit")
    : t.out === "burned" ? "burned" : t.out === "went-out" ? "went out" : "no sustained ignition";
  return `${mat} · ${what}${t.o2 != null ? " at " + pct(t.o2) + " O2" : ""}`;
}

/* ---------- conditions ---------- */
export const condKeysSet = () => CONDS.map((c) => c.key).filter((k) => state.cond[k] != null);

// Distance from your conditions to a test: the largest gap, each divided by its ± window.
// 1 or less = near your conditions. A test that does not report a condition you set is never "near".
export function distance(t) {
  const keys = condKeysSet();
  if (!keys.length) return { d: null, complete: true };
  let d = 0;
  let complete = true;
  for (const k of keys) {
    if (t[k] == null) { complete = false; continue; }
    d = Math.max(d, Math.abs(t[k] - state.cond[k]) / (state.win[k] || 1e-9));
  }
  return { d, complete };
}
// A test whose source gives no oxygen has no dot on the charts and is never a match or a possible match:
// oxygen is the page's main variable, and sharing only your airflow or pressure says too little.
export function matches(t) {
  const keys = condKeysSet();
  if (!keys.length || t.o2 == null) return false;
  return keys.every((k) => t[k] != null && Math.abs(t[k] - state.cond[k]) <= state.win[k] + 1e-9);
}

// Fits your window on every condition it reports, but does not print at least one condition you set.
// Such a test is neither a match nor a miss: it stays bright and is counted separately.
export function fitsPartly(t) {
  if (t.o2 == null) return false;
  const keys = condKeysSet();
  const reported = keys.filter((k) => t[k] != null);
  if (!reported.length || reported.length === keys.length) return false;
  return reported.every((k) => Math.abs(t[k] - state.cond[k]) <= state.win[k] + 1e-9);
}
// A near miss: inside your shaded window on at least one chart, but outside your window on a condition its source
// does report. These are the faded dots under the rectangle. Not the same as a possible match, whose source is silent
// on one of your conditions.
export function offKeys(t) {
  return condKeysSet().filter((k) => t[k] != null && Math.abs(t[k] - state.cond[k]) > state.win[k] + 1e-9);
}
export function nearMiss(t) {
  if (t.o2 == null || matches(t) || fitsPartly(t)) return false;
  const cy = state.cond.o2;
  const inY = cy == null ? null : Math.abs(t.o2 - cy) <= state.win.o2 + 1e-9;
  return ["flow", "p"].some((k) => {
    const cx = state.cond[k];
    const inX = cx == null ? null : t[k] != null && Math.abs(t[k] - cx) <= state.win[k] + 1e-9;
    return (inX !== null || inY !== null) && inX !== false && inY !== false;
  });
}
const COND_WORD = { o2: "oxygen", p: "pressure", flow: "airflow" };
export function missingWords(tests) {
  const miss = condKeysSet().filter((k) => tests.some((t) => t[k] == null));
  return miss.map((k) => COND_WORD[k]).join(" or ");
}
// the conditions those tests do report (and match)
export function reportedWords(tests) {
  const have = condKeysSet().filter((k) => tests.every((t) => t[k] != null));
  return have.map((k) => COND_WORD[k]).join(" and ");
}

/* ---------- selection ---------- */
export const chipsOn = () => CHIP_GROUPS.some((c) => state.chips[c.key].size > 0);
export const expTotal = (id) => testsPerExp.get(id) || 0;   // all its test rows, whatever the filters
const expFilter = () => (state.exp && testsPerExp.get(state.exp) ? state.exp : null);
export const hasSelection = () => !!(expFilter() || state.mat || state.cls || state.g || chipsOn());
export const isEmptyPage = () => !hasSelection() && !condKeysSet().length && !state.tapped.size && !state.highlight.size;

function passesChips(t, except) {
  return CHIP_GROUPS.every((c) => c.key === except || state.chips[c.key].size === 0 || state.chips[c.key].has(t[c.key]));
}
function passesGrid(t) {
  if (expFilter() && t.exp !== state.exp) return false;
  if (state.mat && t.mat !== state.mat) return false;
  if (state.cls && (matById.get(t.mat) || {}).cls !== state.cls) return false;
  if (state.g && t.g !== state.g) return false;
  return true;
}

/* ---------- derived values, recomputed on every change ---------- */
export const D = {
  selected: [], selectedIds: new Set(), matchIds: new Set(), matchingSelected: [], partIds: new Set(), partSelected: [], nearSelected: [],
  closest: null, chipTests: [], expStats: new Map(), chipCounts: {}, ranges: {},
};

function derive() {
  const T = data.tests;
  D.chipTests = T.filter((t) => passesChips(t));
  D.selected = D.chipTests.filter(passesGrid);
  D.selectedIds = new Set(D.selected.map((t) => t.id));
  D.matchIds = new Set(T.filter(matches).map((t) => t.id));
  D.matchingSelected = D.selected.filter((t) => D.matchIds.has(t.id));
  D.partIds = new Set(T.filter(fitsPartly).map((t) => t.id));
  D.partSelected = D.selected.filter((t) => D.partIds.has(t.id));
  D.nearSelected = condKeysSet().length ? D.selected.filter(nearMiss) : [];

  // closest selected test, for the status line when nothing matches
  D.closest = null;
  if (condKeysSet().length && !D.matchingSelected.length && !D.partSelected.length) {
    let best = Infinity;
    for (const t of D.selected) {
      if (t.o2 == null) continue;                          // no dot on the charts
      const { d, complete } = distance(t);
      const score = d + (complete ? 0 : 1000);
      if (score < best) { best = score; D.closest = t; }
    }
  }

  // how many tests each chip would leave
  D.chipCounts = {};
  for (const c of CHIP_GROUPS) {
    const pool = T.filter((t) => passesChips(t, c.key) && passesGrid(t));
    const counts = new Map();
    for (const t of T) if (t[c.key] != null && !counts.has(t[c.key])) counts.set(t[c.key], 0);
    for (const t of pool) if (t[c.key] != null) counts.set(t[c.key], counts.get(t[c.key]) + 1);
    D.chipCounts[c.key] = counts;
  }

  // per experiment: test counts and the ranking for your conditions
  D.expStats = new Map();
  for (const e of data.experiments) D.expStats.set(e.id, { n: 0, byG: {}, tests: [], best: null, bestTest: null, near: 0, part: 0, complete: false, rank: null });
  for (const t of D.chipTests) {
    const s = D.expStats.get(t.exp);
    if (!s) continue;
    s.n += 1;
    s.byG[t.g] = (s.byG[t.g] || 0) + 1;
    s.tests.push(t);
  }
  const haveCond = condKeysSet().length > 0;
  for (const s of D.expStats.values()) {
    if (!haveCond) continue;
    for (const t of s.tests) {
      const { d, complete } = distance(t);
      const better = s.best == null || (complete && !s.complete) || (complete === s.complete && d < s.best);
      if (better) { s.best = d; s.bestTest = t; s.complete = complete; }
      if (complete && d <= 1) s.near += 1;
      else if (!complete && fitsPartly(t)) s.part += 1;
    }
  }
  for (const g of GROUPS.filter((x) => x.ranked)) {
    const list = data.experiments.filter((e) => e.group === g.id && D.expStats.get(e.id).n > 0);
    if (!haveCond) continue;
    list.sort((a, b) => {
      const A = D.expStats.get(a.id), B = D.expStats.get(b.id);
      return (B.complete - A.complete) || (A.best - B.best) || (B.near - A.near) || a.name.localeCompare(b.name);
    });
    list.forEach((e, i) => { D.expStats.get(e.id).rank = i + 1; });
  }

  // axis ranges from all the tests
  for (const k of ["o2", "p", "flow"]) {
    const vals = T.map((t) => t[k]).filter((v) => v != null);
    D.ranges[k] = vals.length ? [Math.min(...vals), Math.max(...vals)] : [0, 1];
  }
}

/* ---------- the Earth rating card's numbers ---------- */
export function materialFacts(matId) {
  const mat = matById.get(matId);
  const rows = D.chipTests.filter((t) => t.mat === matId);
  const tests = rows.filter((t) => t.out !== "limit");
  const limits = rows.filter((t) => t.out === "limit" && t.o2 != null);
  const earth = tests.filter((t) => t.g === "earth");
  const space = tests.filter((t) => t.g !== "earth");
  const earthLimits = limits.filter((t) => t.g === "earth");
  const spaceLimits = limits.filter((t) => t.g !== "earth");

  // The Earth reference is a reported 1-g limit. Only a limit from the standard Earth test (NASA-STD-6001 Test 1,
  // chemical igniter) is an "Earth rating"; any other 1-g limit is an "Earth limit". When a document gives it at
  // several pressures, the one nearest your pressure is used (101.3 kPa when you set none); ties go to the lower oxygen.
  const wantP = state.cond.p ?? 101.3;
  const nearest = (list) => list.slice().sort((a, b) => Math.abs((a.p ?? 1e6) - wantP) - Math.abs((b.p ?? 1e6) - wantP) || a.o2 - b.o2)[0];
  const isRating = (t) => /chemical ign/i.test(t.ign || "");
  const kind = (k, list = earthLimits) => list.filter((t) => t.kind === k);
  const ref = nearest(kind("MOC", earthLimits.filter(isRating))) || nearest(earthLimits.filter(isRating))
    || nearest(kind("MOC")) || nearest(kind("ULOI")) || nearest(earthLimits) || null;
  // A comparison the source's own authors make, for exactly this material and shape, comes first.
  const lead = mat.lead && state.chips.shape.size === 1 && state.chips.shape.has(mat.lead.shape) ? mat.lead : null;
  const earthRef = lead ? { id: null, o2: lead.earth.o2, label: lead.earth.label, kind: "limit", basis: lead.earth.basis, src: lead.earth.src, page: lead.earth.page, loc: null }
    : ref ? {
      id: ref.id, o2: ref.o2, label: isRating(ref) ? "Earth rating" : "Earth limit", kind: ref.kind,
      basis: (ref.kind && ref.kind !== "limit" ? ref.kind : "1-g limit") + (ref.p != null ? " at " + num(ref.p) + " kPa" : ""),
      src: ref.src, page: ref.page, loc: ref.loc,
    } : null;
  const rating = earthRef ? earthRef.o2 : null;

  // Rods: one diameter at a time (a thicker rod burns differently, so sizes are never mixed in one comparison).
  const sized = rows.filter((t) => t.dia_mm != null);
  const dias = [...new Set(sized.map((t) => t.dia_mm))].sort((a, b) => a - b);
  const sizes = dias.length < 2 ? [] : dias.map((d) => {
    const r = sized.filter((t) => t.dia_mm === d);
    const eo = r.filter((t) => t.g === "earth" && t.out === "limit").map((t) => t.o2);
    const sp = r.filter((t) => t.g !== "earth");
    // lowest oxygen with a flame in space: a test that burned, a burn limit, or the last reading of a flame that then went out
    const low = sp.filter((t) => t.o2 != null && (t.out === "burned" || t.out === "limit" || (t.out === "went-out" && t.o2_start != null))).map((t) => t.o2);
    return { d, ids: r.map((t) => t.id), earthN: eo.length, earthLo: eo.length ? Math.min(...eo) : null, earthHi: eo.length ? Math.max(...eo) : null,
      spaceN: sp.length, spaceLow: low.length ? Math.min(...low) : null };
  });

  const burned = (list) => list.filter((t) => t.out === "burned");
  const atOrBelow = (list) => (rating == null ? [] : burned(list).filter((t) => t.o2 != null && t.o2 <= rating + 1e-9));
  const burnO2 = burned(space).map((t) => t.o2).filter((v) => v != null);
  const lowestBurn = burnO2.length ? Math.min(...burnO2) : null;
  const lowestLimit = spaceLimits.length ? Math.min(...spaceLimits.map((t) => t.o2)) : null;
  const lowestSpaceBurn = lead ? lead.space.o2 : lowestBurn == null ? lowestLimit : lowestLimit == null ? lowestBurn : Math.min(lowestBurn, lowestLimit);
  return {
    m: { ...mat, earth: earthRef }, rating, earth, space, earthLimits, spaceLimits, lead, sizes,
    unsized: sizes.length ? rows.filter((t) => t.shape === "rod" && t.dia_mm == null).length : 0,
    earthBurnedBelow: atOrBelow(earth),
    spaceBurnedBelow: atOrBelow(space),
    lowestSpaceBurn, lowestLimit,
    lowestFromLimit: !lead && lowestSpaceBurn != null && lowestSpaceBurn === lowestLimit && lowestLimit !== lowestBurn,
    spaceGravities: [...new Set(space.map((t) => t.g))],
  };
}

/* ---------- actions ---------- */
export function setView(view) {
  if (state.view === view) return;
  state.view = view;
  state.exp = null; state.mat = null; state.cls = null; state.g = null;
  state.search = "";
  changed();
}
// From a test record: select the test's material and keep the record open (record = true).
// From a list of tests (record = false): select the material; the list then shows its tests.
// A filter that would hide this test is cleared, so the test and its material always light up.
export function openMaterial(t, record = true) {
  const inExp = state.view === "experiment" && state.exp === t.exp;
  const materialChanged = state.mat !== t.mat;
  if (!inExp) { state.view = "material"; state.search = ""; }
  Object.assign(state, { exp: inExp ? t.exp : null, mat: t.mat, cls: null, g: null });
  if (materialChanged) clearHighlight(false);
  for (const c of CHIP_GROUPS) { const set = state.chips[c.key]; if (set.size && !set.has(t[c.key])) set.clear(); }
  state.tapped = new Set(record ? [t.id] : []);
  state.tappedPoint = [];
  changed();
}
export function select(next) {
  // next: {exp, mat, cls, g}; picking the same thing again clears it
  const cur = { exp: state.exp, mat: state.mat, cls: state.cls, g: state.g };
  const norm = { exp: next.exp || null, mat: next.mat || null, cls: next.cls || null, g: next.g || null };
  const same = Object.keys(cur).every((k) => cur[k] === norm[k]);
  const materialChanged = cur.mat !== (same ? null : norm.mat);
  Object.assign(state, same ? { exp: null, mat: null, cls: null, g: null } : norm);
  if (materialChanged) clearHighlight(false);
  state.tapped.clear();
  changed();
}
export function toggleChip(group, value) {
  const set = state.chips[group];
  if (set.has(value)) set.delete(value); else set.add(value);
  changed();
}
export function setCond(key, value, fromCabin = false) {
  state.cond[key] = value == null || Number.isNaN(value) ? null : value;
  if (!fromCabin) state.cabinUndo = null;
  changed();
}
export function setConds(values) {
  Object.assign(state.cond, values);
  state.cabinUndo = null;
  changed();
}
// "Clear" next to Your conditions: the rectangles go, your selection and the ± windows stay.
export function clearConds() {
  state.cond = { o2: null, p: null, flow: null };
  state.cabinUndo = null;
  changed();
}
export function setWin(key, value) {
  if (value > 0) state.win[key] = value;
  changed();
}
export const activeCabin = () => CABINS.find((c) => state.cond.o2 === c.o2 && state.cond.p === c.p) || null;
export function tapCabin(id) {
  const c = CABINS.find((x) => x.id === id);
  const lit = activeCabin();
  if (lit && lit.id === id) {
    // tapping the lit button undoes it: the conditions you had before come back
    Object.assign(state.cond, state.cabinUndo || { o2: null, p: null });
    state.cabinUndo = null;
  } else {
    if (!lit) state.cabinUndo = { o2: state.cond.o2, p: state.cond.p, flow: state.cond.flow };
    state.cond.o2 = c.o2;
    state.cond.p = c.p;
    state.cond.flow = null;         // a cabin is its oxygen and pressure: an airflow left from before goes back to "any"
  }
  changed();
}
export function tapTests(ids, allAtPoint = []) {
  const same = ids.length === state.tapped.size && ids.every((id) => state.tapped.has(id));
  state.tapped = new Set(same ? [] : ids);
  state.tappedPoint = same ? [] : allAtPoint;
  changed();
}
export function setHighlight(ids, owner) {
  state.highlight = new Set(ids);
  state.highlightOwner = owner || null;
  changed();
}
export function clearHighlight(notify = true) {
  state.highlight = new Set();
  state.highlightOwner = null;
  if (notify) changed();
}
export function clearAll() {
  Object.assign(state, { exp: null, mat: null, cls: null, g: null, cabinUndo: null, search: "", detailsTab: null });
  CHIP_GROUPS.forEach((c) => state.chips[c.key].clear());
  state.cond = { o2: null, p: null, flow: null };
  state.tapped.clear();
  clearHighlight(false);
  changed();
}

/* ---------- snapshot and restore (used by the chat's Show on charts / Undo) ---------- */
export function snapshot() {
  return {
    view: state.view, exp: state.exp, mat: state.mat, cls: state.cls, g: state.g,
    chips: Object.fromEntries(CHIP_GROUPS.map((c) => [c.key, [...state.chips[c.key]]])),
    cond: { ...state.cond }, win: { ...state.win }, cabinUndo: state.cabinUndo,
    tapped: [...state.tapped], highlight: [...state.highlight], highlightOwner: state.highlightOwner,
  };
}
export function restore(s) {
  Object.assign(state, { view: s.view, exp: s.exp, mat: s.mat, cls: s.cls, g: s.g, cabinUndo: s.cabinUndo });
  CHIP_GROUPS.forEach((c) => { state.chips[c.key] = new Set(s.chips[c.key]); });
  state.cond = { ...s.cond };
  state.win = { ...s.win };
  state.tapped = new Set(s.tapped);
  state.tappedPoint = [];
  state.highlight = new Set(s.highlight);
  state.highlightOwner = s.highlightOwner;
  changed();
}

/* ---------- is a Highlight button useful right now? ---------- */
// It must point at tests the page does not already single out: never every lit dot,
// never only the larger dots already in your window.
export function highlightUseful(ids) {
  const set = new Set(ids.filter((id) => testById.has(id)));
  if (!set.size) return false;
  const same = (list) => list.length === set.size && list.every((t) => set.has(t.id));
  if (same(D.selected)) return false;
  if (D.matchingSelected.length && same(D.matchingSelected)) return false;
  return true;
}

/* ---------- what an answer is about, as a view of the dashboard ---------- */
const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
export function sameView(a, b) {
  return a.view === b.view && a.exp === b.exp && a.mat === b.mat && a.cls === b.cls && a.g === b.g
    && CHIP_GROUPS.every((c) => sameSet(a.chips[c.key], b.chips[c.key]))
    && CONDS.every((c) => a.cond[c.key] === b.cond[c.key]);
}
// Only what the question mentions changes. Material and gravity are one grid choice; the rest stays.
export function viewFor(about) {
  const s = snapshot();
  if (!about) return s;
  const exp = expById.has(about.experiment) ? about.experiment : null;
  const mat = matById.has(about.material) ? about.material : null;
  const cls = !mat && data.materials.some((m) => m.cls === about.material_class) ? about.material_class : null;
  const aboutG = about.gravity === "lunar" || about.gravity === "martian" ? "partial" : about.gravity;
  const g = GRAVITIES.some((x) => x[0] === aboutG) ? aboutG : null;
  if (exp || mat || cls || g) Object.assign(s, { view: exp ? "experiment" : "material", exp, mat, cls: exp ? null : cls, g });
  const chipField = { shape: about.shape, dir: about.flow_direction, enc: about.enclosure };
  for (const c of CHIP_GROUPS) {
    const v = chipField[c.key];
    if (v != null && data.tests.some((t) => t[c.key] === v)) s.chips[c.key] = [v];
  }
  const condField = { o2: about.o2_pct, p: about.pressure_kpa, flow: about.airflow_cm_s };
  for (const c of CONDS) if (typeof condField[c.key] === "number") s.cond[c.key] = condField[c.key];
  s.tapped = [];
  return s;
}
export function aboutWords(about) {
  if (!about) return "";
  const parts = [];
  if (expById.has(about.experiment)) parts.push(expById.get(about.experiment).name);
  if (about.named && matById.has(about.material)) parts.push(`${about.named} (not in the tests; nearest tested: ${matById.get(about.material).name})`);
  else if (matById.has(about.material)) parts.push(matById.get(about.material).name);
  else if (about.named) parts.push(`${about.named} (not in the tests)`);
  if (about.material_class && !matById.has(about.material)) parts.push(about.material_class);
  const g = GRAVITIES.find((x) => x[0] === (about.gravity === "lunar" || about.gravity === "martian" ? "partial" : about.gravity));
  if (g) parts.push(g[1]);
  for (const k of ["shape", "flow_direction", "enclosure"]) if (about[k]) parts.push(about[k]);
  if (typeof about.o2_pct === "number") parts.push(pct(about.o2_pct) + " O2");
  if (typeof about.pressure_kpa === "number") parts.push(num(about.pressure_kpa) + " kPa");
  if (typeof about.airflow_cm_s === "number") parts.push(num(about.airflow_cm_s) + " cm/s");
  return parts.join(" · ");
}

/* ---------- words for the current selection ---------- */
export function selectionWords() {
  const parts = [];
  if (expFilter()) parts.push(expById.get(state.exp).name);
  if (state.mat) parts.push(matById.get(state.mat).name);
  if (state.cls) parts.push(state.cls);
  if (state.g) parts.push(GRAVITIES.find((x) => x[0] === state.g)[1]);
  CHIP_GROUPS.forEach((c) => { if (state.chips[c.key].size) parts.push([...state.chips[c.key]].join(" or ")); });
  return parts.join(" · ");
}
export function conditionWords() {
  const parts = [];
  if (state.cond.o2 != null) parts.push(pct(state.cond.o2) + " O2");
  if (state.cond.p != null) parts.push(num(state.cond.p) + " kPa");
  if (state.cond.flow != null) parts.push(num(state.cond.flow) + " cm/s");
  return parts.join(", ");
}
