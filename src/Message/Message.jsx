import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useEffect, useState } from "react";
import CountNotification from "../Components/NotificationCount";
import TwoNotification from "../Components/NotificationList";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";
import ChatPage from "./ChatPage";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";
import { HubConnectionBuilder } from "@microsoft/signalr";

const Message = () => {
  const [friends, setFriends] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const fetchFriendsList = async () => {
    var response = await fetch(
      "https://localhost:7157/api/Chat/AllChatsWithFriends",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("Request successful");
      var data = await response.json();
      if (data.list.length > 0) setFriends(data.list);
      console.log(data);
    } else {
      console.log("Request failed with status:", response.status);
      var errorData = await response.text();
      console.log("Error response:", errorData);
    }
  };

  useEffect(() => {
    fetchFriendsList();
  }, []);
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
    }

    if (conn.state !== "Connected") {
      try {
        await conn.start();
        console.log("SignalR connected.");
      } catch (err) {
        console.error("Error starting SignalR connection:", err);
      }
    }
  };
  useEffect(() => {
    const setupSignalR = async () => {
      await initializeSignalRConnection();

      if (conn.state === "Connected") {
        conn.on("UpdateMessageFriendList", () => {
          console.log("hellllooooo");
          fetchFriendsList();
        });
        console.log("ReceiveMessages listener added.");
      } else {
        console.error("SignalR connection not in Connected state.");
      }
    };

    setupSignalR();

    return () => {
      if (conn) {
        conn
          .stop()
          .then(() => console.log("SignalR connection stopped."))
          .catch((err) =>
            console.error("Error stopping SignalR connection:", err)
          );
      }
    };
  }, []);

  const handleChatSelection = (email) => {
    setUserEmail(email);
  };

  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">Message</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}
              <SidebarSearchComponent></SidebarSearchComponent>
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-search-alt"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary h-100"
                            type="submit"
                          >
                            <i className="bx bx-search-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>{" "}
              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
              </div>
            </div>
          </div>

          <>
            {/* MAIN CONTENT */}
            <div className="main">
              <div className="main-content">
                <div
                  className="row"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="col-12">
                    <div className="box card-box">
                      <div className="icon-box bg-color-1">
                        <div className="icon bg-icon-1">
                          <i className="bx bxs-bell bx-tada" />
                        </div>
                        <CountNotification />
                        <TwoNotification />
                      </div>
                      <div className="icon-box bg-color-2">
                        <div className="icon bg-icon-2">
                          <i className="bx bxs-message-rounded" />
                        </div>
                        <CountMessage />
                        <TwoMessage />
                      </div>
                      <div className="icon-box bg-color-3">
                        <a className="create d-flex" href="calendar.html">
                          <div className="icon bg-icon-3">
                            <i className="bx bx-calendar" />
                          </div>
                          <CalendarCount />
                          <TwoCalendarNotification />
                        </a>
                      </div>
                      <div className="icon-box bg-color-4">
                        <a
                          className="create d-flex"
                          href="#"
                          data-toggle="modal"
                          data-target="#add_project"
                        >
                          <div className="icon bg-white">
                            <i className="bx bx-plus" />
                          </div>
                          <div className="content d-flex align-items-center">
                            <h5 className="color-white">Create New Project</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ display: "flex" }}>
                  <div className="col-4 col-md-12">
                    <div className="row">
                      <div className="col-12 mb-0">
                        <div
                          className="box box-message"
                          style={{ height: "75vh" }}
                        >
                          {/* <div className="input-group search-area">
                            <span className="input-group-text">
                              <a href="javascript:void(0)">
                                <i className="bx bx-search" />
                              </a>
                            </span>
                            <input
                              type="text" //search logic
                              className="form-control"
                              placeholder="Search"
                            />
                          </div> */}
                          <div className="box-header">
                            <h4 className="card-title">Recent Message</h4>
                          </div>
                          <div
                            className="box-content" //chats list
                          >
                            <div
                              className="horizontal-scroll"
                              // style={{ height: "auto" }}
                            >
                              <ul
                                className="message-list"
                                // style={{ height: "auto" }}
                              >
                                {friends.length > 0 &&
                                  friends.map((item) => (
                                    <li
                                      className={
                                        userEmail === item.friendEmail
                                          ? "waves-effect waves-teal active"
                                          : "waves-effect waves-teal"
                                      }
                                      key={item.friendEmail}
                                      onClick={() =>
                                        handleChatSelection(item.friendEmail)
                                      }
                                    >
                                      <div className="left d-flex">
                                        <div className="avatar">
                                          <img
                                            src={
                                              item.friendImg
                                                ? item.friendImg
                                                : "./images/client/1.png"
                                            }
                                            alt=""
                                          />
                                          <div
                                            className="pulse-css-1"
                                            style={
                                              item.isOnline
                                                ? null
                                                : { background: "gray" }
                                            }
                                          />
                                        </div>
                                        <div className="content">
                                          <div className="username">
                                            <div className="name h6">
                                              {item.friendFullname}
                                            </div>
                                          </div>
                                          <div className="text">
                                            <p>{item.recentMessage}</p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* /.left */}
                                      <div className="clearfix" />
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            {/* /.message-list scroll */}
                          </div>
                          {/* /.box-content */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChatPage friendEmail={userEmail}></ChatPage>
                </div>
                {/* <div
                  id="add_project"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  ></div> */}
                {/* </div> */}
              </div>
            </div>
            {/* END MAIN CONTENT */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Message;
