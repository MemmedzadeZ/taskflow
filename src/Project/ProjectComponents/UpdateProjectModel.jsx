import { useState, useEffect } from "react";
import Notifier from "../../Error/Notifier";
import "../css/ProjectStyles.css";

import $, { data } from "jquery";
import {
  SearchMember,
  handleUserSelection,
  generatePastelColor,
} from "../SearchMember";

function UpdateProjectModel({ closeModal, projectId }) {
  const [title, setProjectName] = useState("");
  const [progressText, setProgressText] = useState(null);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("");
  const [isDisplay, setDisplay] = useState(false);
  const [members, setTeamMembers] = useState([]);
  const getSelectedColorClass = (currentColor) => {
    return color === currentColor ? "selected" : "";
  };
  const handleMembers = async (e) => {
    if (e.target.value.trim()) {
      await SearchMember(e, e.target.value);
    } else $("#searched-members").remove();
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    setProgressText(null);
    const projectData = {
      title,
      startDate,
      endDate,
      description,
      isCompleted: false,
      color,
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

      const usernames = Array.from(
        container.querySelectorAll(".selected-tm")
      ).map((div) => div.textContent.trim());

      if (!title) {
        console.error("Title is undefined or empty.");
        return;
      }
      var newTitle = title.trim();

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

      const payload = {
        projectId,
        Members: usernames,
      };

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

  const fetchData = async (projectId) => {
    var response = await fetch(
      `https://localhost:7157/api/Project/${projectId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    var data = await response.json();
    console.log(data);
    console.log(data.color);
    setColor(data.color);
    setDescription(data.description);
    setProjectName(data.title);
    setStartDate(data.startDate.slice(0, 10));
    setEndDate(data.endDate.slice(0, 10));
  };

  useEffect(() => {
    fetchData(projectId);
    setProgressText(null);
  }, [projectId]);
  return (
    <div className="modal-backgroundd">
      {progressText !== "" && <Notifier message={progressText}></Notifier>}
      <div className="modal-content-project">
        <form onSubmit={(e) => handleUpdateProject(e)}>
          <h2>Update Project</h2>

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
          {/* <button className="btn btn-primary" onClick={setDisplay(!isDisplay)}>
            Members
          </button> */}
          {/* {isDisplay ? (
            (<div style={{ display: "flex" }}>
              <div
                className="app-search d-none d-lg-block"
                style={{ width: "45%", position: "relative" }}
                id="member-search-form"
              >
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    onChange={handleMembers}
                  />
                </div>
              </div>
              <div
                id="team-member-box"
                style={{
                  border: "1px solid gray",
                  width: "45%",
                  height: "auto",
                }}
              ></div>
            </div>)(addTeamMembers(teamMembers))
          ) : (
            <></>
          )} */}

          <div style={{ display: "flex" }}>
            <div
              className="app-search d-none d-lg-block"
              style={{ width: "45%", position: "relative" }}
              id="member-search-form"
            >
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users..."
                  onChange={handleMembers}
                />
              </div>
            </div>
            <div
              id="team-member-box"
              style={{
                border: "1px solid gray",
                width: "45%",
                height: "auto",
              }}
            >
              {members.map((member, index) => (
                <div
                  key={index}
                  className="selected-tm"
                  style={{
                    backgroundColor: generatePastelColor(),
                    cursor: "pointer",
                  }}
                >
                  {member}
                </div>
              ))}
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
export default UpdateProjectModel;
