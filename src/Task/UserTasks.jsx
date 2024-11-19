import React, { useState, useEffect, useMemo } from "react";
import { Pagination } from "react-bootstrap";
import CreateTaskModel from "./TaskComponents/CreateTaskModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTaskModel from "./TaskComponents/EditTaskModel";
import EditProjectTaskModel from "./TaskComponents/EditProjectTaskModel";
function UserTasks() {
  const [loading, setLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModel = (taskId, projectId) => {
    console.log(taskId);
    setSelectedTaskId(taskId);
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Status Filter
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const [projectTasksResponse, userTasksResponse] = await Promise.all([
        fetch("https://localhost:7157/api/Work/UserTasks", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
        fetch("https://localhost:7157/api/UserTask/UserTasks", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
      ]);

      if (projectTasksResponse.ok && userTasksResponse.ok) {
        const projectTasks = await projectTasksResponse.json();
        const userTasks = await userTasksResponse.json();
        const combinedTasks = [
          ...projectTasks.map((task) => ({ ...task, source: "project" })),
          ...userTasks.map((task) => ({ ...task, source: "user" })),
        ];
        setAllTasks(combinedTasks);
      } else {
        setError("Error fetching tasks");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const filteredTasks = useMemo(() => {
    return allTasks.filter((task) =>
      statusFilter === "All" ? true : task.status === statusFilter
    );
  }, [allTasks, statusFilter]);

  const currentPosts = useMemo(() => {
    return filteredTasks.slice(firstPostIndex, lastPostIndex);
  }, [filteredTasks, firstPostIndex, lastPostIndex]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) setCurrentPage(pageNumber);
  };

  const handleDeleteTask = async (taskId, source) => {
    try {
      let deleteUrl;

      // Determine the correct endpoint based on the source
      if (source === "project") {
        deleteUrl = `https://localhost:7157/api/Work/DeleteProjectTask/${taskId}`;
      } else if (source === "user") {
        deleteUrl = `https://localhost:7157/api/UserTask/DeleteUserTask/${taskId}`;
      }

      // Make DELETE request to the chosen endpoint
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setAllTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskId)
        );
        toast.success("Task deleted successfully.");
      } else {
        toast.error("Failed to delete task.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("An error occurred while deleting the task.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ToastContainer />
      <div className="status-tabs">
        <div className="status-tab" onClick={() => setStatusFilter("to do")}>
          to do
        </div>
        <div
          className="status-tab"
          onClick={() => setStatusFilter("in progress")}
        >
          in progress
        </div>
        <div className="status-tab" onClick={() => setStatusFilter("done")}>
          completed
        </div>
        <div className="status-tab" onClick={() => setStatusFilter("All")}>
          All
        </div>
      </div>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Priority</th>
            <th>Created At</th>
            <th>Deadline</th>
            <th>Project</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </td>
              <td>{formatDate(task.startDate)}</td>
              <td>{formatDate(task.deadline)}</td>
              <td>
                {task.projectId ? (
                  <span className="team-member">{task.projectId}</span>
                ) : (
                  <span>No Team</span>
                )}
              </td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => openModel(task.id, task.projectId)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(task.id, task.source)}
                  disabled={task.source !== "user"}
                  style={{
                    opacity: task.source !== "user" ? 0.5 : 1,
                    cursor: task.source !== "user" ? "not-allowed" : "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen &&
        (selectedProjectId ? (
          <EditProjectTaskModel closeModal={closeModal} id={selectedTaskId} />
        ) : (
          <EditTaskModel closeModal={closeModal} id={selectedTaskId} />
        ))}

      <Pagination
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(Math.ceil(filteredTasks.length / postsPerPage)).keys()].map(
          (number) => (
            <Pagination.Item
              key={number}
              active={number + 1 === currentPage}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredTasks.length / postsPerPage)
          }
        />
        <Pagination.Last
          onClick={() =>
            handlePageChange(Math.ceil(filteredTasks.length / postsPerPage))
          }
          disabled={
            currentPage === Math.ceil(filteredTasks.length / postsPerPage)
          }
        />
      </Pagination>
    </>
  );
}

export default UserTasks;
