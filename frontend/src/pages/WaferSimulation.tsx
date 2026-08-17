import React, { useState } from "react";

export default function WaferSimulation(): JSX.Element {

  const [maxWafer, setMaxWafer] = useState("");
  const [siliconWafer, setSiliconWafer] = useState("");

  const handleSimulation = () => {
    alert(
      `Simulation Request\n\nMax Wafer Approved: ${maxWafer}\nSilicon Allocation: ${siliconWafer}`
    );
  };

  return (
    <main
      className="page wafer-simulation"
      aria-labelledby="wafer-simulation-title"
    >
      <header>
        <h1 id="wafer-simulation-title">
          Wafer Simulation
        </h1>

        <p className="lead">
          Simulate wafer allocation scenarios and evaluate
          the impact of supply constraints.
        </p>
      </header>

      <section className="card">

        <div className="form-group">
          <label htmlFor="maxWafer">
            Max Wafer Approved
          </label>

          <input
            id="maxWafer"
            type="number"
            value={maxWafer}
            onChange={(e) =>
              setMaxWafer(e.target.value)
            }
            placeholder="Example: 5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="siliconWafer">
            Silicon Wafer Allocation
          </label>

          <input
            id="siliconWafer"
            type="number"
            value={siliconWafer}
            onChange={(e) =>
              setSiliconWafer(e.target.value)
            }
            placeholder="Example: 2"
          />
        </div>

        <button onClick={handleSimulation}>
          Run Simulation
        </button>

      </section>

      <section className="card">
        <h2>Simulation Output</h2>

        <p>
          Simulation results will be displayed here after
          backend integration.
        </p>
      </section>

    </main>
  );
}
