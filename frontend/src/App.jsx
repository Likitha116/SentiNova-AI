import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import MachineMonitoring from "./pages/MachineMonitoring";

// Clean placeholder for Phase 2 / upcoming pages so no menu link ever breaks
function ComingSoonPage({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
        Module Ready for Integration
      </span>
      <h1 className="text-2xl font-bold text-primary pt-2">{title}</h1>
      <p className="text-gray-500 text-sm max-w-xl">{description}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/machines" element={<MachineMonitoring />} />
          <Route
            path="/anomalies"
            element={
              <ComingSoonPage
                title="Anomaly Detection (Isolation Forest)"
                description="Unsupervised outlier scores and real-time sensor drift alerts from the AI4I 2020 Isolation Forest model."
              />
            }
          />
          <Route
            path="/predictions"
            element={
              <ComingSoonPage
                title="Failure Prediction (XGBoost)"
                description="Supervised failure probability scores and failure mode classification (TWF, HDF, PWF, OSF, RNF)."
              />
            }
          />
          <Route
            path="/explainable-ai"
            element={
              <ComingSoonPage
                title="Explainable AI (SHAP Feature Attribution)"
                description="Local feature contribution breakdown explaining why a specific machine was flagged as high risk."
              />
            }
          />
          <Route
            path="/what-if"
            element={
              <ComingSoonPage
                title="What-If Sensor Simulator"
                description="Interactive threshold sliders to test how changes in torque, temperature, and tool wear impact failure risk."
              />
            }
          />
          <Route
            path="/reports"
            element={
              <ComingSoonPage
                title="Maintenance Reports"
                description="Scheduled maintenance logs, diagnostic summaries, and exportable fleet health reports."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;