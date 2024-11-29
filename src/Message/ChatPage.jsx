import React, { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { faL } from "@fortawesome/free-solid-svg-icons";

const ChatPage = ({ friendEmail = "" }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [emojiDiv, setEmojiDiv] = useState(false);

  const getHover = (id) => {
    console.log(id);
    setHoveredItemId(id);

    // fetchMembers(id);
  };

  const toggleEmojiDiv = () => {
    setEmojiDiv((prev) => !prev);
  };
  const fetchChat = async (mail) => {
    if (mail !== "") {
      console.log("fetch" + mail);
      var response = await fetch(
        `https://localhost:7157/api/ChatMessage/AllMessages/${mail}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        var data = await response.json();

        setMessages(data.list);
        console.log("datalist; " + data.list);
      } else {
        console.log("failed to fetch messages!");
      }
    }
  };

  const handleDeleteMessage = async (id) => {
    var response = await fetch(
      `https://localhost:7157/api/ChatMessage/RemoveMessage/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("message deleted successfully");
      fetchChat();
    } else {
      console.log("couldn't delete message");
    }
  };

  const handleCopyMessage = (message) => {
    navigator.clipboard.writeText(message);
  };

  const handleMessageSend = async (e) => {
    e.preventDefault();
    console.log("handleMessageSend");
    var dto = {
      friendEmail,
      isImage: false,
      text,
    };
    var response = await fetch(
      `https://localhost:7157/api/ChatMessage/NewMessage`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dto),
      }
    );
    if (response.ok) {
      console.log("Message sent!");
      setText("");
      // fetchChat();
      var data = await response.json();
      console.log("post method return: " + data);

      GetMessageCall(data.friendId, data.senderId);
    } else {
      console.log("Error occured while seding message!");
    }
  };
  let conn;

  const initializeSignalRConnection = async () => {
    if (!conn) {
      const token = localStorage.getItem("token");
      conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7157/connect", {
          accessTokenFactory: () => token,
        })
        .configureLogging("information")
        .build();
    }

    if (conn.state !== "Connected") {
      try {
        await conn.start();
        console.log("SignalR connected.");
      } catch (err) {
        console.error("Error starting SignalR connection:", err);
      }
    }
  };

  async function GetMessageCall(receiverId, senderId) {
    await initializeSignalRConnection();

    if (conn.state === "Connected") {
      try {
        await conn.invoke("GetMessages", receiverId, senderId);
        console.log("GetMessages invoked successfully.");
      } catch (err) {
        console.error("Error invoking GetMessages:", err);
      }
    } else {
      console.error("SignalR connection not in Connected state.");
    }
  }

  useEffect(() => {
    const setupSignalR = async () => {
      await initializeSignalRConnection();

      if (conn.state === "Connected") {
        conn.on("ReceiveMessages2", (mail) => {
          console.log("mailll: " + mail);
          fetchChat(mail);
        });
        console.log("ReceiveMessages listener added.");
      } else {
        console.error("SignalR connection not in Connected state.");
      }
    };

    setupSignalR();

    return () => {
      if (conn) {
        conn
          .stop()
          .then(() => console.log("SignalR connection stopped."))
          .catch((err) =>
            console.error("Error stopping SignalR connection:", err)
          );
      }
    };
  }, []);

  useEffect(() => {
    fetchChat(friendEmail);
  }, [friendEmail]);
  //
  return (
    <div className="col-8 col-md-12">
      <div className="box message-info">
        {/* Scrollable container */}
        <div
          className="horizontal-scroll"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            height: "58vh",
            overflowY: "auto",
            padding: "10px",
            // border: "1px solid #ccc",
          }}
        >
          {friendEmail ? (
            messages.length > 0 ? (
              messages.map((item, index) => (
                <div
                  key={item.messageId}
                  onMouseEnter={() => getHover(item.messageId)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className={
                    item.isSender ? "message-sender" : "box-info-messager"
                  }
                  style={{ position: "relative" }}
                >
                  <div className="message-pic">
                    <img
                      style={{ borderRadius: "50%" }}
                      src={item.photo ? item.photo : "./images/client/1.png"}
                      alt=""
                    />
                    {/* <div
                      className="pulse-css"
                      style={
                        item.isSender ? null : { backgroundColor: " green" }
                      }
                    /> */}
                  </div>
                  <div
                    className={
                      item.isSender
                        ? "content message-content-sender"
                        : "content message-content-reciever"
                    }
                  >
                    <div className="username">
                      <h5 className="fs-18">{item.fullname}</h5>
                    </div>
                    <div className="text">
                      <p className="chat-fs-15">
                        {item.status === "Deleted"
                          ? "This message was deleted!"
                          : item.message}
                      </p>
                    </div>
                  </div>
                  {hoveredItemId === item.messageId && (
                    <div
                      className="hover-popup"
                      style={{
                        position: "absolute",
                        top: "-50px",
                        left: "75%",
                        transform: "translateX(-50%)",
                        background: "#fff",
                        padding: "5px 10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        zIndex: 10,
                      }}
                    >
                      {item.isSender && (
                        <button
                          onClick={() => handleDeleteMessage(item.messageId)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "5px",
                            borderRadius: "3px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src="./images/icon/bin.png"
                            alt="bin"
                            style={{ width: "2vw", height: "3vh" }}
                          />
                        </button>
                      )}
                      <button
                        onClick={() => handleCopyMessage(item.message)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "5px",
                          borderRadius: "3px",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src="./images/icon/copy.png"
                          alt="copy"
                          style={{ width: "2vw", height: "3vh" }}
                        />
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div
                className="no-friend-message"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <h5>Start a conversation!</h5>
              </div>
            )
          ) : (
            <div
              className="no-friend-message"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <h5>Select a friend to start chatting</h5>
            </div>
          )}
        </div>
        {/* Message Form */}
        {friendEmail && (
          <div className="form-chat">
            <form onSubmit={(e) => handleMessageSend(e)}>
              <div
                className="message-form-chat"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="message-text">
                  <textarea
                    name="message"
                    placeholder="Type your message..."
                    required
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </span>
                {/* <span>
                  <button onClick={() => toggleEmojiDiv()}>File</button>
                </span> */}
                <span className="btn-send">
                  <button
                    style={{
                      height: "8vh",
                      borderRadius: "100%",
                      marginRight: "1vw",
                    }}
                    className="waves-effect"
                    type="submit"
                    disabled={!friendEmail || text.trim() === ""}
                  >
                    {/* <i className="fas fa-paper-plane" /> */}
                    <img
                      src="./images/icon/paper.png"
                      alt="send"
                      style={{
                        width: "2vw",
                        height: "3vh",
                      }}
                    />
                  </button>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatPage;
