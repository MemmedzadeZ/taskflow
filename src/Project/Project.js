import React from "react";
import { Helmet } from "react-helmet"; // For head configurations
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.css";

const Project = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Protend - Project Management Admin Dashboard HTML Template
        </title>
        <link
          rel="shortcut icon"
          href="%PUBLIC_URL%/images/favicon.png"
          type="image/png"
        />

        {/* <!-- GOOGLE FONT --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- BOXICONS --> */}
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* <!-- CSS Stylesheets --> */}
        <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.min.css" />
        <link rel="stylesheet" href="%PUBLIC_URL%/css/grid.css" />
        <link rel="stylesheet" href="%PUBLIC_URL%/css/style.css" />
        <link rel="stylesheet" href="%PUBLIC_URL%/css/responsive.css" />
      </Helmet>

      <div className="sidebar">
        {/* Sidebar Logo */}
        <div className="sidebar-logo">
          <a href="/">
            <img src="/images/logo.png" alt="Protend logo" />
          </a>
          <div className="sidebar-close" id="sidebar-close">
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="simplebar-sc" data-simplebar>
          <ul className="sidebar-menu tf">
            <li className="sidebar-submenu">
              <a href="#!" className="sidebar-menu-dropdown">
                <i className="bx bxs-home"></i>
                <span>Dashboard</span>
                <div className="dropdown-icon">
                  <i className="bx bx-chevron-down"></i>
                </div>
              </a>
              <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a href="/user-profile">User Profile</a>
                </li>
                <li>
                  <a href="/user-login">User Login</a>
                </li>
                <li>
                  <a href="/new-account">New Account</a>
                </li>
              </ul>
            </li>

            <li className="sidebar-submenu">
              <a href="#!" className="sidebar-menu-dropdown">
                <i className="bx bxs-bolt"></i>
                <span>Project</span>
                <div className="dropdown-icon">
                  <i className="bx bx-chevron-down"></i>
                </div>
              </a>
              <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                  <a href="/project">Project</a>
                </li>
                <li>
                  <a href="/project-details">Project Details</a>
                </li>
                <li>
                  <a href="/new-project">New Project</a>
                </li>
              </ul>
            </li>

            <li className="sidebar-submenu">
              <a href="#!" className="sidebar-menu-dropdown">
                <i className="bx bxs-user"></i>
                <span>Client</span>
                <div className="dropdown-icon">
                  <i className="bx bx-chevron-down"></i>
                </div>
              </a>
              <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                  <a href="/clients">Manage Client</a>
                </li>
                <li>
                  <a href="/client-details">Client Details</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/board">
                <i className="bx bxs-dashboard"></i>
                <span>Board</span>
              </a>
            </li>
            <li>
              <a href="/calendar">
                <i className="bx bx-calendar"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="/message">
                <i className="bx bxs-message-rounded-detail"></i>
                <span>Message</span>
              </a>
            </li>

            <li className="sidebar-submenu">
              <a href="#!" className="sidebar-menu-dropdown">
                <i className="bx bxs-component"></i>
                <span>Components</span>
                <div className="dropdown-icon">
                  <i className="bx bx-chevron-down"></i>
                </div>
              </a>
              <ul className="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                  <a href="/chart-apex">Apex Charts</a>
                </li>
              </ul>
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <a className="darkmode-toggle" id="darkmode-toggle">
                <div>
                  <i className="bx bx-cog mr-10"></i>
                  <span>Dark Mode</span>
                </div>
                <span className="darkmode-switch"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
