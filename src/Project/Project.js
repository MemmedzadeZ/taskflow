import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import SidebarComponent from "../SideBar/SidebarComponent";
import "./CreateProject.css"; // Add custom styles here
import CurrentPerson from "../Dashboard/CurrentUser";
import TotalProjects from "./ProjectComponents/TotalProjects";
import CompletedProjects from "./ProjectComponents/CompletedProjects";
import PendingProjects from "./ProjectComponents/PendingProjects";
import OngoingProjects from "./ProjectComponents/OngoingProjects";
import AllProjects from "./ProjectComponents/AllProjects";
import CreateProjectModel from "./ProjectComponents/CreateProjectModel";
import ProjectLinearChart from "./ProjectLinearChart";
import RecentActivity from "./RecentActivity";
import InProgress from "./InProgress";
import ProjectStatistik from "./ProjectStatistik";
import ProjectTasksList from "./ProjectTasksList";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";

// import Lottie from "lottie-react";
// import loaderjson from "../animations/loader.json";

const Project = () => {
  // const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // setLoading(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setLoading(false);
  };

  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          {/* Main Header */}
          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">Projects</div>
            </div>

            <div className="d-flex align-items-center">
              {/* App Search */}
              <div className="d-flex align-items-center">
                {/* App Search */}

                <SidebarSearchComponent></SidebarSearchComponent>

                <CurrentPerson />
              </div>
            </div>
          </div>

          <>
            <div className="main">
              <div className="main-content project">
                <div className="row">
                  <div className="col-9 col-xl-7 col-md-8 col-sm-12">
                    <div className="box card-box">
                      <TotalProjects />
                      <CompletedProjects />
                      <OngoingProjects />
                      <PendingProjects></PendingProjects>
                    </div>
                  </div>
                  <div className="col-3 col-xl-5 col-md-4 col-sm-12">
                    <div className="box h-100 d-flex align-items-center">
                      <a
                        className="create d-flex bg-primary justify-content-center"
                        href=" "
                        onClick={openModel}
                      >
                        <div className="icon color-white pt-4 pr-8">
                          <i className="bx bx-plus-circle" />
                        </div>
                        <div className="content">
                          <h5 className="color-white">Create New Project</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Modal Section */}
                {isModalOpen && <CreateProjectModel closeModal={closeModal} />}

                {/* ///// */}
                <AllProjects></AllProjects>
                <div className="row">
                  <ProjectLinearChart></ProjectLinearChart>
                  <ProjectStatistik></ProjectStatistik>
                  <InProgress></InProgress>
                  <RecentActivity></RecentActivity>
                  <ProjectTasksList />
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
                        <h5 className="modal-title">Create Project</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal custom-modal fade"
                  id="delete_project"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="form-header">
                          <h3>Delete Card</h3>
                          <p>Are you sure want to delete?</p>
                        </div>
                        <div className="modal-btn delete-action">
                          <div className="row">
                            <div className="col-6 mb-0">
                              <a
                                href=" "
                                className="btn btn-primary continue-btn"
                              >
                                Delete
                              </a>
                            </div>
                            <div className="col-6 mb-0">
                              <a
                                href=" "
                                data-dismiss="modal"
                                className="btn btn-primary cancel-btn"
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="edit_card_modal"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Card</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label>Image Card</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="form-group">
                            <label>Card Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Food Website hero area"
                            />
                          </div>
                          <div className="form-group">
                            <label>Due Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control "
                                type="date"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="submit-section text-center">
                            <button className="btn btn-primary submit-btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="add_card_modal"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Add Card</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label>Image Card</label>
                            <input className="form-control" type="file" />
                          </div>
                          <div className="form-group">
                            <label>Card Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                          <div className="form-group">
                            <label>Due Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control "
                                type="date"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="submit-section text-center">
                            <button className="btn btn-primary submit-btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAIN CONTENT */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Project;
