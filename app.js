const app = document.querySelector("#app");
const records = [
  ["Orbit Notebook", "Design", "Active"],
  ["Signal Pen", "Stationery", "Draft"],
  ["Aurora Lamp", "Home", "Active"],
  ["Field Mug", "Home", "Archived"],
];
let query = "",
  group = "all";
function render() {
  const rows = records.filter(
    (r) => (group === "all" || r[1] === group) && r[0].includes(query),
  );
  app.innerHTML = `<div class="row space"><div><span class="label">Catalogue</span><h2>Find a record</h2></div><button id="clear" class="secondary">Clear filters</button></div><div class="grid"><input id="search" placeholder="Search products" value="${query}"/><select id="group"><option value="all">All groups</option><option>Design</option><option>Stationery</option><option>Home</option></select></div><div class="list">${rows.map((r) => `<article class="item"><div><strong>${r[0]}</strong><span class="muted small">${r[1]}</span></div><span class="pill">${r[2]}</span></article>`).join("")}</div>`;
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


// Catalogue expansion: sort and windowed result browsing.
(() => {
  const baseRender = render; let sortMode = "name"; let page = 0;
  const enhance = () => {
    if (document.querySelector("#catalog-tools")) return;
    const panel = document.createElement("section"); panel.id = "catalog-tools"; panel.className = "item";
    panel.innerHTML = '<strong>Catalogue tools</strong><div class="row"><select id="sort-mode"><option value="name">Sort by name</option><option value="status">Sort by status</option></select><button id="next-page" type="button">Next page</button></div><p id="catalog-window" class="muted small"></p>';
    document.querySelector("#app")?.append(panel);
    const update = () => { const rows = [...records].sort((a, b) => sortMode === "name" ? a[0].localeCompare(b[0]) : a[2].localeCompare(b[2])); const visible = rows.slice(page * 2, page * 2 + 2); panel.querySelector("#catalog-window").textContent = visible.map((row) => row[0]).join(" · ") || "No more records"; };
    panel.querySelector("#sort-mode").onchange = (event) => { sortMode = event.target.value; page = 0; update(); };
    panel.querySelector("#next-page").onclick = () => { page++; update(); };
    update();
  };
  render = () => { baseRender(); enhance(); };
  enhance();
})();
