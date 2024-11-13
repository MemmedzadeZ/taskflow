import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserFriend() {
  const [friends, setFriends] = useState([]);
  const [connection, setConnection] = useState(null);
  const navigate = useNavigate();
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken?.nameid;
  };
  const goToUserProfile = (friendEmail) => {
    navigate(`/viewProfile/${friendEmail}`);
  };
  const fetchFriends = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Friend/AllFriends",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.error("Error fetching friend list:", error);
    }
  };

  useEffect(() => {
    fetchFriends();

    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    newConnection
      .start()
      .then(() => console.log("SignalR Connected"))
      .catch((err) => console.log("Error while starting connection: " + err));

    newConnection.on("ReceiveOnlineStatus", (userId, isOnline) => {
      const currentUserId = getUserIdFromToken();
      if (currentUserId !== userId) {
        setFriends((prevFriends) =>
          prevFriends.map((friend) =>
            friend.id === userId ? { ...friend, isOnline: isOnline } : friend
          )
        );
      }
    });

    setConnection(newConnection);

    // Cleanup
    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, []);

  return (
    <div
      className="row "
      style={{
        justifyContent: "flex-start",
      }}
    >
      {friends.map((item, index) => (
        <div className="col-3 col-md-6 col-sm-12 mb-25" key={index}>
          <div className="box client">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-custom-components">
                <BsThreeDotsVertical size={24} className="text-primary" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="/dropdown"
                  className="px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                >
                  UnFollow
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="box-body pt-5 pb-0">
              <div className="img-box">
                <img
                  src={
                    item.friendPhoto
                      ? item.friendPhoto
                      : "./images/client/1.png"
                  }
                  style={{ height: "100px", width: "100px" }}
                  alt=""
                />
                <div
                  className="pulse-css"
                  style={item.isOnline ? null : { backgroundColor: "grey" }}
                />
              </div>
              <a href="client-details.html">
                <h5 className="mt-17">{item.friendName}</h5>
              </a>
              <p className="fs-14 font-w400 font-main">
                Founder at{" "}
                <span className="text-clo-primary font-w500 pl-4">
                  {item.friendOccupation}
                </span>
              </p>
              <ul className="info">
                <li className="fs-14">
                  <i className="bx bxs-phone" />
                  {item.friendPhone}
                </li>
                <li className="fs-14">
                  <i className="bx bxs-envelope" />
                  {item.friendEmail}
                </li>
              </ul>
              <div className="group-btn d-flex justify-content-between">
                <a className="bg-btn-pri color-white" href="/message">
                  Message
                </a>
                <a
                  className="bg-btn-sec color-main"
                  onClick={() => goToUserProfile(item.friendEmail)}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserFriend;
