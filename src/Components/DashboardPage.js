import React, { useState } from "react";
import "./CSS/DashboardPage.css";
import { FiMenu } from "react-icons/fi";

// Importing Components
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg flex">
      <div className=" justify-center items-center float-left">
        <FiMenu
          className="lg:hidden block h-9 w-9 px-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="w-max h-screen sidebar flex justify-center items-center float-left">
          <Sidebar />
        </div>
      )}

      <div className="lg:block hidden w-1/4 sidebar flex justify-center items-center float-left">
        <Sidebar />
      </div>

      <div
        className={`lg:block ${
          open && "hidden"
        } lg:w-3/4  lg:h-screen sm:h-max xl:flex`}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
