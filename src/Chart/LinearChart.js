import { useEffect, useState, useRef } from "react";
import ApexCharts from "apexcharts";
import getLastMonths from "../Chart/ChartDataFunctions";
import { setsEqual } from "chart.js/helpers";

const LinearChart = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [projectNames, setProjectNames] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [ongoingTask, setOngoingTasks] = useState([]);
  const chartRef = useRef(null);
  const fetchDatas = async () => {
    console.log(selectedProject);
    var response = await fetch(
      `http://localhost:5204/api/Project/TasksDependingMonths`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProject.trim()),
      }
    );
    var data = await response.json();
    console.log(data);
    setCompletedTasks(data.complated);
    setOngoingTasks(data.onGoing);
  };

  const groupProjectStatistics = () => {
    // document.getElementById("project-chart-div").innerHTML = "";
    console.log("inside groupProjectStatistics");
    fetchDatas();
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    let line_chart = {
      series: [
        {
          name: "Complete",
          data: completedTasks,
        },
        {
          name: "Doing",
          data: ongoingTask,
        },
      ],
      colors: ["#3C21F7", "#FFCA1F"],
      chart: {
        height: 350,
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: getLastMonths(),
      },
    };
    chartRef.current = new ApexCharts(
      document.getElementById("line-chart"),
      line_chart
    );
    chartRef.current.render();
  };
  const handleOptionClick = (name) => {
    setSelectedProject(name);
    setShowDropdown(false);
    groupProjectStatistics();
  };

  const fetchProjectNames = async () => {
    console.log("inside fillProjectNames");
    var response = await fetch(
      "http://localhost:5204/api/Project/ProjectNames",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    var data = await response.json();
    console.log(data.names);
    setProjectNames(data.names);
    if (data.names) {
      setSelectedProject(data.names[0]);
    }
  };
  useEffect(() => {
    fetchProjectNames();
    // fetchDatas();
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-6 col-md-12">
      <div className="box f-height">
        <div
          className="box-header d-flex justify-content-between"
          style={{ flexDirection: "column" }}
          id="project-chart-div"
        >
          {selectedProject && projectNames ? (
            <div className="col-6 col-md-6 col-sm-12" style={{ width: "35vw" }}>
              <div className="box left-dot h-100">
                <div className="box-title">{selectedProject}</div>
                <div className="box-body">
                  <div id="line-chart"></div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                height: "21vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>NO DATA TO DISPLAY</h2>
            </div>
          )}
          <div
            style={{
              // height: "21vh",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 className="mt-9 fs-22">Project Statistics</h3>
            <ul className="card-list mb-0">
              <li className="custom-label">
                <span />
                Complete
              </li>
              <li className="custom-label">
                <span />
                Doing
              </li>
            </ul>
          </div>
        </div>
        <div className="box-body pt-20">
          <input
            type="text"
            value={selectedProject || ""}
            readOnly
            style={{
              //   width: "100%",
              position: "relative",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => setShowDropdown(!showDropdown)}
            placeholder="Select a Project..."
          />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                padding: "2vh 1vw",
                width: "12vw",
                zIndex: "1",
                maxHeight: "150px",
                overflowY: "auto",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {projectNames.map((name, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(name, index)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LinearChart;
