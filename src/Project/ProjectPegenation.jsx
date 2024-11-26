import React, { useState } from "react";
import UpdateProjectModel from "./ProjectComponents/UpdateProjectModel";
import { useNavigate } from "react-router-dom";
const ProjectPagination = ({ posts, handle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  console.log(posts);

  const getHover = (id) => {
    setHoveredItemId(id);
    fetchMembers(id);
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
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const openModal = (e, id) => {
    e.preventDefault();
    setCurrentProjectId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProjectId(null);
  };

  const fetchMembers = (id) => {
    console.log("inside fetch");
    fetch(`https://localhost:7157/api/TeamMember/get/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Something went wrong while fetching team members: " +
              res.statusText
          );
        }
        return res.json();
      })
      .then((data) => {
        if (data.list) {
          setTeamMembers(data.list);
          console.log(data.list);
        } else {
          setTeamMembers([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching team members:", error.message);
        setTeamMembers([]);
      });
  };

  return (
    <div>
      {isModalOpen && (
        <UpdateProjectModel
          closeModal={closeModal}
          projectId={currentProjectId}
        />
      )}
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

              <div className="box-footer">
                <div className="d-flex align-items-center">
                  <div className="d-flex mb-3 mb-md-0">
                    {/* <div className="mr-10">
                       <div
                        style={{ marginRight: "2vw" }}
                        className="chart-circle chart-circle-xs"
                        data-value="0.75"
                        data-thickness={3}
                        data-color="#3C21F7"
                      >
                        <canvas width={40} height={40} />
                      </div> 
                    </div>*/}
                    {/* <div
                      className="ul-container"
                      onMouseEnter={() => getHover(item.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      style={{ position: "relative" }}
                    > */}
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
                    {/* </div> */}
                  </div>
                  <div className="ms-auto mt-3 mt-sm-0">
                    <div className="d-flex">
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
