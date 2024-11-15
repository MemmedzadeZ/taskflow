import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import CurrentPerson from "../Dashboard/CurrentUser";
import HeaderViewProfile from "./HeaderViewProfile";
import BasicInfo from "./BasicInfo";
import TaskList from "./TaskList";
const UserProfile = () => {
  return (
    <div>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          <div className="main-header">
            <div className="d-flex">
              <div className="mobile-toggle" id="mobile-toggle">
                <i className="bx bx-menu"></i>
              </div>
              <div className="main-title">User Profile</div>
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

          <div className="main">
            <div className="main-content user">
              <div className="row" style={{ alignItems: "normal" }}>
                <div className="col-9 col-xl-12">
                  <HeaderViewProfile />
                  <div className="box">
                    <div className="box-body pb-30">
                      <div className="row">
                        <div className="col-md-12 col-xl-10 mb-0">
                          <div className="row">
                            <div className="col-md-12 col-xl-4 mb-0">
                              <div className="form-group">
                                {" "}
                                <label className="form-label">From:</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      <i className="bx bx-calendar" />{" "}
                                    </div>
                                  </div>
                                  <input
                                    className="form-control fc-datepicker"
                                    placeholder="DD-MM-YYYY"
                                    type="text"
                                  />{" "}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-xl-4 mb-0">
                              <div className="form-group">
                                {" "}
                                <label className="form-label">To:</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      <i className="bx bx-calendar" />{" "}
                                    </div>
                                  </div>
                                  <input
                                    className="form-control fc-datepicker"
                                    placeholder="DD-MM-YYYY"
                                    type="text"
                                  />{" "}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-xl-4 mb-0">
                              <div className="form-group">
                                {" "}
                                <label className="form-label">
                                  Select Priority:
                                </label>{" "}
                                <select
                                  name="attendance"
                                  className="form-control custom-select select2 select2-hidden-accessible"
                                  data-placeholder="Select Priority"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-select2-id="select2-data-16-akyu"
                                >
                                  <option
                                    label="Select Priority"
                                    data-select2-id="select2-data-18-ezae"
                                  />{" "}
                                  <option value={1}>High</option>{" "}
                                  <option value={2}>Medium</option>{" "}
                                  <option value={3}>Low</option>{" "}
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-17-6y8j"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-attendance-ws-container"
                                      aria-controls="select2-attendance-ws-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-attendance-ws-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Select Priority"
                                      />
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-xl-2 mb-0">
                          <div className="form-group mt-32">
                            {" "}
                            <a
                              href="#"
                              className="btn bg-primary btn-block color-white"
                            >
                              Search
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <div className="table-responsive">
                        <div
                          id="task-profile_wrapper"
                          className="dataTables_wrapper dt-bootstrap5 no-footer"
                        >
                          {/* <div class="row">
                                  <div class="col-sm-12 col-md-6">
                                      <div class="dataTables_length" id="task-profile_length"><label>Show <select name="task-profile_length" aria-controls="task-profile" class="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div>
                                  </div>
                                  <div class="col-sm-12 col-md-6">
                                      <div id="task-profile_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="task-profile"></label></div>
                                  </div>
                              </div> */}
                          <TaskList />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BasicInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
