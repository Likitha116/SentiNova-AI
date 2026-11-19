import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Activity,
  AlertTriangle,
  Brain,
  Wrench,
  History,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  FlaskConical
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },

  { name: "Machine Monitoring", path: "/machines", icon: Activity },

  { name: "Anomaly Detection", path: "/anomalies", icon: AlertTriangle },

  { name: "Failure Prediction", path: "/predictions", icon: TrendingUp },

  { name: "Explainable AI", path: "/explainable-ai", icon: Brain },

  { name: "Maintenance", path: "/maintenance", icon: Wrench },

  { name: "What-If Analysis", path: "/what-if", icon: FlaskConical },

  { name: "Incident History", path: "/incidents", icon: History },

  { name: "Reports", path: "/reports", icon: FileText },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-primary text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 text-center border-b border-white/10">

        <h1 className="text-2xl font-bold text-white">
          Senti<span className="text-accent">Nova</span> AI
        </h1>

        <p className="text-xs text-gray-300 mt-1">
          Intelligent Machine Monitoring
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                ${
                  isActive
                    ? "bg-accent text-primary font-semibold"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >

              <Icon size={19} />

              <span className="text-sm">
                {item.name}
              </span>

            </NavLink>

          );

        })}

      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-white/10">

        <button className="flex items-center gap-3 text-gray-300 hover:text-white p-3">
          <Settings size={19} />
          Settings
        </button>

        <button className="flex items-center gap-3 text-gray-300 hover:text-red-400 p-3">
          <LogOut size={19} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;