
.catalogue {
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px 20px;
}

.catalogue h1 {
  margin: 8px 0;
  font-size: clamp(1.7rem, 4vw, 2.3rem);
  letter-spacing: -0.04em;
}

.catalogue h2,
.catalogue h3,
.catalogue p {
  margin-top: 0;
}

.catalogue .muted {
  color: #7c8496;
}

.catalogue .small {
  font-size: 0.82rem;
}

.catalogue .label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #7775e8;
}

.catalogue .row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.catalogue .space {
  justify-content: space-between;
}

.catalogue .stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 28px 0;
}

.catalogue .stat-card,
.catalogue .panel {
  padding: 22px;
  border: 1px solid #e6e8ef;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgb(20 30 60 / 4%);
}

.catalogue .stat-card h2 {
  margin: 12px 0 6px;
  font-size: 2rem;
}

.catalogue .panel > .row {
  margin-bottom: 22px;
}

.catalogue .grid {
  display: grid;
  grid-template-columns: minmax(220px, 2fr) repeat(3, minmax(130px, 1fr));
  gap: 12px;
}

.catalogue input,
.catalogue select {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 12px 14px;
  color: #252b3b;
  background: #fff;
  border: 1px solid #dfe3ec;
  border-radius: 10px;
  font: inherit;
  outline: none;
}

.catalogue input:focus,
.catalogue select:focus {
  border-color: #7775e8;
  box-shadow: 0 0 0 3px rgb(119 117 232 / 12%);
}

.catalogue button {
  padding: 10px 15px;
  border: 0;
  border-radius: 9px;
  background: #625bf6;
  color: white;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.catalogue button.secondary {
  background: #f0f1f7;
  color: #383d50;
}

.catalogue button:hover {
  filter: brightness(0.96);
}

.catalogue .results-heading {
  margin: 22px 0 12px;
}

.catalogue .list {
  display: grid;
  gap: 10px;
}

.catalogue .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  border: 1px solid #eaecf2;
  border-radius: 12px;
  transition: border-color 160ms ease, transform 160ms ease;
}

.catalogue .item:hover {
  border-color: #c5c3ff;
  transform: translateY(-1px);
}

.catalogue .record-main,
.catalogue .record-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.catalogue .record-main {
  min-width: 0;
}

.catalogue .record-main strong {
  display: block;
  margin-bottom: 5px;
}

.catalogue .record-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eeedff;
  color: #625bf6;
  font-weight: 800;
  font-size: 1.2rem;
}

.catalogue .record-meta {
  flex-wrap: wrap;
  justify-content: flex-end;
}

.catalogue .pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f0f1f7;
  color: #484d5f;
  font-size: 0.78rem;
  font-weight: 650;
  white-space: nowrap;
}

.catalogue .status-active {
  background: #e4f8ed;
  color: #167747;
}

.catalogue .status-draft {
  background: #fff2d8;
  color: #96620b;
}

.catalogue .status-archived {
  background: #eceef3;
  color: #666c7c;
}

.catalogue .empty-state {
  padding: 44px 16px;
  text-align: center;
  border: 1px dashed #dfe3ec;
  border-radius: 12px;
}

.catalogue .empty-state p {
  margin-bottom: 18px;
}

.catalogue .footer {
  padding: 22px 0;
  text-align: center;
}

@media (max-width: 800px) {
  .catalogue .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .catalogue .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .catalogue .grid input {
    grid-column: 1 / -1;
  }
}

@media (max-width: 520px) {
  .catalogue {
    padding: 20px 12px;
  }

  .catalogue .panel,
  .catalogue .stat-card {
    padding: 15px;
  }

  .catalogue .item {
    align-items: flex-start;
    flex-direction: column;
  }

  .catalogue .record-meta {
    justify-content: flex-start;
    padding-left: 58px;
  }

  .catalogue .row.space {
    align-items: flex-start;
  }

  .catalogue .grid {
    grid-template-columns: 1fr;
  }

  .catalogue .grid input {
    grid-column: auto;
  }
}
