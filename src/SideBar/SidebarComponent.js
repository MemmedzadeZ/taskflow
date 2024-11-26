

      import React, { useEffect, useState } from "react";
      import "./SidebarComponent.css"; // Ensure to create the CSS file with necessary styles
import { Helmet } from "react-helmet";
import loaderjson from "../animations/loader.json";
import Lottie from "lottie-react";

      function SidebarComponent() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const [activeMenuItem, setActiveMenuItem] = useState("dashboard"); // Default active item
        const themeCookieName = "theme";
        const themeDark = "dark";
        const themeLight = "light";
        const themeElkan = "elkan";
        const body = document.getElementsByTagName("body")[0];

        function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          const expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function switchTheme() {
          if (body.classList.contains(themeLight)) {
            body.classList.replace(themeLight, themeDark);
            body.style.backgroundColor = "var(--box-bg)";
            setCookie(themeCookieName, themeDark);
          } else if (body.classList.contains(themeDark)) {
            body.classList.replace(themeDark, themeElkan);
            body.style.backgroundColor = "#ffffff";
            setCookie(themeCookieName, themeElkan);
          } else if (body.classList.contains(themeElkan)) {
            body.classList.replace(themeElkan, themeLight);
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
            body.style.backgroundColor =
              savedTheme === themeDark ? "var(--box-bg)" : "#ffffff";
          } else {
            body.classList.add(themeLight);
            body.style.backgroundColor = "#ffffff";
          }
        }, [body]);

        const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
        };

        const handleMenuClick = (menuItem) => {
          setActiveMenuItem(menuItem);
        };

        return (
          <>
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

            {/* Sidebar */}
            <div
              className={`sidebar ${isSidebarOpen ? "expanded" : "collapsed"}`}
            >
              <div className="sidebar-logo">
                <a href="/">
                
                  <h1 className={`classH1 ${isSidebarOpen ? "" : "hidden"}`}>
                    TaskFlow
                  </h1>
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
                  {[
                    { label: "Board", icon: "bxs-home", link: "/dashboard" },
                    { label: "Project", icon: "bxs-bolt", link: "/project" },
                    { label: "Friends", icon: "bxs-user", link: "/friends" },
                    { label: "Kanban", icon: "bxs-component", link: "/kanban" },
                    { label: "Task", icon: "bxs-dashboard", link: "/tasks" },
                    {
                      label: "Calendar",
                      icon: "bx-calendar",
                      link: "/calendar",
                    },
                    {
                      label: "Message",
                      icon: "bxs-message-rounded-detail",
                      link: "/message",
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className={`sidebar-submenu ${
                        activeMenuItem === item.label.toLowerCase()
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleMenuClick(item.label.toLowerCase())}
                    >
                      <a href={item.link} className="sidebar-menu-dropdown">
                        <i className={`bx ${item.icon}`}></i>
                        {isSidebarOpen && <span>{item.label}</span>}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      className="darkmode-toggle"
                      onClick={switchTheme}
                    >
                      <i className="bx bx-cog"></i>
                      {isSidebarOpen && <span>Darkmode</span>}
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
