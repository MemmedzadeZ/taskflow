import { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

function OngoingProjects() {
  const [count, setCount] = useState();
  const fetchCount = async () => {
    var response = await fetch(
      "http://localhost:5204/api/Project/OnGoingProjectCount",

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

    conn.on("UpdateOnGoingProjects", () => {
      fetchCount();
    });

    // setConnection(conn);

    return () => {
      if (conn) {
        conn.stop();
      }
    };
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
