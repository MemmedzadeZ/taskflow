import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchOccupationStatistic } from "../utils/fetchUtils/quizUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

function OccupationPercent() {
  const [percent, setPercent] = useState([]);

  const fetchData = async () => {
    const data = await fetchOccupationStatistic();
    setPercent(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const colors = [
    "#3C21F7",
    "#00BC8B",
    "#FFB800",
    "#00ECCC",
    "#EF7F5A",
    "#5D45FB",
    "#6c757d",
  ];
  const data = {
    labels: percent.map((item) => item.occupationName),
    datasets: [
      {
        data: percent.map((item) => item.percentage),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <div className="row d-flex align-items-center" style={{ width: "800px" }}>
      <div className="col-6">
        <ul className="box-list mt-26 pr-67">
          {percent.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                className="square"
                style={{
                  backgroundColor: colors[index % colors.length],
                  width: "15px",
                  height: "15px",
                  marginRight: "8px",
                }}
              />
              <span>{item.occupationName}</span>
              <span style={{ marginLeft: "auto" }}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-6 d-flex justify-content-end">
        <div style={{ width: "250px", height: "250px" }}>
          <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OccupationPercent;
