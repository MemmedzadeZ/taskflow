import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import "./Task.css";
import HeaderTaskInfo from "./HeaderTaskInfo";
import UserTasks from "./UserTasks";

const Tasks = () => {
  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
              <div className="main-title">Task</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
              </div>
            </div>
          </div>

          <>
            <div className="main">
              <div className="main-content message">
                <HeaderTaskInfo />
                <div className="row">
                  <div className="col-88 col-md-112">
                    <div className="box message-info">
                      {/* /.box-info-messager */}

                      <div className="tasks-container">
                        <header className="tasks-header">
                          <h2>Tasks</h2>

                          <button className="create-task-button">
                            + Create Task
                          </button>
                        </header>
                        <UserTasks />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="add_project"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <a href="/project">
                          <h5 className="modal-title">Create Project</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Project Name</label>
                                <input
                                  className="form-control"
                                  defaultValue=""
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Client</label>
                                <select className="select">
                                  <option>Client 1</option>
                                  <option>Client 2</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Start Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control "
                                    type="date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>End Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control "
                                    type="date"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>Rate</label>
                                <input
                                  placeholder="$50"
                                  className="form-control"
                                  defaultValue=""
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>&nbsp;</label>
                                <select className="select">
                                  <option>Hourly</option>
                                  <option selected="">Fixed</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>Priority</label>
                                <select className="select">
                                  <option selected="">High</option>
                                  <option>Medium</option>
                                  <option>Low</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              rows={4}
                              className="form-control"
                              placeholder="Enter your message here"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label>Upload Files</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="submit-section">
                            <button className="btn btn-primary submit-btn">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
