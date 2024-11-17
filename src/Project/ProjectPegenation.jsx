import React, { useState } from "react";

const ProjectPagination = ({ posts, handle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust the number of items per page as needed

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  console.log(posts);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {/* <div className=""> */}
      <div className="row" style={{ display: "flex", gap: "10px" }}>
        {currentPosts.map((item, index) => (
          <div
            className="col-3 col-xl-6 col-md-6 col-sm-12"
            style={{ width: "auto" }}
            key={index}
          >
            <div className="box left-dot">
              <div className="box-body">
                <a
                  href="project-details.html"
                  className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                >
                  {item.title}
                </a>
                <p className="fs-14 font-w500 text-muted mb-6">
                  {item.source === "owned" ? "Owned by You" : "Added by You"}
                </p>
                <span className="fs-13 mt-2 text-muted">
                  Deadline: {item.endDate ? item.endDate : "No deadline set"}
                </span>
              </div>
              <div className="box-footer">
                <div className="d-flex align-items-center">
                  <div className="d-flex mb-3 mb-md-0">
                    <div className="mr-10">
                      <div
                        style={{ marginRight: "2vw" }}
                        className="chart-circle chart-circle-xs"
                        data-value="0.75"
                        data-thickness={3}
                        data-color="#3C21F7"
                      >
                        <canvas width={40} height={40} />
                        <div className="chart-circle-value">75%</div>
                      </div>
                    </div>
                    <ul
                      className="user-list mb-0"
                      style={{ marginRight: "1vw" }}
                    >
                      <li>
                        <img src="./images/avatar/user-1.png" alt="User 1" />
                      </li>
                      <li>
                        <img src="./images/avatar/user-2.png" alt="User 2" />
                      </li>
                      <li>
                        <img src="./images/avatar/user-3.png" alt="User 3" />
                      </li>
                    </ul>
                  </div>
                  <div className="ms-auto mt-3 mt-sm-0">
                    <div className="d-flex">
                      <div
                        className="task-btn bg-danger-1 text-danger btn-link fs-14"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Project Priority"
                      >
                        {item.status}
                      </div>
                      <a
                        className="btn btn-outline-light text-muted pd-0 fs-34"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="#">
                            <i className="far fa-eye" />
                            View
                          </a>
                        </li>
                        {item.source === "owned" && (
                          <>
                            <li>
                              <a href="#">
                                <i className="bx bx-plus-circle" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => handle(item.id)}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="bx bx-trash" />
                                Remove
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}

      {/* Pagination Controls */}
      <div
        className="pagination-controls"
        style={{ display: "flex", gap: "1vw" }}
      >
        <button
          className="btn btn-primary"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-primary"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectPagination;
