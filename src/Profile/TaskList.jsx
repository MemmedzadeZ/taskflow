function TaskList() {
  return (
    <div className="col-8 col-md-12">
      <div className="box ">
        <div className="box-header  pt-0">
          <div className="me-auto">
            <h4 className="card-title mb-0 fs-22">Task List</h4>
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
                See All <i className="feather feather-chevron-down" />{" "}
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

                <td>12-02-2021</td>
                <td>16-06-2021</td>
                <td>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-30" />
                  </div>
                </td>
                <td>
                  <span className="badge badge-warning">On hold</span>
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
                    <span className="badge badge-danger">Dealy</span>
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

                <td>11-04-2021</td>
                <td>16-06-2021</td>
                <td>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-100" />
                  </div>
                </td>
                <td>
                  {" "}
                  <span className="badge badge-success">Complete</span>{" "}
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

                <td>11-03-2021</td>
                <td>19-05-2021</td>
                <td>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary w-80" />
                  </div>
                </td>
                <td>
                  {" "}
                  <span className="badge badge-success">Complete</span>{" "}
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
  );
}
export default TaskList;
