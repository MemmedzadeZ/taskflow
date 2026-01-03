import React, { useEffect, useState } from "react";
import { fetchTwoNotification } from "../utils/fetchUtils/notificationUtils";
import startSignalRConnection from "../SignalR";
function TwoNotification() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    console.log("inside short message list");

    var data = await fetchTwoNotification();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    const initializeSignalR = async () => {
      const conn = await startSignalRConnection();
      conn.on("RequestList2", (message) => {
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
                    src={
                      item.path
                        ? item.path
                        : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                    }
                    style={{ width: "40px", height: "40px" }}
                    alt="avt"
                  />
                </div>
                <div className="info">
                  <a href=" " className="font-w600 mb-0 color-primary">
                    {item.username}
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

export default TwoNotification;
