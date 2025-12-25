import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
import CurrentProjects from "./CurrentProjects";
import SidebarComponent from "../SideBar/SidebarComponent";
import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import CurrentPerson from "./CurrentUser";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";
import ClientsCount from "./TotalClient";
import ProjectsCount from "./ProjectCount";
import startSignalRConnection from "../SignalR";
import OccupationPercent from "./OccupationStatistik";
import AllMessages from "./AllMessagesList";
import DailyTask from "./DailyTask";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

function DashboardTemplate() {
  // const [loading, setLoading] = useState(true);

  const themeCookieName = "theme";
  const themeDark = "dark";
  const themeLight = "light"; 
  const body = document.getElementsByTagName("body")[0];
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


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

    startSignalRConnection();
  }, [body]);

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
              <div className="main-title">Board</div>
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
                            <a className="h6 font-w500" href="/project">
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
                        <div className="box-body pt-0">
                          <OccupationPercent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="box">
                    <div className="box-header pt-0">
                      <div className="me-auto">
                        <h4 className="card-title mb-0">Message</h4>
                      </div>
                      <a href="/message">View Messages</a>
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
      <div className="overlay"></div>
    </div>
  );
}

export default DashboardTemplate;
