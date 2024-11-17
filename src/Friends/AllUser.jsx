import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AllUsers() {
  const [friends, setFriends] = useState([]);
  const [followStatus, setFollowStatus] = useState({}); // Store follow request status by email
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
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.error("Error fetching friend list:", error);
    }
  };

  const handleFollow = async (friendEmail) => {
    console.log(friendEmail);

    // Set the follow status to "sending" or "sent" for this user
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [friendEmail]: "sending", // Mark as sending
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
          }),
        }
      );

      if (response.ok) {
        alert("Follow request sent!");
        // Update follow status to "sent" (disable button)
        setFollowStatus((prevStatus) => ({
          ...prevStatus,
          [friendEmail]: "sent",
        }));
      } else {
        const errorData = await response.json();
        console.error("Error sending follow request:", errorData);
        alert("Failed to send follow request");
        setFollowStatus((prevStatus) => ({
          ...prevStatus,
          [friendEmail]: "failed",
        }));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the follow request");
      setFollowStatus((prevStatus) => ({
        ...prevStatus,
        [friendEmail]: "failed",
      }));
    }
  };

  // Function to handle accepting the friend request (trigger this based on your logic)
  const handleAccept = (friendEmail) => {
    // Reactivate the button once the request is accepted (this could be triggered from a notification or other event)
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [friendEmail]: "accepted",
    }));
  };
  const goToUserProfile = (friendEmail) => {
    navigate(`/viewProfile/${friendEmail}`);
  };
  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="row " style={{ justifyContent: "flex-start" }}>
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
                  <i className="bx bxs-phone" style={{ color: "#cfe7e0" }} />
                  {item.friendPhone}
                </li>
                <li className="fs-14">
                  <i className="bx bxs-envelope" style={{ color: "#cfe7e0" }} />
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
                    ? "Follow Request Sent"
                    : "Follow"}
                </button>
                <a
                  className="bg-btn-sec color-main"
                  style={{ backgroundColor: "#cfe7e0" }}
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

export default AllUsers;
