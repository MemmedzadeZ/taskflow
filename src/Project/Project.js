import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // For head configurations
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import SidebarComponent from "../SideBar/SidebarComponent";

const Project = () => {
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
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="/images/profile/profile.png"
                    alt="Header Avatar"
                  />
                  <span className="pulse-css"></span>
                  <span className="info d-xl-inline-block color-span">
                    <span className="d-block fs-20 font-w600">Randy Riley</span>
                    <span className="d-block mt-7">randy.riley@gmail.com</span>
                  </span>
                  <i className="bx bx-chevron-down"></i>
                </button>
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

          <div className="main">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
