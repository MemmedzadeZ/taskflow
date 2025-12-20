import { useEffect, useState } from "react";
import "./css/CreateTask.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditTaskModel({ closeModal, id }) {
  const [userTask, setUserTask] = useState({
    title: "",
    description: "",
    startDate: "",
    deadline: "",
    status: "",
    priority: "",
    color: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // userin taskini fetch etmek
  const fetchTaskData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5204/api/UserTask/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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
        toast.error(" Failed to fetch task data.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // userin taskini edit etmek
  const saveTask = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5204/api/UserTask/EditedTask/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(userTask),
        }
      );

      if (response.ok) {
        toast.success("Updated task successfully.");
        closeModal();
        const activityData = {
          text: "Task updated successfully!",
          type: "Task",
        };

        await fetch(
          "http://localhost:5204/api/Notification/NewRecentActivity",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(activityData),
          }
        );
      } else {
        toast.error("Failed to update task.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTaskData();
    }
  }, [id]);

  const getSelectedClass = (currentValue, valueToCheck) =>
    currentValue === valueToCheck ? "selected" : "";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-backgroundd">
      <ToastContainer position="top-right" />
      <div className="modal-contentt">
        <form onSubmit={saveTask}>
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

export default EditTaskModel;
