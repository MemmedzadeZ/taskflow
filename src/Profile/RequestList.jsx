import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RequestList() {
  const [notifications, setNotifications] = useState([]);
  const [conn, setConn] = useState(null);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Notification/RequestNotification",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  const initializeSignalRConnection = async () => {
    if (!conn) {
      const token = localStorage.getItem("token");
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7157/connect", {
          accessTokenFactory: () => token,
        })
        .configureLogging("information")
        .build();

      connection.on("RequestList", fetchNotifications);
      // connection.on("UpdateProfileRequestList", fetchNotifications);

      try {
        await connection.start();
        console.log("SignalR connected.");
        setConn(connection);
      } catch (err) {
        console.error("SignalR connection error:", err);
      }
    }
  };

  useEffect(() => {
    initializeSignalRConnection();

    return () => {
      if (conn) {
        conn.stop();
        console.log("SignalR disconnected.");
      }
    };
  }, [conn]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleAccept = async (requestId) => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/Notification/AcceptRequestNotification/${requestId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        toast.success("Request accepted successfully.");
        // setNotifications((prevNotifications) =>
        //   prevNotifications.filter(
        //     (notification) => notification.requestId !== requestId
        //   )
        // );
      } else {
        toast.error("Failed to accept request.");
      }
    } catch (error) {
      console.error("Error accepting request:", error);
      toast.error("An error occurred while accepting the request.");
    }
  };

  const handleReject = async (requestId) => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/Notification/DeleteRequestNotification/${requestId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        toast.info("Request deleted successfully.");
        // setNotifications((prevNotifications) =>
        //   prevNotifications.filter(
        //     (notification) => notification.requestId !== requestId
        //   )
        // );
      } else {
        toast.error("Failed to delete request.");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      toast.error("An error occurred while deleting the request.");
    }
  };

  return (
    <div className="col-lg-12">
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <div className="d-md-flex">
            <div>
              <h4 className="card-title">Your Requests</h4>
            </div>
          </div>
          <div className="table-responsive">
            <div
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                maxHeight: "40vh",
              }}
            >
              <div className="vertical-scroll" style={{ padding: "20px" }}>
                <table className="table bordered-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Users</th>
                      <th scope="col">Message</th>
                      <th scope="col" className="text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {notifications.map((notification, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={
                                notification.image
                                  ? notification.image
                                  : "/images/default-user.png"
                              }
                              alt=""
                              className="flex-shrink-0 me-12 radius-8"
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                              }}
                            />
                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                              {notification.senderName}
                            </span>
                          </div>
                        </td>
                        <td>{notification.text}</td>
                        <td
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {notification.typee === "FriendRequest" ||
                          notification.typee === "ProjectRequest" ? (
                            <a
                              className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                              onClick={() =>
                                handleAccept(notification.requestId)
                              }
                              style={{
                                cursor: "pointer",
                                display:
                                  notification.typee === "ProjectRequest" ||
                                  notification.typee === null
                                    ? "none"
                                    : "block",
                              }}
                              href=" "
                              disabled={notification.typee === "FriendRequest"}
                            >
                              <svg
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--lucide"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                >
                                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                </g>
                              </svg>
                            </a>
                          ) : null}

                          <a
                            className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                            onClick={() => handleReject(notification.requestId)}
                            style={{ cursor: "pointer" }}
                          >
                            <svg
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--mingcute"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g fill="none">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                <path
                                  fill="currentColor"
                                  d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestList;
