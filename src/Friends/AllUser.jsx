import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const response = await fetch(
        "https://localhost:7157/api/Notification/NewRequestNotification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            text: "Friend request",
            receiverEmail: friendEmail,
            isAccepted: false,
            notificationType: "FriendRequest",
          }),
        }
      );

      if (response.ok) {
        toast.success("Follow request sent successfully!");
        setFollowStatus((prevStatus) => ({
          ...prevStatus,
          [friendEmail]: "sent",
        }));
      } else {
        const errorData = await response.json();
        console.error("Error sending follow request:", errorData);
        toast.error("Failed to send follow request");

        setFollowStatus((prevStatus) => ({
          ...prevStatus,
          [friendEmail]: "failed",
        }));
      }
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

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="row" style={{ justifyContent: "flex-start" }}>
        {friends.map((item, index) => (
          <div className="col-3 col-md-6 col-sm-12 mb-25" key={index}>
            <div className="box client">
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
                <h5 className="mt-17">{item.friendName}</h5>
                <p className="fs-14 font-w400 font-main">
                  {item.friendOccupation}
                </p>
                <ul className="info">
                  <li className="fs-14">
                    <i className="bx bxs-phone" style={{ color: "#cfe7e0" }} />
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
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleFollow(item.friendEmail)}
                    disabled={followStatus[item.friendEmail] === "sent"}
                  >
                    {followStatus[item.friendEmail] === "sent"
                      ? "Request Sent"
                      : "Follow"}
                  </button>
                  <a
                    className="bg-btn-sec color-main"
                    style={{ backgroundColor: "#cfe7e0", cursor: "pointer" }}
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
    </>
  );
}

export default AllUsers;
