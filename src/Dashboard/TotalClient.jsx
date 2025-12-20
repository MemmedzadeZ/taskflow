import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
function ClientsCount() {
  const [clientsCount, setClientsCount] = useState(0);
  const fetchData = async () => {
    console.log("calendar message count");

    var response = await fetch(
      "http://localhost:5204/api/Auth/UsersCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log(data);

    setClientsCount(data);
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

    conn.on("TotalClientsUpdated", () => {
      console.log("inside signalr");
      fetchData();
    });

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
    <div className="box-body d-flex pb-0">
      <div className="me-auto">
        <h4 className="numb fs-30 font-wb">{clientsCount}</h4>
        <h5 className="card-title fs-18 font-w400">Total Clients</h5>
        <p className="fs-14 mb-0 mt-11">
          <span className="text-primary">-3% </span>than last month
        </p>
      </div>
      <div id="total-revenue-chart"></div>
    </div>
  );
}
export default ClientsCount;
