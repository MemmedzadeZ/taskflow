import React, { useEffect, useState } from "react";

function TwoMessage() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    console.log("inside short message list");
    var response = await fetch(
      "https://localhost:7157/api/Message/TwoMessage",
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
    fetchMessages();
  }, []);

  return (
    <div className="notification-list card">
      <div className="top box-header">
        <h5>Message</h5>
      </div>
      <div className="pd-1r">
        <div className="divider"></div>
      </div>
      <div className="box-body">
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
                <p className="pb-0 mb-0 line-h14 mt-6">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="btn-view">
          <a className="font-w600 h5" href="message.html">
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
export default TwoMessage;
