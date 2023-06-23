import React from "react";
import "./CSS/DashboardPage.css";

// Importing Components
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
  return (
    <div className="bg h-screen flex">
      <div className=" w-1/4 sidebar flex justify-center items-center float-left">
        <Sidebar />
      </div>
      <div className="w-3/4 flex">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
