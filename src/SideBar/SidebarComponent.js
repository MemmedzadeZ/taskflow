import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // For head configurationsm

function SidebarComponent() {
  const themeCookieName = "theme";
  const themeDark = "dark";
  const themeLight = "light";
  const themeElkan = "elkan";
  const body = document.getElementsByTagName("body")[0];
  let sidebar_expand = document.querySelector(".sidebar-expand");
  let overlay = document.querySelector(".overlay");

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

 document.addEventListener("DOMContentLoaded", () => {
   const sidebarCloseButton = document.querySelector("#sidebar-close");
   const sidebarExpand = document.querySelector(".sidebar_expand"); // doğru selector əlavə edin
   const overlay = document.querySelector(".overlay"); // doğru selector əlavə edin

   if (sidebarCloseButton && sidebarExpand && overlay) {
     sidebarCloseButton.onclick = () => {
       sidebarExpand.classList.toggle("active");
       overlay.classList.toggle("active");
     };
   }
 });


  return (
    <>
      <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>TaskFlow - Project and Task Management</title>
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

        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="sidebar-logo">
            <a>
              <h1 className="classH1">TaskFlow</h1>
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
              </li>
              <li className="sidebar-submenu">
                {/* /////////////////////////////// */}
                {/* /////////////////////////////// */}
                {/* /////////////////////////////// */}
                <a href="/friends" className="sidebar-menu-dropdown">
                  <i className="bx bxs-user"></i>
                  <span>Friends</span>
                </a>
              </li>
              {/* Other Sidebar Menu Items */}

              <li>
                <a href="board.html">
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
      </div>
    </>
  );
}

export default SidebarComponent;
