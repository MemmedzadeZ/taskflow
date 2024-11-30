import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
const RecentActivity = () => {
  const [activityList, setActivities] = useState([]);

  // Fetch data from the backend
  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/ProjectActivity/TeamMemberActivities",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setActivities(data);
      } else {
        console.error("Error fetching activities", data);
      }
    } catch (error) {
      console.error("Error during API call", error);
    }
  };
  //SIGNALRR
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

    conn.on("ProjectsRecentActivity", (message) => {
      fetchActivities();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  // Fetch the activities when the component is mounted
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="col-6 col-md-12">
      <div className="box">
        <div className="box-header  pt-0 align-items-start">
          <div className="me-auto">
            <h4 className="card-title mb-0 fs-22">Recent Activity</h4>
            <p className="mt-6 fs-14 mb-14">
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="card-options pr-3"></div>
        </div>
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "32vh",
          }}
        >
          <div className="vertical-scroll" style={{ padding: "20px" }}>
            <div className="box-body pb-0">
              {" "}
              {activityList.length ? (
                activityList.map((activity, index) => (
                  <ul className="message mb-2" key={index}>
                    <li className="dlab-chat-user" key={index}>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src={
                              activity.path
                                ? activity.path
                                : "/images/default-user.png"
                            }
                            className="rounded-circle user_img"
                            alt="User Avatar"
                          />
                        </div>
                        <div className="user_info">
                          <a
                            className="fs-15 font-w500 mt-5 mb-5"
                            href="message.html"
                          >
                            {activity.username}
                          </a>
                          <p className="fs-13 mb-0">
                            {new Date(activity.createDate).toLocaleTimeString()}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="card-options me-0 d-flex align-items-center">
                        <a href="#" className="text-primary fs-14">
                          {activity.text}
                        </a>
                      </div>
                    </li>
                  </ul>
                ))
              ) : (
                <div
                  style={{
                    width: "33vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "3vh",
                  }}
                >
                  <img
                    src="/assets/images/empty-box.png"
                    alt="img"
                    style={{ width: "11vw", height: "14vh" }}
                  />
                  <h3 style={{ fontWeight: "600" }}>No Data Found!</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
