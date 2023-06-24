import React from "react";
import "./CSS/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="container-bg h-[calc(100%_-_-30px)] flex flex-col justify-between">
        <div className="grid grid-auto-row gap-3">
          <h1 className="companyName">Board.</h1>
          <div className="options">
            <div className="flex items-center">
              <img
                src="Assets/dashboard_icon.png"
                className="mr-2"
                alt=""
                width={20}
              />
              <h3>Dashboard</h3>
            </div>
            <div className="flex items-center">
              <img
                src="Assets/transaction_icon.png"
                className="mr-2"
                alt=""
                width={20}
              />
              <h3>Transactions</h3>
            </div>
            <div className="flex items-center">
              <img
                src="Assets/schedule_icon.png"
                className="mr-2"
                alt=""
                width={20}
              />
              <h3>Schedules</h3>
            </div>
            <div className="flex items-center">
              <img
                src="Assets/user_icon.png"
                className="mr-2"
                alt=""
                width={20}
              />
              <h3>Users</h3>
            </div>
            <div className="flex items-center">
              <img
                src="Assets/setting_icon.png"
                className="mr-2"
                alt=""
                width={20}
              />
              <h3>Settings</h3>
            </div>
          </div>
        </div>
        <div className="bottomOptions">
          <h3>Help</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
