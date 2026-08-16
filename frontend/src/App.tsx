import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import MySamples from "./pages/MySamples";
import WaferPlan from "./pages/WaferPlan";
import WaferSimulation from "./pages/WaferSimulation";
import TimelineSimulation from "./pages/TimelineSimulation";
import Help from "./pages/Help";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-root" style={{ display: "flex", minHeight: "100vh" }}>
        <aside style={{ width: 240, borderRight: "1px solid #e6e6e6" }}>
          <Navigation />
        </aside>

        <div className="app-content" style={{ flex: 1, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mysamples" element={<MySamples />} />
            <Route path="/wafer-plan" element={<WaferPlan />} />
            <Route path="/wafer-simulation" element={<WaferSimulation />} />
            <Route path="/timeline-simulation" element={<TimelineSimulation />} />
            <Route path="/help" element={<Help />} />

            {/* Fallback: redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
