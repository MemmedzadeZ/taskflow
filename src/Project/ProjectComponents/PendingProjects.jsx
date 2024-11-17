import { useState, useEffect } from "react";

function PendingProjects() {
  const [count, setCount] = useState();
  const fetchCount = async () => {
    var response = await fetch(
      "https://localhost:7157/api/Project/PendingProjectCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) {
      setCount(await response.json());
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="icon-box bg-color-7 d-block">
      <div className="content text-center color-7">
        <h5 className="title-box fs-17 font-w500">Pending Project</h5>
        <div className="themesflat-counter fs-18 font-wb">
          <span
            className="number"
            data-from={0}
            data-to={309}
            data-speed={2500}
            data-inviewport="yes"
          >
            {count}
          </span>
        </div>
      </div>
    </div>
  );
}
export default PendingProjects;
