import React, { useState } from "react";
import UpdateProjectModel from "./ProjectComponents/UpdateProjectModel";
import { useNavigate } from "react-router-dom";
const ProjectPagination = ({ posts, handle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const navigate = useNavigate();

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
  const openModal = (e, id) => {
    e.preventDefault();
    setCurrentProjectId(id); // Set the specific project ID
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProjectId(null); // Clear the project ID when closing the modal
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };
  const goToProjectViewDetail = (projectId) => {
    navigate(`/projectDetail/${projectId}`);
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
            <div
              className="box left-dot"
              style={{ padding: "30px", gap: "6px" }}
            >
              <div className="box-body">
                <a
                  href=" "
                  onClick={(e) => openModal(e, item.id)}
                  className="box-title mb-0 mt-1 mb-3 font-w600 fs-18"
                >
                  {item.title}
                </a>
                <p className="fs-14 font-w500 text-muted mb-6">
                  {"Owned by You"}
                </p>
                <span className="fs-13 mt-2 text-muted">
                  Deadline:{" "}
                  {item.deadline
                    ? formatDate(item.deadline)
                    : "No deadline set"}
                </span>
              </div>
              {isModalOpen && (
                <UpdateProjectModel
                  closeModal={closeModal}
                  projectId={currentProjectId}
                />
              )}

              <div className="box-footer">
                <div className="d-flex align-items-center">
                  <ul className="user-list mb-0">
                    {item.participantsPath?.length > 0 ? (
                      item.participantsPath.map((participant, i) => (
                        <li key={i}>
                          <img
                            src={
                              participant
                                ? participant
                                : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                            }
                            alt="user"
                          />
                        </li>
                      ))
                    ) : (
                      <li>No Participants</li>
                    )}
                  </ul>

                  <div className="ms-auto mt-3 mt-sm-0">
                    <div className="d-flex">
                      {/* <div
                        className="task-btn bg-danger-1 text-danger btn-link fs-14"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Project Priority"
                      >
                        {item.status}
                      </div> */}
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
                          <a
                            href=" "
                            onClick={() => goToProjectViewDetail(item.id)}
                          >
                            <i className="far fa-eye" />
                            View Detail
                          </a>
                        </li>

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
