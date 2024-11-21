import { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
// // import emptyBoxImage from "../../public/images/icon/empty-box.png";

const RecentActivity = () => {
  const [activityList, setActivityList] = useState([]);
  const fetchData = async () => {
    try {
      console.log("Fetching recent activity...");
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

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setActivityList(data.list || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setActivityList([]);
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const conn = new HubConnectionBuilder()
  //     .withUrl("https://localhost:7157/connect", {
  //       accessTokenFactory: () => token,
  //     })
  //     .configureLogging("information")
  //     .build();

  //   conn
  //     .start()
  //     .then(() => {
  //       console.log("SignalR connected.");
  //     })
  //     .catch((err) => console.error("SignalR connection error:", err));

  //   conn.on("UpdateRecentTeamActivities", () => {
  //     fetchData();
  //   });
  //   return () => {
  //     if (conn) {
  //       conn.stop();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    fetchData();
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
          <div className="card-options pr-3">
            {/* <div className="dropdown">
              <a
                href=" "
                className="btn ripple btn-outline-light dropdown-toggle fs-12"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Date <i className="feather feather-chevron-down" />{" "}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                role="menu"
                style={{}}
              >
                <li>
                  <a href=" ">Monthly</a>
                </li>
                <li>
                  <a href=" ">Yearly</a>
                </li>
                <li>
                  <a href=" ">Weekly</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "50vh",
          }}
        >
          <div className="vertical-scroll" style={{ padding: "20px" }}>
            {activityList.length ? (
              activityList.map((item, index) => (
                <div className="box-body pb-0" key={index}>
                  <ul className="message mb-2">
                    <li className="dlab-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="./images/avatar/message-01.png"
                            className="rounded-circle user_img"
                            alt=""
                          />
                        </div>
                        <div className="user_info">
                          <div>
                            <a
                              className="font-w500 mt-5 mb-5"
                              href="message.html"
                              style={{ fontSize: "20px" }}
                            >
                              {item.username}
                            </a>
                            <span style={{ color: "gray", marginLeft: "5px" }}>
                              {item.createDate}
                            </span>
                          </div>
                          <p className="mb-0">{item.text}</p>
                        </div>
                      </div>
                      <div className="card-options me-0 d-flex align-items-center">
                        <a href=" " className="text-primary fs-14">
                          Add New Task
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
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
  );
};

export default RecentActivity;
