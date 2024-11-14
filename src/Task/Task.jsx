import React, { useState } from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import "./Task.css";
import CreateTaskModel from "./TaskComponents/CreateTaskModel";

const initialTasks = [
  {
    id: 1,
    title: "Test task",
    priority: "High Priority",
    createdAt: "9-Feb-2024",
    assets: { files: 0, comments: 2, links: 0, progress: "0/1" },
    team: ["CA", "JS", "AJ"],
    status: "To Do",
  },
  {
    id: 2,
    title: "Duplicate - Review Code Changes",
    priority: "Medium Priority",
    createdAt: "9-Feb-2024",
    assets: { files: 3, comments: 0, links: 1, progress: "0/1" },
    team: ["AJ", "EW"],
    status: "In Progress",
  },
  // Add more tasks here as needed
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-search-alt"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary h-100"
                            type="submit"
                          >
                            <i className="bx bx-search-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="btn dropdown-toggle" id="header-lang-img">
                    EN
                    <i className="bx bx-caret-down"></i>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="en"
                  >
                    <img
                      src="/images/flags/us.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">English</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="sp"
                  >
                    <img
                      src="/images/flags/spain.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Spanish</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="gr"
                  >
                    <img
                      src="/images/flags/germany.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">German</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="it"
                  >
                    <img
                      src="/images/flags/italy.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Italian</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item language"
                    data-lang="ru"
                  >
                    <img
                      src="/images/flags/russia.jpg"
                      alt="user-image"
                      className="me-1"
                      height="12"
                    />{" "}
                    <span className="align-middle">Russian</span>
                  </a>
                </div>
              </div>

              <div className="dropdown d-inline-block mt-12">
                <CurrentPerson></CurrentPerson>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span>Profile</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                    <span>My Wallet</span>
                  </a>
                  <a className="dropdown-item d-block" href="#">
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                    <span>Settings</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                    <span>Lock screen</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item text-danger"
                    href="user-login.html"
                  >
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <>
            <div className="main">
              <div className="main-content message">
                <div className="row">
                  <div className="col-12">
                    <div class="box card-box mb-20">
                      <div class="icon-box bg-color-1">
                        <div class="icon bg-icon-1">
                          <i class="bx bxs-briefcase"></i>
                        </div>
                        <div class="content">
                          <h5 class="title-box fs-15 mt-2">Total Task</h5>
                          <div class="themesflat-counter fs-14 font-wb color-1">
                            <span
                              class="number"
                              data-from="0"
                              data-to="1225"
                              data-speed="2500"
                              data-inviewport="yes"
                            >
                              1225
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box bg-color-2">
                        <div class="icon bg-icon-2">
                          <i class="bx bx-task"></i>
                        </div>
                        <div class="content click-c">
                          <h5 class="title-box fs-15 mt-2">Running Task</h5>
                          <div class="themesflat-counter fs-14 font-wb color-2">
                            <span
                              class="number"
                              data-from="0"
                              data-to="309"
                              data-speed="2500"
                              data-inviewport="yes"
                            >
                              154 +
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box bg-color-3">
                        <div class="icon bg-icon-3">
                          <i class="bx bx-block"></i>
                        </div>
                        <div class="content click-c">
                          <h5 class="title-box fs-15 mt-2">On Hold Task</h5>
                          <div class="themesflat-counter fs-14 font-wb color-3">
                            <span
                              class="number"
                              data-from="0"
                              data-to="309"
                              data-speed="2500"
                              data-inviewport="yes"
                            >
                              75 +
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box bg-color-5">
                        <div class="icon bg-icon-5">
                          <i class="bx bx-task color-white"></i>
                        </div>
                        <div class="content click-c">
                          <h5 class="title-box fs-15 mt-2">Complete Task</h5>
                          <div class="themesflat-counter fs-14 font-wb color-4">
                            <span
                              class="number"
                              data-from="0"
                              data-to="309"
                              data-speed="2500"
                              data-inviewport="yes"
                            >
                              120 +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-88 col-md-112">
                    <div className="box message-info">
                      {/* /.box-info-messager */}

                      <div className="tasks-container">
                        <header className="tasks-header">
                          <h2>Tasks</h2>
                          <div className="view-switch">
                            <button className="view-button">Board View</button>
                            <button className="view-button active">
                              List View
                            </button>
                          </div>
                          <a
                            className="create d-flex bg-primary justify-content-center"
                            href=" "
                            onClick={openModel}
                          >
                            <button className="create-task-button">
                              + Create Task
                            </button>
                          </a>
                        </header>
                        {/* Modal Section */}
                        {isModalOpen && (
                          <CreateTaskModel closeModal={closeModal} />
                        )}

                        <div className="status-tabs">
                          <div className="status-tab">To Do</div>
                          <div className="status-tab">In Progress</div>
                          <div className="status-tab">Completed</div>
                        </div>
                        <table className="tasks-table">
                          <thead>
                            <tr>
                              <th>Task Title</th>
                              <th>Priority</th>
                              <th>Created At</th>
                              <th>Assets</th>
                              <th>Team</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tasks.map((task) => (
                              <tr key={task.id}>
                                <td>
                                  <span
                                    className={`status-indicator ${task.status.toLowerCase()}`}
                                  ></span>
                                  {task.title}
                                </td>
                                <td
                                  className={`priority ${task.priority
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                >
                                  {task.priority}
                                </td>
                                <td>{task.createdAt}</td>
                                <td className="assets">
                                  <span>📂 {task.assets.files}</span>
                                  <span>💬 {task.assets.comments}</span>
                                  <span>🔗 {task.assets.links}</span>
                                  <span>📊 {task.assets.progress}</span>
                                </td>
                                <td className="team">
                                  {task.team.map((member, index) => (
                                    <span key={index} className="team-member">
                                      {member}
                                    </span>
                                  ))}
                                </td>
                                <td>
                                  <button className="edit-button">Edit</button>
                                  <button className="delete-button">
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
