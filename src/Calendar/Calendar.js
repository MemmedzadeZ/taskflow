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
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";



const Calendar = () => {
  // const [showModal, setShowModal] = useState(false);

  const events = [
    { title: "Deadline", date: "2024-11-24", color: "#91C499" },
    { title: "Meeting", date: "2024-11-06", color: "#91C499" },
    { title: "view the project", date: "2024-11-1", color: "#5078F0" },
    { title: "Party", date: "2024-11-15", color: "#F6B26B" },
  ];

  return (
    <>
      <div>
        <div className="sidebar-expand">
          <div className="DIV">
            <SidebarComponent />

            <div className="main-header">
              <div className="d-flex">
                <div className="mobile-toggle" id="mobile-toggle">
                  <i className="bx bx-menu"></i>
                </div>
                <div className="main-title">Calendar</div>
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
            {/* Main Header */}

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
        </div>
      </div>
    </>
  );
};

export default Calendar;
