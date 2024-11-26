import { useEffect, useState } from "react";
//import "..//css/CreateTaskForMember.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditTaskInProject({ closeModal, taskId, projectId }) {
  console.log("id:" + taskId);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [userTask, setUserTask] = useState({
    title: "",
    description: "",
    startDate: "",
    deadline: "",
    status: "",
    priority: "",
    color: "",
    createdId: "",
    projectId: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchEditTaskData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://localhost:7157/api/Work/${taskId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        const formattedStartDate = data.startDate
          ? new Date(data.startDate).toLocaleDateString("en-CA")
          : "";
        const formattedDeadline = data.deadline
          ? new Date(data.deadline).toLocaleDateString("en-CA")
          : "";
        setUserTask({
          ...data,
          startDate: formattedStartDate,
          deadline: formattedDeadline,
        });
      } else {
        toast.error("Failed to fetch task data.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://localhost:7157/api/Work/EditedProjectForPmTask/${taskId}`,
        {
          method: "PUT", // PUT method to update
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            ...userTask,
            createdById: selectedUserId,
            projectId: projectId,
          }), // Send updated task data
        }
      );

      if (response.ok) {
        toast.success("Task successfully updated!");
        fetchEditTaskData(); // Refresh task data after update
        closeModal(); // Close modal after successful update
      } else {
        toast.error(
          "Only Project Manager can update this task. Please contact the Project Manager."
        );
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersByProject(); // Fetch users based on projectId
    fetchEditTaskData(); // Fetch task data on modal open
  }, [taskId]);

  useEffect(() => {
    if (users.length > 0 && !selectedUserId) {
      setSelectedUserId(users[0].id);
    }
  }, [users, selectedUserId]);

  const getSelectedClass = (currentValue, valueToCheck) =>
    currentValue === valueToCheck ? "selected" : "";

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="modal-backgroundd">
      <ToastContainer position="top-right" />
      <div className="modal-contentt">
        <form onSubmit={handleSubmit}>
          <h2 className="modal-titlee">Edit Task</h2>
          <div className="form-groupp">
            <label htmlFor="task-name">Task Name</label>
            <input
              id="task-name"
              type="text"
              className="form-controll"
              placeholder="Enter task name"
              value={userTask.title}
              onChange={(e) =>
                setUserTask({ ...userTask, title: e.target.value })
              }
            />
          </div>
          <div className="form-groupp">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-controll"
              rows="3"
              placeholder="Enter task description"
              value={userTask.description}
              onChange={(e) =>
                setUserTask({ ...userTask, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="form-groupp">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              className="form-controll"
              value={userTask.startDate}
              onChange={(e) =>
                setUserTask({ ...userTask, startDate: e.target.value })
              }
            />
          </div>
          <div className="form-groupp">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              className="form-controll"
              value={userTask.deadline}
              onChange={(e) =>
                setUserTask({ ...userTask, deadline: e.target.value })
              }
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
            <label htmlFor="priority">Priority</label>
            <div className="status-tabs">
              {["high", "medium", "easy"].map((pp) => (
                <button
                  type="button"
                  key={pp}
                  className={`status-tab ${getSelectedClass(
                    userTask.priority,
                    pp
                  )}`}
                  onClick={() => setUserTask({ ...userTask, priority: pp })}
                >
                  {pp.charAt(0).toUpperCase() + pp.slice(1)}
                  {userTask.priority === pp && (
                    <span className="priority-selected">✔</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="form-groupp">
            <label htmlFor="priority">Status</label>
            <div className="status-tabs">
              {["to do", "in progress", "done"].map((pp) => (
                <button
                  type="button"
                  key={pp}
                  className={`status-tab ${getSelectedClass(
                    userTask.status,
                    pp
                  )}`}
                  onClick={() => setUserTask({ ...userTask, status: pp })}
                >
                  {pp.charAt(0).toUpperCase() + pp.slice(1)}
                  {userTask.status === pp && (
                    <span className="priority-selected">✔</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="form-groupp">
            <label htmlFor="color">Color</label>
            <div className="priority-tabss">
              {[
                "#3C21F7",
                "#00BC8B",
                "#FFB800",
                "#00ECCC",
                "#EF7F5A",
                "#5D45FB",
              ].map((colorOption) => (
                <button
                  key={colorOption}
                  type="button"
                  className={`priority-btnn ${getSelectedClass(
                    userTask.color,
                    colorOption
                  )}`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() =>
                    setUserTask({ ...userTask, color: colorOption })
                  }
                >
                  {userTask.color === colorOption && (
                    <span className="priority-selected">✔</span>
                  )}
                </button>
              ))}
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

export default EditTaskInProject;
