import React, { useEffect, useState } from "react";

function CalendarCount() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    console.log("calendar message count");

    var response = await fetch(
      "https://localhost:7157/api/Notification/CalendarNotificationCount",

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
