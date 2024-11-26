import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Reminder() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const response = await fetch(
      "https://localhost:7157/api/Notification/CalendarNotifications",
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
  };

  const handleReject = async (id) => {
    console.log(`Rejected notification with ID: ${id}`);

    try {
      const response = await fetch(
        `https://localhost:7157/api/Notification/DeletedCalendarMessage/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // setNotifications((prevTasks) =>
        //   prevTasks.filter((task) => task.id !== id)
        // );
        toast.info("Request deleted successfully.");
        const activityData = {
          text: "Deleted a calendar reminder",
          type: "calendar",
        };

        await fetch(
          "https://localhost:7157/api/Notification/NewRecentActivity",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(activityData),
          }
        );
      } else {
        toast.error("Failed to delete request.");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      toast.error("An error occurred while deleting the request.");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect", {
        accessTokenFactory: () => token,
      })
      .configureLogging("information")
      .build();
    conn
      .start()
      .then(() => {
        console.log("SignalR connected.");
      })
      .catch((err) => console.error("SignalR connection error:", err));

    conn.on("ReminderRequestList", (message) => {
      fetchNotifications();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  useEffect(() => {
    fetchNotifications();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  return (
    <div className="col-lg-12">
      <ToastContainer />

      <div className="card">
        <div className="card-body">
          <div className="d-md-flex">
            <div>
              <h4 className="card-title">Reminders</h4>
            </div>
          </div>{" "}
          <div
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              maxHeight: "40vh",
            }}
          >
            <div className="vertical-scroll" style={{ padding: "20px" }}>
              <div className="table-responsive">
                <table className="table bordered-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
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
                            <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                              {formatDate(notification.date)}
                            </span>
                          </div>
                        </td>
                        <td>{notification.text}</td>
                        <td
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <a
                            className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                            onClick={() => handleReject(notification.id)}
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
                </table>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reminder;
