import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllUsers } from "../HubFunctions/connection";

function AllUsers() {
  const [friends, setFriends] = useState([]);
  const [followStatus, setFollowStatus] = useState({}); // Store follow request status by email
  const navigate = useNavigate();
  const fetchFriends = async () => {};

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
    GetAllUsers();
  }, []);

  return (
    <div className="row " style={{ justifyContent: "flex-start" }}>
      <div className="col-3 col-md-6 col-sm-12 mb-25">
        <div
          className="box client"
          id="all-users-div"
          style={{ display: "flex", gap: "4vw", width: "16vw" }}
        ></div>
      </div>
    </div>
  );
}

export default AllUsers;
