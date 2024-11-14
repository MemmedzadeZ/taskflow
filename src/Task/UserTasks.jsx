import React, { useState, useEffect, useMemo } from "react";
import { Pagination } from "react-bootstrap";

function UserTasks() {
  const [loading, setLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const [error, setError] = useState(null);

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
    console.log("Silinecek Görev ID:", taskId); // taskId kontrolü
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
        alert("Task deleted successfully.");
      } else {
        alert("Failed to delete task.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("An error occurred while deleting the task.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="status-tabs">
        <div className="status-tab" onClick={() => setStatusFilter("to do")}>
          To Do
        </div>
        <div
          className="status-tab"
          onClick={() => setStatusFilter("in progress")}
        >
          In Progress
        </div>
        <div className="status-tab" onClick={() => setStatusFilter("done")}>
          Completed
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
                <button className="edit-button">Edit</button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(task.id, task.source)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
