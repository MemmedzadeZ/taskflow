import React, { useState, useEffect } from "react";

function NotificationSetting() {
  const [settings, setSettings] = useState({
    friendshipOffers: false,
    deadlineReminders: false,
    incomingComments: false,
    internalTeamMessages: false,
    newProjectProposals: false,
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
            friendshipOffers: data.friendshipOffers,
            deadlineReminders: data.deadlineReminders,
            incomingComments: data.incomingComments,
            internalTeamMessages: data.internalTeamMessages,
            newProjectProposals: data.newProjectProposals,
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
          <span>Deadline Reminders</span>
        </div>
        <input
          type="checkbox"
          id="deadlineReminders"
          className="switch-input"
          checked={settings.deadlineReminders}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>Incoming Comments</span>
        </div>
        <input
          type="checkbox"
          id="incomingComments"
          className="switch-input"
          checked={settings.incomingComments}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>Internal Team Messages</span>
        </div>
        <input
          type="checkbox"
          id="internalTeamMessages"
          className="switch-input"
          checked={settings.internalTeamMessages}
          onChange={handleChange}
        />
      </div>

      <div className="custom-switch mb-16">
        <div className="switch-label">
          <span>New Project Proposals</span>
        </div>
        <input
          type="checkbox"
          id="newProjectProposals"
          className="switch-input"
          checked={settings.newProjectProposals}
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
