import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { HubConnectionBuilder } from "@microsoft/signalr";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchNewRecentActivity } from "../utils/fetchUtils/notificationUtils";

function AllUsers() {
  const [friends, setFriends] = useState([]);
  const [followStatus, setFollowStatus] = useState({});
  const navigate = useNavigate();

  const fetchFriends = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Friend/AllUser",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setFriends(data);
      } else {
        console.error("Error fetching friends list:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching friends list:", error);
    }
  };

  const handleFollow = async (friendEmail) => {
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [friendEmail]: "sending",
    }));

    try {
      const response = await fetchNewRecentActivity({
        text: "Friend request",
        receiverEmail: friendEmail,
        isAccepted: false,
        notificationType: "FriendRequest",
      });

      if (response) {
        toast.success("Follow request sent successfully!");

        setFollowStatus((prevStatus) => ({
          ...prevStatus,
          [friendEmail]: "sent",
        }));
      } else {
        const errorData = await response.json();
        console.error("Error sending follow request:", errorData);
        toast.error("Failed to send follow request");

        // setFollowStatus((prevStatus) => ({
        //   ...prevStatus,
        //   [friendEmail]: "failed",
        // }));
      }
      //   const userResponse = await fetch(
      //     "https://localhost:7157/api/Notification/NewRequestNotification",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${localStorage.getItem("token")}`,
      //       },
      //       body: JSON.stringify({
      //         text: "Friend request",
      //         receiverEmail: friendEmail,
      //         isAccepted: false,
      //         notificationType: "FriendRequest",
      //       }),
      //     }
      //   );
      //   if (userResponse.ok) {
      //     var userData = await userResponse.json();

      //   }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the follow request");
      setFollowStatus((prevStatus) => ({
        ...prevStatus,
        [friendEmail]: "failed",
      }));
    }
  };

  const goToUserProfile = (friendEmail) => {
    navigate(`/viewProfile/${friendEmail}`);
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

      try {
        await conn.start();
        console.log("SignalR connected.");
      } catch (err) {
        console.error("SignalR connection error:", err);
      }
    }
  };

  const SendFollowCall = async (id) => {
    if (!conn || conn.state !== "Connected") {
      console.warn("Connection not established. Attempting to connect...");
      await initializeSignalRConnection();
    }

    try {
      await conn.invoke("SendFollow", id);
      console.log(`Follow request sent for ID: ${id}`);
    } catch (err) {
      console.error("Error sending follow request:", err);
    }
  };
  const unfollowFriend = async (friendEmail) => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/Friend/UnFollow/${friendEmail}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        toast.error("Error while unfollowing friend");
        return;
      }

      toast.success("Friend unfollowed successfully");
      fetchFriends();
    } catch (error) {
      toast.error("Error while unfollowing friend:" + error);
    }
  };

  useEffect(() => {
    if (!conn || conn.state !== "Connected") {
      console.warn("Connection not established. Attempting to connect...");
      initializeSignalRConnection();
    }

    conn.on("UpdateUserActivity", () => {
      console.log("update user activity");
      fetchFriends();
    });
    conn.on("InwokeSendFollow", (userId) => {
      fetchFriends();
      SendFollowCall(userId);
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);

  useEffect(() => {
    fetchFriends();
    console.log("friends" + friends);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="row" style={{ justifyContent: "flex-start" }}>
        {friends.map((item, index) =>
          item.isFriend === false ? (
            <div className="col-3 col-md-6 col-sm-12 mb-25" key={index}>
              <div className="box client">
                <div className="box-body pt-5 pb-0">
                  <div className="img-box">
                    <img
                      src={
                        item.friendPhoto
                          ? item.friendPhoto
                          : "/images/default-user.png"
                      }
                      style={{ height: "100px", width: "100px" }}
                      alt=""
                    />
                    <div
                      className="pulse-css"
                      style={item.isOnline ? null : { backgroundColor: "grey" }}
                    />
                  </div>
                  <h5 className="mt-17">{item.friendName}</h5>
                  <p className="fs-14 font-w400 font-main">
                    {item.friendOccupation}
                  </p>
                  <ul className="info">
                    <li className="fs-14">
                      <i
                        className="bx bxs-phone"
                        style={{ color: "#cfe7e0" }}
                      />
                      {item.friendPhone}
                    </li>
                    <li className="fs-14">
                      <i
                        className="bx bxs-envelope"
                        style={{ color: "#cfe7e0" }}
                      />
                      {item.friendEmail}
                    </li>
                  </ul>
                  <div className="group-btn d-flex justify-content-between">
                    <button
                      className="bg-btn-pri color-white"
                      style={{
                        backgroundColor: item.isFriend
                          ? "green"
                          : item.hasRequestPending
                          ? "#77b168"
                          : "green",
                      }}
                      onClick={() => handleFollow(item.friendEmail)}
                      disabled={item.hasRequestPending}
                    >
                      {item.hasRequestPending ? "Request Sent" : "Follow"}
                    </button>

                    <a
                      className="bg-btn-sec color-main"
                      style={{
                        backgroundColor: "#cfe7e0",
                        cursor: "pointer",
                      }}
                      onClick={() => goToUserProfile(item.friendEmail)}
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default AllUsers;
