
export const machineStats = [
  { title: "Total Machines", value: 120, color: "bg-blue-100" },
  { title: "Healthy", value: 98, color: "bg-green-100" },
  { title: "Warning", value: 15, color: "bg-yellow-100" },
  { title: "Critical", value: 7, color: "bg-red-100" },
];

export const sensorData = [
  { time: "8:30", temperature: 65, pressure: 3.0, vibration: 0.5 },
  { time: "8:35", temperature: 68, pressure: 3.1, vibration: 0.6 },
  { time: "8:40", temperature: 70, pressure: 3.0, vibration: 0.7 },
  { time: "8:45", temperature: 72, pressure: 3.2, vibration: 0.8 },
  { time: "8:50", temperature: 75, pressure: 3.1, vibration: 0.9 },
  { time: "8:55", temperature: 78, pressure: 3.3, vibration: 1.1 },
];

// Facility Summary
export const facilitySummary = {
  plantName: "Nova Precision Manufacturing Plant (Simulated)",
  totalMachines: 120,
  healthy: 98,
  warning: 15,
  critical: 7,
  overallHealthPercent: 81.67,
};

// AI4I 2020 Aligned Sensor Trends
export const sensorTrendData = [
  { time: "08:30", airTemp: 298.1, processTemp: 308.6, torque: 40.2, toolWear: 142 },
  { time: "08:35", airTemp: 298.4, processTemp: 309.0, torque: 42.8, toolWear: 155 },
  { time: "08:40", airTemp: 298.9, processTemp: 309.5, torque: 46.1, toolWear: 168 },
  { time: "08:45", airTemp: 299.5, processTemp: 310.2, torque: 51.4, toolWear: 184 },
  { time: "08:50", airTemp: 300.2, processTemp: 311.1, torque: 58.9, toolWear: 203 },
  { time: "08:55", airTemp: 301.0, processTemp: 312.0, torque: 64.5, toolWear: 218 },
];

// Simulated Machine Fleet (AI4I 2020 Features)
export const machinesList = [
  {
    id: "CNC-M101",
    name: "5-Axis CNC Milling Unit A",
    zone: "Zone A - Machining",
    productType: "L",
    status: "Healthy",
    airTemp: 298.2,
    processTemp: 308.7,
    rpm: 1540,
    torque: 38.4,
    toolWear: 64,
    anomalyScore: 0.12,
    failureRisk: "Low (4%)",
    lastUpdated: "2 mins ago",
  },
  {
    id: "CNC-M114",
    name: "High-Torque Lathe B2",
    zone: "Zone A - Machining",
    productType: "M",
    status: "Critical",
    airTemp: 302.4,
    processTemp: 312.8,
    rpm: 1380,
    torque: 66.2,
    toolWear: 224,
    anomalyScore: 0.89,
    failureRisk: "Critical — Overstrain Failure (OSF)",
    lastUpdated: "Just now",
  },
  {
    id: "PRESS-M204",
    name: "Hydraulic Stamping Press 04",
    zone: "Zone B - Forming",
    productType: "H",
    status: "Warning",
    airTemp: 301.8,
    processTemp: 310.1,
    rpm: 1410,
    torque: 52.1,
    toolWear: 196,
    anomalyScore: 0.64,
    failureRisk: "Warning — Heat Dissipation Risk (HDF)",
    lastUpdated: "1 min ago",
  },
  {
    id: "DRILL-M309",
    name: "Automated Boring Station 09",
    zone: "Zone C - Assembly",
    productType: "L",
    status: "Healthy",
    airTemp: 297.9,
    processTemp: 308.2,
    rpm: 1620,
    torque: 34.9,
    toolWear: 48,
    anomalyScore: 0.09,
    failureRisk: "Low (2%)",
    lastUpdated: "3 mins ago",
  },
  {
    id: "GRIND-M402",
    name: "Precision Surface Grinder 02",
    zone: "Zone B - Forming",
    productType: "M",
    status: "Critical",
    airTemp: 300.6,
    processTemp: 311.4,
    rpm: 2680,
    torque: 18.5,
    toolWear: 238,
    anomalyScore: 0.92,
    failureRisk: "Critical — Tool Wear Failure (TWF)",
    lastUpdated: "Just now",
  },
  {
    id: "MILL-M510",
    name: "Heavy Duty Gantry Mill 10",
    zone: "Zone C - Assembly",
    productType: "H",
    status: "Warning",
    airTemp: 299.4,
    processTemp: 309.8,
    rpm: 1320,
    torque: 59.7,
    toolWear: 175,
    anomalyScore: 0.58,
    failureRisk: "Warning — Power Failure Risk (PWF)",
    lastUpdated: "4 mins ago",
  },
];

// Simulated SHAP Feature Attribution Output
export const shapExplanationSample = {
  incidentId: "INC-2026-089",
  machineId: "CNC-M114",
  prediction: "Anomaly / Overstrain Failure (OSF)",
  probability: 0.89,
  baseValue: 0.034,
  features: [
    { feature: "Torque (66.2 Nm)", shapValue: 0.42, impact: "Increases Risk" },
    { feature: "Tool Wear (224 min)", shapValue: 0.31, impact: "Increases Risk" },
    { feature: "Air Temp (302.4 K)", shapValue: 0.09, impact: "Increases Risk" },
    { feature: "Process Temp (312.8 K)", shapValue: 0.06, impact: "Increases Risk" },
    { feature: "Rotational Speed (1380 rpm)", shapValue: -0.02, impact: "Decreases Risk" },
  ],
};

// Simulated Historical Incident Records
export const incidentRecords = [
  {
    id: "INC-2026-089",
    machineId: "CNC-M114",
    zone: "Zone A - Machining",
    timestamp: "2026-11-20 08:55",
    prediction: "Overstrain Failure (OSF)",
    severity: "Critical",
    anomalyScore: 0.89,
    topFactor: "Torque (66.2 Nm) + Tool Wear (224 min)",
    status: "Open",
  },
  {
    id: "INC-2026-088",
    machineId: "GRIND-M402",
    zone: "Zone B - Forming",
    timestamp: "2026-11-20 08:20",
    prediction: "Tool Wear Failure (TWF)",
    severity: "Critical",
    anomalyScore: 0.92,
    topFactor: "Tool Wear (238 min)",
    status: "Investigating",
  },
  {
    id: "INC-2026-087",
    machineId: "PRESS-M204",
    zone: "Zone B - Forming",
    timestamp: "2026-11-20 07:45",
    prediction: "Heat Dissipation Failure (HDF)",
    severity: "Warning",
    anomalyScore: 0.64,
    topFactor: "Low Temp Differential (8.3 K)",
    status: "Resolved",
  },
];