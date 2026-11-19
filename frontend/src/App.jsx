import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import MachineMonitoring from "./pages/MachineMonitoring";
import AnomalyDetection from "./pages/AnomalyDetection";
import FailurePrediction from "./pages/FailurePrediction";
import ExplainableAI from "./pages/ExplainableAI";
import Maintenance from "./pages/Maintenance";
import WhatIfAnalysis from "./pages/WhatIfAnalysis";
import IncidentHistory from "./pages/IncidentHistory";
import Reports from "./pages/Reports";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/machines" element={<MachineMonitoring />} />

          <Route path="/anomalies" element={<AnomalyDetection />} />

          <Route path="/predictions" element={<FailurePrediction />} />

          <Route path="/explainable-ai" element={<ExplainableAI />} />

          <Route path="/maintenance" element={<Maintenance />} />

          <Route path="/what-if" element={<WhatIfAnalysis />} />

          <Route path="/incidents" element={<IncidentHistory />} />

          <Route path="/reports" element={<Reports />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;