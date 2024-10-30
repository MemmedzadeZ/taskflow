import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import SidebarComponent from "../SideBar/SidebarComponent";
import "./CreateProject.css"; // Add custom styles here
import CurrentPerson from "../Dashboard/CurrentUser";
import TotalProjects from "./ProjectComponents/TotalProjects";
import CompletedProjects from "./ProjectComponents/CompletedProjects";
import PendingProjects from "./ProjectComponents/PendingProjects";
import OngoingProjects from "./ProjectComponents/OngoingProjects";
import CreateProjectModel from "./ProjectComponents/CreateProjectModel";

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
                    href=" "
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
                    href=" "
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
                    href=" "
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
                    href=" "
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
                    href=" "
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
                  <a className="dropdown-item" href=" ">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span>Profile</span>
                  </a>
                  <a className="dropdown-item" href=" ">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                    <span>My Wallet</span>
                  </a>
                  <a className="dropdown-item d-block" href=" ">
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                    <span>Settings</span>
                  </a>
                  <a className="dropdown-item" href=" ">
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

          {/* <div className="main">
            <div className="main-content project">
              
              <div className="row">
                <div className="col-9 col-xl-7 col-md-8 col-sm-12">
                  <div className="box card-box">
                    <div className="icon-box bg-color-6 d-block">
                      <div className="content text-center color-6">
                        <h5 className="title-box fs-17 font-w500">
                          Total Project
                        </h5>
                        <div className="themesflat-counter fs-18 font-wb">
                          <span className="number">1225 +</span>
                        </div>
                      </div>
                    </div>

                    <div className="icon-box bg-color-7 d-block">
                      <div className="content text-center color-7">
                        <h5 className="title-box fs-17 font-w500">
                          Pending Project
                        </h5>
                        <div className="themesflat-counter fs-18 font-wb">
                          <span className="number">75 +</span>
                        </div>
                      </div>
                    </div>

                    <div className="icon-box bg-color-8 d-block">
                      <div className="content text-center color-8">
                        <h5 className="title-box fs-17 font-w500">
                          On Going Project
                        </h5>
                        <div className="themesflat-counter fs-18 font-wb">
                          <span className="number">1225 +</span>
                        </div>
                      </div>
                    </div>

                    <div className="icon-box bg-color-9 d-block">
                      <div className="content text-center color-9">
                        <h5 className="title-box fs-17 font-w500">
                          Complete Project
                        </h5>
                        <div className="themesflat-counter fs-18 font-wb">
                          <span className="number">2536 +</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3 col-xl-5 col-md-4 col-sm-12">
                  <div className="box h-100 d-flex align-items-center">
                    <Link
                      className="create d-flex bg-primary justify-content-center"
                      to="/new-project"
                    >
                      <div className="icon color-white pt-4 pr-8">
                        <i className="bx bx-plus-circle"></i>
                      </div>
                      <div className="content">
                        <h5 className="color-white">Create New Project</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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

                <div className="row">
                  <div className="">
                    <div className="box-header pt-0 pl-0 ms-0 mb-4 mt-4 border-bottom-0 responsive-header">
                      <h4 className="box-title fs-22">Recent Project Update</h4>
                      <div className="card-options">
                        <div className="btn-list d-flex">
                          <a
                            href=" "
                            className="btn text-primary border-primary d-flex align-items-center mr-5"
                          >
                            <i className="bx bx-plus-circle mr-5" />
                            Add Project
                          </a>
                          <a
                            href=" "
                            className="btn btn-light d-flex align-items-center mr-5"
                          >
                            <i className="fas fa-eye mr-5" />
                            View All
                          </a>
                          <a
                            href=" "
                            className="btn btn-light me-0 dropdown-toggle d-flex align-items-center"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {" "}
                            Latest{" "}
                            <i className="feather feather-chevron-down" />{" "}
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            role="menu"
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
                    <div className="row">
                      <div className="col-3 col-xl-6 col-md-6 col-sm-12">
                        <div className="box left-dot">
                          <div className="box-body">
                            <div className="row">
                              <div className="col-12 mb-10">
                                <div className="mt-0 text-start">
                                  {" "}
                                  <a
                                    href="project-details.html"
                                    className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                                  >
                                    Adobe XD
                                  </a>
                                  <p className="fs-14 font-w500 text-muted mb-6">
                                    Designing Department
                                  </p>
                                  <span className="fs-13  mt-2 text-muted">
                                    There are many variations of passages
                                  </span>
                                  {/* {" "}
                                 <img
                                   src="./images/icon/html-2.png"
                                   alt="img"
                                   className=""
                                 />{" "} */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-footer">
                            <div className="d-flex align-items-center">
                              <div className="d-flex mb-3 mb-md-0">
                                <div className="mr-10">
                                  <div
                                    className="chart-circle chart-circle-xs"
                                    data-value="0.75"
                                    data-thickness={3}
                                    data-color="#3C21F7"
                                  >
                                    <canvas width={40} height={40} />
                                    <div className="chart-circle-value">
                                      75%
                                    </div>
                                  </div>
                                </div>
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
                              </div>
                              <div className="ms-auto mt-3 mt-sm-0">
                                <div className="d-flex">
                                  <div
                                    className="task-btn bg-danger-1 text-danger btn-link fs-14"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Project Priority"
                                  >
                                    High
                                  </div>{" "}
                                  <a
                                    className="btn btn-outline-light  text-muted pd-0 fs-34"
                                    href=" "
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <ul className="dropdown-menu " role="menu">
                                    <li>
                                      <a href=" ">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-plus-circle" />
                                        Add
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-trash" />
                                        Remove
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-cog" />
                                        More
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-6 col-md-6 col-sm-12">
                        <div className="box left-dot">
                          <div className="box-body">
                            <div className="row">
                              <div className="col-12 mb-10">
                                <div className="mt-0 text-start">
                                  {" "}
                                  <a
                                    href="project-details.html"
                                    className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                                  >
                                    HTML
                                  </a>
                                  <p className="fs-14 font-w500 text-muted mb-6">
                                    HTML Coding Department
                                  </p>
                                  <span className="fs-13  mt-2 text-muted">
                                    There are many variations of passages
                                  </span>
                                  {/* <img
                                    src="./images/icon/html.png"
                                    alt="img"
                                    className="img-box"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-footer">
                            <div className="d-flex align-items-center">
                              <div className="d-flex mb-3 mb-md-0">
                                <div className="mr-10">
                                  <div
                                    className="chart-circle chart-circle-xs"
                                    data-value="0.75"
                                    data-thickness={3}
                                    data-color="#3C21F7"
                                  >
                                    <canvas width={40} height={40} />
                                    <div className="chart-circle-value">
                                      75%
                                    </div>
                                  </div>
                                </div>
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
                              </div>
                              <div className="ms-auto mt-3 mt-sm-0">
                                <div className="d-flex">
                                  <div
                                    className="task-btn bg-success-1 text-success-1 fs-14"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Project Priority"
                                  >
                                    Low
                                  </div>{" "}
                                  <a
                                    className="btn btn-outline-light  text-muted pd-0 fs-34"
                                    href=" "
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <ul className="dropdown-menu " role="menu">
                                    <li>
                                      <a href=" ">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-plus-circle" />
                                        Add
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-trash" />
                                        Remove
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-cog" />
                                        More
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-6 col-md-6 col-sm-12">
                        <div className="box left-dot">
                          <div className="box-body">
                            <div className="row">
                              <div className="col-12 mb-10">
                                <div className="mt-0 text-start">
                                  {" "}
                                  <a
                                    href="project-details.html"
                                    className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                                  >
                                    Digital Marketing
                                  </a>
                                  <p className="fs-14 font-w500 text-muted mb-6">
                                    Marketing Department
                                  </p>
                                  <span className="fs-13  mt-2 text-muted">
                                    There are many variations of passages
                                  </span>
                                </div>
                                {/* <img
                                  src="./images/icon/marketing.png"
                                  alt="img"
                                  className="img-box"
                                /> */}
                              </div>
                            </div>
                          </div>
                          <div className="box-footer">
                            <div className="d-flex align-items-center">
                              <div className="d-flex mb-3 mb-md-0">
                                <div className="mr-10">
                                  <div
                                    className="chart-circle chart-circle-xs"
                                    data-value="0.75"
                                    data-thickness={3}
                                    data-color="#3C21F7"
                                  >
                                    <canvas width={40} height={40} />
                                    <div className="chart-circle-value">
                                      75%
                                    </div>
                                  </div>
                                </div>
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
                              </div>
                              <div className="ms-auto mt-3 mt-sm-0">
                                <div className="d-flex">
                                  <div
                                    className="task-btn bg-yellow-1 text-yellow-1 fs-14"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Project Priority"
                                  >
                                    Medium
                                  </div>{" "}
                                  <a
                                    className="btn btn-outline-light  text-muted pd-0 fs-34"
                                    href=" "
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <ul className="dropdown-menu " role="menu">
                                    <li>
                                      <a href=" ">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-plus-circle" />
                                        Add
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-trash" />
                                        Remove
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-cog" />
                                        More
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-6 col-md-6 col-sm-12">
                        <div className="box left-dot">
                          <div className="box-body">
                            <div className="row">
                              <div className="col-12 mb-10">
                                <div className="mt-0 text-start">
                                  {" "}
                                  <a
                                    href="project-details.html"
                                    className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                                  >
                                    Angular
                                  </a>
                                  <p className="fs-14 font-w500 text-muted mb-6">
                                    Angular Department
                                  </p>
                                  <span className="fs-13  mt-2 text-muted">
                                    There are many variations of passages
                                  </span>
                                </div>
                                {/* <img
                                  src="./images/icon/angular.png"
                                  alt="img"
                                  className="img-box"
                                /> */}
                              </div>
                            </div>
                          </div>
                          <div className="box-footer">
                            <div className="d-flex align-items-center">
                              <div className="d-flex mb-3 mb-md-0">
                                <div className="mr-10">
                                  <div
                                    className="chart-circle chart-circle-xs"
                                    data-value="0.75"
                                    data-thickness={3}
                                    data-color="#3C21F7"
                                  >
                                    <canvas width={40} height={40} />
                                    <div className="chart-circle-value">
                                      75%
                                    </div>
                                  </div>
                                </div>
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
                              </div>
                              <div className="ms-auto mt-3 mt-sm-0">
                                <div className="d-flex">
                                  <div
                                    className="task-btn bg-danger-1 text-danger fs-14"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Project Priority"
                                  >
                                    High
                                  </div>{" "}
                                  <a
                                    className="btn btn-outline-light  text-muted pd-0 fs-34"
                                    href=" "
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </a>
                                  <ul className="dropdown-menu " role="menu">
                                    <li>
                                      <a href=" ">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-plus-circle" />
                                        Add
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-trash" />
                                        Remove
                                      </a>
                                    </li>
                                    <li>
                                      <a href=" ">
                                        <i className="bx bx-cog" />
                                        More
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-md-12">
                    {/* CUSTOMERS CHART */}
                    <div className="box f-height">
                      <div className="box-header d-flex justify-content-between">
                        <h3 className="mt-9 fs-22">Project Statistics</h3>
                        <ul className="card-list mb-0">
                          <li className="custom-label">
                            <span />
                            Complete
                          </li>
                          <li className="custom-label">
                            <span />
                            Doing
                          </li>
                        </ul>
                      </div>
                      <div className="box-body pt-20">
                        <div id="customer-chart" />
                      </div>
                    </div>
                    {/* END CUSTOMERS CHART */}
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="box">
                      <div className="box-header">
                        <div className="me-auto">
                          <h4 className="card-title fs-22">
                            Employee Category
                          </h4>
                          <p className="fs-14 mt-4">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </div>
                      <div className="box-body pt-0">
                        <div className="row">
                          <div className="col-6 col-xl-12 col-md-6 col-sm-12 w-sm-100 mb-0">
                            <ul className="box-list mt-25 pr-60">
                              <li>
                                <span className="bg-blue square" />
                                Web Design<span>25%</span>
                              </li>
                              <li>
                                <span className="bg-success square" />
                                UX/UI Design<span>18%</span>
                              </li>
                              <li>
                                <span className="bg-warning square" />
                                Graphics Design<span>17%</span>
                              </li>
                              <li>
                                <span className="bg-blue square" />
                                Motion Design<span>12.50%</span>
                              </li>
                              <li>
                                <span className="bg-success square" />
                                Brand Identity<span>12.50%</span>
                              </li>
                              <li>
                                <span className="bg-warning square" />
                                Others<span>12.50%</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6 col-xl-12 col-md-6 col-sm-12 w-sm-100 mb-0">
                            {/* <canvas id="doughnut-chart" width="240" height="240"></canvas> */}
                            <div className="canvas-container">
                              <canvas
                                id="chartjs-4"
                                className="chartjs"
                                width={100}
                                height={100}
                              />
                              <div className="chart-data">
                                <div
                                  data-percent={25}
                                  data-color="#3C21F7"
                                  data-label="Web Design"
                                />
                                <div
                                  data-percent={18}
                                  data-color="#00BC8B"
                                  data-label="UX/UI Design"
                                />
                                <div
                                  data-percent={17}
                                  data-color="#FFB800"
                                  data-label="Graphics Design"
                                />
                                <div
                                  data-percent="12.5"
                                  data-color="#00ECCC"
                                  data-label="Motion Design"
                                />
                                <div
                                  data-percent="12.5"
                                  data-color="#EF7F5A"
                                  data-label="Brand Identity"
                                />
                                <div
                                  data-percent="12.5"
                                  data-color="#5D45FB"
                                  data-label="Others"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="box">
                      <div className="box-header  pt-0 align-items-start">
                        <div className="me-auto">
                          <h4 className="card-title mb-0 fs-22">
                            Recent Activity
                          </h4>
                          <p className="mt-6 fs-14 mb-14">September 4, 2021</p>
                        </div>
                        <div className="card-options pr-3">
                          <div className="dropdown">
                            {" "}
                            <a
                              href=" "
                              className="btn ripple btn-outline-light dropdown-toggle fs-12"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {" "}
                              Select Date{" "}
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
                      <div className="box-body pb-0">
                        <ul className="message mb-2">
                          <li className="dlab-chat-user">
                            <div className="d-flex bd-highlight">
                              <div className="img_cont">
                                <img
                                  src="./images/avatar/message-01.png"
                                  className="rounded-circle user_img"
                                  alt=""
                                />
                              </div>
                              <div className="user_info">
                                <a
                                  className="fs-15 font-w500 mt-5 mb-5"
                                  href="message.html"
                                >
                                  Lucinda Massey
                                </a>
                                <p className="fs-13 mb-0">2 Hour ago</p>
                              </div>
                            </div>
                            <div className="card-options me-0 d-flex align-items-center">
                              <a href=" " className="text-primary fs-14">
                                Add New Task
                              </a>
                            </div>
                          </li>
                          <li className="dlab-chat-user">
                            <div className="d-flex bd-highlight">
                              <div className="img_cont border-pink">
                                <img
                                  src="./images/avatar/message-02.png"
                                  className="rounded-circle user_img"
                                  alt=""
                                />
                              </div>
                              <div className="user_info">
                                <a
                                  className="fs-15 font-w500 mt-5 mb-5"
                                  href="message.html"
                                >
                                  Ryan Nolan
                                </a>
                                <p className="fs-13 mb-0">25 Min ago</p>
                              </div>
                            </div>
                            <div className="card-options me-0 d-flex align-items-center">
                              <a href=" " className="text-success fs-14">
                                Review Completed
                              </a>
                            </div>
                          </li>
                          <li className="dlab-chat-user">
                            <div className="d-flex bd-highlight">
                              <div className="img_cont border-green">
                                <img
                                  src="./images/avatar/message-03.png"
                                  className="rounded-circle user_img"
                                  alt=""
                                />
                              </div>
                              <div className="user_info">
                                <a
                                  className="fs-15 font-w500 mt-5 mb-5"
                                  href="message.html"
                                >
                                  Lucinda Massey
                                </a>
                                <p className="fs-13 mb-0">2 Hour ago</p>
                              </div>
                            </div>
                            <div className="card-options me-0 d-flex align-items-center">
                              <a href=" " className="text-completed fs-14">
                                Task Completed
                              </a>
                            </div>
                          </li>
                          <li className="dlab-chat-user">
                            <div className="d-flex bd-highlight">
                              <div className="img_cont border-pink">
                                <img
                                  src="./images/avatar/message-02.png"
                                  className="rounded-circle user_img"
                                  alt=""
                                />
                              </div>
                              <div className="user_info">
                                <a
                                  className="fs-15 font-w500 mt-5 mb-5"
                                  href="message.html"
                                >
                                  Ryan Nolan
                                </a>
                                <p className="fs-13 mb-0">25 Min ago</p>
                              </div>
                            </div>
                            <div className="card-options me-0 d-flex align-items-center">
                              <a href=" " className="text-success fs-14">
                                Review Completed
                              </a>
                            </div>
                          </li>
                          <li className="dlab-chat-user">
                            <div className="d-flex bd-highlight">
                              <div className="img_cont">
                                <img
                                  src="./images/avatar/message-01.png"
                                  className="rounded-circle user_img"
                                  alt=""
                                />
                              </div>
                              <div className="user_info">
                                <a
                                  className="fs-15 font-w500 mt-5 mb-5"
                                  href="message.html"
                                >
                                  Lucinda Massey
                                </a>
                                <p className="fs-13 mb-0">2 Hour ago</p>
                              </div>
                            </div>
                            <div className="card-options me-0 d-flex align-items-center">
                              <a href=" " className="text-primary fs-14">
                                Add New Task
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="box">
                      <div className="box-header  pt-0">
                        <div className="me-auto">
                          <h4 className="card-title mb-0 fs-22">
                            In Progress Project
                          </h4>
                        </div>
                        <div className="card-options pr-3">
                          <div className="dropdown">
                            {" "}
                            <a
                              href=" "
                              className="btn ripple btn-outline-light dropdown-toggle fs-12"
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
                      <div className="box-body pb-0">
                        <div className="project-progress-content mt-21 mb-26">
                          <div className="list-group-item d-sm-flex  align-items-center border-0 pd-0">
                            <div className="d-flex w-10">
                              <div className="task-img bg-primary-transparent">
                                {" "}
                                <img
                                  src="./images/icon/html-2.png"
                                  alt="img"
                                  className=""
                                />{" "}
                              </div>
                            </div>
                            <div className="w-90 mt-4 mt-md-0 pl-13">
                              <p className="fs-16 font-w500 ms-auto mb-13">
                                Software Architecture Design
                              </p>
                              <div className="progress progress-sm w-100">
                                <div className="progress-bar bg-green-1 w-90" />
                              </div>
                              <div className="d-flex justify-content-between mt-17">
                                <div className="deadline fs-14 font-w500 me-auto d-flex align-items-center">
                                  <i className="bx bxs-time-five fs-20 mr-9" />
                                  Deadline : in 3 days
                                </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="project-progress-content mt-0 mb-26">
                          <div className="list-group-item d-sm-flex  align-items-center border-0 pd-0">
                            <div className="d-flex w-10">
                              <div className="task-img bg-primary-transparent">
                                {" "}
                                <img
                                  src="./images/icon/html-2.png"
                                  alt="img"
                                  className=""
                                />{" "}
                              </div>
                            </div>
                            <div className="w-90 mt-4 mt-md-0 pl-13">
                              <p className="fs-16 font-w500 ms-auto mb-13">
                                Web Development
                              </p>
                              <div className="progress progress-sm w-100">
                                <div className="progress-bar bg-primary-1 w-90" />
                              </div>
                              <div className="d-flex justify-content-between mt-17">
                                <div className="deadline fs-14 font-w500 me-auto d-flex align-items-center">
                                  <i className="bx bxs-time-five fs-20 mr-9" />
                                  Deadline : in 3 days
                                </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="project-progress-content mt-0">
                          <div className="list-group-item d-sm-flex  align-items-center border-0 pd-0">
                            <div className="d-flex w-10">
                              <div className="task-img bg-primary-transparent">
                                {" "}
                                <img
                                  src="./images/icon/html-2.png"
                                  alt="img"
                                  className=""
                                />{" "}
                              </div>
                            </div>
                            <div className="w-90 mt-4 mt-md-0 pl-13">
                              <p className="fs-16 font-w500 ms-auto mb-13">
                                Mobile App Development
                              </p>
                              <div className="progress progress-sm w-100">
                                <div className="progress-bar bg-danger w-90" />
                              </div>
                              <div className="d-flex justify-content-between mt-17">
                                <div className="deadline fs-14 font-w500 me-auto d-flex align-items-center">
                                  <i className="bx bxs-time-five fs-20 mr-9" />
                                  Deadline : in 3 days
                                </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 col-md-12">
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
                                  {" "}
                                  <span className="badge badge-success">
                                    Complete
                                  </span>
                                  <div className="mt-1 ms-1">
                                    {" "}
                                    <span
                                      className="feather feather-info text-danger"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Dealy by 30 days"
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
                  <div className="col-4 col-md-12">
                    <div className="box">
                      <div className="box-header  pt-0">
                        <div className="me-auto">
                          <h4 className="card-title mb-0 fs-22">Calendar</h4>
                        </div>
                        <div className="card-options pr-3">
                          <div className="dropdown">
                            {" "}
                            <a
                              href=" "
                              className="btn ripple btn-outline-light dropdown-toggle"
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
                      <div className="box-body pb-0">
                        <div className="custom-calendar" />
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
