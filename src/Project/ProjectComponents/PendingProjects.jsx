import { useState, useEffect } from "react";
import { fetchPendingProjectCount } from "../../utils/fetchUtils/projectUtils";
import startSignalRConnection from "../../SignalR";

function PendingProjects() {
  const [count, setCount] = useState();
  const fetchCount = async () => {
    const data = await fetchPendingProjectCount();
    setCount(data);
  };

  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("UpdatePendingProjects", () => {
        fetchCount();
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
