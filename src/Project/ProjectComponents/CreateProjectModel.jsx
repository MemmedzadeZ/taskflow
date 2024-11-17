import { useState, useEffect } from "react";
import Notifier from "../../Error/Notifier";
import "../css/ProjectStyles.css";

import $, { data } from "jquery";
import { SearchMember } from "../SearchMember";

function CreateProjectModel({ closeModal }) {
  const [title, setProjectName] = useState("");
  const [progressText, setProgressText] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleMembers = async (e) => {
    if (e.target.value.trim()) {
      await SearchMember(e, e.target.value);
    } else $("#searched-members").remove();
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    setProgressText(null);
    const projectData = {
      title,
      startDate,
      endDate,
      description,
      isCompleted: false,
    };
    fetch("https://localhost:7157/api/Project", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    }).then((response) => {
      if (response.ok) {
        console.log(response.json());
        const activityData = {
          text: "New Project Created",
          type: "Project",
        };
        setProgressText("Project Created!");
        fetch("https://localhost:7157/api/Notification/NewRecentActivity", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(activityData),
        });
        handleMemberAdding();
      }
    });
    // setTimeout(() => {}, 1000);
  };
  const handleMemberAdding = async () => {
    try {
      console.log("Inside member handler");
      const container = document.getElementById("team-member-box");

      // Extract usernames from the DOM
      const usernames = Array.from(
        container.querySelectorAll(".selected-tm")
      ).map((div) => div.textContent.trim());

      // Ensure the title variable is defined correctly
      if (!title) {
        console.error("Title is undefined or empty.");
        return;
      }
      var newTitle = title.trim();

      // Fetch project ID by title
      const projectResponse = await fetch(
        "https://localhost:7157/api/Project/ProjectWithTitle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newTitle),
        }
      );

      if (!projectResponse.ok) {
        console.error(
          "Failed to fetch project ID:",
          projectResponse.statusText
        );
        return;
      }

      const projectData = await projectResponse.json();
      const projectId = projectData.id;

      if (!projectId) {
        console.error("Project ID not found.");
        return;
      }

      // Payload with project ID and usernames
      const payload = {
        projectId,
        Members: usernames,
      };

      // Add team members to the project
      const response = await fetch(
        "https://localhost:7157/api/TeamMember/TeamMemberCollections",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const text = await response.json();
        setProgressText(text.message);
      } else {
        console.error("Failed to add team members:", response.statusText);
      }
    } catch (error) {
      console.error("Error in handleMemberAdding:", error);
    }
  };

  useEffect(() => {
    setProgressText(null);
  }, []);

  return (
    <div className="modal-backgroundd">
      {progressText !== null && <Notifier message={progressText}></Notifier>}
      <div className="modal-content-project">
        <form onSubmit={(e) => handleCreateProject(e)}>
          <h2>Create Project</h2>

          {/* Project Name and Client */}
          <div className="row">
            <div className="col">
              <label>Project Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project Name"
                value={title}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>Priority:</label>
              <select className="form-control">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          {/* Start and End Dates */}
          <div className="row">
            <div className="col">
              <label>Start Date:</label>
              <input
                type="date"
                className="form-control"
                required
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>End Date:</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your message here"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          {/* Search and Team Members */}
          <div style={{ display: "flex" }}>
            <div
              className="app-search d-none d-lg-block"
              style={{ width: "45%", position: "relative" }}
              id="member-search-container"
            >
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users..."
                  onChange={handleMembers}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                />
              </div>
            </div>
            <div
              id="team-member-box"
              style={{ border: "1px solid gray", width: "45%" }}
            ></div>
          </div>

          {/* Modal Buttons */}
          <div className="form-buttons">
            <button type="button" className="close-btn" onClick={closeModal}>
              Close
            </button>
            <button type="submit" className="submit-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectModel;
