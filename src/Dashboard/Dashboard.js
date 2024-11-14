import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // For head configurations
import "../Dashboard/Dashboard.css";
import CurrentProjects from "./CurrentProjects";
import SidebarComponent from "../SideBar/SidebarComponent";
import CountNotification from "./NotificationCount";
import CountMessage from "./MessageCount";
import CurrentPerson from "./CurrentUser";
import TwoMessage from "./MessageList";
import TwoNotification from "./NotificationList";
import CalendarCount from "./CalendarNotificationCount";
import TwoCalendarNotification from "./CalendarList";
import ClientsCount from "./TotalClient";
import ProjectsCount from "./ProjectCount";
import OccupationPercent from "./OccupationStatistik";
import AllMessages from "./AllMessagesList";
import DailyTask from "./DailyTask";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

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
          <SidebarComponent />

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">Board</div>
              {/* <SidebarSearchComponent /> */}
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}
              {/* <form
                className="app-search d-none d-lg-block"
                id="user-search-form"
              >
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    onChange={(e) => Search(e, e.target.value)}
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
                <div className="search-result-div" id="searched-users"></div>
              </form> */}
              <SidebarSearchComponent></SidebarSearchComponent>
              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson />
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
                    <DailyTask />
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
                    <div className="col-12 col-md-12">
                      <div className="box">
                        <div className="box-header">
                          <div className="me-auto">
                            <h4 className="card-title fs-22">
                              Participant Occupation Profile{" "}
                            </h4>
                            <p className="fs-14 mt-4">
                              Statistics according to occupational profile of
                              all participants
                            </p>
                          </div>
                        </div>
                        <div class="box-body pt-0">
                          <OccupationPercent />
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

                <div >
                  <div className="box">
                    <div className="box-header pt-0">
                      <div className="me-auto">
                        <h4 className="card-title mb-0">Message</h4>
                      </div>
                    </div>
                    <AllMessages />
                  </div>
                </div>
                {/* col-12 */}

                <CurrentProjects></CurrentProjects>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>

      {/* <script src="../../libs/jquery/jquery.min.js"></script>
      <script src="../../libs/moment/min/moment.min.js"></script>
      <script src="../../libs/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../libs/peity/jquery.peity.min.js"></script>
      <script src="../../libs/chart.js/Chart.bundle.min.js"></script>
      <script src="../../libs/owl.carousel/owl.carousel.min.js"></script>
      <script src="../../libs/bootstrap/js/bootstrap.min.js"></script>
      <script src="../../libs/apexcharts/apexcharts.js"></script>
      <script src="../../libs/simplebar/simplebar.min.js"></script>

      <script src="../../js/main.js"></script>
      <script src="../../js/dashboard.js"></script>
      <script src="../../js/shortcode.js"></script>
      <script src="../../js/pages/dashboard.js"></script> */}
    </div>
  );
}

export default DashboardTemplate;
