import React from "react";

export default function Home(): JSX.Element {
  return (
    <main className="page home" aria-labelledby="home-title">
<header>
  <h1 id="home-title">MySamples Planner</h1>

  <p className="lead">
    Integrated planning and simulation dashboard for MySamples operations.
  </p>
</header>

<section>

  <h2>Available Functions</h2>

  <ul>
    <li>📊 MySamples Raw Data Extraction</li>
    <li>🧮 Wafer Plan Calculation</li>
    <li>🔬 Wafer Simulation</li>
    <li>📅 Product Timeline Simulation</li>
    <li>📘 Help & Calculation Logic</li>
  </ul>

</section>

<section>

  <h2>Getting Started</h2>

  <ol>
    <li>Open MySamples and generate raw data</li>
    <li>Run Wafer Plan calculation</li>
    <li>Perform Simulation analysis</li>
    <li>Review Timeline projections</li>
  </ol>

</section>

      <section className="card">
  <h2>Quick Actions</h2>

  <ul>
    <li>MySamples Raw Data Extraction</li>
    <li>Wafer Plan Generation</li>
    <li>Wafer Supply Simulation</li>
    <li>Timeline Projection</li>
  </ul>
</section>
      
    </main>
  );
}
