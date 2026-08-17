import React from "react";

export default function ExecutiveDashboard(): JSX.Element {
  return (
    <main className="page">

      <h1>Executive Dashboard</h1>

      <div className="dashboard-grid">

        <div className="kpi-card">
          <h3>Active Projects</h3>
          <p className="kpi-value">42</p>
        </div>

        <div className="kpi-card">
          <h3>Total Demand</h3>
          <p className="kpi-value">28,500</p>
        </div>

        <div className="kpi-card">
          <h3>Total Wafer Required</h3>
          <p className="kpi-value">123</p>
        </div>

        <div className="kpi-card">
          <h3>Last Simulation</h3>
          <p className="kpi-value">WW34</p>
        </div>

      </div>

      <div className="card">

        <h2>Supply Risk</h2>

        <p className="green-status">
          🟢 Healthy
        </p>

      </div>

    </main>
  );
}
