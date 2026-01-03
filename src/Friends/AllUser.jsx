import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchNewRecentActivity,
  fetchNewRequestNotification,
} from "../utils/fetchUtils/notificationUtils";
import {
  fetchFriendAllUsers,
  fetchUnFollowFriend,
} from "../utils/fetchUtils/friendUtils";
import startSignalRConnection from "../SignalR";

function AllUsers() {
  const [friends, setFriends] = useState([]);
  const [followStatus, setFollowStatus] = useState({});
  const navigate = useNavigate();
  const connRef = React.useRef(null);

  const fetchFriends = async () => {
    const data = await fetchFriendAllUsers();
    if (data) setFriends(data);
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
      }
      const reqData = {
        text: "Friend request",
        receiverEmail: friendEmail,
        isAccepted: false,
        notificationType: "FriendRequest",
      };
      const userResponse = await fetchNewRequestNotification(reqData);

      //   if (userResponse.ok) {
      //     var userData = await userResponse.json();
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

  const initializeSignalRConnection = async () => {
    if (!connRef.current) {
      connRef.current = await startSignalRConnection();
    }
  };

  const SendFollowCall = async (id) => {
    if (!connRef.current || connRef.current.state !== "Connected") {
      console.warn("SignalR not connected");
      return;
    }

    try {
      await connRef.current.invoke("SendFollow", id);
      console.log(`Follow request sent for ID: ${id}`);
    } catch (err) {
      console.error("Error sending follow request:", err);
    }
  };

  const unfollowFriend = async (friendEmail) => {
    const response = await fetchUnFollowFriend(friendEmail);
    if (response) {
      toast.error("Error while unfollowing friend");
      return;
    }
    toast.success("Friend unfollowed successfully");
    fetchFriends();
  };

  useEffect(() => {
    let isMounted = true;

    const setupSignalR = async () => {
      await initializeSignalRConnection();

      if (!connRef.current || !isMounted) return;

      connRef.current.on("UpdateUserActivity", () => {
        console.log("update user activity");
        fetchFriends();
      });

      connRef.current.on("InwokeSendFollow", (userId) => {
        fetchFriends();
        SendFollowCall(userId);
      });
    };

    setupSignalR();

    return () => {
      isMounted = false;
      if (connRef.current) {
        connRef.current.off("UpdateUserActivity");
        connRef.current.off("InwokeSendFollow");
        connRef.current.stop();
        connRef.current = null;
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
