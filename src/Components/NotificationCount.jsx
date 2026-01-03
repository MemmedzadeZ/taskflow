import React, { useEffect, useState } from "react";
import { fetchUserNotificationCount } from "../utils/fetchUtils/notificationUtils";
import startSignalRConnection from "../SignalR";
function CountNotification() {
  const [count, setCount] = useState(0);

  const fetchNotifications = async () => {
    console.log("inside notification");

    var data = await fetchUserNotificationCount();

    console.log(data);
    setCount(data);
  };

  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("RequestCount", (message) => {
        fetchNotifications();
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
