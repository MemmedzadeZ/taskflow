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
import "./Calendar.css";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import CalendarCount from "../Components/CalendarNotificationCount";
import TwoCalendarNotification from "../Components/CalendarList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import {
  fetchEditedTaskForCalendar,
  fetchUserTasks,
  fetchWorkUserTasks,
} from "../utils/fetchUtils/workUtils";
import { fetchNewRecentActivity } from "../utils/fetchUtils/notificationUtils";
const Calendar = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const [projectTasksResponse, userTasksResponse] = await Promise.all([
        await fetchWorkUserTasks(),
        await fetchUserTasks(),
      ]);

      if (projectTasksResponse.ok && userTasksResponse.ok) {
        const projectTasks = await projectTasksResponse.json();
        const userTasks = await userTasksResponse.json();

        const combinedTasks = [
          ...projectTasks.map((task) => ({
            id: task.id,
            title: task.title,
            start: task.startDate,
            end: task.deadline,
            color: task.color || "#007bff",
            extendedProps: { source: "project" }, // Proje görevi
          })),
          ...userTasks.map((task) => ({
            id: task.id,
            title: task.title,
            start: task.startDate,
            end: task.deadline,
            color: task.color || "#28a745",
            extendedProps: { source: "user" },
          })),
        ];

        setAllTasks(combinedTasks);
      } else {
        toast.error("Error fetching tasks");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEventDrop = async (info) => {
    const event = info.event;
    const taskId = event.id; // Task ID
    const newStartDate = event.start; // Yeni başlangıç tarihi
    const newEndDate = event.end || event.start; // Yeni bitiş tarihi (null olabilir)

    if (event.extendedProps.source === "user") {
      const response = await fetchEditedTaskForCalendar(
        newStartDate.toISOString(),
        newEndDate.toISOString(),
        taskId
      );

      if (response) {
        toast.success("Task updated successfully!");
        const activityData = {
          text: "You have updated task start and end time!",
          type: "Task",
        };

        await fetchNewRecentActivity(activityData);
      }
    } else {
      toast.warning("You cannot edit project tasks!");
      info.revert();
    }
  };

  const handleEventResize = (info) => {
    handleEventDrop(info);
  };

  return (
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
              <SidebarSearchComponent />
              <CurrentPerson />
            </div>
          </div>

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
                <ToastContainer />
                <div className="col-12">
                  <div className="box card-box">
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
                        events={allTasks}
                        editable={true}
                        selectable={true}
                        eventDrop={handleEventDrop} // Drag-and-drop sırasında tetiklenir
                        eventResize={handleEventResize}
                        eventColor="#B6A0E6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
