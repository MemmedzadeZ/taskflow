import React, { useEffect, useState } from "react";

function OccupationPercent() {
  const [percent, setPercent] = useState([]);

  const fetchData = async () => {
    console.log("inside occupation percent");

    const response = await fetch(
      "https://localhost:7157/api/Quiz/OccupationStatistic",
      {
        method: "GET",
      }
    );

    const data = await response.json();
    console.log(data);

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
  ];

  return (
    <div className="row">
      <div className="col-6 col-xl-12 w-sm-100 mb-0">
        <ul className="box-list mt-26 pr-67">
          {percent.map((item, index) => (
            <li key={index}>
              <span
                className="square"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {item.occupationName}
              <span>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-xl-12 w-sm-100 mb-0">
        <div className="canvas-container">
          <canvas id="chartjs-4" className="chartjs" width={100} height={100} />
          <div className="chart-data">
            {percent.map((item, index) => (
              <div
                key={index}
                data-percent={item.percentage}
                data-color={colors[index % colors.length]}
                data-label={item.occupationName}
                style={{ color: colors[index % colors.length] }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OccupationPercent;
