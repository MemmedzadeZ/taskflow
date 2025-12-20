import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
function TwoCalendarNotification() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    console.log("inside short message list");
    var response = await fetch(
      "http://localhost:5204/api/Notification/TwoCalendarNotification",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    var data = await response.json();
    console.log(data);
    setItems(data);
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

    conn.on("CalendarNotificationList2", (message) => {
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
    <div className="notification-list card">
      <div className="top box-header">
        <h5>Notification</h5>
      </div>
      <div className="pd-1r">
        <div className="divider"></div>
      </div>
      <div className="box-body">
        {items.length === 0 ? (
          <div className="no-messages">
            <p
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontSize: "1.2rem",
                fontStyle: "italic",
                marginTop: "20px",
              }}
            >
              You have no messages yet
            </p>
          </div>
        ) : (
          <ul className="list">
            {items.map((item, index) => (
              <li key={index} className="d-flex">
                <div className="img-mess">
                  <img
                    className="mr-14"
                    src="https://images.freeimages.com/fic/images/icons/2794/metro_ui/512/tasks.png"
                    style={{ width: "40px", height: "40px" }}
                    alt="avt"
                  />
                </div>
                <div className="info">
                  <a href=" " className="font-w600 mb-0 color-primary">
                    TaskFlow
                  </a>
                  <p className="pb-0 mb-0 line-h14 mt-6">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <div className="btn-view">
            <a className="font-w600 h5" href="/profile">
              View All
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoCalendarNotification;
