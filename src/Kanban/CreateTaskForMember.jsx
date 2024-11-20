import { useEffect, useState } from "react";
import "./css/CreateTaskForMember.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
function AddTaskModel({ closeModal, id, columnId }) {
  const { projectId } = useParams();
  const [proId, setProId] = useState(projectId); // Proje ID'sini state'e atama
  const [title, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setEndDate] = useState("");
  const [color, setColor] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const statusMap = {
    "column-1": "to do",
    "column-2": "in progress",
    "column-3": "done",
    "column-4": "approved",
  };

  const fetchUsersByProject = async () => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/TeamMember/GetUsersByProject/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setProId(projectId);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsersByProject(id);
  }, [id]);

  useEffect(() => {
    if (users.length > 0 && !selectedUserId) {
      setSelectedUserId(users[0].id);
    }
  }, [users, selectedUserId]);
  const saveTask = async (e) => {
    e.preventDefault();

    const taskData = {
      ProjectId: proId,
      CreatedById: selectedUserId, // handle default value
      Title: title,
      Description: description,
      Deadline: deadline,
      Priority: priority,
      Color: color,
      StartDate: startDate,
      Status: statusMap[columnId], // handle default value
    };

    try {
      const response = await fetch("https://localhost:7157/api/Work/NewTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        toast.success("Append new task successfully");
        closeModal();
      } else {
        toast.error(
          "Only authorized users can create tasks. Please contact your administrator."
        );
      }
    } catch (error) {
      toast.error("Error:" + error);
    }
  };

  const getSelectedColorClass = (currentColor) => {
    return color === currentColor ? "selected" : "";
  };

  const getSelectedPriorityClass = (currentPriority) => {
    return priority === currentPriority ? "selected" : "";
  };

  return (
    <div className="modal-backgroundd">
      <ToastContainer position="top-right" />
      <div className="modal-contentt">
        <form onSubmit={saveTask}>
          <h2 className="modal-titlee">Create Task</h2>
          <div className="form-groupp">
            <label htmlFor="task-name">Task Name</label>
            <input
              id="task-name"
              type="text"
              className="form-controll"
              placeholder="Enter task name"
              value={title} // handle default value
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-groupp">
            <label htmlFor="task-name">Description</label>
            <textarea
              id="priority"
              className="form-controll"
              rows="3"
              placeholder=" Enter task description"
              value={description} // handle default value
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-groupp">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              className="form-controll"
              value={startDate} // handle default value
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-groupp">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              className="form-controll"
              value={deadline} // handle default value
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="form-groupp">
            <label htmlFor="user-select">Assign to User</label>
            <select
              id="user-select"
              className="form-controll"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-groupp">
            <label htmlFor="status">Priority</label>
            <div className="status-tabs">
              <div
                className={`status-tab ${getSelectedPriorityClass("high")}`}
                onClick={() => setPriority("high")}
              >
                High
                {priority === "high" && (
                  <span className="status-selected">✖</span>
                )}
              </div>
              <div
                className={`status-tab ${getSelectedPriorityClass("medium")}`}
                onClick={() => setPriority("medium")}
              >
                Medium
                {priority === "medium" && (
                  <span className="status-selected">✖</span>
                )}
              </div>
              <div
                className={`status-tab ${getSelectedPriorityClass("easy")}`}
                onClick={() => setPriority("easy")}
              >
                Easy
                {priority === "easy" && (
                  <span className="status-selected">✖</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-groupp">
            <label htmlFor="priority">Color</label>
            <div className="priority-tabss">
              <button
                type="button"
                className={`priority-btnn high ${getSelectedColorClass(
                  "#3C21F7"
                )}`}
                style={{ backgroundColor: "#3C21F7" }}
                onClick={() => setColor("#3C21F7")}
              >
                {color === "#3C21F7" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
              <button
                type="button"
                className={`priority-btnn medium ${getSelectedColorClass(
                  "#00BC8B"
                )}`}
                style={{ backgroundColor: "#00BC8B" }}
                onClick={() => setColor("#00BC8B")}
              >
                {color === "#00BC8B" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
              <button
                type="button"
                className={`priority-btnn low ${getSelectedColorClass(
                  "#FFB800"
                )}`}
                style={{ backgroundColor: "#FFB800" }}
                onClick={() => setColor("#FFB800")}
              >
                {color === "#FFB800" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
              <button
                type="button"
                className={`priority-btnn high ${getSelectedColorClass(
                  "#00ECCC"
                )}`}
                style={{ backgroundColor: "#00ECCC" }}
                onClick={() => setColor("#00ECCC")}
              >
                {color === "#00ECCC" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
              <button
                type="button"
                className={`priority-btnn medium ${getSelectedColorClass(
                  "#EF7F5A"
                )}`}
                style={{ backgroundColor: "#EF7F5A" }}
                onClick={() => setColor("#EF7F5A")}
              >
                {color === "#EF7F5A" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
              <button
                type="button"
                className={`priority-btnn low ${getSelectedColorClass(
                  "#5D45FB"
                )}`}
                style={{ backgroundColor: "#5D45FB" }}
                onClick={() => setColor("#5D45FB")}
              >
                {color === "#5D45FB" && (
                  <span className="priority-selected">✖</span>
                )}
              </button>
            </div>
          </div>
          <div className="modal-buttonss">
            <button type="button" className="close-btnn" onClick={closeModal}>
              Close
            </button>
            <button type="submit" className="submit-btnn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModel;
