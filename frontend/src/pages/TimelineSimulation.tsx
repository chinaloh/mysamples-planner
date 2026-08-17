import React, { useState } from "react";

export default function TimelineSimulation(): JSX.Element {

  const [productTO, setProductTO] = useState("");
  const [timeline, setTimeline] = useState("1");
  const [mode, setMode] = useState("1");

  const handleSimulation = () => {
    alert(
      `Timeline Simulation\n\nProduct TO: ${productTO}\nTimeline: ${timeline}\nMode: ${mode}`
    );
  };

  return (
    <main
      className="page timeline-simulation"
      aria-labelledby="timeline-simulation-title"
    >
      <header>
        <h1 id="timeline-simulation-title">
          Timeline Simulation
        </h1>

        <p className="lead">
          Predict product milestones and final commit timeline.
        </p>
      </header>

      <section className="card">

        <div className="form-group">
          <label htmlFor="productTO">
            Product TO
          </label>

          <input
            id="productTO"
            type="number"
            value={productTO}
            onChange={(e) =>
              setProductTO(e.target.value)
            }
            placeholder="Example: 202626"
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeline">
            Timeline Flow
          </label>

          <select
            id="timeline"
            value={timeline}
            onChange={(e) =>
              setTimeline(e.target.value)
            }
          >
            <option value="1">Blind → ODM</option>
            <option value="2">Blind → IDC</option>
            <option value="3">Tested → ODM</option>
            <option value="4">Tested → IDC</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mode">
            Priority Mode
          </label>

          <select
            id="mode"
            value={mode}
            onChange={(e) =>
              setMode(e.target.value)
            }
          >
            <option value="1">SSHL</option>
            <option value="2">SHL</option>
            <option value="3">HL</option>
            <option value="4">STD</option>
          </select>
        </div>

        <button onClick={handleSimulation}>
          Run Timeline Simulation
        </button>

      </section>

      <section className="card">

        <h2>Simulation Output</h2>

        <p>
          Timeline milestones and final commit data will
          appear here after backend integration.
        </p>

      </section>

    </main>
  );
}
