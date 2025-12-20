import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { HubConnectionBuilder } from "@microsoft/signalr";
function TaskList() {
  const { email } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const fetchUserProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:5204/api/Work/UserProfileTask/${email}`
      );

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        setError("Error fetching user profile");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //SIGNALRR
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5204/connect", {
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

    conn.on("UserProfileTask", (message) => {
      fetchUserProfile();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  useEffect(() => {
    fetchUserProfile();
  }, [email]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = tasks.slice(firstPostIndex, lastPostIndex);

  const calculateProgress = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date();
    const totalDuration = end - start;
    const elapsedDuration = current - start;
    const progress = Math.min((elapsedDuration / totalDuration) * 100, 100);
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

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="row">
      <div className="col-sm-12">
        <table
          className="table table-vcenter text-nowrap table-bordered dataTable no-footer"
          id="task-profile"
        >
          <thead>
            <tr className="top">
              <th className="border-bottom-0 text-center fs-14 font-w500">
                No
              </th>
              <th className="border-bottom-0 fs-14 font-w500">Task</th>
              <th className="border-bottom-0 fs-14 font-w500">Priority</th>
              <th className="border-bottom-0 fs-14 font-w500">Start Date</th>
              <th className="border-bottom-0 fs-14 font-w500">Deadline</th>
              <th className="border-bottom-0 fs-14 font-w500">Progress</th>
              <th className="border-bottom-0 fs-14 font-w500">Work Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((task, index) => (
              <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
                <td className="text-center">
                  {index + 1 + (currentPage - 1) * postsPerPage}
                </td>
                <td>
                  <a href=" " className="d-flex">
                    <span
                      style={{
                        textDecoration:
                          new Date(task.deadline) < new Date()
                            ? "line-through"
                            : "none",
                        color:
                          new Date(task.deadline) < new Date()
                            ? "#dc3545"
                            : "inherit",
                      }}
                    >
                      {task.title}
                    </span>
                  </a>
                </td>
                <td>
                  <span
                    className={`badge badge-${
                      task.priority === "high"
                        ? "danger"
                        : task.priority === "medium"
                        ? "warning"
                        : "success"
                    }-light`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td>{formatDate(task.startDate)}</td>
                <td>
                  {" "}
                  <span
                    style={{
                      color:
                        new Date(task.deadline) < new Date()
                          ? "#dc3545"
                          : "inherit",
                    }}
                  >
                    {formatDate(task.deadline)}
                  </span>
                </td>
                <td>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar bg-primary"
                      style={{
                        width: `${calculateProgress(
                          task.startDate,
                          task.deadline
                        )}%`,
                      }}
                    />
                  </div>
                </td>
                <td>
                  <span
                    className={`badge badge-${
                      task.status === "done"
                        ? "success"
                        : task.status === "to do"
                        ? "warning"
                        : "danger"
                    }`}
                  >
                    {task.status}
                  </span>
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
          {[...Array(Math.ceil(tasks.length / postsPerPage)).keys()].map(
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
            disabled={currentPage === Math.ceil(tasks.length / postsPerPage)}
          />
          <Pagination.Last
            onClick={() =>
              handlePageChange(Math.ceil(tasks.length / postsPerPage))
            }
            disabled={currentPage === Math.ceil(tasks.length / postsPerPage)}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default TaskList;
