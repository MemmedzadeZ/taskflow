import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchOccupationStatisticInProjects } from "../utils/fetchUtils/quizUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectStatistik = () => {
  const [percent, setPercent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const data = await fetchOccupationStatisticInProjects();

      // Yüzdelerin toplamını kontrol et
      const totalPercentage = data.reduce(
        (sum, item) => sum + item.percentage,
        0
      );

      if (totalPercentage !== 100) {
        console.warn("Yüzdelerin toplamı %100 değil, normalize ediliyor...");
        const normalizedData = data.map((item) => ({
          ...item,
          percentage: (item.percentage / totalPercentage) * 100,
        }));
        setPercent(normalizedData);
      } else {
        setPercent(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (percent.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="col-6 col-md-12">
      <div className="box">
        <div className="box-header">
          <div className="me-auto">
            <h4 className="card-title fs-22">
              Participant Occupation Statistic
            </h4>
            <p className="fs-14 mt-4">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="box-body pt-0">
          <div className="row">
            <div className="col-6 col-xl-12 col-md-6 col-sm-12 w-sm-100 mb-0">
              <ul className="box-list mt-25 pr-60">
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
                    <span style={{ marginLeft: "auto" }}>
                      {item.percentage}%
                    </span>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectStatistik;
