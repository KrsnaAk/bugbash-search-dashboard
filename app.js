const app = document.querySelector("#app");
const records = [
  ["Orbit Notebook", "Design", "Active"],
  ["Signal Pen", "Stationery", "Draft"],
  ["Aurora Lamp", "Home", "Active"],
  ["Field Mug", "Home", "Archived"],
];
const GROUPS = ["Design", "Stationery", "Home"];
let query = "",
  group = "all";

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

function render() {
  const q = query.trim().toLowerCase();
  const rows = records.filter(
    (r) =>
      (group === "all" || r[1] === group) && r[0].toLowerCase().includes(q),
  );

  // remember focus/caret so typing isn't interrupted by the re-render
  const hadFocus = document.activeElement && document.activeElement.id === "search";
  const caret = hadFocus ? document.activeElement.selectionStart : 0;

  app.innerHTML = `<div class="row space"><div><span class="label">Catalogue</span><h2>Find a record</h2></div><button id="clear" class="secondary">Clear filters</button></div><div class="grid"><input id="search" placeholder="Search products" value="${esc(query)}"/><select id="group"><option value="all"${group === "all" ? " selected" : ""}>All groups</option>${GROUPS.map((g) => `<option${g === group ? " selected" : ""}>${g}</option>`).join("")}</select></div><div class="list">${
    rows.length
      ? rows
          .map(
            (r) =>
              `<article class="item"><div><strong>${esc(r[0])}</strong><span class="muted small">${esc(r[1])}</span></div><span class="pill">${esc(r[2])}</span></article>`,
          )
          .join("")
      : `<p class="muted empty">No records match your search.</p>`
  }</div>`;

  if (hadFocus) {
    const input = document.querySelector("#search");
    input.focus();
    input.setSelectionRange(caret, caret);
  }

  document.querySelector("#search").oninput = (e) => {
    query = e.target.value;
    render();
  };
  document.querySelector("#group").onchange = (e) => {
    group = e.target.value;
    render();
  };
  document.querySelector("#clear").onclick = () => {
    query = "";
    group = "all";
    render();
  };
}
render();


// Added organizer feature: live result summary.
function renderResultSummary() {
  const host = document.querySelector("#app");
  if (!host || document.querySelector("#result-summary")) return;
  const summary = document.createElement("p"); summary.id = "result-summary"; summary.className = "muted small";
  summary.textContent = records.length + " records available"; host.querySelector("h2")?.after(summary);
}
renderResultSummary();