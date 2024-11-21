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
import DoughnutChart from "../Chart/DoughnutChart ";
import LinearChart from "../Chart/LinearChart";
import groupProjectStatistics from "../Chart/ChartDataFunctions";
import ProjectLinearChart from "./ProjectLinearChart";
import RecentActivity from "./RecentActivity";
import InProgress from "./InProgress";
import SidebarSearchComponent from "../SideBar/SidebarSearchComponent";


const Project = () => {
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
                  <InProgress></InProgress>
                  <div className="col-12 col-md-12">
                    <div className="box ">
                      <div className="box-header  pt-0">
                        <div className="me-auto">
                          <h4 className="card-title mb-0 fs-22">
                            Recent Activity
                          </h4>
                        </div>
                        <div className="card-options pr-3">
                          <div className="dropdown">
                            {" "}
                            <a
                              href=" "
                              className="btn ripple btn-outline-light dropdown-toggle fs-14"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {" "}
                              See All{" "}
                              <i className="feather feather-chevron-down" />{" "}
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              role="menu"
                              style={{}}
                            >
                              <li>
                                <a href=" ">Monthly</a>
                              </li>
                              <li>
                                <a href=" ">Yearly</a>
                              </li>
                              <li>
                                <a href=" ">Weekly</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="box-body pb-0 table-responsive activity mt-18">
                        <table
                          className="table table-vcenter text-nowrap table-bordered dataTable no-footer mw-100"
                          id="task-profile"
                          role="grid"
                        >
                          <thead>
                            <tr className="top">
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "222.312px" }}
                              >
                                Project
                              </th>
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "84.8281px" }}
                              >
                                Team
                              </th>
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "87.9844px" }}
                              >
                                Start
                              </th>
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "87.9844px" }}
                              >
                                Deadline
                              </th>
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "71.875px" }}
                              >
                                Progress
                              </th>
                              <th
                                className="border-bottom-0 sorting fs-14 font-w500"
                                tabIndex={0}
                                aria-controls="task-profile"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "110.719px" }}
                              >
                                Work Status
                              </th>
                              <th
                                className="border-bottom-0 sorting_disabled fs-14 font-w500"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "145.391px" }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td>
                                <a href=" " className="d-flex ">
                                  {" "}
                                  <span>Design Updated</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>12-02-2021</td>
                              <td>16-06-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-primary w-30" />
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-warning">
                                  On hold
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <a href=" " className="d-flex ">
                                  {" "}
                                  <span>Website Develop</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>01-01-2021</td>
                              <td>22-04-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-yellow w-50" />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex">
                                  {" "}
                                  <span className="badge badge-danger">
                                    Dealy
                                  </span>
                                  <div className="mt-1 ms-1">
                                    {" "}
                                    <span
                                      className="feather feather-info text-danger"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Dealy by 99 days"
                                    />{" "}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <a href=" " className="d-flex ">
                                  <span>Digital Marketing</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>11-04-2021</td>
                              <td>16-06-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-primary w-100" />
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-success">
                                  Complete
                                </span>{" "}
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <a href=" " className="d-flex ">
                                  <span>Ad Analysis</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>11-03-2021</td>
                              <td>19-05-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-primary w-80" />
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-success">
                                  Complete
                                </span>{" "}
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <a href=" " className="d-flex ">
                                  <span>Design update</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>05-02-2021</td>
                              <td>21-04-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-primary w-70" />
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-success">
                                  Complete
                                </span>{" "}
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <a href=" " className="d-flex ">
                                  <span>Design update</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>21-01-2021</td>
                              <td>15-03-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-primary w-40" />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <span className="badge badge-success">
                                    Complete
                                  </span>
                                  <div className="mt-1 ms-1">
                                    <span
                                      className="feather feather-info text-danger"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Dealy by 30 days"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <a href=" " className="d-flex ">
                                  <span>Design update</span>{" "}
                                </a>
                              </td>
                              <td>
                                <ul className="user-list mb-0">
                                  <li>
                                    <img
                                      src="./images/avatar/user-1.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-2.png"
                                      alt="user"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="./images/avatar/user-3.png"
                                      alt="user"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td>23-01-2021</td>
                              <td>25-02-2021</td>
                              <td>
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-yellow w-40" />
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-success">
                                  Complete
                                </span>{" "}
                              </td>
                              <td>
                                <div className="dropdown">
                                  <a
                                    href=" "
                                    className="btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                    >
                                      <i className="bx bx-trash" /> Delete
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href=" "
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="bx bx-edit mr-5" />
                                      Edit
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
