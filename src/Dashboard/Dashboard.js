import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // For head configurations
import "../Dashboard/Dashboard.css";
import CurrentProjects from "./CurrentProjects";
// <<<<<<< HEAD
import SidebarComponent from "../SideBar/SidebarComponent";

// function DashboardTemplate() {
  
// =======
import CountNotification from "./NotificationCount";
import CountMessage from "./MessageCount";
import CurrentPerson from "./CurrentUser";
import TwoMessage from "./MessageList";
import TwoNotification from "./NotificationList";
import CalendarCount from "./CalendarNotificationCount";
import TwoCalendarNotification from "./CalendarList";
import ClientsCount from "./TotalClient";
import ProjectsCount from "./ProjectCount";

function DashboardTemplate() {
  const themeCookieName = "theme";
  const themeDark = "dark";
  const themeLight = "light";
  const themeElkan = "elkan";
  const body = document.getElementsByTagName("body")[0];
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // Switch between light, dark, and elkan mode, changing background color
  function switchTheme() {
    if (body.classList.contains(themeLight)) {
      body.classList.remove(themeLight);
      body.classList.add(themeDark);
      body.style.backgroundColor = "var(--box-bg)"; // Dark Mode background
      setCookie(themeCookieName, themeDark);
    } else if (body.classList.contains(themeDark)) {
      body.classList.remove(themeDark);
      body.classList.add(themeElkan);
      body.style.backgroundColor = "#ffffff"; // Elkan Mode background (purple)
      setCookie(themeCookieName, themeElkan);
    } else if (body.classList.contains(themeElkan)) {
      body.classList.remove(themeElkan);
      body.classList.add(themeLight);
      body.style.backgroundColor = "#ffffff"; // Light Mode background
      setCookie(themeCookieName, themeLight);
    }
  }

  // Apply saved theme on load and set corresponding background color
  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${themeCookieName}=`))
      ?.split("=")[1];

    if (savedTheme) {
      body.classList.add(savedTheme);
      if (savedTheme === themeDark) {
        body.style.backgroundColor = "var(--box-bg)"; // Dark Mode background
      } else {
        body.style.backgroundColor = "#ffffff"; // Light Mode background
      }
    } else {
      body.classList.add(themeLight); // Default to light theme
      body.style.backgroundColor = "#ffffff"; // Default light mode background
    }
  }, [body]);

// >>>>>>> 6fead75a67aeebc32608c41ef2c98bf733e4dd02
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Protend - Project Management Admin Dashboard HTML Template
        </title>
        <link
          rel="shortcut icon"
          href="./images/favicon.png"
          type="image/png"
        />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Boxicons */}
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* Plugin */}
        <link rel="stylesheet" href="" />

        {/* App CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/grid.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>

      <div className="sidebar-expand">
        <div className="DIV">
{/* <<<<<<< HEAD */}
          <SidebarComponent />
{/* ======= */}
          {/* SIDEBAR */}
          <div className="sidebar">
            <div className="sidebar-logo">
              <a href=" ">
                <h1 className="classH1">TaskFlow</h1>
                {/* <img src="./images/logo.png" alt="Protend logo" /> */}
              </a>

              <div className="sidebar-close" id="sidebar-close">
                <i className="bx bx-left-arrow-alt"></i>
              </div>
            </div>
            {/* SIDEBAR MENU */}
            <div className="simplebar-sc" data-simplebar>
              <ul className="sidebar-menu tf">
                <li className="sidebar-submenu">
                  <a href="/dashboard" className="sidebar-menu-dropdown">
                    <i className="bx bxs-home"></i>
                    <span>Board</span>
                    <div className="dropdown-icon">
                      <i className="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul className="sidebar-menu sidebar-menu-dropdown-content">
                    <li>
                      <a href="index.html"> Dashboard </a>
                    </li>
                    {/* <li>
                      <a href="user-profile.html"> User Profile </a>
                    </li>
                    <li>
                      <a href="user-login.html"> User Login </a>
                    </li>
                    <li>
                      <a href="new-account.html"> New Account </a>
                    </li> */}
                  </ul>
                </li>
                <li className="sidebar-submenu">
                  {/* /////////////////////////////// */}
                  {/* /////////////////////////////// */}
                  {/* /////////////////////////////// */}
                  <a href="/project" className="sidebar-menu-dropdown">
                    <i className="bx bxs-bolt"></i>
                    <span>Project</span>
                    <div className="dropdown-icon">
                      <i className="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul className="sidebar-menu sidebar-menu-dropdown-content">
                    <li>
                      <a href="/quiz"> Project </a>
                    </li>
                    <li>
                      <a href="project-details.html"> Project Details </a>
                    </li>
                    <li>
                      <a href="new-project.html"> New Project </a>
                    </li>
                  </ul>
                </li>
                {/* Other Sidebar Menu Items */}
                <li className="sidebar-submenu">
                  <a href="clients.html" className="sidebar-menu-dropdown">
                    <i className="bx bxs-user"></i>
                    <span>Client</span>
                    <div className="dropdown-icon">
                      <i className="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul className="sidebar-menu sidebar-menu-dropdown-content">
                    <li>
                      <a href="clients.html"> Manager Client </a>
                    </li>
                    <li>
                      <a href="client-details.html"> Client Details </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="board.html">
                    <i className="bx bxs-dashboard"></i>
                    <span>Board</span>
                  </a>
                </li>
                <li>
                  <a href="calendar.html">
                    <i className="bx bx-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="message.html">
                    <i className="bx bxs-message-rounded-detail"></i>
                    <span>Message</span>
                  </a>
                </li>
                <li className="sidebar-submenu">
                  <a href="chart-apex.html" className="sidebar-menu-dropdown">
                    <i className="bx bxs-component"></i>
                    <span>Components</span>
                    <div className="dropdown-icon">
                      <i className="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul className="sidebar-menu sidebar-menu-dropdown-content">
                    <li>
                      <a href="chart-apex.html"> Apex Charts </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href=" "
                    className="darkmode-toggle"
                    id="darkmode-toggle"
                    onClick={switchTheme} // Here we call the switchTheme function
                  >
                    <div>
                      <i className="bx bx-cog mr-10"></i>
                      <span>darkmode</span>
                    </div>
                    <span className="darkmode-switch"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Sidebar */}
{/* >>>>>>> 6fead75a67aeebc32608c41ef2c98bf733e4dd02 */}

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">Board</div>
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

              <div className="dropdown d-inline-block mt-12">
{/* <<<<<<< HEAD */}
                {/* <Link to="/profile"> */}
                  <button
                    type="button"
                    className="btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="rounded-circle header-profile-user"
                      src="./images/profile/profile.png"
                      alt="Header Avatar"
                    />
                    <span className="pulse-css"></span>
                    <span className="info d-xl-inline-block color-span">
                      <span className="d-block fs-20 font-w600">
                        Randy Riley
                      </span>
                      <span className="d-block mt-7">
                        randy.riley@gmail.com
                      </span>
                    </span>
                    <i className="bx bx-chevron-down"></i>
                  </button>
                {/* </Link> */}
=======
                <CurrentPerson />
{/* >>>>>>> 6fead75a67aeebc32608c41ef2c98bf733e4dd02 */}
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href=" ">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>
                    <span>Profile</span>
                  </a>
                  <a className="dropdown-item" href=" ">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>
                    <span>My Wallet</span>
                  </a>
                  <a className="dropdown-item" href=" ">
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>
                    <span>Settings</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item text-danger"
                    href="user-login.html"
                  >
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
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
                        href=" "
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

              <div className="row">
                <div className="col-6 col-md-6 col-sm-12 mb-0">
                  <div className="row">
                    <div className="col-6 col-xl-12 col-sm-12">
                      <div className="box">
                        <ClientsCount />
                      </div>
                    </div>
                    <div className="col-6 col-xl-12 col-sm-12">
                      <div className="box">
                        <ProjectsCount />
                      </div>
                    </div>

                    {/* Daily Task Section */}
                    <div className="col-12">
                      <div className="box">
                        <div className="box-header">
                          <h4 className="box-title mb-22">Daily Task</h4>
                        </div>
                        <div className="box-body">
                          <div className="content-item mb-wrap">
                            <div className="left">
                              <h5 className="font-w500">10:00</h5>
                            </div>
                            <div className="right bg-orange">
                              <div className="content-box w-100">
                                <h5 className="font-wb text-white fs-20">
                                  iOs Dev team meeting
                                </h5>
                                <h6 className="font-w400 text-w07">
                                  10:00 - 11:00
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="content-item mb-wrap mb-32">
                            <div className="left">
                              <h5 className="font-w500">11:00</h5>
                            </div>
                            <div className="right d-flex pd-0">
                              <div className="content-box bg-yellow">
                                <h5 className="font-wb text-white fs-20">
                                  Design meeting
                                </h5>
                                <h6 className="font-w400 text-w07">
                                  11:00 - 11:30
                                </h6>
                              </div>
                              <div className="content-box bg-blue">
                                <h5 className="font-wb text-white fs-20">
                                  SEO meeting
                                </h5>
                                <h6 className="font-w400 text-w07">
                                  11:30 - 12:00
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="content-item mb-0 mb-wrap">
                            <div className="left">
                              <h5 className="font-w500">12:00</h5>
                            </div>
                            <div className="right bg-light">
                              <div className="content-box w-100">
                                <h5 className="font-w500">Lunch Break</h5>
                                <h6 className="font-w400 mt-10">
                                  12:00 - 1:00
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-6 col-sm-12 mb-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="box box-manage">
                        <div className="box-body d-flex pd-7 pb-0">
                          <div className="me-auto w-55">
                            <h5 className="card-title text-white fs-30 font-w500 mt-4">
                              Manage your project in one touch
                            </h5>
                            <p className="mb-0 text-o7 fs-18 font-w500 pb-11">
                              Etiam facilisis ligula nec velit posuere egestas.
                              Nunc dictum
                            </p>
                          </div>
                          <div className="btn-now">
                            <a className="h6 font-w500" href=" ">
                              <span>Try For Free Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-12">
                      <div className="box">
                        <div className="box-header">
                          <div className="me-auto">
                            <h4 className="card-title">Project Category</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        <div className="box-body pt-0">
                          <div className="row">
                            <div className="col-6 col-xl-12 w-sm-100 mb-0">
                              <ul className="box-list mt-26 pr-67">
                                <li>
                                  <span className="bg-blue square"></span>Web
                                  Design
                                  <span>25%</span>
                                </li>
                                <li>
                                  <span className="bg-success square"></span>
                                  UX/UI Design
                                  <span>18%</span>
                                </li>
                                <li>
                                  <span className="bg-warning square"></span>
                                  Graphics Design
                                  <span>17%</span>
                                </li>
                                <li>
                                  <span className="bg-blue square"></span>Motion
                                  Design
                                  <span>12.50%</span>
                                </li>
                                <li>
                                  <span className="bg-success square"></span>
                                  Brand Identity
                                  <span>12.50%</span>
                                </li>
                                <li>
                                  <span className="bg-warning square"></span>
                                  Others
                                  <span>12.50%</span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6 col-xl-12 w-sm-100 mb-0">
                              {/* <canvas id="doughnut-chart" width="240" height="240"></canvas> */}
                              <div className="canvas-container">
                                <canvas
                                  id="chartjs-4"
                                  className="chartjs"
                                  width="100"
                                  height="100"
                                ></canvas>
                                <div className="chart-data">
                                  <div
                                    data-percent="25"
                                    data-color="#3C21F7"
                                    data-label="Web Design"
                                  ></div>
                                  <div
                                    data-percent="18"
                                    data-color="#00BC8B"
                                    data-label="UX/UI Design"
                                  ></div>
                                  <div
                                    data-percent="17"
                                    data-color="#FFB800"
                                    data-label="Graphics Design"
                                  ></div>
                                  <div
                                    data-percent="12.5"
                                    data-color="#00ECCC"
                                    data-label="Motion Design"
                                  ></div>
                                  <div
                                    data-percent="12.5"
                                    data-color="#EF7F5A"
                                    data-label="Brand Identity"
                                  ></div>
                                  <div
                                    data-percent="12.5"
                                    data-color="#5D45FB"
                                    data-label="Others"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Uncomment if needed */}
                    {/* 
        <div className="col-6 col-xl-12 col-md-12 col-sm-12">
          <div className="box">
            <div className="box-header">
              <div className="me-auto">
                <h6 className="card-title font-w400 mb-20">Current Balance</h6>
                <div className="count-number d-flex">
                  <span className="h4 font-w900">$</span>
                  <h4 className="count font-w900 pl-5">25,456.44</h4>
                </div>
                <p className="fs-18 mb-0 mt-6">
                  <span className="text-primary pr-7">+3.2</span>than last week
                </p>
              </div>
            </div>
            <div className="box-body">
              <div id="chartBar2" className="bar-chart "></div>
            </div>
          </div>
        </div> 
        */}
                  </div>
                </div>

                <div className="col-6 col-sm-12">
                  <div className="box">
                    <div className="box-header pt-0">
                      <div className="me-auto">
                        <h4 className="card-title mb-0">Message</h4>
                      </div>
                    </div>
                    <div className="box-body pb-0 pt-39">
                      <ul className="message mb-2">
                        <li className="dlab-chat-user">
                          <div className="d-flex bd-highlight">
                            <div className="img_cont">
                              <img
                                src="/images/avatar/message-01.png"
                                className="rounded-circle user_img"
                                alt="Richard Coleman"
                              />
                            </div>
                            <div className="user_info">
                              <a className="h6" href="message.html">
                                Richard Coleman
                              </a>
                              <p className="fs-14 mb-0">
                                Hi Jackma! How are you?
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="dlab-chat-user">
                          <div className="d-flex bd-highlight">
                            <div className="img_cont border-pink">
                              <img
                                src="/images/avatar/message-02.png"
                                className="rounded-circle user_img"
                                alt="Jessica Elliot"
                              />
                            </div>
                            <div className="user_info">
                              <a className="h6" href="message.html">
                                Jessica Elliot
                              </a>
                              <p className="fs-14 mb-0">
                                Do you need like the Color, typography and
                                spacing?
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="dlab-chat-user">
                          <div className="d-flex bd-highlight">
                            <div className="img_cont border-green">
                              <img
                                src="/images/avatar/message-03.png"
                                className="rounded-circle user_img"
                                alt="Steve Ford"
                              />
                            </div>
                            <div className="user_info">
                              <a className="h6" href="message.html">
                                Steve Ford
                              </a>
                              <p className="fs-14 mb-0">Can I your budget?</p>
                            </div>
                          </div>
                        </li>
                        <li className="dlab-chat-user">
                          <div className="d-flex bd-highlight">
                            <div className="img_cont border-blue">
                              <img
                                src="/images/avatar/message-04.png"
                                className="rounded-circle user_img"
                                alt="Mary Ann Lucas"
                              />
                            </div>
                            <div className="user_info">
                              <a className="h6" href="message.html">
                                Mary Ann Lucas
                              </a>
                              <p className="fs-14 mb-0">
                                Looks Good. Please go forward!
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* col-12 */}

                <div className="col-12">
                  <div className="box">
                    <div className="box-header">
                      <div className="me-auto">
                        <h4 className="card-title mb-6"> Project Statistics</h4>
                        <p className="mb-0 fs-14 mt-9">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
{/* <<<<<<< HEAD */}

                    <div className="box-body pt-20">
=======
                    {/* <div className="box-body pt-20">
// >>>>>>> 6fead75a67aeebc32608c41ef2c98bf733e4dd02
                      <div
                        className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix"
                        data-gap="30"
                        data-column="4"
                        data-column2="2"
                        data-column3="1"
                        data-auto="true"
                      >
                        <div className="owl-carousel owl-theme">
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-green">
                                  G
                                </h5>
                                <a
                                  href="project-details.html"
                                  className="h5 t-title"
                                >
                                  Gold App
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400 fs-16">
                                Task Done:23/45
                              </h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "52%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-yellow">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  Landing Page
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 30/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "67%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-blue">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  App Landing UI
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 35/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "78%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-orange">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  Blog Template UI
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 23/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "52%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          ///* //img ///*
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-orange">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  Blog Template UI
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 23/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "52%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-yellow">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  Gold App
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 30/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "67%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-blue">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  New Landing Design
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 35/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "78%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="box box-carousel">
                            <div className="card-top">
                              <div className="sm-f-wrap d-flex">
                                <h5 className="icon-gold text-white bg-orange">
                                  G
                                </h5>
                                <a
                                  className="h5 t-title"
                                  href="project-details.html"
                                >
                                  Skote Dashboard UI
                                </a>
                              </div>
                              <div className="dropdown">
                                <a
                                  href=" "
                                  className="btn-link"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                      stroke="#575757"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#delete_project"
                                  >
                                    <i className="bx bx-trash"></i> Delete
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href=" "
                                    data-toggle="modal"
                                    data-target="#edit_project"
                                  >
                                    <i className="bx bx-edit mr-5"></i>Edit
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-center">
                              <h6 className="font-w400">Task Done: 23/45</h6>
                              <div
                                className="progress skill-progress mb-23"
                                style={{ height: "7px", width: "80%" }}
                              >
                                <div
                                  className="progress-bar bg-primary progress-animated"
                                  style={{ width: "52%", height: "7px" }}
                                  role="progressbar"
                                ></div>
                              </div>
                              <div className="sm-f-wrap d-flex justify-content-between">
                                <ul className="user-list">
                                  <li>
                                    <img
                                      src="/images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-4.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/avatar/user-5.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                                <ul className="tf-icon-list">
                                  <li>
                                    <a href=" ">
                                      <i className="bx bx-calendar"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href=" ">
                                      <i className="bx bxs-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
// <<<<<<< HEAD
                    </div>
                    {/* ======= */}
                    <CurrentProjects></CurrentProjects>
                    {/* >>>>>>> eafa7b52cefa0c6920913fe31bc08af71213861d */}
{/* ======= */}
                    </div> 

                    <CurrentProjects />
{/* >>>>>>> 6fead75a67aeebc32608c41ef2c98bf733e4dd02 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>

      <script src="/libs/jquery/jquery.min.js"></script>
      <script src="/libs/moment/min/moment.min.js"></script>
      <script src="/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/libs/peity/jquery.peity.min.js"></script>
      <script src="/libs/chart.js/Chart.bundle.min.js"></script>
      <script src="/libs/owl.carousel/owl.carousel.min.js"></script>
      <script src="/libs/bootstrap/js/bootstrap.min.js"></script>
      <script src="/libs/apexcharts/apexcharts.js"></script>
      <script src="/libs/simplebar/simplebar.min.js"></script>

      <script src="/js/main.js"></script>
      <script src="/js/dashboard.js"></script>
      <script src="/js/shortcode.js"></script>
      <script src="/js/pages/dashboard.js"></script>
    </div>
  );
}

export default DashboardTemplate;
