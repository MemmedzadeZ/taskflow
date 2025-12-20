import { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

function TotalProjects() {
  const [projectCount, setProjectCount] = useState(0);
  const fetchData = async () => {
    var response = await fetch(
      "http://localhost:5204/api/Project/UserProjectCount",

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
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5204/connect", {
        accessTokenFactory: () => token,
      })
      .configureLogging("information")
      .build();

    conn
      .start()
      .then(() => {
        console.log("SignalR connected.");
      })
      .catch((err) => console.error("SignalR connection error:", err));

    conn.on("UpdateTotalProjects", () => {
      fetchData();
    });

    // setConnection(conn);

    return () => {
      if (conn) {
        conn.stop();
      }
    };
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
