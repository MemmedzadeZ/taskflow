import { useEffect, useState } from "react";
import { fetchOnGoingProjectCount } from "../../utils/fetchUtils/projectUtils";
import startSignalRConnection from "../../SignalR";

function OngoingProjects() {
  const [count, setCount] = useState();
  const fetchCount = async () => {
    const data = await fetchOnGoingProjectCount();
    setCount(data);
  };

  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("UpdateOnGoingProjects", () => {
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
    <div className="icon-box bg-color-8 d-block">
      <div className="content text-center color-8">
        <h5 className="title-box fs-17 font-w500">On Going project</h5>
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
export default OngoingProjects;
