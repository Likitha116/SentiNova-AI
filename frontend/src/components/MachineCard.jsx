import { Thermometer, Gauge, RotateCw, Wrench, ArrowUpRight } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function MachineCard({ machine, onSelect }) {
  return (
    <div
      onClick={() => onSelect(machine)}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between"
    >
      {/* Header: ID, Name & Status */}
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {machine.id} • Type {machine.productType}
            </span>
            <h3 className="text-base font-bold text-gray-800 mt-0.5">
              {machine.name}
            </h3>
            <p className="text-xs text-gray-500">{machine.zone}</p>
          </div>
          <StatusBadge status={machine.status} />
        </div>

        {/* AI4I 2020 Sensor Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100 text-xs">
          <div className="flex items-center gap-2 text-gray-600">
            <Thermometer size={15} className="text-orange-500 shrink-0" />
            <div>
              <p className="text-gray-400">Process Temp</p>
              <p className="font-semibold text-gray-800">{machine.processTemp} K</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Gauge size={15} className="text-amber-600 shrink-0" />
            <div>
              <p className="text-gray-400">Torque</p>
              <p className="font-semibold text-gray-800">{machine.torque} Nm</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <RotateCw size={15} className="text-blue-500 shrink-0" />
            <div>
              <p className="text-gray-400">Speed</p>
              <p className="font-semibold text-gray-800">{machine.rpm} rpm</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Wrench size={15} className="text-purple-500 shrink-0" />
            <div>
              <p className="text-gray-400">Tool Wear</p>
              <p className="font-semibold text-gray-800">{machine.toolWear} min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Anomaly Score & Action */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="text-gray-500">
          Anomaly Score:{" "}
          <strong className={machine.anomalyScore > 0.7 ? "text-red-600" : "text-gray-800"}>
            {machine.anomalyScore.toFixed(2)}
          </strong>
        </span>
        <span className="text-blue-600 font-semibold flex items-center gap-1">
          Inspect <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}