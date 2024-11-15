import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function SidebarComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  function switchTheme() {
    if (body.classList.contains(themeLight)) {
      body.classList.remove(themeLight);
      body.classList.add(themeDark);
      body.style.backgroundColor = "var(--box-bg)";
      setCookie(themeCookieName, themeDark);
    } else if (body.classList.contains(themeDark)) {
      body.classList.remove(themeDark);
      body.classList.add(themeElkan);
      body.style.backgroundColor = "#ffffff";
      setCookie(themeCookieName, themeElkan);
    } else if (body.classList.contains(themeElkan)) {
      body.classList.remove(themeElkan);
      body.classList.add(themeLight);
      body.style.backgroundColor = "#ffffff";
      setCookie(themeCookieName, themeLight);
    }
  }

  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${themeCookieName}=`))
      ?.split("=")[1];

    if (savedTheme) {
      body.classList.add(savedTheme);
      if (savedTheme === themeDark) {
        body.style.backgroundColor = "var(--box-bg)";
      } else {
        body.style.backgroundColor = "#ffffff";
      }
    } else {
      body.classList.add(themeLight);
      body.style.backgroundColor = "#ffffff";
    }
  }, [body]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TaskFlow - Project and Task Management</title>
        <link
          rel="shortcut icon"
          href="./images/favicon.png"
          type="image/png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/grid.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>

      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidebar-logo">
          <a>
            <h1 className="classH1">TaskFlow</h1>
          </a>
          <div
            className="sidebar-close"
            id="sidebar-close"
            onClick={toggleSidebar}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </div>
        <div className="simplebar-sc" data-simplebar>
          <ul className="sidebar-menu tf">
            <li className="sidebar-submenu">
              <a href="/dashboard" className="sidebar-menu-dropdown">
                <i className="bx bxs-home"></i>
                <span>Board</span>
               
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/project" className="sidebar-menu-dropdown">
                <i className="bx bxs-bolt"></i>
                <span>Project</span>
               
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/friends" className="sidebar-menu-dropdown">
                <i className="bx bxs-user"></i>
                <span>Friends</span>
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/kanban" className="sidebar-menu-dropdown">
                <i className="bx bxs-component"></i>
                <span>Kanban</span>
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/tasks" className="sidebar-menu-dropdown">
                <i className="bx bxs-dashboard"></i>
                <span>Task</span>
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/calendar" className="sidebar-menu-dropdown">
                <i className="bx bx-calendar"></i>
                <span>Calendar</span>
              </a>
            </li>
            <li className="sidebar-submenu">
              <a href="/message" className="sidebar-menu-dropdown">
                <i className="bx bxs-message-rounded-detail"></i>
                <span>Message</span>
              </a>
            </li>
            <li>
              <a href=" " className="darkmode-toggle" onClick={switchTheme}>
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

      {/* Overlay for sidebar when active */}
      <div
        className={`overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default SidebarComponent;
