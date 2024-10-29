import { useState } from "react";

function CreateProjectModel({ closeModal }) {
  const [projectName, setProjectName] = (useState = "");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="modal-background">
      <div className="modal-content">
        <form>
          <h2>Create Project</h2>

          {/* Project Name and Client */}
          <div className="row">
            <div className="col">
              <label>Project Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project Name"
              />
            </div>
            <div className="col">
              <label>Client:</label>
              <select className="form-control">
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </div>
          </div>

          {/* Start and End Dates */}
          <div className="row">
            <div className="col">
              <label>Start Date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col">
              <label>End Date:</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          {/* Rate and Priority */}
          <div className="row">
            <div className="col">
              <label>Rate:</label>
              <input type="text" className="form-control" placeholder="$50" />
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

          {/* Description */}
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your message here"
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="form-group">
            <label>Upload Files:</label>
            <input type="file" className="form-control-file" />
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
