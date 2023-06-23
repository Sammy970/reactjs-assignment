import React from "react";
import "./CSS/Dashboard.css";

import SmCards from "./DashboardComponents/SmCards";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="grid grid-cols-4">
          <h1 className="col-span-1">Dashboard</h1>
          <div className="flex space-x-7 justify-end items-center col-span-3 col-end-7">
            <button className="flex justify-center items-center">
              <input
                type="text"
                className="searchBar"
                placeholder="Search..."
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-search-1289-433864.png"
                alt=""
                width="20px"
                className="relative right-8"
              />
            </button>
            <img
              src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bell_icon_128467.png"
              alt=""
              width="25px"
              height="51px"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/800px-Product_sample_icon_picture.png"
              alt=""
              width="30px"
              height="51px"
            />
          </div>
        </div>

        <div className="cards grid grid-cols-4">
          <SmCards
            smallTitle="Total Revenues"
            NumberValue="$2,129,430"
            color="#DDEFE0"
          />
          <SmCards
            smallTitle="Total Transactions"
            NumberValue="1520"
            color="#F4ECDD"
          />
          <SmCards
            smallTitle="Total Likes"
            NumberValue="9721"
            color="#EFDADA"
          />
          <SmCards smallTitle="Total Users" NumberValue="892" color="#DEE0EF" />
        </div>

        <div className="chartContainer">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
