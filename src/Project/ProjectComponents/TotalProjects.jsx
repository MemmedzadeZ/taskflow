import { useState, useEffect } from "react";
import { fetchUserProjectCount } from "../../utils/fetchUtils/projectUtils";
import startSignalRConnection from "../../SignalR";

function TotalProjects() {
  const [projectCount, setProjectCount] = useState(0);
  const fetchData = async () => {
    const data = await fetchUserProjectCount();
    setProjectCount(data);
  };

  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("UpdateTotalProjects", () => {
        fetchData();
      });

      // setConnection(conn);

      return () => {
        if (conn) {
          conn.stop();
        }
      };
    };
    initializeSignalR();
  }, []);

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
