/*
  Flame Atlas: start-up. Loads the data file, then draws everything and redraws on each change.
  Team Flame Atlas, NASA Space Apps Challenge 2026. Licence: Apache-2.0.
  Written with an AI coding assistant (Claude Code), directed by the team.
*/
import { loadData, onChange } from "./state.js";
import { initCharts, renderCharts } from "./charts.js";
import { initPanels, renderPanels, hooks } from "./panels.js";
import { initChat, ask } from "./chat.js";

/* Phone (under 900 px): two tabs, Explore and Ask */
const page = document.getElementById("page");
export function showTab(tab) {
  page.dataset.tab = tab;
  document.querySelectorAll("#tabs button").forEach((b) => {
    const on = b.dataset.tab === tab;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", String(on));
  });
  if (tab === "explore") document.querySelector("#list .row.on")?.scrollIntoView({ block: "nearest" });
}
document.querySelectorAll("#tabs button").forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));
document.addEventListener("fa:show-tab", (e) => showTab(e.detail));

hooks.ask = (...args) => { showTab("ask"); return ask(...args); };   // card and record buttons answer in the chat
initChat();                                   // the chat works even if the data file fails to load

loadData()
  .then(() => {
    document.body.classList.add("data-ready");
    initPanels();
    initCharts();
    const draw = () => { renderPanels(); renderCharts(); };
    onChange(draw);
    draw();
    initChat();                               // again, now that source links can be built
  })
  .catch(() => {
    document.getElementById("load-error").hidden = false;
  });
