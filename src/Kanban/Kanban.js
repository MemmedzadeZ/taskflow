import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useState, useEffect } from "react";
import "./css/Kanban.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TwoMessage from "../Components/MessageList";
import TwoNotification from "../Components/NotificationList";
import TwoCalendarNotification from "../Components/CalendarList";
import CountNotification from "../Components/NotificationCount";
import CountMessage from "../Components/MessageCount";
import CalendarCount from "../Components/CalendarNotificationCount";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateTaskForMemberModel from "./CreateTaskForMember";

const initialData = {
  columns: {
    "column-1": {
      title: "To-Do List",
      tasks: [],
    },
    "column-2": {
      title: "In Progress",
      tasks: [],
    },
    "column-3": {
      title: "In Review",
      tasks: [],
    },
    "column-4": {
      title: "Approved",
      tasks: [],
    },
  },
};

const Kanban = () => {
  const { projectId } = useParams(); // Proje ID'sini URL parametresinden al
  const [data, setData] = useState(initialData); // Kanban verisi
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const [error, setError] = useState(null); // Hata durumu
  const [isModalOpen, setIsModalOpen] = useState(false);

  // API'den görevleri almak için useEffect
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch(
          `https://localhost:7157/api/Project/ProjectTaskCanban/${projectId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const tasks = await response.json();
        setData({ columns: organizeTasksIntoColumns(tasks) });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getTasks();
  }, [projectId]);

  const organizeTasksIntoColumns = (tasks) => {
    const columns = {
      "column-1": { title: "To-Do List", tasks: [] },
      "column-2": { title: "In Progress", tasks: [] },
      "column-3": { title: "In Review", tasks: [] },
      "column-4": { title: "Approved", tasks: [] },
    };

    tasks.forEach((task) => {
      if (task.status === "to do") {
        columns["column-1"].tasks.push(task);
      } else if (task.status === "in progress") {
        columns["column-2"].tasks.push(task);
      } else if (task.status === "done") {
        columns["column-3"].tasks.push(task);
      }
    });

    return columns;
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = data.columns[source.droppableId];
    const destColumn = data.columns[destination.droppableId];

    const sourceTasks = Array.from(sourceColumn.tasks);
    const destTasks = Array.from(destColumn.tasks);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    let newStatus = "";
    if (destination.droppableId === "column-1") {
      newStatus = "to do";
    } else if (destination.droppableId === "column-2") {
      newStatus = "in progress";
    } else if (destination.droppableId === "column-3") {
      newStatus = "done";
    }

    movedTask.status = newStatus;
    destTasks.splice(destination.index, 0, movedTask);

    setData({
      columns: {
        ...data.columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
        [destination.droppableId]: { ...destColumn, tasks: destTasks },
      },
    });

    try {
      const response = await fetch(
        `https://localhost:7157/api/Project/UpdateTaskStatus/${movedTask.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ newStatus: newStatus }),
        }
      );
      console.log(newStatus);
      console.log(movedTask.id);
      console.log(response);

      if (!response.ok) {
        throw new Error(" Failed to update task status!");
      }

      toast.success("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task status:", error);
      toast.error("Only PM can update task status!");
      setData({
        ...data,
      });
    }
  };

  const calculateProgress = (startDate, deadline) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(deadline);

    if (currentDate < start) {
      return 0;
    }

    if (currentDate > end) {
      return 100;
    }

    const totalDuration = end - start;
    const elapsedDuration = currentDate - start;
    const progress = (elapsedDuration / totalDuration) * 100;

    return progress;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  const openModel = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <ToastContainer />
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">Kanban</div>
            </div>

            <div className="d-flex align-items-center">
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ara"
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="main-content board">
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
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="board-container">
                    {Object.entries(data.columns).map(([columnId, column]) => (
                      <Droppable key={columnId} droppableId={columnId}>
                        {(provided) => (
                          <div
                            className="column"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <h3 className="column-title">{column.title}</h3>
                            {column.tasks.map((task, index) => (
                              <Draggable
                                key={task.id}
                                draggableId={String(task.id)}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    className="task-card"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div
                                      className="task-image-placeholder"
                                      style={{ backgroundColor: task.color }}
                                    />
                                    <div className="task-content">
                                      <div className="task-title">
                                        <span
                                          style={{
                                            textDecoration:
                                              new Date(task.deadline) <
                                              new Date()
                                                ? "line-through"
                                                : "none",
                                            color: "#dc3545",
                                          }}
                                        >
                                          {task.title}
                                        </span>

                                        <div className="sm-f-wrap d-flex justify-content-start">
                                          <img
                                            style={{
                                              width: "33px",
                                              height: "33px",
                                            }}
                                            src={
                                              task.participantPath
                                                ? task.participantPath
                                                : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                                            }
                                            alt="user"
                                          />

                                          <span
                                            className="user-name"
                                            style={{ marginLeft: "10px" }}
                                          >
                                            <a
                                              href={`/viewProfile/${task.participantEmail}`}
                                            >
                                              {task.participantName
                                                ? task.participantName
                                                : "Unknown User"}{" "}
                                            </a>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="progress-barr">
                                        <div
                                          className="progress-fill"
                                          style={{
                                            backgroundColor: task.color,
                                            width: `${calculateProgress(
                                              task.startDate,
                                              task.deadline
                                            )}%`,
                                          }}
                                        />
                                      </div>

                                      <div className="due-date">
                                        Last Due Date:{" "}
                                        <span
                                          style={{
                                            color:
                                              new Date(task.deadline) <
                                              new Date()
                                                ? "#dc3545"
                                                : "none",
                                          }}
                                        >
                                          {" "}
                                          {formatDate(task.deadline)}
                                        </span>
                                      </div>

                                      {/* Task Description - if available */}
                                      {task.description && (
                                        <div className="task-description">
                                          <p>{task.description}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                            <button
                              className="add-card-button"
                              onClick={openModel}
                            >
                              Add Card
                            </button>
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </div>
                </DragDropContext>
              </div>
              {isModalOpen && (
                <CreateTaskForMemberModel closeModal={closeModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
