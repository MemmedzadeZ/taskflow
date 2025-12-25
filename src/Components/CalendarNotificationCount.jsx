import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { fetchCalendarNotificationCount } from "../utils/fetchUtils/notificationUtils";
function CalendarCount() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    console.log("calendar message count");

    var data = await fetchCalendarNotificationCount();

    console.log(data);

    setCount(data);
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

    conn.on("CalendarNotificationCount", (message) => {
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
    <div className="content">
      <h5 className="title-box">Calendar</h5>

      <p className="color-1 mb-0 pt-4">{count} Unread messages</p>
    </div>
  );
}

export default CalendarCount;
