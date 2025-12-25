import React, { useEffect, useState } from "react";
import { fetchTwoMessage } from "../utils/fetchUtils/messageUtils";

function TwoMessage() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    try {
      const data = await fetchTwoMessage();
      console.log("messagelist" + data);
      setItems(data.dtos || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  return (
    <div className="notification-list card">
      <div className="top box-header">
        <h5>Messages</h5>
      </div>
      <div className="pd-1r">
        <div className="divider"></div>
      </div>
      <div className="box-body">
        {items && items.length === 0 ? (
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
              <li className="d-flex" key={index}>
                <div className="img-mess">
                  <img
                    className="mr-14"
                    src={
                      item.image
                        ? item.image
                        : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                    }
                    style={{ width: "40px", height: "40px" }}
                    alt="avt"
                  />
                </div>
                <div className="info">
                  <p className="font-w600 mb-0 color-primary">{item.sender}</p>
                  <a
                    href=" "
                    className="font-w600 mb-0 color-primary"
                    style={{ color: "gray" }}
                  >
                    {item.content || "No message"}
                  </a>
                  <span className="msg-time float-right">
                    (item.sentDate || new Date())
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TwoMessage;
