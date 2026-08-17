import React from "react";

export default function WaferPlan(): JSX.Element {

  const handleGenerate = () => {
    alert("Generate Wafer Plan");
  };

  return (
    <main className="page wafer-plan" aria-labelledby="wafer-plan-title">

      <header>
        <h1 id="wafer-plan-title">Wafer Plan</h1>

        <p className="lead">
          Calculate wafer requirements based on MySamples demand data and yield assumptions.
        </p>
      </header>

      <section className="card">

        <h2>Yield Input File</h2>

        <p>
          Upload or update your Yield_Input.xlsx file before generating a wafer plan.
        </p>

        <div className="form-group">
          <label>
            Yield Input File
          </label>

          <input
            type="file"
            accept=".xlsx"
          />
        </div>

        <h3>Required Fields</h3>

        <ul>
          <li>Assy Yield %</li>
          <li>Test Yield %</li>
          <li>DPW</li>
          <li>Sort Yield</li>
          <li>GDPW</li>
        </ul>

        <button onClick={handleGenerate}>
          Generate Wafer Plan
        </button>

      </section>

      <section className="card">

        <h2>Output</h2>

        <p>
          Generated wafer planning results will appear here.
        </p>

      </section>

    </main>
  );
}
