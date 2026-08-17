import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import MySamples from "./pages/MySamples";
import WaferPlan from "./pages/WaferPlan";
import WaferSimulation from "./pages/WaferSimulation";
import TimelineSimulation from "./pages/TimelineSimulation";
import Help from "./pages/Help";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
<div className="app-root">
<aside className="sidebar">
          <Navigation />
        </aside>

<div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
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
