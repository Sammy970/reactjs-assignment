import React from "react";
import "./CSS/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="container-bg h-screen flex flex-col justify-between">
        <div className="grid grid-auto-row gap-3">
          <h1 className="companyName">Board.</h1>
          <div className="options">
            <h3>Dashboard</h3>
            <h3>Transactions</h3>
            <h3>Schedules</h3>
            <h3>Users</h3>
            <h3>Settings</h3>
          </div>
        </div>
        <div className="bottomOptions">
          <h3>Option 1</h3>
          <h3>Option 2</h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
