import {
  Factory,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

import StatCard from "../components/StatCard";
import SensorChart from "../components/SensorChart";

function Dashboard() {

  return (

    <div className="space-y-6">

      {/* Page Heading */}

      <div>

        <h1 className="text-2xl font-bold text-primary">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 mt-1">
          Real-time industrial machine health monitoring.
        </p>

      </div>


      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Machines"
          value="120"
          icon={<Factory size={25} className="text-blue-600" />}
          color="bg-blue-100"
        />

        <StatCard
          title="Healthy Machines"
          value="98"
          icon={<CheckCircle size={25} className="text-green-600" />}
          color="bg-green-100"
        />

        <StatCard
          title="Warning Machines"
          value="15"
          icon={<AlertTriangle size={25} className="text-yellow-600" />}
          color="bg-yellow-100"
        />

        <StatCard
          title="Critical Machines"
          value="7"
          icon={<XCircle size={25} className="text-red-600" />}
          color="bg-red-100"
        />

      </div>


      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <SensorChart />

        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-lg font-bold text-primary mb-5">
            Machine Health Overview
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>Healthy</span>
                <span>98 Machines</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: "81.67%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Warning</span>
                <span>15 Machines</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: "12.5%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Critical</span>
                <span>7 Machines</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: "5.83%" }}></div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">

            <h2 className="text-4xl font-bold text-green-600">
              81.67%
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Overall Machine Health
            </p>

          </div>

        </div>

      </div>


      {/* Anomaly Alert */}

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex justify-between items-center">

        <div>

          <h2 className="text-lg font-bold text-yellow-800">
            ⚠ Anomaly Detected!
          </h2>

          <p className="text-sm text-gray-600 mt-2">
            Machine M-114 is showing abnormal vibration.
          </p>

        </div>

        <button
          onClick={() => window.location.href = "/anomalies"}
          className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-secondary"
        >
          View Details →
        </button>

      </div>

    </div>

  );

}

export default Dashboard;