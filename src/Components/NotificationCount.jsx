import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
function CountNotification() {
  const [count, setCount] = useState(0);

  const fetchNotifications = async () => {
    console.log("inside notification");

    var response = await fetch(
      "https://localhost:7157/api/Notification/UserNotificationCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log(data);

    setCount(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect", {
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

    conn.on("ReceiveFriendRequest4", (message) => {
      fetchNotifications();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="content">
      <h5 className="title-box">Notification</h5>

      <p className="color-1 mb-0 pt-4">{count} Unread notification</p>
    </div>
  );
}

export default CountNotification;
