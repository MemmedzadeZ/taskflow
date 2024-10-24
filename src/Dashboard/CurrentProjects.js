import "../Dashboard/Dashboard.css";

function CurrentProjects() {
  const getProjects = async () => {
    console.log("inside get");
    var response = await fetch(
      "https://localhost:7268/api/Project/AllProjects",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.json());
  };

  return (
    <div className="box-body pt-20">
      <div
        className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix"
        data-gap="30"
        data-column="4"
        data-column2="2"
        data-column3="1"
        data-auto="true"
      >
        {getProjects == null ? (
          <p>No Data</p>
        ) : (
          <div className="owl-carousel owl-theme">
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-green">G</h5>
                  <a href="project-details.html" className="h5 t-title">
                    Gold App
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400 fs-16">Task Done:23/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "52%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-yellow">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    Landing Page
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 30/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "67%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-blue">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    App Landing UI
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 35/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "78%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-orange">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    Blog Template UI
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 23/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "52%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-orange">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    Blog Template UI
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 23/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "52%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-yellow">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    Gold App
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 30/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "67%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-blue">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    New Landing Design
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 35/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "78%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box box-carousel">
              <div className="card-top">
                <div className="sm-f-wrap d-flex">
                  <h5 className="icon-gold text-white bg-orange">G</h5>
                  <a className="h5 t-title" href="project-details.html">
                    Skote Dashboard UI
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href=" "
                    className="btn-link"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#575757"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#delete_project"
                    >
                      <i className="bx bx-trash"></i> Delete
                    </a>
                    <a
                      className="dropdown-item"
                      href=" "
                      data-toggle="modal"
                      data-target="#edit_project"
                    >
                      <i className="bx bx-edit mr-5"></i>Edit
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-center">
                <h6 className="font-w400">Task Done: 23/45</h6>
                <div
                  className="progress skill-progress mb-23"
                  style={{ height: "7px", width: "80%" }}
                >
                  <div
                    className="progress-bar bg-primary progress-animated"
                    style={{ width: "52%", height: "7px" }}
                    role="progressbar"
                  ></div>
                </div>
                <div className="sm-f-wrap d-flex justify-content-between">
                  <ul className="user-list">
                    <li>
                      <img src="./images/avatar/user-1.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-2.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-3.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-4.png" alt="user" />
                    </li>
                    <li>
                      <img src="./images/avatar/user-5.png" alt="user" />
                    </li>
                  </ul>
                  <ul className="tf-icon-list">
                    <li>
                      <a href=" ">
                        <i className="bx bx-calendar"></i>
                      </a>
                    </li>
                    <li>
                      <a href=" ">
                        <i className="bx bxs-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CurrentProjects;
