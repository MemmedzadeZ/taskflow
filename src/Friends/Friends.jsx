import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React from "react";
import CountNotification from "../Components/NotificationCount";
import TwoNotification from "../Components/NotificationList";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";
import UserFriend from "./UserFriend";
import "./css/Friend.css";
import { useState } from "react";
import AllUsers from "./AllUser";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("Your Friends");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              <div className="main-title">Friends</div>
              {/* <SidebarSearchComponent /> */}
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}

              <SidebarSearchComponent></SidebarSearchComponent>

              <CurrentPerson />
            </div>
          </div>
          {/* End Main Header */}

          <div className="main">
            <div className="main-content dashboard">
              <div className="row">
                <div className="col-12">
                  <div className="box card-box">
                    <div className="icon-box bg-color-1">
                      <div className="icon bg-icon-1">
                        <i className="bx bxs-bell bx-tada"></i>
                      </div>
                      <CountNotification />
                      <TwoNotification />
                    </div>

                    <div className="icon-box bg-color-2">
                      <div className="icon bg-icon-2">
                        <i className="bx bxs-message-rounded"></i>
                      </div>
                      <CountMessage />
                      <TwoMessage />
                    </div>

                    <div className="icon-box bg-color-3">
                      <a className="create d-flex" href="calendar.html">
                        <div className="icon bg-icon-3">
                          <i className="bx bx-calendar"></i>
                        </div>
                      </a>
                      <CalendarCount />
                      <TwoCalendarNotification />
                    </div>

                    <div className="icon-box bg-color-4">
                      <a
                        className="create d-flex"
                        href="/project"
                        data-toggle="modal"
                        data-target="#add_project"
                      >
                        <div className="icon bg-white">
                          <i className="bx bx-plus"></i>
                        </div>
                        <div className="content d-flex align-items-center">
                          <h5 className="color-white">Create New Project</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rightSection">
                <div className="tabs">
                  <button
                    className={
                      activeTab === "Your Friends" ? "activeTab" : "tab"
                    }
                    onClick={() => handleTabClick("Your Friends")}
                  >
                    Your Friends
                  </button>
                  <button
                    className={activeTab === "All Users" ? "activeTab" : "tab"}
                    onClick={() => handleTabClick("All Users")}
                  >
                    All Users
                  </button>
                </div>

                {/* Conditional Form Rendering */}
                {activeTab === "Your Friends" && <UserFriend />}

                {activeTab === "All Users" && <AllUsers />}
                {/* Notification Settings */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Friends;
