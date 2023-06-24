import React, { useState } from "react";
import "./CSS/DashboardPage.css";
import { FiMenu } from "react-icons/fi";

// Importing Components
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg flex h-screen">
      <div className="contain justify-center items-center float-left">
        <FiMenu
          className="xl:hidden block h-9 w-9 px-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="w-max contain sidebar flex justify-center items-center">
          <Sidebar />
        </div>
      )}

      <div className="xl:block hidden xl:w-1/4 w-full sidebar flex justify-center items-center float-left">
        <Sidebar />
      </div>

      <div
        className={`lg:block ${open && "hidden"} lg:w-full sm:h-max xl:flex`}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
