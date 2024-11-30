import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTaskInProject from "./EditProjectTask";
import { HubConnectionBuilder } from "@microsoft/signalr";
const ProjectTasksList = () => {
  const [workList, setWorkList] = useState([]);
  const [error, setError] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const navigate = useNavigate();

  const openModelEdit = (e, taskId, projectId) => {
    setSelectedTaskId(taskId);
    setSelectedProjectId(projectId);
    e.preventDefault();
    setIsEditModalOpen(true);
  };
  const closeModal = () => {
    setIsEditModalOpen(false);
  };
  const fetchUserWorks = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Work/UserWorks",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user works");
      }
      const data = await response.json();
      setWorkList(data);
    } catch (error) {
      console.error(error);
      setError("There are no tasks within the projects yet");
    }
  };

  //SIGNALRR
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect", {
        accessTokenFactory: () => token,
      })
      .configureLogging("information")
      .build();
    conn
      .start()
      .then(() => {
        console.log("SignalR connected.");
      })
      .catch((err) => console.error("SignalR connection error:", err));

    conn.on("ProjectsTaskList", (message) => {
      fetchUserWorks();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  useEffect(() => {
    fetchUserWorks();
  }, []);

  const handleDeleteTask = async (taskId, projectId) => {
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
        setWorkList((prevData) => {
          const updatedList = prevData.filter((task) => task.taskId !== taskId);
          return updatedList;
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
  const calculateProgress = (startTime, deadline) => {
    const startDate = new Date(startTime);
    const endDate = new Date(deadline);
    const today = new Date();

    const totalDuration = Math.max(
      (endDate - startDate) / (1000 * 60 * 60 * 24),
      1
    );
    const elapsedDuration = Math.max(
      (today - startDate) / (1000 * 60 * 60 * 24),
      0
    );

    return Math.min(Math.round((elapsedDuration / totalDuration) * 100), 100);
  };
  const goToProjectKanban = (projectId) => {
    navigate(`/kanban/${projectId}`);
  };
  const goToUserProfile = (friendEmail) => {
    navigate(`/viewProfile/${friendEmail}`);
  };

  return (
    <div className="col-12 col-md-12">
      <div className="box">
        <div className="box-header pt-0">
          <div className="me-auto">
            <h4 className="card-title mb-0 fs-22">Recent Activity</h4>
          </div>
        </div>
        <div className="box-body pb-0 table-responsive activity mt-18">
          {error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : (
            <table
              className="table table-vcenter text-nowrap table-bordered dataTable no-footer mw-100"
              id="task-profile"
              role="grid"
            >
              <thead>
                <tr className="top">
                  <th className="border-bottom-0 fs-14 font-w500">Project</th>
                  <th className="border-bottom-0 fs-14 font-w500">Task</th>
                  <th className="border-bottom-0 fs-14 font-w500">Member</th>
                  <th className="border-bottom-0 fs-14 font-w500">Start</th>
                  <th className="border-bottom-0 fs-14 font-w500">Deadline</th>
                  <th className="border-bottom-0 fs-14 font-w500">Progress</th>
                  <th className="border-bottom-0 fs-14 font-w500">
                    Work Status
                  </th>
                  <th className="border-bottom-0 fs-14 font-w500">Action</th>
                </tr>
              </thead>
              <tbody>
                {workList.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No tasks found.
                    </td>
                  </tr>
                ) : (
                  workList.map((work, index) => {
                    const progress = calculateProgress(
                      work.startTime,
                      work.deadline
                    );

                    return (
                      <tr key={index}>
                        <td>
                          <a
                            href="#"
                            className="d-flex"
                            onClick={() => goToProjectKanban(work.projectId)}
                          >
                            <span>{work.projectName || "N/A"}</span>
                          </a>
                        </td>
                        <td>
                          <span
                            style={{
                              textDecoration:
                                new Date(work.deadline) < new Date()
                                  ? "line-through"
                                  : "none",
                              color:
                                new Date(work.deadline) < new Date()
                                  ? "#dc3545"
                                  : "inherit",
                            }}
                          >
                            {work.taskTitle || "N/A"}
                          </span>
                        </td>
                        <td>
                          <ul className="user-list mb-0">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={
                                  work.memberImage || "/images/default-user.png"
                                }
                                alt={work.memberName || "User"}
                                className="rounded-circle"
                                width="40"
                                height="40"
                              />
                              <a
                                style={{ cursor: "pointer" }}
                                className="ms-2"
                                onClick={() => goToUserProfile(work.memberMail)}
                              >
                                {work.memberName || "Unknown"}
                              </a>
                            </div>
                          </ul>
                        </td>
                        <td>{new Date(work.startTime).toLocaleDateString()}</td>
                        <td
                          style={{
                            color:
                              new Date(work.deadline) < new Date()
                                ? "#dc3545"
                                : "inherit",
                          }}
                        >
                          {new Date(work.deadline).toLocaleDateString()}
                        </td>
                        <td>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              work.status === "done"
                                ? "badge-success"
                                : work.status === "in progress"
                                ? "badge-warning"
                                : "badge-primary"
                            }`}
                          >
                            {work.status}
                          </span>
                        </td>
                        <td
                          style={{ display: "flex", justifyContent: "start" }}
                        >
                          <a
                            className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                            onClick={(e) =>
                              openModelEdit(e, work.taskId, work.projectId)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <svg
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--lucide"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              >
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </g>
                            </svg>
                          </a>
                          <a
                            className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                            onClick={() =>
                              handleDeleteTask(work.taskId, work.projectId)
                            }
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
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}
          {isEditModalOpen && (
            <EditTaskInProject
              closeModal={closeModal}
              taskId={selectedTaskId}
              projectId={selectedProjectId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTasksList;
