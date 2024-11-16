import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import "bootstrap/dist/css/bootstrap.min.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css"; // Custom CSS file

const Calendar = () => {
  // const [showModal, setShowModal] = useState(false);

  const events = [
    { title: "Deadline", date: "2024-11-24", color: "#91C499" },
    { title: "Meeting", date: "2024-11-06", color: "#91C499" },
    { title: "view the project", date: "2024-11-1", color: "#5078F0" },
    { title: "Party", date: "2024-11-15", color: "#F6B26B" },
  ];

  return (
    <div>
      <h1>Calendar</h1>
      {/* <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />
          <div>
            <div className="main-header">
              <div className="d-flex">
               
                <div className="main-title">Calendar</div>
                <div></div>
                <div></div>
                <div></div>
                  <CurrentPerson></CurrentPerson>
              </div>

              
               

  
                <div className="dropdown d-inline-block mt-12">
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
            <div className="main">
              <div className="main-content board">
            
                <div className="roww">
                  <div className="calendar-containerr">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: "prev,next today",

                        center: "title",

                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      events={events}
                      editable={true}
                      selectable={true}
                      eventColor="#B6A0E6" // Default event color
                    ></FullCalendar>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div> */}
    </div>
  );
};

export default Calendar;
