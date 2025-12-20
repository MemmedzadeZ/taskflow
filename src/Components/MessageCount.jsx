import React, { useEffect, useState } from "react";

function CountMessage() {
  const [count, setCount] = useState(0);

  const fetchMessages = async () => {
    console.log("inside message");

    var response = await fetch(
      "http://localhost:5204/api/Message/UserMessageCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log("count" + data);

    setCount(data.messCount);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="content">
      <h5 className="title-box">Message</h5>

      <p className="color-1 mb-0 pt-4">{count} Unread messages</p>
    </div>
  );
}

export default CountMessage;
