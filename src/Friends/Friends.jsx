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
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}
              <SidebarSearchComponent></SidebarSearchComponent>

              <CurrentPerson></CurrentPerson>
            </div>
          </div>

          <>
            {/* MAIN CONTENT */}
            <div className="main">
              <div className="main-content">
                <div className="row">
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
                          href="/project"
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
                  <div className="rightSection" style={{ width: "100%" }}>
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
                        className={
                          activeTab === "All Users" ? "activeTab" : "tab"
                        }
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

                <div
                  id="add_project"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Create Project</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Project Name</label>
                                <input
                                  className="form-control"
                                  defaultValue=""
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Client</label>
                                <select className="select">
                                  <option>Client 1</option>
                                  <option>Client 2</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Start Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control "
                                    type="date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>End Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control "
                                    type="date"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>Rate</label>
                                <input
                                  placeholder="$50"
                                  className="form-control"
                                  defaultValue=""
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>&nbsp;</label>
                                <select className="select">
                                  <option>Hourly</option>
                                  <option selected="">Fixed</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Priority</label>
                                <select className="select">
                                  <option selected="">High</option>
                                  <option>Medium</option>
                                  <option>Low</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              rows={4}
                              className="form-control"
                              placeholder="Enter your message here"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label>Upload Files</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="submit-section">
                            <button className="btn btn-primary submit-btn">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAIN CONTENT */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Friends;
