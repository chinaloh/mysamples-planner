import React from "react";

export default function Help(): JSX.Element {
  return (
    <main className="page help" aria-labelledby="help-title">

      <header>
        <h1 id="help-title">Help & Calculation Logic</h1>

        <p className="lead">
          Reference guide for MySamples Planner functions.
        </p>
      </header>

      <section className="card">

        <h2>MySamples Raw Data</h2>

        <p>
          Generate raw MySamples demand and allocation reports
          using SEID.
        </p>

        <p>
          Example: 1234
        </p>

      </section>

      <section className="card">

        <h2>Wafer Plan</h2>

        <ul>
          <li>Upload Yield_Input.xlsx</li>
          <li>Review yield assumptions</li>
          <li>Generate Wafer Plan</li>
          <li>Download WaferPlan.xlsx</li>
        </ul>

      </section>

      <section className="card">

        <h2>Wafer Simulation</h2>

        <ul>
          <li>Enter Max Wafer Approved</li>
          <li>Enter Silicon Allocation</li>
          <li>Run Simulation</li>
          <li>Review proposed allocation</li>
        </ul>

      </section>

      <section className="card">

        <h2>Timeline Simulation</h2>

        <ul>
          <li>Select Product TO</li>
          <li>Select Timeline Flow</li>
          <li>Select Priority Mode</li>
          <li>Review Final Commit week</li>
        </ul>

      </section>

<section className="card">

  <h2>Need Support?</h2>

  <p>
    Contact the Planning Team or open the AI Planning Assistant.
  </p>

</section>
          </main>
  );
}
