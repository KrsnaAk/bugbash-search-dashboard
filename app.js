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
  // Fix 1: Case-insensitive search
  const cleanQuery = query.toLowerCase().trim();
  const rows = records.filter(
    (r) =>
      (group === "all" || r[1] === group) &&
      r[0].toLowerCase().includes(cleanQuery)
  );

  // Fix 2: Explain empty results when no records match
  const listHTML =
    rows.length === 0
      ? `<p class="muted small" style="text-align: center; padding: 24px;">No records found matching your search criteria.</p>`
      : rows
          .map(
            (r) =>
              `<article class="item"><div><strong>${r[0]}</strong><span class="muted small">${r[1]}</span></div><span class="pill">${r[2]}</span></article>`
          )
          .join("");

  app.innerHTML = `
    <div class="row space">
      <div>
        <span class="label">Catalogue</span>
        <h2>Find a record</h2>
      </div>
      <button id="clear" class="secondary">Clear filters</button>
    </div>
    <div class="grid">
      <input id="search" placeholder="Search products" value="${query}" />
      <select id="group">
        <option value="all" ${group === "all" ? "selected" : ""}>All groups</option>
        <option value="Design" ${group === "Design" ? "selected" : ""}>Design</option>
        <option value="Stationery" ${group === "Stationery" ? "selected" : ""}>Stationery</option>
        <option value="Home" ${group === "Home" ? "selected" : ""}>Home</option>
      </select>
    </div>
    <div class="list">${listHTML}</div>
  `;

  const searchInput = document.querySelector("#search");
  const groupSelect = document.querySelector("#group");

  // Preserve cursor / focus position on re-render
  searchInput.focus();
  searchInput.setSelectionRange(query.length, query.length);

  searchInput.oninput = (e) => {
    query = e.target.value;
    render();
  };

  // Fix 4: Keyboard support (pressing Escape clears search and filters)
  searchInput.onkeydown = (e) => {
    if (e.key === "Escape") {
      query = "";
      group = "all";
      render();
    }
  };

  groupSelect.onchange = (e) => {
    group = e.target.value;
    render();
  };

  // Fix 3: Clear button resets both query AND group filters
  document.querySelector("#clear").onclick = () => {
    query = "";
    group = "all";
    render();
  };

  renderResultSummary();
}

function renderResultSummary() {
  const host = document.querySelector("#app");
  if (!host || document.querySelector("#result-summary")) return;
  const summary = document.createElement("p");
  summary.id = "result-summary";
  summary.className = "muted small";
  summary.textContent = records.length + " records available";
  host.querySelector("h2")?.after(summary);
}

render();