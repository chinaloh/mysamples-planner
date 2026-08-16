import React from "react";

export default function Help(): JSX.Element {
  return (
    <main className="page help" aria-labelledby="help-title">
      <header>
        <h1 id="help-title">Help</h1>
        <p className="lead">Documentation, guides, and support resources for using MySamples Planner.</p>
      </header>

      <section aria-label="Help placeholder content">
        <p>This is the Help page. Link to user guides, API docs, and support channels from here.</p>
        <div className="placeholder">(Help content coming soon)</div>
      </section>
    </main>
  );
}
