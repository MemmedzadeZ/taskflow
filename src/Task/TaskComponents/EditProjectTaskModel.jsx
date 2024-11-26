import { useEffect, useState } from "react";
import "./css/CreateTask.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditProjectTaskModel({ closeModal, id }) {
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

  //  proyekt daxili taski fetch etmek
  const fetchTaskData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://localhost:7157/api/Work/${id}`, {
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

  //proyekt daxili taski edit etmek
  const saveTask = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://localhost:7157/api/Work/EditedProjectTask/${id}`,
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
          text: "Updated project task successfully.",
          type: "Project Task Update",
        };

        await fetch(
          "https://localhost:7157/api/Notification/NewRecentActivity",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(activityData),
          }
        );
        //proyekt daxilinde recent activity-e yazilacaq
        const projectActivityData = {
          text: "Updated project task successfully.",
        };

        await fetch(
          "https://localhost:7157/api/ProjectActivity/AddTeamMemberActivities",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(projectActivityData),
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
          <h2 className="modal-titlee">Edit Project`s Task</h2>

          <div className="form-groupp">
            <label htmlFor="task-name">Task Name</label>
            <label id="task-name" type="text" className="form-controll">
              {userTask.title}
            </label>
          </div>

          <div className="form-groupp">
            <label htmlFor="description">Description</label>
            <label
              id="description"
              className="form-controll"
              rows="3"
              placeholder="No description"
            >
              {userTask.description}
            </label>
          </div>

          <div className="form-groupp">
            <label htmlFor="start-date">Start Date</label>
            <label id="start-date" type="date" className="form-controll">
              {userTask.startDate}
            </label>
          </div>

          <div className="form-groupp">
            <label htmlFor="end-date">End Date</label>
            <label id="end-date" type="date" className="form-controll">
              {userTask.deadline}
            </label>
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

export default EditProjectTaskModel;
