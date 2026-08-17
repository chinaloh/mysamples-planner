import React, { useState } from "react";

export default function MySamples(): JSX.Element {

  const [seid, setSeid] = useState("");

  const handleGenerate = () => {
    alert(`Generate report for SEID: ${seid}`);
  };

  return (
    <main className="page mysamples" aria-labelledby="mysamples-title">

      <header>
        <h1 id="mysamples-title">MySamples Raw Data</h1>

        <p className="lead">
          Extract MySamples demand and allocation data by SEID.
        </p>
      </header>

      <section>

        <div className="form-group">
          <label htmlFor="seid">
            SEID
          </label>

          <input
            id="seid"
            type="text"
            value={seid}
            onChange={(e) => setSeid(e.target.value)}
            placeholder="Example: 1234"
          />
        </div>

        <button onClick={handleGenerate}>
          Generate Report
        </button>

      </section>

    </main>
  );
}
