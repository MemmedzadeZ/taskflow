import React, { useEffect, useState } from "react";
import { fetchCalendarNotificationCount } from "../utils/fetchUtils/notificationUtils";
import startSignalRConnection from "../SignalR";
function CalendarCount() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    console.log("calendar message count");

    var data = await fetchCalendarNotificationCount();

    console.log(data);

    setCount(data);
  };
  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("CalendarNotificationCount", (message) => {
        fetchData();
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
