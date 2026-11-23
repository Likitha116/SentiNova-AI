import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Activity, Sparkles, X } from "lucide-react";
import { machinesList } from "../data/mockData";
import MachineCard from "../components/MachineCard";
import StatusBadge from "../components/StatusBadge";

export default function MachineMonitoring() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [zoneFilter, setZoneFilter] = useState("All");
  const [selectedMachine, setSelectedMachine] = useState(null);

  const filteredMachines = machinesList.filter((machine) => {
    const matchesSearch =
      machine.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || machine.status === statusFilter;
    const matchesZone = zoneFilter === "All" || machine.zone === zoneFilter;
    return matchesSearch && matchesStatus && matchesZone;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-primary">Machine Monitoring</h1>
          <p className="text-gray-500 mt-1">
            Inspect simulated fleet telemetry across AI4I 2020 sensor parameters.
          </p>
        </div>
        <span className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full self-start">
          Showing {filteredMachines.length} of {machinesList.length} Units
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Machine ID or Name (e.g., CNC-M114)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="Healthy">Healthy</option>
            <option value="Warning">Warning</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div>
          <select
            value={zoneFilter}
            onChange={(e) => setZoneFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Zones</option>
            <option value="Zone A - Machining">Zone A - Machining</option>
            <option value="Zone B - Forming">Zone B - Forming</option>
            <option value="Zone C - Assembly">Zone C - Assembly</option>
          </select>
        </div>
      </div>

      {filteredMachines.length === 0 ? (
        <div className="bg-white p-10 rounded-xl text-center text-gray-500 border border-dashed border-gray-300">
          No machines match your current search or filter criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredMachines.map((machine) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onSelect={setSelectedMachine}
            />
          ))}
        </div>
      )}

      {selectedMachine && (
        <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-primary">
                  {selectedMachine.id} — {selectedMachine.name}
                </h2>
                <StatusBadge status={selectedMachine.status} />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {selectedMachine.zone} • Quality Variant: {selectedMachine.productType} • Last Sync: {selectedMachine.lastUpdated}
              </p>
            </div>
            <button
              onClick={() => setSelectedMachine(null)}
              className="text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-3 border-t">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Air Temp</p>
              <p className="text-lg font-bold text-gray-800">{selectedMachine.airTemp} K</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Process Temp</p>
              <p className="text-lg font-bold text-gray-800">{selectedMachine.processTemp} K</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Rotational Speed</p>
              <p className="text-lg font-bold text-gray-800">{selectedMachine.rpm} rpm</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Torque</p>
              <p className="text-lg font-bold text-gray-800">{selectedMachine.torque} Nm</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Tool Wear</p>
              <p className="text-lg font-bold text-gray-800">{selectedMachine.toolWear} min</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t">
            <div className="flex items-center gap-2 text-sm">
              <Activity size={18} className="text-blue-600" />
              <span className="text-gray-600">Diagnostic Assessment:</span>
              <strong className="text-gray-900">{selectedMachine.failureRisk}</strong>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/what-if")}
                className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                Run What-If Simulation
              </button>
              <button
                onClick={() => navigate("/explainable-ai")}
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={16} /> Explain with SHAP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
