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
    { title: "Business Lunch", date: "2024-09-02", color: "#91C499" },
    { title: "Meeting", date: "2024-09-13", color: "#91C499" },
    { title: "Conference", date: "2024-09-18", color: "#5078F0" },
    { title: "Party", date: "2024-09-28", color: "#F6B26B" },
  ];

  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
             
              <div className="main-title">Calendar</div>
              {/* <SidebarSearchComponent /> */}
            </div>

            
          </div>
          {/* End Main Header */}
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
            />
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  );
};

export default Calendar;
