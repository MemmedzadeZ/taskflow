import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useState } from "react";
import CountNotification from "../Components/NotificationCount";
import TwoNotification from "../Components/NotificationList";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";

const Message = () => {
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
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

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
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="btn dropdown-toggle" id="header-lang-img">
                    EN
                    <i className="bx bx-caret-down"></i>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="en"
                  >
                    <img
                      src="/images/flags/us.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">English</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="sp"
                  >
                    <img
                      src="/images/flags/spain.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Spanish</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="gr"
                  >
                    <img
                      src="/images/flags/germany.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">German</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="it"
                  >
                    <img
                      src="/images/flags/italy.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Italian</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="ru"
                  >
                    <img
                      src="/images/flags/russia.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Russian</span>
                  </a>
                </div>
              </div>

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span>Profile</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                    <span>My Wallet</span>
                  </a>
                  <a className="dropdown-item d-block" href="#">
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                    <span>Settings</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                    <span>Lock screen</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item text-danger"
                    href="user-login.html"
                  >
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                    <span>Logout</span>
                  </a>
                </div>
              </div>
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
                <div className="row">
                  <div className="col-4 col-md-12">
                    <div className="row">
                      <div className="col-12 mb-0">
                        <div className="box box-message">
                          <div className="input-group search-area">
                            <span className="input-group-text">
                              <a href="javascript:void(0)">
                                <i className="bx bx-search" />
                              </a>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                          </div>
                          <div className="box-header">
                            <h4 className="card-title">Recent Message</h4>
                          </div>
                          <div className="box-content">
                            <ul className="message-list">
                              <li className="waves-effect waves-teal active">
                                <div className="left d-flex">
                                  <div className="avatar">
                                    <img
                                      src="./images/avatar/message-2.png"
                                      alt=""
                                    />
                                    <div className="pulse-css-1" />
                                  </div>
                                  <div className="content">
                                    <div className="username">
                                      <div className="name h6">
                                        Elizabeth Holland
                                      </div>
                                    </div>
                                    <div className="text">
                                      <p>Hi, Did you check the file?</p>
                                    </div>
                                  </div>
                                </div>
                                {/* /.left */}
                                <div className="clearfix" />
                              </li>
                            </ul>
                            {/* /.message-list scroll */}
                          </div>
                          {/* /.box-content */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 col-md-12">
                    <div className="box message-info">
                      <div className="box-info-messager">
                        <div className="message-pic">
                          <img src="./images/avatar/message-1.png" alt="" />
                          <div className="pulse-css" />
                        </div>
                        <div className="content">
                          <div className="username">
                            <h5 className="fs-18">Elizabeth Holland</h5>
                          </div>
                          <div className="text">
                            <p className="fs-14">Hi, Did you check the file?</p>
                          </div>
                        </div>
                      </div>
                      {/* /.box-info-messager */}
                      <div className="divider" />
                      <div className="message-box">
                        <div className="message-in">
                          <div className="message-pic">
                            <img src="./images/avatar/message-1.png" alt="" />
                            <div className="pulse-css-1" />
                          </div>
                          <div className="message-body">
                            <div className="message-text">
                              <p>
                                Proin ac quam et lectus vestibulum blandit. Nunc
                                maximus nibh at placerat tincidunt. Nam sem
                                lacus, ornare non ante sed, ultricies fringilla
                                massa. Ut congue, elit non tempus elementum, sem
                                risus tincidunt diam.
                              </p>
                            </div>
                            <div className="message-meta">
                              <p className="mt-10">
                                Sunday, march 17, 2021 at 2:39 PM
                              </p>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                        {/* /.message-in */}
                        <div className="clearfix" />
                        <div className="message-out">
                          <div className="message-pic">
                            <img src="./images/profile/profile.png" alt="" />
                            <div className="pulse-css-1" />
                          </div>
                          <div className="message-body">
                            <div className="message-text">
                              <p>
                                Cras eu elit congue, placerat dui ut, tincidunt
                                nisl.{" "}
                              </p>
                              <p>
                                Duis mauris augue, efficitur eu arcu sit amet,
                                posuere dignissim neque. Aenean enim sem,
                                pharetra et magna sit amet, luctus
                              </p>
                            </div>
                            <div className="message-meta">
                              <p className="mt-10">
                                Sunday, march 17, 2021 at 2:45 PM
                              </p>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                        {/* /.message-out */}
                        <div className="clearfix" />
                        <div className="message-in">
                          <div className="message-pic">
                            <img src="./images/avatar/message-1.png" alt="" />
                            <div className="pulse-css-1" />
                          </div>
                          <div className="message-body">
                            <div className="message-text">
                              <p>
                                Proin ac quam et lectus vestibulum blandit. Nunc
                                maximus nibh at placerat tincidunt. Nam sem
                                lacus, ornare non ante sed.
                              </p>
                              <p>Proin ac quam et lectus vestibulum </p>
                            </div>
                            <div className="message-meta">
                              <p className="mt-10">
                                Sunday, march 17, 2021 at 2:52 PM
                              </p>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="message-in">
                          <div className="message-pic">
                            <img src="./images/avatar/message-1.png" alt="" />
                            <div className="pulse-css-1" />
                          </div>
                          <div className="message-body">
                            <div className="message-text">
                              <p>
                                Proin ac quam et lectus vestibulum blandit. Nunc
                                maximus nibh at placerat tincidunt. Nam sem
                                lacus, ornare non ante sed.
                              </p>
                              <p>Proin ac quam et lectus vestibulum </p>
                            </div>
                            <div className="message-meta">
                              <p className="mt-10">
                                Sunday, march 17, 2021 at 2:52 PM
                              </p>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="form-chat">
                        <form action="#" method="get" acceptCharset="utf-8">
                          <div className="message-form-chat">
                            {/* /.pin */}
                            <span className="message-text">
                              <textarea
                                name="message"
                                placeholder="Type your message..."
                                required="required"
                                defaultValue={""}
                              />
                            </span>
                            {/* /.message-text */}
                            <span className="camera">
                              <a href="#" title="">
                                <i className="fas fa-smile" />
                              </a>
                            </span>
                            {/* /.camera */}
                            <span className="icon-message">
                              <a href="#" title="">
                                <i className="fas fa-paperclip" />
                              </a>
                            </span>
                            {/* /.icon-right */}
                            {/* <div className="icon-mobile">
                                  <ul>
                                      <li>
                                          <a href="#" title=""><i className="fas fa-smile"></i></a>
                                      </li>
                                      <li>
                                          <a href="#" title=""><i className="fas fa-paperclip"></i></a>
                                      </li>
                                  </ul>
                              </div> */}
                            {/* /.icon-right */}
                            <span className="btn-send">
                              <button className="waves-effect" type="submit">
                                Send <i className="fas fa-paper-plane" />
                              </button>
                            </span>
                            {/* /.btn-send */}
                          </div>
                          {/* /.message-form-chat */}
                          <div className="clearfix" />
                        </form>
                        {/* /form */}
                      </div>
                    </div>
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
                        <a href="/project">
                          <h5 className="modal-title">Create Project</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </a>
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

export default Message;
