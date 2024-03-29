import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { faker } from "@faker-js/faker";

import "./PieChartCard.css";

const COLORS = ["#F6DC7D", "#EE8484", "#98D89E"];

const PieChartCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        const value = faker.helpers.rangeToNumber({ min: 0, max: 100 });
        newData.push({ name, value });
      }
      setData(newData);
    };

    generateData();
  }, []);

  return (
    <div className="rounded-[10px] bg-white px-6 py-6">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Top products</h3>
        <div>
          <select className=" ">
            <option value="option1">May - June 23</option>
            <option value="option2">June - July 23</option>
            <option value="option3">July - August 23</option>
          </select>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 items-center">
        <div style={{ height: "150px" }}>
          <ResponsiveContainer width={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx={60}
                // cy={150}
                outerRadius={60}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            alignSelf: "center",
            marginLeft: "-9px",
          }}
        >
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <div className="flex flex-col py-2">
                <h3>{entry.name}</h3>
                <p>{entry.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
