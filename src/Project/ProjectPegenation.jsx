import React, { useState } from "react";
import UpdateProjectModel from "./ProjectComponents/UpdateProjectModel";

const ProjectPagination = ({ posts, handle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  console.log(posts);

  const getHover = (id) => {
    setHoveredItemId(id);
    fetchMembers(id);
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
            <div className="box left-dot">
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
                    <div
                      className="ul-container"
                      onMouseEnter={() => getHover(item.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      style={{ position: "relative" }}
                    >
                      <ul
                        className="user-list mb-0"
                        style={{ marginRight: "1vw" }}
                      >
                        {posts.participantsPath?.length > 0 ? (
                          posts.participants
                            .slice(0, 3)
                            .map((imagePath, index) => (
                              <li key={index}>
                                <img
                                  src={
                                    imagePath ||
                                    "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                                  }
                                  alt={`User ${index + 1}`}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                  }}
                                />
                              </li>
                            ))
                        ) : (
                          <li>-</li>
                        )}
                        {hoveredItemId === item.id && (
                          <div
                            className="hidden-div"
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "1%",
                              backgroundColor: "white",
                              border: "1px solid #ccc",
                              padding: "14px",
                              zIndex: "1000",
                              width: "auto",
                            }}
                          >
                            {teamMembers.length === 0 ? (
                              <ul
                                style={{
                                  width: "auto",
                                }}
                              >
                                <li>No Participants!</li>
                              </ul>
                            ) : (
                              <ul
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  padding: "5px",
                                }}
                              >
                                {teamMembers.map((member, idx) => (
                                  <li
                                    style={{
                                      width: "auto",
                                      height: "auto",
                                      borderRadius: "5px",
                                      border: "4px solid #EF7F5A",
                                      background: " #f9b8a2",
                                      padding: "3px",
                                    }}
                                    key={idx}
                                  >
                                    <div
                                      style={{
                                        width: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                      }}
                                    >
                                      <div style={{ flexShrink: 0 }}>
                                        <img
                                          src={
                                            member.profilePicture
                                              ? member.profilePicture
                                              : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
                                          }
                                          alt={`${member.username}'s profile`}
                                          style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                          }}
                                          onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                              "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png";
                                          }}
                                        />
                                      </div>
                                      <div style={{ width: "auto" }}>
                                        <span
                                          style={{
                                            margin: "0",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {member.username}
                                        </span>
                                        <span
                                          style={{
                                            // margin: "0 0 0 5px",
                                            fontSize: "14px",
                                            color: "#555",
                                            // display: "flex",
                                          }}
                                        >
                                          {member.fullname}
                                        </span>
                                        {/* <h4
                                          style={{
                                            margin: "0",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {member.username}
                                        </h4>
                                        <h6
                                          style={{
                                            margin: "0",
                                            width: "auto",
                                            // fontSize: "14px",
                                            color: "#555",
                                          }}
                                        >
                                          {member.fullname}
                                        </h6> */}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </ul>
                    </div>
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
                          <a href="#">
                            <i className="far fa-eye" />
                            View
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
