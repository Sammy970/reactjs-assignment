import React from "react";
import "./CSS/Dashboard.css";

import SmCards from "./DashboardComponents/SmCards";
import Chart from "./DashboardComponents/Chart";
import PieChartCard from "./DashboardComponents/PieChartCard";
import ScheduleCard from "./DashboardComponents/ScheduleCard";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer sm:h-screen">
        <div className="xl:grid grid-cols-4">
          <h1 className="col-span-2">Dashboard</h1>
          <div className="flex space-x-7 justify-end items-center col-span-3 col-end-7">
            <button className="flex justify-center items-center searchBar">
              <input type="text" placeholder="Search..." />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-search-1289-433864.png"
                alt=""
                width="20px"
                className="relative right-6"
              />
            </button>
            <img
              src="Assets/Vector3.png"
              alt=""
              width="23px"
              // height="51px"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/800px-Product_sample_icon_picture.png"
              alt=""
              width="30px"
              height="51px"
            />
          </div>
        </div>

        <div className="cards grid md:grid-cols-4 gap-9 sm:grid-rows-4 justify-center sm:flex">
          <SmCards
            smallTitle="Total Revenues"
            NumberValue="$2,129,430"
            color="#DDEFE0"
            icon="Assets/Vector.png"
          />
          <SmCards
            smallTitle="Total Transactions"
            NumberValue="1520"
            color="#F4ECDD"
            icon="Assets/total_transactions_icon.png"
          />
          <SmCards
            smallTitle="Total Likes"
            NumberValue="9721"
            color="#EFDADA"
            icon="Assets/Vector1.png"
          />
          <SmCards
            smallTitle="Total Users"
            NumberValue="892"
            color="#DEE0EF"
            icon="Assets/Vector2.png"
          />
        </div>

        <div className="chartContainer">
          <Chart />
        </div>

        {/* <div className="grid grid-flow-col grid-cols-2 pieContainer lg:block">
          <PieChartCard />
        </div> */}

        <div className="pieContainer grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1 xl:gap-20">
          <PieChartCard />
          <ScheduleCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
