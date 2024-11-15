import React, { useEffect, useState } from "react";

function TwoMessage() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    console.log("inside short message list");
    try {
      var response = await fetch(
        "https://localhost:7157/api/Message/TwoMessage",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch messages");
      var data = await response.json();
      console.log("message:" + data.length);
      setItems(data);
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
              <li className="d-flex" key={index}>
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
                    {item.senderName}
                  </a>
                  <span class="msg-time float-right">
                    {formatDate(item.date)}
                  </span>
                  <p className="pb-0 mb-0 line-h14 mt-6">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {items.length > 0 && (
          <div className="btn-view">
            <a className="font-w600 h5" href="message.html">
              View All
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoMessage;
