import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useState } from "react";

const Kanban = () => {
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
              <div className="main-content board">
                <div className="row">
                  <div className="col-12">
                    <div className="box card-box">
                      <div className="icon-box bg-color-1">
                        <div className="icon bg-icon-1">
                          <i className="bx bxs-bell bx-tada" />
                        </div>
                        <div className="content">
                          <h5 className="title-box">Notification</h5>
                          <p className="color-1 mb-0 pt-4">
                            5 Unread notification
                          </p>
                        </div>
                      </div>
                      <div className="icon-box bg-color-2">
                        <div className="icon bg-icon-2">
                          <i className="bx bxs-message-rounded" />
                        </div>
                        <div className="content click-c">
                          <h5 className="title-box">Message</h5>
                          <p className="color-2 mb-0 pt-4">
                            5 Unread notification
                          </p>
                        </div>
                        <div className="notification-list card">
                          <div className="top box-header">
                            <h5>Notification</h5>
                          </div>
                          <div className="pd-1r">
                            <div className="divider" />
                          </div>
                          <div className="box-body">
                            <ul className="list">
                              <li className="d-flex no-seen">
                                <div className="img-mess">
                                  <img
                                    className="mr-14"
                                    src="./images/avatar/avt-1.png"
                                    alt="avt"
                                  />
                                </div>
                                <div className="info">
                                  <a
                                    href="#"
                                    className="font-w600 mb-0 color-primary"
                                  >
                                    Elizabeth Holland
                                  </a>
                                  <p className="pb-0 mb-0 line-h14 mt-6">
                                    Proin ac quam et lectus vestibulum
                                  </p>
                                </div>
                              </li>
                              <li className="d-flex">
                                <div className="img-mess">
                                  <img
                                    className="mr-14"
                                    src="./images/avatar/avt-1.png"
                                    alt="avt"
                                  />
                                </div>
                                <div className="info">
                                  <a
                                    href="#"
                                    className="font-w600 mb-0 color-primary"
                                  >
                                    Elizabeth Holland
                                  </a>
                                  <p className="pb-0 mb-0 line-h14 mt-6">
                                    Proin ac quam et lectus vestibulum
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="btn-view">
                              <a className="font-w600 h5" href="message.html">
                                View All
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="icon-box bg-color-3">
                        <a className="create d-flex" href="calendar.html">
                          <div className="icon bg-icon-3">
                            <i className="bx bx-calendar" />
                          </div>
                          <div className="content">
                            <h5 className="title-box">Calendar</h5>
                            <p className="color-3 mb-0 pt-4">
                              5 Unread notification
                            </p>
                          </div>
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
               
                  <div className="col-12">
                    <div className="kanban-board card mb-0 pd-0">
                      <div className="box-body pd-0">
                        <div className="kanban-cont">
                          <div className="kanban-list kanban-list-to-do">
                            <div className="kanban-header">
                              <h6 className="card-title">To-Do List</h6>
                              <div className="dropdown">
                                <a
                                  href="javascript:void(0);"
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash" /> Delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="kanban-wrap">
                              <div className="panel">
                                <div className="kanban-box item-box">
                                  <div className="dropdown edit">
                                    <a
                                      href="#"
                                      className="btn-link"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_project"
                                      >
                                        <i className="bx bx-trash" /> Delete
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#edit_card_modal"
                                      >
                                        <i className="bx bx-edit mr-5" />
                                        Edit
                                      </a>
                                    </div>
                                  </div>
                                  <div className="img-box">
                                    <img
                                      src="./images/to-do-list/project-1.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-box">
                                    <h6 className="title fs-16">
                                      Food Website hero area
                                    </h6>
                                    <div
                                      className="progress skill-progress mt-15 mb-15"
                                      style={{ height: 7 }}
                                    >
                                      <div
                                        className="progress-bar progress-animated"
                                        style={{ width: "78%", height: 7 }}
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          78% Complete
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="link">
                                        <a href="#">
                                          <i className="fas fa-paperclip" />
                                        </a>
                                      </div>
                                      <div className="time">
                                        <p className="font-main mb-0">
                                          <i className="far fa-clock" />
                                          Due in 5 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="btn-add-card">
                              <a
                                className="dropdown-item font-w500 fs-16"
                                href="#"
                                data-toggle="modal"
                                data-target="#add_card_modal"
                              >
                                <i className="fas fa-plus mr-14" />
                                Add a card
                              </a>
                            </div>
                          </div>
                          <div className="kanban-list kanban-progress">
                            <div className="kanban-header">
                              <h6 className="card-title">In Progress</h6>
                            </div>
                            <div className="kanban-wrap">
                              <div className="panel">
                                <div className="kanban-box item-box">
                                  <div className="dropdown edit">
                                    <a
                                      href="#"
                                      className="btn-link"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_project"
                                      >
                                        <i className="bx bx-trash" /> Delete
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#edit_card_modal"
                                      >
                                        <i className="bx bx-edit mr-5" />
                                        Edit
                                      </a>
                                    </div>
                                  </div>
                                  <div className="img-box">
                                    <img
                                      src="./images/to-do-list/project-2.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-box">
                                    <h6 className="title fs-16">
                                      Food Website hero area
                                    </h6>
                                    <div
                                      className="progress skill-progress mt-15 mb-15"
                                      style={{ height: 7 }}
                                    >
                                      <div
                                        className="progress-bar progress-animated"
                                        style={{ width: "78%", height: 7 }}
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          78% Complete
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="link">
                                        <a href="#">
                                          <i className="fas fa-paperclip" />
                                        </a>
                                      </div>
                                      <div className="time">
                                        <p className="font-main mb-0">
                                          <i className="far fa-clock" />
                                          Due in 5 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="panel">
                                <div className="kanban-box item-box">
                                  <div className="dropdown edit">
                                    <a
                                      href="#"
                                      className="btn-link"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_project"
                                      >
                                        <i className="bx bx-trash" /> Delete
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#edit_card_modal"
                                      >
                                        <i className="bx bx-edit mr-5" />
                                        Edit
                                      </a>
                                    </div>
                                  </div>
                                  <div className="img-box">
                                    <img
                                      src="./images/to-do-list/project-3.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-box">
                                    <h6 className="title fs-16">
                                      Food Website hero area
                                    </h6>
                                    <div
                                      className="progress skill-progress mt-15 mb-15"
                                      style={{ height: 7 }}
                                    >
                                      <div
                                        className="progress-bar progress-animated"
                                        style={{ width: "78%", height: 7 }}
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          78% Complete
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="link">
                                        <a href="#">
                                          <i className="fas fa-paperclip" />
                                        </a>
                                      </div>
                                      <div className="time">
                                        <p className="font-main mb-0">
                                          <i className="far fa-clock" />
                                          Due in 5 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="btn-add-card">
                              <a
                                className="dropdown-item font-w500 fs-16"
                                href="#"
                                data-toggle="modal"
                                data-target="#add_card_modal"
                              >
                                <i className="fas fa-plus mr-14" />
                                Add a card
                              </a>
                            </div>
                          </div>
                          <div className="kanban-list kanban-review">
                            <div className="kanban-header">
                              <h6 className="card-title">In Review</h6>
                            </div>
                            <div className="kanban-wrap">
                              <div className="panel">
                                <div className="kanban-box item-box">
                                  <div className="dropdown edit">
                                    <a
                                      href="#"
                                      className="btn-link"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_project"
                                      >
                                        <i className="bx bx-trash" /> Delete
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#edit_card_modal"
                                      >
                                        <i className="bx bx-edit mr-5" />
                                        Edit
                                      </a>
                                    </div>
                                  </div>
                                  <div className="img-box">
                                    <img
                                      src="./images/to-do-list/project-4.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-box">
                                    <h6 className="title fs-16">
                                      Food Website hero area
                                    </h6>
                                    <div
                                      className="progress skill-progress mt-15 mb-15"
                                      style={{ height: 7 }}
                                    >
                                      <div
                                        className="progress-bar progress-animated"
                                        style={{ width: "78%", height: 7 }}
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          78% Complete
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="link">
                                        <a href="#">
                                          <i className="fas fa-paperclip" />
                                        </a>
                                      </div>
                                      <div className="time">
                                        <p className="font-main mb-0">
                                          <i className="far fa-clock" />
                                          Due in 5 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="btn-add-card">
                              <a
                                className="dropdown-item font-w500 fs-16"
                                href="#"
                                data-toggle="modal"
                                data-target="#add_card_modal"
                              >
                                <i className="fas fa-plus mr-14" />
                                Add a card
                              </a>
                            </div>
                          </div>
                          <div className="kanban-list kanban-approved">
                            <div className="kanban-header">
                              <h6 className="card-title">Approved</h6>
                            </div>
                            <div className="kanban-wrap">
                              <div className="panel">
                                <div className="kanban-box item-box">
                                  <div className="dropdown edit">
                                    <a
                                      href="#"
                                      className="btn-link"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_project"
                                      >
                                        <i className="bx bx-trash" /> Delete
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#edit_card_modal"
                                      >
                                        <i className="bx bx-edit mr-5" />
                                        Edit
                                      </a>
                                    </div>
                                  </div>
                                  <div className="img-box">
                                    <img
                                      src="./images/to-do-list/project-4.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-box">
                                    <h6 className="title fs-16">
                                      Food Website hero area
                                    </h6>
                                    <div
                                      className="progress skill-progress mt-15 mb-15"
                                      style={{ height: 7 }}
                                    >
                                      <div
                                        className="progress-bar progress-animated"
                                        style={{ width: "78%", height: 7 }}
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          78% Complete
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <div className="link">
                                        <a href="#">
                                          <i className="fas fa-paperclip" />
                                        </a>
                                      </div>
                                      <div className="time">
                                        <p className="font-main mb-0">
                                          <i className="far fa-clock" />
                                          Due in 5 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="btn-add-card">
                              <a
                                className="dropdown-item font-w500 fs-16"
                                href="#"
                                data-toggle="modal"
                                data-target="#add_card_modal"
                              >
                                <i className="fas fa-plus mr-14" />
                                Add a card
                              </a>
                            </div>
                          </div>
                        </div>
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
                <div
                  className="modal custom-modal fade"
                  id="delete_project"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="form-header">
                          <h3>Delete Card</h3>
                          <p>Are you sure want to delete?</p>
                        </div>
                        <div className="modal-btn delete-action">
                          <div className="row">
                            <div className="col-6 mb-0">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-primary continue-btn"
                              >
                                Delete
                              </a>
                            </div>
                            <div className="col-6 mb-0">
                              <a
                                href="javascript:void(0);"
                                data-dismiss="modal"
                                className="btn btn-primary cancel-btn"
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="edit_card_modal"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Card</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label>Image Card</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="form-group">
                            <label>Card Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Food Website hero area"
                            />
                          </div>
                          <div className="form-group">
                            <label>Due Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control "
                                type="date"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="submit-section text-center">
                            <button className="btn btn-primary submit-btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="add_card_modal"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Add Card</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label>Image Card</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="form-group">
                            <label>Card Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                          <div className="form-group">
                            <label>Due Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control "
                                type="date"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="submit-section text-center">
                            <button className="btn btn-primary submit-btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>o
            {/* END MAIN CONTENT */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
