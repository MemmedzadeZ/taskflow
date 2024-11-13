import React from "react";
import SidebarComponent from "../SideBar/SidebarComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentPerson from "../Dashboard/CurrentUser";

const UserProfile = () => {
  const { email } = useParams();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://localhost:7157/api/Profile/${email}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        } else {
          console.error("Kullanıcı bilgileri alınamadı.");
        }
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchUserProfile();
  }, [email]); // email değiştiğinde yeniden veri çekilecek
  console.log(userProfile);
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
              <div className="row">
                <div className="col-9 col-xl-12">
                  <div className="box card-box mb-20">
                    <div className="icon-box bg-color-1">
                      <div className="icon bg-icon-1">
                        <i className="bx bxs-briefcase" />
                      </div>
                      <div className="content">
                        <h5 className="title-box fs-15 mt-2">Total Task</h5>
                        <div className="themesflat-counter fs-14 font-wb color-1">
                          <span
                            className="number"
                            data-from={0}
                            data-to={1225}
                            data-speed={2500}
                            data-inviewport="yes"
                          >
                            1225
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="icon-box bg-color-2">
                      <div className="icon bg-icon-2">
                        <i className="bx bx-task" />
                      </div>
                      <div className="content click-c">
                        <h5 className="title-box fs-15 mt-2">Running Task</h5>
                        <div className="themesflat-counter fs-14 font-wb color-2">
                          <span
                            className="number"
                            data-from={0}
                            data-to={309}
                            data-speed={2500}
                            data-inviewport="yes"
                          >
                            154 +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="icon-box bg-color-3">
                      <div className="icon bg-icon-3">
                        <i className="bx bx-block" />
                      </div>
                      <div className="content click-c">
                        <h5 className="title-box fs-15 mt-2">On Hold Task</h5>
                        <div className="themesflat-counter fs-14 font-wb color-3">
                          <span
                            className="number"
                            data-from={0}
                            data-to={309}
                            data-speed={2500}
                            data-inviewport="yes"
                          >
                            75 +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="icon-box bg-color-5">
                      <div className="icon bg-icon-5">
                        <i className="bx bx-task color-white" />
                      </div>
                      <div className="content click-c">
                        <h5 className="title-box fs-15 mt-2">Complete Task</h5>
                        <div className="themesflat-counter fs-14 font-wb color-4">
                          <span
                            className="number"
                            data-from={0}
                            data-to={309}
                            data-speed={2500}
                            data-inviewport="yes"
                          >
                            120 +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

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
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table table-vcenter text-nowrap table-bordered dataTable no-footer"
                                id="task-profile"
                                role="grid"
                              >
                                <thead>
                                  <tr className="top">
                                    <th
                                      className="border-bottom-0 text-center sorting fs-14 font-w500"
                                      tabIndex={0}
                                      aria-controls="task-profile"
                                      rowSpan={1}
                                      colSpan={1}
                                      style={{ width: "26.6562px" }}
                                    >
                                      No
                                    </th>
                                    <th
                                      className="border-bottom-0 sorting fs-14 font-w500"
                                      tabIndex={0}
                                      aria-controls="task-profile"
                                      rowSpan={1}
                                      colSpan={1}
                                      style={{ width: "222.312px" }}
                                    >
                                      Task
                                    </th>
                                    <th
                                      className="border-bottom-0 sorting fs-14 font-w500"
                                      tabIndex={0}
                                      aria-controls="task-profile"
                                      rowSpan={1}
                                      colSpan={1}
                                      style={{ width: "84.8281px" }}
                                    >
                                      Priority
                                    </th>
                                    <th
                                      className="border-bottom-0 sorting fs-14 font-w500"
                                      tabIndex={0}
                                      aria-controls="task-profile"
                                      rowSpan={1}
                                      colSpan={1}
                                      style={{ width: "87.9844px" }}
                                    >
                                      Start Date
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
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="odd">
                                    <td className="text-center">1</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        {" "}
                                        <span>Design Updated</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
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
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">2</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        {" "}
                                        <span>Website Develop</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-success-light">
                                        Low
                                      </span>
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
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">3</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Digital Marketing</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-warning-light">
                                        Medium
                                      </span>
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
                                        Completed
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">4</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Ad Analysis</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
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
                                        Completed
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">5</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
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
                                        Completed
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">6</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
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
                                          Completed
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
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">7</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
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
                                        Completed
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">8</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-danger-light">
                                        High
                                      </span>
                                    </td>
                                    <td>13-03-2021</td>
                                    <td>05-05-2021</td>
                                    <td>
                                      <div className="progress progress-sm">
                                        <div className="progress-bar bg-primary w-100" />
                                      </div>
                                    </td>
                                    <td>
                                      {" "}
                                      <span className="badge badge-warning">
                                        On Hold
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">9</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        {" "}
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-success-light">
                                        Low
                                      </span>
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
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                                    <td className="text-center">10</td>
                                    <td>
                                      <a href="#" className="d-flex ">
                                        <span>Design update</span>{" "}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="badge badge-warning-light">
                                        Medium
                                      </span>
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
                                        Completed
                                      </span>{" "}
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn-link"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="bx bx-dots-horizontal-rounded" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                          >
                                            <i className="bx bx-trash" /> Delete
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
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
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="task-profile_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 8 of 8 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="task-profile_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="task-profile_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="task-profile"
                                      data-dt-idx={0}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item ">
                                    <a
                                      href="#"
                                      aria-controls="task-profile"
                                      data-dt-idx={1}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      01
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="task-profile"
                                      data-dt-idx={1}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      02
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item ">
                                    <a
                                      href="#"
                                      aria-controls="task-profile"
                                      data-dt-idx={1}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      03
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="task-profile_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="task-profile"
                                      data-dt-idx={2}
                                      tabIndex={0}
                                      className="page-link"
                                    >
                                      Next
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
                <div className="col-3 col-xl-12">
                  <div className="box user-pro-list overflow-hidden mb-30">
                    <div className="box-body">
                      <div className="user-pic text-center">
                        <div className="avatar ">
                          <img src="./images/profile/user-profile.png" alt="" />
                          <div className="pulse-css" />
                        </div>
                        <div className="pro-user mt-40">
                          <h5 className="pro-user-username text-dark mb-1 fs-15">
                            Helena Zahangir
                          </h5>
                          <h6 className="pro-user-desc text-muted fs-14">
                            helena.rzahan@mail.com
                          </h6>
                          <div className="star-ratings start-ratings-main mb-10 clearfix">
                            <div className="stars stars-example-fontawesome star-sm">
                              <div className="br-wrapper br-theme-fontawesome-stars">
                                <select
                                  id="example-fontawesome"
                                  name="rating"
                                  style={{ display: "none" }}
                                >
                                  <option value={1}>1</option>{" "}
                                  <option value={2}>2</option>{" "}
                                  <option value={3}>3</option>{" "}
                                  <option value={4} selected="">
                                    4
                                  </option>{" "}
                                  <option value={5}>5</option>{" "}
                                </select>
                                {/* <div class="br-widget">
                                              <a href="#" data-rating-value="1" data-rating-text="1" class="br-selected"></a>
                                              <a href="#" data-rating-value="2" data-rating-text="2" class="br-selected"></a>
                                              <a href="#" data-rating-value="3" data-rating-text="3" class="br-selected"></a>
                                              <a href="#" data-rating-value="4" data-rating-text="4" class="br-selected br-current"></a>
                                              <a href="#" data-rating-value="5" data-rating-text="5"></a>
                                          </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body pt-19">
                      <div className="row">
                        <div className="col-4 text-center mb-0 pd-0">
                          <div className="icon-box">
                            <i className="bx bxs-briefcase" />
                          </div>
                          <h5 className="fs-14 font-w400 mb-0">
                            Total Project
                          </h5>
                          <h5 className="mb-2">
                            {" "}
                            <span className="fs-14 font-w600 ">55 +</span>{" "}
                          </h5>
                        </div>
                        <div className="col-4  text-center mb-0 pd-0">
                          <div className="icon-box">
                            <i className="bx bxs-shopping-bags" />
                          </div>
                          <h5 className="fs-14 font-w400 mb-0">Total Task</h5>
                          <h5 className="mb-2">
                            {" "}
                            <span className="fs-14 font-w600">35 +</span>{" "}
                          </h5>
                        </div>
                        <div className="col-4 text-center mb-0 pd-0">
                          <div className="icon-box">
                            <i className="bx bxs-trophy" />
                          </div>
                          <h5 className="fs-14 font-w400 mb-0">Awards</h5>
                          <h5 className="mb-2">
                            {" "}
                            <span className="fs-14 font-w600 ">03</span>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="box-footer pt-38">
                      <div className="btn-list text-center">
                        <a href="#" className="btn btn-light">
                          <i className="bx bxs-envelope" />{" "}
                        </a>
                        <a href="#" className="btn btn-light">
                          {" "}
                          <i className="bx bxs-phone-call" />{" "}
                        </a>
                        <a href="#" className="btn btn-light">
                          <i className="bx bxs-error-circle" />
                        </a>
                        <a href="#" className="btn btn-light">
                          {" "}
                          <i className="bx bxs-message-alt-edit" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box left-dot pt-39 mb-30">
                    <div className="box-header  border-0 ">
                      <div className="box-title fs-20 font-w600">
                        Basic Info
                      </div>
                    </div>
                    <div className="box-body pt-16 user-profile">
                      <div className="table-responsive">
                        <table className="table mb-0 mw-100 color-span">
                          <tbody>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Employee ID</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="">#365900</span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Designation</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="">Sr. Designer</span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Department</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="">Development</span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Join Date</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="">25 - 12 - 2022</span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Phone Number</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="">+11 05986 2359 03</span>{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="w-50">Status</span>{" "}
                              </td>
                              <td>:</td>
                              <td className="py-2 px-0">
                                {" "}
                                <span className="badge badge-success">
                                  Active
                                </span>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="box left-dot">
                    <div className="box-header  border-0 ">
                      <div className="box-title fs-20 font-w600">
                        Statistics
                      </div>
                    </div>
                    <div className="box-body pt-10 ">
                      <div className="d-flex justify-content-between mt-10">
                        <div className="progress-cicle">
                          <div
                            className="chart-circle chart-circle-xl"
                            data-value="0.75"
                            data-thickness={5}
                            data-color="#E6154E"
                          >
                            <canvas width={80} height={80} />
                            <canvas width={80} height={80} />
                            <div className="chart-circle-value">45%</div>
                          </div>
                          <div className="title-progress fs-15 font-w600 mt-10">
                            Task
                          </div>
                        </div>
                        <div className="progress-cicle">
                          <div
                            className="chart-circle chart-circle-xl"
                            data-value="0.75"
                            data-thickness={5}
                            data-color="#3C21F7"
                          >
                            <canvas width={80} height={80} />
                            <canvas width={80} height={80} />
                            <div className="chart-circle-value">55%</div>
                          </div>
                          <div className="title-progress fs-15 font-w600 mt-10">
                            Projects
                          </div>
                        </div>
                        <div className="progress-cicle">
                          <div
                            className="chart-circle chart-circle-xl"
                            data-value="0.75"
                            data-thickness={5}
                            data-color="#E58911"
                          >
                            <canvas width={80} height={80} />
                            <canvas width={80} height={80} />
                            <div className="chart-circle-value">75%</div>
                          </div>
                          <div className="title-progress fs-15 font-w600 mt-10">
                            Performanance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overlay" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
