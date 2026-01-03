import { useState, useEffect } from "react";
import { fetchCompletedTaskCount } from "../../utils/fetchUtils/projectUtils";
import startSignalRConnection from "../../SignalR";

function CompletedProjects() {
  const [count, setCount] = useState();
  const fetchCount = async () => {
    const response = await fetchCompletedTaskCount();
    if (response) {
      setCount(response);
    }
  };

  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("UpdateCompletedProjects", () => {
        fetchCount();
      });

      return () => {
        if (conn) {
          conn.stop();
        }
      };
    };
    initializeSignalR();
  }, []);

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="icon-box bg-color-9 d-block">
      <div className="content text-center color-9">
        <h5 className="title-box fs-17 font-w500">Complete Project</h5>
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
export default CompletedProjects;
