import React, { useState, useEffect } from "react";
function AllMessages() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    console.log("inside long message list");
    var response = await fetch("https://localhost:7157/api/Chat/UserMessages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    var data = await response.json();
    console.log("allmessages" + data.list);
    setItems(data.list);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="box-body pb-0 pt-39" style={{ width: "auto" }}>
      <ul className="message mb-2">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <li className="dlab-chat-user" key={index}>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src={
                      item.friendImg
                        ? item.path
                        : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                    }
                    className="rounded-circle user_img"
                    alt="path"
                  />
                </div>
                <div className="user_info">
                  <div
                    style={{
                      display: "flex",
                      gap: "4vw",
                      alignContent: "center",
                    }}
                  >
                    <a className="h6" href="message.html">
                      {item.friendName} {item.friendLastname}
                    </a>
                    <span className="msg-time">{item.sentDate}</span>
                  </div>
                  <p className="fs-14 mb-0">{item.message}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AllMessages;
