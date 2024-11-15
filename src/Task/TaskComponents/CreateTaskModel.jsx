import { useState } from "react";
import "./css/CreateTask.css";

function CreateTaskModel({ closeModal }) {
  const [title, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="modal-backgroundd">
      <div className="modal-contentt">
        <form>
          <h2 className="modal-titlee">Create Task</h2>

          <div className="form-groupp">
            <label htmlFor="task-name">Task Name</label>
            <input
              id="task-name"
              type="text"
              className="form-controll"
              placeholder="Enter task name"
              value={title}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="form-groupp">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="text"
              className="form-controll"
              placeholder="Enter status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <div className="form-groupp">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              className="form-controll"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-groupp">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              className="form-controll"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="form-groupp">
            <label htmlFor="priority">Priority</label>
            <textarea
              id="priority"
              className="form-controll"
              rows="3"
              placeholder="Enter your priority here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="priority-tabss">
              <button type="button" className="priority-btnn high">
                High
              </button>
              <button type="button" className="priority-btnn medium">
                Medium
              </button>
              <button type="button" className="priority-btnn low">
                Low
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

export default CreateTaskModel;
