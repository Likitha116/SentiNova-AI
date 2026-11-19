import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

function MainLayout() {

  return (

    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0">

        {/* Navbar */}
        <Navbar />

        {/* Individual Pages */}
        <main className="p-6">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default MainLayout;