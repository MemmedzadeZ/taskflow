import { useState, useEffect } from "react";

function TotalProjects() {
  const [projectCount, setProjectCount] = useState(0);
  const fetchData = async () => {
    var response = await fetch(
      "https://localhost:7268/api/Project/UserProjectCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log(data);

    setProjectCount(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="icon-box bg-color-6 d-block">
      <div className="content text-center color-6">
        <h5 className="title-box fs-17 font-w500">Total Projects</h5>
        <div className="themesflat-counter fs-18 font-wb">
          <span
            className="number"
            data-from={0}
            data-to={309}
            data-speed={2500}
            data-inviewport="yes"
          >
            {projectCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalProjects;
