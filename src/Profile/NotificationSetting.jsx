import React, { useState, useEffect } from "react";
/**
            item.InnovationNewProject = dto.InnovationNewProject;
            item.FriendshipOffers = dto.FriendshipOffers;
            item.TaskDueDate = dto.TaskDueDate;
            item.ProjectCompletationDate = dto.ProjectCompletationDate;
            item.NewTaskWithInProject = dto.NewTaskWithInProject;
        */
function NotificationSetting() {
  const [settings, setSettings] = useState({
    FriendshipOffers: false,
    NewTaskWithInProject: false,
    TaskDueDate: false,
    ProjectCompletationDate: false,
    InnovationNewProject: false,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("notificationSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      fetch("https://localhost:7157/api/Notification/NotificationSetting", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.text())
        .then((text) => {
          console.log("Server Response:", text);
          return JSON.parse(text);
        })
        .then((data) => {
          setSettings({
            FriendshipOffers: data.friendshipOffers,
            NewTaskWithInProject: data.newTaskWithInProject,
            TaskDueDate: data.taskDueDate,
            ProjectCompletationDate: data.projectCompletationDate,
            InnovationNewProject: data.innovationNewProject,
          });
          localStorage.setItem("notificationSettings", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching settings:", error));
    }
  }, []);

  const handleSave = () => {
    fetch(
      "https://localhost:7157/api/Notification/UpdatedNotificationSetting",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(settings),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Settings updated:", data);
        alert("Settings updated successfully!");
        // deyisiklikleri yadda saxlamaq ucun
        localStorage.setItem("notificationSettings", JSON.stringify(settings));
        const activityData = {
          text: "Notification settings updated.",
          type: "Notification",
        };

        fetch("https://localhost:7157/api/Notification/NewRecentActivity", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(activityData),
        });
      })
      .catch((error) => console.error("Error updating settings:", error));
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [id]: checked,
    }));
  };

  return (
    <div className="notification-settings">
      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>Friendship Offers</span>
        </div>
        <input
          type="checkbox"
          id="friendshipOffers"
          className="switch-input"
          checked={settings.friendshipOffers}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>Task Due Date Reminders</span>
        </div>
        <input
          type="checkbox"
          id="taskDueDate"
          className="switch-input"
          checked={settings.taskDueDate}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>Project Completed Date Reminders</span>
        </div>
        <input
          type="checkbox"
          id="projectCompletationDate"
          className="switch-input"
          checked={settings.projectCompletationDate}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>New Project Proposals</span>
        </div>
        <input
          type="checkbox"
          id="innovationNewProject"
          className="switch-input"
          checked={settings.innovationNewProject}
          onChange={handleChange}
        />
      </div>
      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>New Task Assignments Within the Project</span>
        </div>
        <input
          type="checkbox"
          id="newTaskWithInProject"
          className="switch-input"
          checked={settings.newTaskWithInProject}
          onChange={handleChange}
        />
      </div>

      <div className="buttonGroup">
        <button type="button" className="cancelButton">
          Cancel
        </button>
        <button type="button" className="saveButton" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NotificationSetting;
