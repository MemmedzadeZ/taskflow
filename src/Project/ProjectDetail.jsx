import React, { useState } from "react";

import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import SidebarComponent from "../SideBar/SidebarComponent";
import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";
import { useNavigate, useParams } from "react-router-dom";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect } from "react";

const ProjectDetail = () => {
  const [users, setUsers] = useState([]);
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [workList, setWorkList] = useState([]);
  const [error, setError] = useState("");
  const [basicInfo, setBasicInfo] = useState(null);
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/ProjectActivity/TeamMemberActivities/${projectId}`,
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

  const fetchUsersByProject = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/TeamMember/GetUsersByProject/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/Project/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        await fetchUserProfile(data.ownerMail);
        setProject(data);
      } else {
        console.error("Failed to fetch project details");
        setProject(null);
      }
    } catch (error) {
      console.error("Error fetching project details:", error);
      setProject(null);
    }
  };

  const fetchUserWorks = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/Work/ProjectWorks/${projectId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user works");
      }
      const data = await response.json();
      setWorkList(data);
    } catch (error) {
      console.error(error);
      setError("There are no tasks within the projects yet");
    }
  };

  //SIGNALRR
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5204/connect", {
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

    conn.on("ProjectDetailTaskList", (message) => {
      fetchUserWorks();
    });
    conn.on("ProjectRecentActivityInDetail", (message) => {
      fetchActivities();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, [projectId]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/Profile/BasicInfoForProfil/${project.ownerMail}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setBasicInfo(data);
      } else {
        console.error("Error fetching user profile");
      }
    } catch (error) {
      console.error(" Error:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUsersByProject();
        await fetchProjectDetails();
        await fetchUserWorks();
        await fetchActivities();

        if (project?.ownerMail) {
          await fetchUserProfile();
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, [project]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  const goToUserProfile = (email) => {
    navigate(`/viewProfile/${email}`);
  };
  const calculateProgress = (startTime, deadline) => {
    const startDate = new Date(startTime);
    const endDate = new Date(deadline);
    const today = new Date();

    const totalDuration = Math.max(
      (endDate - startDate) / (1000 * 60 * 60 * 24),
      1
    );
    const elapsedDuration = Math.max(
      (today - startDate) / (1000 * 60 * 60 * 24),
      0
    );

    return Math.min(Math.round((elapsedDuration / totalDuration) * 100), 100);
  };
  const goToProjectKanban = (projectId) => {
    navigate(`/kanban/${projectId}`);
  };

  function convertToLighterColor(color, opacity) {
    if (color.startsWith("#")) {
      const bigint = parseInt(color.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  }

  return (
    <>
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
                <div className="main-title">Project Details</div>
              </div>

              <div className="d-flex align-items-center">
                {/* App Search */}
                <div className="d-flex align-items-center">
                  {/* App Search */}

                  <SidebarSearchComponent></SidebarSearchComponent>

                  <CurrentPerson />
                </div>
              </div>
            </div>

            <>
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
                              <h5 className="color-white">
                                Create New Project
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="box project">
                        <div className="box-header">
                          <div
                            className="team-name"
                            style={{
                              backgroundColor: project?.color
                                ? convertToLighterColor(project.color, 0.5)
                                : "#000",
                            }}
                          >
                            <a href="#" className="team">
                              <div
                                className="icon"
                                style={{
                                  backgroundColor: project?.color ?? "#000",
                                }}
                              ></div>

                              <h4>{project?.title}</h4>
                            </a>
                          </div>

                          <div className="box-body d-flex justify-content-between pb-0">
                            <div className="action">
                              <a
                                href="#"
                                className="add"
                                onClick={() => goToProjectKanban(projectId)}
                              >
                                Go To Project Kanban
                                <i className="fas fa-caret-down pl-12" />
                              </a>{" "}
                              {/* <a href="#" className="invite">
                                <i className="fas fa-user-plus mr-5" />
                                Invite People
                              </a> */}
                            </div>
                            <ul className="user-list s2">
                              {project?.membersPath?.length > 0 ? (
                                project.membersPath.map((participant, i) => (
                                  <li key={i}>
                                    <img
                                      src={
                                        participant
                                          ? participant
                                          : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                                      }
                                      alt="user"
                                    />
                                  </li>
                                ))
                              ) : (
                                <li>No Participants</li>
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="divider" />
                        <div className="box-body content">
                          {" "}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div
                              className="col-4 col-xl-12"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <div className="box user-pro-list overflow-hidden mb-30">
                                <div className="box-body">
                                  <div className="user-pic text-center">
                                    <div className="avatar ">
                                      <img
                                        style={{
                                          width: "120px",
                                          height: "120px",
                                        }}
                                        src={
                                          basicInfo?.path
                                            ? basicInfo?.path
                                            : "/images/default-user.png"
                                        }
                                        alt=""
                                      />
                                      <div
                                        className="pulse-css"
                                        style={
                                          basicInfo?.isOnline
                                            ? null
                                            : { backgroundColor: "grey" }
                                        }
                                      />
                                    </div>
                                    <div className="pro-user mt-40">
                                      <h5 className="pro-user-username text-dark mb-1 fs-15">
                                        {basicInfo?.firstname}{" "}
                                        {basicInfo?.lastname}
                                      </h5>
                                      <h6 className="pro-user-desc text-muted fs-14">
                                        {basicInfo?.email}
                                      </h6>
                                      <div className="star-ratings start-ratings-main mb-10 clearfix">
                                        <div className="stars stars-example-fontawesome star-sm">
                                          <div className="br-wrapper br-theme-fontawesome-stars">
                                            <select
                                              id="example-fontawesome"
                                              name="rating"
                                              style={{ display: "none" }}
                                            >
                                              <option value={1}>1</option>{" "}
                                              <option value={2}>2</option>{" "}
                                              <option value={3}>3</option>{" "}
                                              <option value={4} selected="">
                                                4
                                              </option>{" "}
                                              <option value={5}>5</option>{" "}
                                            </select>
                                            {/* <div class="br-widget">
                                    <a href="#" data-rating-value="1" data-rating-text="1" class="br-selected"></a>
                                    <a href="#" data-rating-value="2" data-rating-text="2" class="br-selected"></a>
                                    <a href="#" data-rating-value="3" data-rating-text="3" class="br-selected"></a>
                                    <a href="#" data-rating-value="4" data-rating-text="4" class="br-selected br-current"></a>
                                    <a href="#" data-rating-value="5" data-rating-text="5"></a>
                                </div> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box left-dot pt-39 mb-30">
                                <div className="box-header  border-0 ">
                                  <div className="box-title fs-20 font-w600">
                                    Basic Info
                                  </div>
                                </div>
                                <div className="box-body pt-16 user-profile">
                                  <div className="table-responsive">
                                    <table className="table mb-0 mw-100 color-span">
                                      <tbody>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              Country
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="">
                                              {basicInfo?.country}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              Occupation
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="">
                                              {basicInfo?.occupation}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              Gender
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="">
                                              {basicInfo?.gender}{" "}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              BirthDay
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="">
                                              {formatDate(basicInfo?.birthday)}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              Phone
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="">
                                              {basicInfo?.phone}
                                            </span>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="py-2 px-0">
                                            {" "}
                                            <span className="w-50">
                                              Status
                                            </span>{" "}
                                          </td>
                                          <td>:</td>
                                          <td className="py-2 px-0">
                                            <span
                                              className={`badge ${
                                                basicInfo?.isOnline
                                                  ? "badge-success"
                                                  : "badge-danger"
                                              }`}
                                            >
                                              {basicInfo?.isOnline
                                                ? "Online"
                                                : "Offline"}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="project-title">
                                Project Overview
                              </h3>
                              <p className="project-details fs-18 font-w400 font-main mt-3 mb-4">
                                This project was initiated by{" "}
                                <span className="highlight">
                                  {" "}
                                  {project?.owner}{" "}
                                </span>{" "}
                                from{" "}
                                <span className="highlight">
                                  {formatDate(project?.startDate)}
                                </span>{" "}
                                to{" "}
                                <span className="highlight">
                                  {formatDate(project?.endDate)}
                                </span>
                                . Below is a detailed description of the
                                project:
                              </p>
                              <p className="project-description-text font-w400">
                                {project?.description ??
                                  "No description available."}
                              </p>
                              <ul>
                                <li>
                                  <p className="fs-18 font-w600 color-primary mb-23">
                                    <span className="pr-19">Status:</span>
                                    {project?.status}
                                  </p>
                                </li>
                                <li>
                                  <p className="fs-18 font-w600 color-primary mb-23">
                                    <span className="pr-15">Priority:</span>
                                    {project?.isCompleted
                                      ? "Completed"
                                      : "Pending"}
                                  </p>
                                </li>
                                <li>
                                  <p className="fs-18 font-w600 color-primary mb-23">
                                    <span className="pr-25">Start Date:</span>
                                    {formatDate(project?.startDate)}
                                  </p>
                                </li>
                                <li>
                                  <p className="fs-18 font-w600 color-primary mb-23">
                                    <span className="pr-15">End Date:</span>
                                    {formatDate(project?.endDate)}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <br />
                          <hr />
                          <h4>Project Members</h4>
                          <ul
                            className="list-img"
                            style={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                          >
                            {users.map((item, index) => (
                              <div
                                className="col-3 col-md-6 col-sm-12 mb-25"
                                key={index}
                              >
                                <div className="box client">
                                  <div className="box-body pt-5 pb-0">
                                    <div className="img-box">
                                      <img
                                        src={
                                          item.photo
                                            ? item.photo
                                            : "/images/default-user.png"
                                        }
                                        style={{
                                          height: "100px",
                                          width: "100px",
                                        }}
                                        alt=""
                                      />
                                      <div
                                        className="pulse-css"
                                        style={
                                          item.isOnline
                                            ? null
                                            : { backgroundColor: "grey" }
                                        }
                                      />
                                    </div>
                                    <h5 className="mt-17">{item.name}</h5>
                                    <p className="fs-14 font-w400 font-main">
                                      {item.occupation}
                                    </p>
                                    <ul className="info">
                                      <li className="fs-14">
                                        <i
                                          className="bx bxs-phone"
                                          style={{ color: "#3C21F71A" }}
                                        />
                                        {item.phone}
                                      </li>
                                      <li className="fs-14">
                                        <i
                                          className="bx bxs-envelope"
                                          style={{ color: "#3C21F71A" }}
                                        />
                                        {item.email}
                                      </li>
                                    </ul>
                                    <div className="group-btn d-flex justify-content-between">
                                      <button
                                        className="bg-btn-pri color-white"
                                        style={{ backgroundColor: "#3C21F7" }}
                                      >
                                        Message
                                      </button>
                                      <a
                                        className="bg-btn-sec color-main"
                                        style={{
                                          backgroundColor:
                                            "rgba(60, 33, 247, 0.1)",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          goToUserProfile(item.email)
                                        }
                                      >
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </ul>
                        </div>{" "}
                        <div className="project-description mt-10">
                          <h4>Project Tasks</h4>
                          <div className="project-description mt-10">
                            <div className="box">
                              <div className="box-header pt-0">
                                <div className="me-auto"></div>
                              </div>
                              <div className="box-body pb-0 table-responsive activity mt-18">
                                {error ? (
                                  <div className="alert alert-danger text-center">
                                    {error}
                                  </div>
                                ) : (
                                  <table
                                    className="table table-vcenter text-nowrap table-bordered dataTable no-footer mw-100"
                                    id="task-profile"
                                    role="grid"
                                  >
                                    <thead>
                                      <tr className="top">
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Project
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Task
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Member
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Start
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Deadline
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Progress
                                        </th>
                                        <th className="border-bottom-0 fs-14 font-w500">
                                          Work Status
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {workList.length === 0 ? (
                                        <tr>
                                          <td
                                            colSpan="7"
                                            className="text-center"
                                          >
                                            No tasks found.
                                          </td>
                                        </tr>
                                      ) : (
                                        workList.map((work, index) => {
                                          const progress = calculateProgress(
                                            work.startTime,
                                            work.deadline
                                          );

                                          return (
                                            <tr key={index}>
                                              <td>
                                                <a
                                                  href="#"
                                                  className="d-flex"
                                                  onClick={() =>
                                                    goToProjectKanban(
                                                      work.projectId
                                                    )
                                                  }
                                                >
                                                  <span>
                                                    {work.projectName || "N/A"}
                                                  </span>
                                                </a>
                                              </td>
                                              <td>
                                                <span
                                                  style={{
                                                    textDecoration:
                                                      new Date(work.deadline) <
                                                      new Date()
                                                        ? "line-through"
                                                        : "none",
                                                    color:
                                                      new Date(work.deadline) <
                                                      new Date()
                                                        ? "#dc3545"
                                                        : "inherit",
                                                  }}
                                                >
                                                  {work.taskTitle || "N/A"}
                                                </span>
                                              </td>
                                              <td>
                                                <ul className="user-list mb-0">
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      justifyContent:
                                                        "space-between",
                                                      alignItems: "center",
                                                    }}
                                                  >
                                                    <img
                                                      src={
                                                        work.memberImage ||
                                                        "./images/avatar/default.png"
                                                      }
                                                      alt={
                                                        work.memberName ||
                                                        "User"
                                                      }
                                                      className="rounded-circle"
                                                      width="40"
                                                      height="40"
                                                    />
                                                    <a
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      className="ms-2"
                                                      onClick={() =>
                                                        goToUserProfile(
                                                          work.memberMail
                                                        )
                                                      }
                                                    >
                                                      {work.memberName ||
                                                        "Unknown"}
                                                    </a>
                                                  </div>
                                                </ul>
                                              </td>
                                              <td>
                                                {new Date(
                                                  work.startTime
                                                ).toLocaleDateString()}
                                              </td>
                                              <td
                                                style={{
                                                  color:
                                                    new Date(work.deadline) <
                                                    new Date()
                                                      ? "#dc3545"
                                                      : "inherit",
                                                }}
                                              >
                                                {new Date(
                                                  work.deadline
                                                ).toLocaleDateString()}
                                              </td>
                                              <td>
                                                <div className="progress progress-sm">
                                                  <div
                                                    className="progress-bar bg-primary"
                                                    style={{
                                                      width: `${progress}%`,
                                                    }}
                                                  ></div>
                                                </div>
                                              </td>
                                              <td>
                                                <span
                                                  className={`badge ${
                                                    work.status === "done"
                                                      ? "badge-success"
                                                      : work.status ===
                                                        "in progress"
                                                      ? "badge-warning"
                                                      : "badge-primary"
                                                  }`}
                                                >
                                                  {work.status}
                                                </span>
                                              </td>
                                            </tr>
                                          );
                                        })
                                      )}
                                    </tbody>
                                  </table>
                                )}
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                        <h4>Recent Activities</h4>
                        <div className="col-12 col-md-12">
                          <div className="box">
                            <div className="box-header  pt-0 align-items-start">
                              <div className="me-auto">
                                <p className="mt-6 fs-14 mb-14">
                                  {new Date().toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                overflowY: "auto",
                                overflowX: "hidden",
                                maxHeight: "50vh",
                              }}
                            >
                              <div
                                className="vertical-scroll"
                                style={{ padding: "20px" }}
                              >
                                <div className="box-body pb-0">
                                  {" "}
                                  {activities.length ? (
                                    activities.map((activity, index) => (
                                      <ul className="message mb-2" key={index}>
                                        <li
                                          className="dlab-chat-user"
                                          key={index}
                                        >
                                          <div className="d-flex bd-highlight">
                                            <div
                                              className="img_cont"
                                              style={{ marginLeft: "20px" }}
                                            >
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
                                            <div
                                              style={{
                                                alignContent: "center",
                                              }}
                                            >
                                              <a
                                                className="fs-15 font-w500 mt-5 mb-5"
                                                href="message.html"
                                              >
                                                {activity.username}
                                              </a>
                                            </div>{" "}
                                          </div>{" "}
                                          <div
                                            className="card-options me-0 d-flex align-items-center"
                                            style={{ fon: "24em" }}
                                          >
                                            <a
                                              href="#"
                                              className="text-primary fs-14"
                                            >
                                              {activity.text}
                                            </a>
                                          </div>
                                          <p className="fs-13 mb-0">
                                            {new Date(
                                              activity.createDate
                                            ).toLocaleTimeString()}{" "}
                                          </p>
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
                                        style={{
                                          width: "11vw",
                                          height: "14vh",
                                        }}
                                      />
                                      <h3 style={{ fontWeight: "600" }}>
                                        No Data Found!
                                      </h3>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divider">
                      <div className="col-12 col-md-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
