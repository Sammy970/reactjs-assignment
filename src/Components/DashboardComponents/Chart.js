import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { faker } from "@faker-js/faker";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 6; i++) {
        const name = faker.date.month(); // 'October'
        const uv = faker.finance.amount();
        const pv = faker.finance.amount();
        newData.push({ name, uv, pv });
      }
      setData(newData);
    };

    generateData();
  }, []);

  return (
    <>
      <div
        style={{
          width: "95%",
          height: "250px",
          backgroundColor: "#FFFFFF",
          padding: "10px",
          borderRadius: "10px",
          paddingBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#000",
            fontSize: "18px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            padding: "14px",
          }}
        >
          Activites
        </h1>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              stroke="#ccc"
              // strokeDasharray="3 3"
              horizontal
              vertical={false}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" align="right" />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#9BDD7C"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#E9A0A0"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
