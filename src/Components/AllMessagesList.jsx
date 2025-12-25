import React, { useState, useEffect } from "react";
import { fetchUserMessage } from "../utils/fetchUtils/messageUtils";
function AllMessages() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    console.log("inside long message list");

    var data = await fetchUserMessage();
    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="box-body pb-0 pt-39">
      <ul className="message mb-2">
        {items.map((item, index) => (
          <li className="dlab-chat-user" key={index}>
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img
                  src={
                    item.path
                      ? item.path
                      : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                  }
                  className="rounded-circle user_img"
                  alt="path"
                />
              </div>
              <div className="user_info">
                <a className="h6" href="message.html">
                  {item.senderName}
                </a>{" "}
                <span className="msg-time float-right">{item.sentDate}</span>
                <p className="fs-14 mb-0">{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllMessages;
