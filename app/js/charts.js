/*
  Flame Atlas: the two test charts (oxygen against airflow, oxygen against pressure).
  Every dot is a real test and never moves off its value; tests at the same point and outcome
  merge into one mark with a count.
  Team Flame Atlas, NASA Space Apps Challenge 2026. Licence: Apache-2.0.
  Written with an AI coding assistant (Claude Code), directed by the team.
*/
import {
  data, state, D, CONDS, CABINS, matById, OUTCOME_NAME, num, pct, plural,
  hasSelection, condKeysSet, materialFacts, setConds, tapTests, missingWords,
} from "./state.js";

const NS = "http://www.w3.org/2000/svg";
const el = (tag, attrs = {}, text) => {
  const n = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
  if (text != null) n.textContent = text;
  return n;
};

const CHARTS = [
  { id: "chart-flow", x: "flow", label: "Airflow (cm/s)", missing: "no airflow reported" },
  { id: "chart-p", x: "p", label: "Pressure (kPa)", missing: "no pressure reported" },
];
const OUT_ORDER = ["burned", "went-out", "no-ignition", "limit"];
const M = { l: 38, r: 14, t: 18, b: 34 };
const BAND = 34;                       // width of the "no data" band

function niceScale(lo, hi, target) {
  const span = Math.max(hi - lo, 1e-6);
  const raw = span / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) || 10 * mag;
  const a = Math.floor(lo / step) * step;
  const b = Math.ceil(hi / step) * step;
  const ticks = [];
  for (let v = a; v <= b + step / 2; v += step) ticks.push(+v.toFixed(6));
  return { lo: a, hi: b, ticks };
}

const views = new Map();               // chart id -> {box, tip, geometry, marks}

/* ---------- zoom: the wheel zooms a chart in and out around the pointer, on both axes, like a picture ---------- */
// The two charts share one oxygen axis, so a test sits at the same height in both; airflow and pressure zoom by themselves.
const AXES = ["flow", "p", "o2"];
const zoom = {};                                          // [lo, hi] per axis, or null = the whole range
const home = {};                                          // the view the page opens with, and Reset returns to
AXES.forEach((k) => { zoom[k] = null; home[k] = null; });
const MIN_SPAN = { o2: 1, flow: 2, p: 2 };
const baseKey = (k) => k.split(":")[0];
const sameRange = (a, b) => (!a && !b) || (!!a && !!b && Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9);
const zoomed = () => !AXES.every((k) => sameRange(zoom[k], home[k]));
// A few burn limits sit far above any cabin (some materials only burn above 50% oxygen). The opening view
// stops at 40% oxygen and at the 98th percentile of airflow; zooming out shows the rest.
function setHome() {
  const o2 = baseDomain("o2");
  const o2Home = o2.hi > 45 ? [Math.max(o2.lo, Math.floor((D.ranges.o2[0] - 1) / 5) * 5), 40] : null;
  home.o2 = o2Home;
  const flows = data.tests.map((t) => t.flow).filter((v) => v != null).sort((a, b) => a - b);
  const f = baseDomain("flow");
  const p98 = flows.length ? flows[Math.floor(flows.length * 0.98)] : 0;
  home.flow = flows.length && f.hi > p98 * 1.6 ? [0, niceScale(0, p98 * 1.1, 7).hi] : null;
  AXES.forEach((k) => { zoom[k] = home[k] && home[k].slice(); });
}
function zoomAxis(key, at, factor) {
  const base = baseDomain(baseKey(key));
  const cur = zoom[key] || [base.lo, base.hi];
  let lo = at - (at - cur[0]) * factor;
  let hi = at + (cur[1] - at) * factor;
  if (hi - lo < MIN_SPAN[baseKey(key)]) return;           // close enough
  lo = Math.max(lo, base.lo);
  hi = Math.min(hi, base.hi);
  zoom[key] = hi - lo >= base.hi - base.lo - 1e-9 ? null : [lo, hi];
}
export function resetZoom() {
  AXES.forEach((k) => { zoom[k] = home[k] && home[k].slice(); });
  renderCharts();
}
function domainFor(key) {
  const z = zoom[key];
  const b = baseKey(key);
  if (!z) return baseDomain(b);
  const nice = niceScale(z[0], z[1], b === "o2" ? 6 : 7);
  return { lo: z[0], hi: z[1], ticks: nice.ticks.filter((v) => v >= z[0] - 1e-9 && v <= z[1] + 1e-9) };
}

function baseDomain(key) {
  let [lo, hi] = D.ranges[key];
  if (key === "o2") { lo = Math.min(lo, ...CABINS.map((c) => c.o2)) - 1; hi = Math.max(hi, ...CABINS.map((c) => c.o2)) + 1; }
  if (key === "p") { lo = Math.min(lo, ...CABINS.map((c) => c.p)) - 4; hi = Math.max(hi, ...CABINS.map((c) => c.p)) + 4; }
  if (key === "flow") { lo = 0; hi = hi + 2; }
  return niceScale(lo, hi, key === "o2" ? 6 : 7);
}

function build(chart) {
  const view = views.get(chart.id);
  const box = view.box;
  const W = Math.max(box.clientWidth, 260);
  const H = Math.max(box.clientHeight, 180);
  const xk = chart.x;
  const unit = CONDS.find((c) => c.key === xk).unit;
  const hasMissing = data.tests.some((t) => t[xk] == null && t.o2 != null);
  const x0 = M.l + (hasMissing ? BAND + 8 : 0);
  const x1 = W - M.r;
  const y0 = H - M.b;
  const y1 = M.t;
  const xs = domainFor(xk);
  const ys = domainFor("o2");
  const X = (v) => x0 + ((v - xs.lo) / (xs.hi - xs.lo)) * (x1 - x0);
  const Y = (v) => y0 - ((v - ys.lo) / (ys.hi - ys.lo)) * (y0 - y1);
  const bandX = M.l + BAND / 2;
  view.geo = { W, H, x0, x1, y0, y1, xs, ys, X, Y, xk, hasMissing };

  const root = el("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: "img",
    "aria-label": `Tests by oxygen and ${chart.label.toLowerCase()}. The same tests are listed under Details.` });

  /* grid and axes */
  const grid = el("g", { class: "grid" });
  // a tick label steps aside when your own value is printed at the same place
  const yourY = state.cond.o2;
  const yourX = state.cond[xk];
  for (const v of ys.ticks) {
    grid.append(el("line", { x1: M.l, x2: x1, y1: Y(v), y2: Y(v) }));
    if (yourY == null || Math.abs(Y(v) - Y(yourY)) > 10) grid.append(el("text", { x: M.l - 6, y: Y(v) + 3.5, "text-anchor": "end", class: "tick" }, num(v)));
  }
  for (const v of xs.ticks) {
    grid.append(el("line", { x1: X(v), x2: X(v), y1: y0, y2: y0 + 4, class: "tickmark" }));
    if (hasMissing && X(v) - bandX < 36) continue;        // too close to the "no data" label
    if (yourX == null || Math.abs(X(v) - X(yourX)) > 22) grid.append(el("text", { x: X(v), y: y0 + 16, "text-anchor": "middle", class: "tick" }, num(v)));
  }
  grid.append(el("line", { x1: M.l, x2: x1, y1: y0, y2: y0, class: "axis" }));
  grid.append(el("text", { x: M.l - 30, y: 10, class: "axis-label" }, "O2 (%)"));
  grid.append(el("text", { x: x1, y: H - 4, "text-anchor": "end", class: "axis-label" }, chart.label));
  if (!zoomed()) grid.append(el("text", { x: x1, y: 10, "text-anchor": "end", class: "zoom-hint" }, "scroll to zoom · drag to move"));
  if (hasMissing) {
    grid.append(el("rect", { x: M.l, y: y1, width: BAND, height: y0 - y1, class: "nodata" }));
    grid.append(el("text", { x: bandX, y: y0 + 16, "text-anchor": "middle", class: "tick" }, "no data"));
  }
  root.append(grid);

  /* your conditions: the shaded window */
  const cx = state.cond[xk];
  const cy = state.cond.o2;
  const wx = state.win[xk];
  const wy = state.win.o2;
  const clampX = (v) => Math.min(x1, Math.max(x0, X(v)));
  const clampY = (v) => Math.min(y0, Math.max(y1, Y(v)));
  const you = el("g", { class: "you" });
  if (cx != null || cy != null) {
    const rx0 = cx != null ? clampX(cx - wx) : M.l;
    const rx1 = cx != null ? clampX(cx + wx) : x1;
    const ry0 = cy != null ? clampY(cy + wy) : y1;
    const ry1 = cy != null ? clampY(cy - wy) : y0;
    you.append(el("rect", { x: rx0, y: ry0, width: Math.max(rx1 - rx0, 0), height: Math.max(ry1 - ry0, 0), class: "window" }));
  }
  root.append(you);

  /* reference lines for one selected material */
  if (state.mat) {
    const f = materialFacts(state.mat);
    const lines = [];
    if (f.rating != null) lines.push({ v: f.rating, cls: "ref-earth", text: `${f.m.earth.label} ${pct(f.rating)}` });
    if (f.lowestSpaceBurn != null) lines.push({ v: f.lowestSpaceBurn, cls: "ref-space", text: `${f.lead ? f.lead.space.words : f.lowestFromLimit ? "Lowest space limit" : "Burned in space from"} ${pct(f.lowestSpaceBurn)}` });
    lines.sort((a, b) => b.v - a.v);
    lines.forEach((ln, i) => {
      if (ln.v < ys.lo || ln.v > ys.hi) return;
      const close = lines.length === 2 && Math.abs(Y(lines[0].v) - Y(lines[1].v)) < 13;
      root.append(el("line", { x1: M.l, x2: x1, y1: Y(ln.v), y2: Y(ln.v), class: "ref " + ln.cls }));
      // labels sit above their line; when the two lines are close, the lower one's label goes below it
      const dy = i === 1 && close ? 11 : -4;
      root.append(el("text", { x: x1 - 2, y: Y(ln.v) + dy, "text-anchor": "end", class: "ref-label " + ln.cls }, ln.text));
    });
  }

  /* marks: tests merged by point and outcome */
  const groups = new Map();
  // Oxygen is drawn to one decimal (21.17 and 21.18 share the dot at 21.2), so tests that are
  // practically at one point merge into one counted mark. Details keep each value as measured.
  const r1 = (v) => Math.round(v * 10) / 10;
  for (const t of data.tests) {
    if (t.o2 == null) continue;
    const o2 = r1(t.o2);
    const key = `${t[xk]}|${o2}|${t.out}`;
    let g = groups.get(key);
    if (!g) { g = { xv: t[xk], o2, out: t.out, tests: [] }; groups.set(key, g); }
    g.tests.push(t);
  }
  const byPoint = new Map();
  for (const g of groups.values()) {
    const k = `${g.xv}|${g.o2}`;
    if (!byPoint.has(k)) byPoint.set(k, []);
    byPoint.get(k).push(g);
  }
  const selecting = hasSelection();
  const condOn = condKeysSet().length > 0;
  const marks = [];
  for (const sibs of byPoint.values()) {
    sibs.sort((a, b) => OUT_ORDER.indexOf(a.out) - OUT_ORDER.indexOf(b.out));
    sibs.forEach((g, i) => {
      const sel = g.tests.filter((t) => D.selectedIds.has(t.id));
      const match = sel.filter((t) => D.matchIds.has(t.id));
      const part = sel.filter((t) => D.partIds.has(t.id));      // fit on what they report, silent on one condition
      const shown = sel.length || g.tests.length;
      // inside the shaded window on this chart?
      const inX = cx == null ? null : g.xv != null && Math.abs(g.xv - cx) <= wx + 1e-9;
      const inY = cy == null ? null : Math.abs(g.o2 - cy) <= wy + 1e-9;
      const inside = (inX !== null || inY !== null) && inX !== false && inY !== false;
      const tapped = g.tests.filter((t) => state.tapped.has(t.id)).length;
      const lit = g.tests.filter((t) => state.highlight.has(t.id)).length;
      // With a selection on, tests outside it are not drawn at all (they used to stay as a faded cloud that
      // hid the selected dots). A tapped or highlighted test outside the selection is still drawn.
      if (selecting && !sel.length && !tapped && !lit) return;
      // Three levels once you set conditions. Full colour: fits your conditions (a match, or a possible match whose
      // source is silent on one of them). Lightly faded ("dim"): does not fit, and its real value is outside the shaded
      // window on this chart. Strongly faded: its real value is inside the window here, but it is off on a condition
      // this chart does not show. So a full-colour dot under the window always fits, even where marks sitting side by
      // side are drawn a few pixels off their value. A tapped or highlighted mark is always in full colour.
      const fits = match.length > 0 || part.length > 0;
      const level = tapped > 0 || lit > 0 || !condOn || fits ? 2 : inside ? 0 : 1;
      const bright = level === 2;
      const r = !sel.length && !tapped && !lit ? 3.5 : (shown > 9 ? 8.5 : shown > 1 ? 7 : 4.5) + (match.length ? 1.5 : 0);
      const px = g.xv == null ? bandX : X(g.xv);
      const py = Y(g.o2);
      if (py < y1 - 1 || py > y0 + 1 || (g.xv != null && (px < x0 - 1 || px > x1 + 1))) return;   // outside the zoomed view
      marks.push({ g, sel, match, part, shown, bright, level, inside, r, px, py, tapped, lit, sibs });
    });
    // different outcomes at one point sit side by side, centred on the real value
    const row = marks.filter((m) => m.sibs === sibs);
    const width = row.reduce((w, m) => w + 2 * m.r, 0) + (row.length - 1);
    let left = -width / 2;
    for (const m of row) { m.px += left + m.r; left += 2 * m.r + 1; }
  }
  marks.sort((a, b) => (a.level - b.level) || (a.match.length - b.match.length));
  const layer = el("g", { class: "marks" });
  for (const m of marks) {
    const cls = ["mark", "out-" + m.g.out, ["faded", "dim", "bright"][m.level], m.match.length ? "match" : ""].join(" ");
    const node = el("g", { class: cls, transform: `translate(${m.px.toFixed(1)},${m.py.toFixed(1)})` });
    if (m.g.out === "limit") {                           // a burn limit is a diamond, not a dot
      const d = m.r * 0.92;
      node.append(el("rect", { x: -d - 1, y: -d - 1, width: 2 * d + 2, height: 2 * d + 2, transform: "rotate(45)", class: "halo" }));
      node.append(el("rect", { x: -d, y: -d, width: 2 * d, height: 2 * d, transform: "rotate(45)", class: "dot" }));
    } else {
      node.append(el("circle", { r: m.r + 1, class: "halo" }));
      node.append(el("circle", { r: m.r, class: "dot" }));
    }
    if (m.shown > 1 && m.level > 0) node.append(el("text", { y: 3.2, "text-anchor": "middle", class: "count" }, m.shown));
    if (m.lit) node.append(el("circle", { r: m.r + 3.5, class: "ring-highlight" }));
    if (m.tapped) node.append(el("circle", { r: m.r + (m.lit ? 6 : 3.5), class: "ring-tapped" }));
    layer.append(node);
  }
  root.append(layer);
  view.marks = marks;

  /* your conditions: guide lines, values on the axes and the "+" target */
  const midX = (x0 + x1) / 2;
  const midY = (y0 + y1) / 2;
  const tx = cx != null ? clampX(cx) : midX;
  const ty = cy != null ? clampY(cy) : midY;
  const top = el("g", { class: "you" });
  if (cy != null) {
    top.append(el("line", { x1: M.l, x2: tx, y1: ty, y2: ty, class: "guide" }));
    top.append(el("text", { x: M.l - 6, y: ty + 3.5, "text-anchor": "end", class: "you-value" }, num(cy)));
  }
  if (cx != null) {
    top.append(el("line", { x1: tx, x2: tx, y1: ty, y2: y0, class: "guide" }));
    top.append(el("text", { x: tx, y: y0 + 16, "text-anchor": "middle", class: "you-value" }, num(cx)));
  }
  view.geo.tx = tx;
  view.geo.ty = ty;
  const solid = cx != null && cy != null;
  const target = el("g", { class: "target" + (solid ? "" : " faded"), transform: `translate(${tx},${ty})` });
  target.append(el("circle", { r: 9, class: "target-hit" }));
  target.append(el("line", { x1: -6, x2: 6, y1: 0, y2: 0 }));
  target.append(el("line", { x1: 0, x2: 0, y1: -6, y2: 6 }));
  if (cx == null && cy == null) target.append(el("text", { x: 10, y: 4, class: "drag-me" }, "drag me"));
  top.append(target);
  root.append(top);

  box.querySelector("svg")?.remove();
  box.prepend(root);
}

/* ---------- pointer: hover text, tapping a mark, pressing or dragging to set your conditions ---------- */
function markAt(view, x, y) {
  let best = null;
  let bestD = Infinity;
  for (const m of view.marks || []) {
    const d = Math.hypot(m.px - x, m.py - y) - m.r;
    if (d < 5 && (d < bestD || (d === bestD && m.bright))) { best = m; bestD = d; }
  }
  return best;
}

function tipText(chart, m) {
  const xk = chart.x;
  const unit = CONDS.find((c) => c.key === xk).unit;
  const total = m.g.tests.length;
  const parts = [];
  if (!hasSelection()) parts.push(plural(total, "test") + " here");
  else if (m.sel.length) parts.push(plural(m.sel.length, "selected test") + " here" + (total > m.sel.length ? ` (${total} in total)` : ""));
  else parts.push(plural(total, "test") + " here, outside your selection");
  parts.push(`${pct(m.g.o2)} O2, ${m.g.xv == null ? chart.missing : num(m.g.xv) + " " + unit}`);
  parts.push(OUTCOME_NAME[m.g.out] || m.g.out);
  if (xk === "p" && m.g.tests.some((t) => t.p_disputed)) parts.push("pressure disputed in the source");
  if (m.match.length) parts.push(m.match.length === m.shown ? "matches your conditions" : `${m.match.length} match your conditions`);
  else if (m.part.length) parts.push(`fits your conditions on what it reports; ${missingWords(m.part)} not printed`);
  if (m.tapped) parts.push(`includes ${m.tapped} you tapped`);
  const names = [...new Set(m.g.tests.map((t) => (matById.get(t.mat) || {}).name || t.mat))];
  parts.push(names.slice(0, 3).join(", ") + (names.length > 3 ? ` +${names.length - 3} more` : ""));
  // why a dot is faded: the first of your conditions it misses, or does not report
  if (condKeysSet().length && !m.match.length && !m.part.length && m.sel.length) {
    const t = m.sel[0];
    for (const c of CONDS) {
      const want = state.cond[c.key];
      if (want == null) continue;
      if (t[c.key] == null) { parts.push(`${c.label.toLowerCase()} not reported (yours: ${num(want)} ±${num(state.win[c.key])})`); break; }
      if (Math.abs(t[c.key] - want) > state.win[c.key]) { parts.push(`tested at ${num(t[c.key])} ${c.unit} (yours: ${num(want)} ±${num(state.win[c.key])})`); break; }
    }
  }
  return parts.join(" · ");
}

function attach(chart) {
  const view = views.get(chart.id);
  const box = view.box;
  const tip = view.tip;
  let frame = 0;

  const local = (e) => { const r = box.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const setFromPointer = (x, y) => {
    const g = view.geo;
    const o2step = 0.5;
    const xstep = CONDS.find((c) => c.key === g.xk).step;
    const yv = g.ys.lo + ((g.y0 - Math.min(g.y0, Math.max(g.y1, y))) / (g.y0 - g.y1)) * (g.ys.hi - g.ys.lo);
    const next = { o2: Math.round(yv / o2step) * o2step };
    if (x >= g.x0 - 4) {
      const xv = g.xs.lo + ((Math.min(g.x1, Math.max(g.x0, x)) - g.x0) / (g.x1 - g.x0)) * (g.xs.hi - g.xs.lo);
      next[g.xk] = Math.round(xv / xstep) * xstep;
    }
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => setConds(next));
  };

  const inPlot = (x, y) => { const g = view.geo; return !!g && y <= g.y0 + 2 && y >= g.y1 - 6 && x >= M.l; };
  const tapMark = (x, y) => {
    const m = markAt(view, x, y);
    if (m) tapTests((m.sel.length ? m.sel : m.g.tests).map((t) => t.id), m.g.tests.map((t) => t.id));
    return !!m;
  };

  // Mouse: grab the "+" to move it (that sets your conditions); drag anywhere else to move a zoomed view;
  // a plain click places the "+" there. Tapping a mark opens its tests.
  let mode = null;                   // "target" (moving the +), "press" (not moved yet), "pan" (moving the view)
  let start = null;
  let touchStart = null;
  const pan = (dx, dy) => {
    const g = start.geo;
    const shift = (key, from, delta) => {
      if (!from) return;                                 // only a zoomed axis can move
      const base = baseDomain(baseKey(key));
      const span = from[1] - from[0];
      const lo = Math.min(base.hi - span, Math.max(base.lo, from[0] + delta * span));
      zoom[key] = [lo, lo + span];
    };
    shift("o2", start.o2, dy / (g.y0 - g.y1));
    shift(g.xk, start.xz, -dx / (g.x1 - g.x0));
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(renderCharts);
  };
  box.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const [x, y] = local(e);
    // Touch: act on a tap only (on release), so scrolling the page over a chart changes nothing.
    if (e.pointerType === "touch") { touchStart = { x, y, cx: e.clientX, cy: e.clientY }; return; }
    if (!inPlot(x, y) || tapMark(x, y)) return;
    const g = view.geo;
    mode = Math.hypot(x - g.tx, y - g.ty) < 14 ? "target" : "press";
    start = { x, y, geo: g, o2: zoom["o2"] && zoom["o2"].slice(), xz: zoom[g.xk] && zoom[g.xk].slice() };
    if (mode === "target") box.classList.add("dragging");
    box.setPointerCapture(e.pointerId);
    tip.hidden = true;
    e.preventDefault();
  });
  box.addEventListener("pointermove", (e) => {
    const [x, y] = local(e);
    if (mode === "target") { setFromPointer(x, y); return; }
    if (mode === "press" && Math.hypot(x - start.x, y - start.y) > 4) { mode = "pan"; box.classList.add("dragging"); }
    if (mode === "pan") { pan(x - start.x, y - start.y); return; }
    if (mode) return;
    const m = markAt(view, x, y);
    box.classList.toggle("over-mark", !!m);
    // a hand over the "+" target shows it can be dragged
    box.classList.toggle("over-target", !m && !!view.geo && Math.hypot(x - view.geo.tx, y - view.geo.ty) < 14);
    if (!m) { tip.hidden = true; return; }
    tip.textContent = tipText(chart, m);
    tip.hidden = false;
    const w = box.clientWidth;
    const left = Math.min(Math.max(m.px - tip.offsetWidth / 2, 4), w - tip.offsetWidth - 4);
    const above = m.py - m.r - tip.offsetHeight - 8;
    tip.style.left = left + "px";
    tip.style.top = (above < 0 ? m.py + m.r + 10 : above) + "px";
  });
  box.addEventListener("pointerup", (e) => {
    if (e.pointerType === "touch") {
      if (touchStart && Math.hypot(e.clientX - touchStart.cx, e.clientY - touchStart.cy) < 10 && inPlot(touchStart.x, touchStart.y)
          && !tapMark(touchStart.x, touchStart.y)) setFromPointer(touchStart.x, touchStart.y);
      touchStart = null;
      return;
    }
    if (mode === "press") setFromPointer(start.x, start.y);     // a click, not a drag: the "+" goes there
  });
  const end = (e) => {
    if (!mode) return;
    mode = null;
    box.classList.remove("dragging");
    try { box.releasePointerCapture(e.pointerId); } catch { /* already released */ }
  };
  box.addEventListener("pointerup", end);
  box.addEventListener("pointercancel", end);
  box.addEventListener("pointerleave", () => { if (!mode) tip.hidden = true; });

  // Wheel or trackpad pinch: zooms this chart on both axes around the pointer, like a picture.
  // Only where the page itself does not scroll (laptop width).
  box.addEventListener("wheel", (e) => {
    const g = view.geo;
    if (!g || !window.matchMedia("(min-width: 1100px)").matches) return;
    e.preventDefault();
    const [x, y] = local(e);
    const delta = e.deltaY || e.deltaX;
    const step = Math.max(-60, Math.min(60, delta * (e.ctrlKey ? 4 : 1)));
    const factor = Math.exp(step * 0.004);              // one mouse notch = about a quarter in or out
    const yy = Math.min(g.y0, Math.max(g.y1, y));
    zoomAxis("o2", g.ys.lo + ((g.y0 - yy) / (g.y0 - g.y1)) * (g.ys.hi - g.ys.lo), factor);
    if (x >= g.x0) {                                     // over the "no data" band only oxygen zooms
      const xx = Math.min(g.x1, x);
      zoomAxis(g.xk, g.xs.lo + ((xx - g.x0) / (g.x1 - g.x0)) * (g.xs.hi - g.xs.lo), factor);
    }
    tip.hidden = true;
    renderCharts();
  }, { passive: false });
}

export function initCharts() {
  setHome();
  document.getElementById("zoom-reset")?.addEventListener("click", resetZoom);
  document.getElementById("clear-all")?.addEventListener("click", resetZoom);   // Clear all also brings the opening zoom back
  for (const chart of CHARTS) {
    const box = document.getElementById(chart.id);
    const tip = document.createElement("div");
    tip.className = "chart-tip";
    tip.hidden = true;
    box.append(tip);
    views.set(chart.id, { box, tip });
    attach(chart);
    new ResizeObserver(() => build(chart)).observe(box);
  }
}
export function renderCharts() {
  for (const chart of CHARTS) build(chart);
  const reset = document.getElementById("zoom-reset");
  if (reset) reset.hidden = !zoomed();
}
