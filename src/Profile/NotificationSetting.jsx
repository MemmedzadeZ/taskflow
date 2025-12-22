import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchNewRecentActivity,
  fetchNotificationSetting,
  fetchUpdatedNotificationSetting,
} from "../utils/fetchUtils/notificationUtils";
function NotificationSetting() {
  const [settings, setSettings] = useState({
    FriendshipOffers: false,
    NewTaskWithInProject: false,
    TaskDueDate: false,
    ProjectCompletationDate: false,
    InnovationNewProject: false,
  });

  useEffect(() => {
    const getSettings = async () => {
      const savedSettings = localStorage.getItem("notificationSettings");
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      } else {
        const data = await fetchNotificationSetting();
        setSettings({
          FriendshipOffers: data.friendshipOffers,
          NewTaskWithInProject: data.newTaskWithInProject,
          TaskDueDate: data.taskDueDate,
          ProjectCompletationDate: data.projectCompletationDate,
          InnovationNewProject: data.innovationNewProject,
        });
        localStorage.setItem("notificationSettings: ", data);
      }
    };
    getSettings();
  }, []);

  const handleSave = async () => {
    const data = await fetchUpdatedNotificationSetting(settings);

    console.log("Settings updated:", data);
    toast.success("Settings updated successfully!");
    // deyisiklikleri yadda saxlamaq ucun
    localStorage.setItem("notificationSettings", JSON.stringify(settings));
    const activityData = {
      text: "Notification settings updated.",
      type: "Notification",
    };

    await fetchNewRecentActivity(activityData);
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
      <ToastContainer />
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
