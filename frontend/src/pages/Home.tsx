import React from "react";

export default function Home(): JSX.Element {
  return (
    <main className="page home" aria-labelledby="home-title">
      <header>
        <h1 id="home-title">Home</h1>
        <p className="lead">Welcome to MySamples Planner — your central hub for planning and simulation.</p>
      </header>

      <section aria-label="Home placeholder content">
        <p>This is the Home page. Add dashboards, quick links, and important announcements here.</p>
        <div className="placeholder">(Home content coming soon)</div>
      </section>
    </main>
  );
}
