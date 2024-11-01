import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [25, 18, 17, 12.5, 12.5, 12.5],
        backgroundColor: [
          "#3C21F7",
          "#00BC8B",
          "#FFB800",
          "#00ECCC",
          "#EF7F5A",
          "#5D45FB",
        ],
        hoverBackgroundColor: [
          "#3C21F7",
          "#00BC8B",
          "#FFB800",
          "#00ECCC",
          "#EF7F5A",
          "#5D45FB",
        ],
      },
    ],
  };

  return (
    <div className="col-6 col-xl-12 w-sm-100 mb-0">
      <Doughnut data={data} width={100} height={100} />
    </div>
  );
};

export default DoughnutChart;
