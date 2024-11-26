import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import React, { useState, useEffect, useRef } from "react";
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
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";
import EditTaskModel from "./EditTaskForMember";

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
  const { projectId } = useParams();
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const modalRef = useRef();
  useEffect(() => {
    const getTasks = async () => {
      try {
        if (!projectId) {
          const projectResponse = await fetch(
            `https://localhost:7157/api/Project/AllProjectsUserOwn`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          if (!projectResponse.ok) {
            throw new Error("not fetch data");
          }

          const userProjects = await projectResponse.json();

          if (userProjects.length > 0) {
            const latestProjectId = userProjects[userProjects.length - 1].id;

            window.location.href = `/kanban/${latestProjectId}`;
          } else {
            setLoading(false);
            setData(initialData);
          }
        } else {
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
        }
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Error loading data: {error}</div>;
  }

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === "column-4") {
      setTimeout(() => {
        handleDeleteTask(draggableId);
      }, 24 * 60 * 60 * 1000); //24 saat sonra avtomatik silinir
    }
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

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/Work/DeleteProjectTask/${taskId}?projectId=${projectId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setData((prevData) => {
          const updatedColumns = { ...prevData.columns };

          for (const columnId in updatedColumns) {
            updatedColumns[columnId].tasks = updatedColumns[
              columnId
            ].tasks.filter((task) => task.id !== taskId);
          }

          return { ...prevData, columns: updatedColumns };
        });
        toast.success("Task deleted successfully.");
      } else {
        toast.error(
          "You have no permission to delete this task. Only PM can delete tasks!"
        );
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("An error occurred while deleting the task.");
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

  const openModel = (e, columnId) => {
    setSelectedColumnId(columnId);
    e.preventDefault();
    setIsModalOpen(true);
  };

  const openModelEdit = (e, taskId) => {
    setSelectedTaskId(taskId);
    e.preventDefault();
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
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
              {/* App Search */}

              <SidebarSearchComponent></SidebarSearchComponent>

              <CurrentPerson />
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
                                            color:
                                              new Date(task.deadline) <
                                              new Date()
                                                ? "#dc3545"
                                                : "black",
                                          }}
                                        >
                                          <div
                                            key={task.id}
                                            onClick={(e) =>
                                              openModelEdit(e, task.id)
                                            }
                                          >
                                            <p>{task.title}</p>
                                          </div>
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

                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        {task.description && (
                                          <div className="task-description">
                                            <p>{task.description}</p>
                                          </div>
                                        )}
                                        <a
                                          onClick={() =>
                                            handleDeleteTask(task.id)
                                          }
                                          className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <svg
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--mingcute"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                          >
                                            <g fill="none">
                                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                              <path
                                                fill="currentColor"
                                                d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"
                                              ></path>
                                            </g>
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                            <button
                              className="add-card-button"
                              onClick={(e) => openModel(e, columnId)}
                              style={{
                                display:
                                  columnId === "column-4" ? "none" : "block",
                              }}
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
                <CreateTaskForMemberModel
                  closeModal={closeModal}
                  columnId={selectedColumnId}
                />
              )}

              {isEditModalOpen && (
                <EditTaskModel
                  closeModal={closeModal}
                  taskId={selectedTaskId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
