import React, { useState, useEffect } from "react";
import { fetchUserProjectCount } from "../utils/fetchUtils/projectUtils";
function ProjectsCount() {
  const [projectCount, setProjectCount] = useState(0);
  const fetchData = async () => {
    var data = await fetchUserProjectCount();
    console.log(data);
    setProjectCount(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="box-body d-flex pb-0">
      <div className="me-auto">
        <h4 className="numb fs-30">{projectCount}</h4>
        <h5 className="card-title fs-18 font-w400">New Projects</h5>
        <p className="fs-14 mb-0 mt-11">
          <span className="text-primary">+0.5% </span>than last month
        </p>
      </div>
      <div id="total-revenue-chart-1"></div>
    </div>
  );
}
export default ProjectsCount;
