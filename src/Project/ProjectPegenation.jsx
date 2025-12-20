import React, { useState, useEffect } from "react";
import UpdateProjectModel from "./ProjectComponents/UpdateProjectModel";
import { useNavigate } from "react-router-dom";
import { HubConnectionBuilder } from "@microsoft/signalr";
const ProjectPagination = ({ posts, handle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [requestedMember, setRequestedMembers] = useState([]);
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

  //delte member MemberRemove
  const handleDeleteMember = (username, id) => {
    var payload = { ProjectId: id, Username: username };
    fetch(`http://localhost:5204/api/TeamMember/MemberRemove`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
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
    console.log(id);
    fetch(`http://localhost:5204/api/TeamMember/get/${id}`, {
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
          console.log("datalist: " + data.list);
          const allMembers = data.list;

          const acceptedMembers = allMembers.filter(
            (member) => member.isAccepted && !member.isRequest
          );

          const pendingRequests = allMembers.filter(
            (member) => member.isRequest && !member.isAccepted
          );

          setTeamMembers({
            accepted: acceptedMembers,
            pending: pendingRequests,
          });

          console.log("Accepted Members:", acceptedMembers);
          console.log("Pending Requests:", pendingRequests);
        } else {
          setTeamMembers({ accepted: [], pending: [] });
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
                  href={`/kanban/${item.id}`}
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
                    <div
                      className="ul-container"
                      onMouseEnter={() => getHover(item.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      style={{ position: "relative" }}
                    >
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
                            {teamMembers.accepted &&
                            teamMembers.accepted.length === 0 &&
                            teamMembers.pending &&
                            teamMembers.pending.length === 0 ? (
                              <div
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  borderRadius: 0,
                                }}
                              >
                                <p
                                  style={{
                                    width: "auto",

                                    height: "auto",
                                  }}
                                >
                                  No Participants!
                                </p>
                              </div>
                            ) : (
                              <ul
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  padding: "5px",
                                }}
                              >
                                {teamMembers.accepted &&
                                  teamMembers.accepted.length !== 0 &&
                                  teamMembers.accepted.map((member, idx) => (
                                    <li
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        borderRadius: "5px",
                                        marginBottom: "3vh",
                                        border: "4px solid #008dbc",
                                        background: " #a9d6f5",
                                        padding: "6px",
                                      }}
                                      key={idx}
                                    >
                                      <div
                                        style={{
                                          width: "auto",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "1vw",
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
                                        <div
                                          style={{
                                            width: "auto",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <span
                                            style={{
                                              margin: "0",
                                              fontSize: "16px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {member.username}
                                          </span>
                                          <div
                                            style={{
                                              display: "flex",
                                              flexDirection: "row",
                                              gap: "7px",
                                            }}
                                          >
                                            <span
                                              style={{
                                                // margin: "0 0 0 5px",
                                                fontSize: "14px",
                                                color: "#555",

                                                // display: "flex",
                                              }}
                                            >
                                              {member.firstname}
                                            </span>

                                            <span
                                              style={{
                                                fontSize: "14px",
                                                color: "#555",
                                              }}
                                            >
                                              {member.lastname}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <a
                                            onClick={() =>
                                              handleDeleteMember(
                                                member.username,
                                                item.id
                                              )
                                            }
                                            className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                            style={{ cursor: "pointer" }}
                                          >
                                            <svg
                                              aria-hidden="true"
                                              role="img"
                                              className="iconify iconify--mingcute"
                                              width="1em"
                                              height="1em"
                                              viewBox="0 0 24 24"
                                            >
                                              <g fill="none">
                                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                                <path
                                                  fill="currentColor"
                                                  d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"
                                                ></path>
                                              </g>
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                {teamMembers.pending &&
                                  teamMembers.pending.length !== 0 &&
                                  teamMembers.pending.map((member, idx) => (
                                    <li
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                        borderRadius: "5px",
                                        marginBottom: "3vh",
                                        border: "4px solid #4939f9",

                                        background: "#d6c2fb",

                                        padding: "6px",
                                      }}
                                      key={idx}
                                    >
                                      <div
                                        style={{
                                          width: "auto",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "1vw",
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
                                        <div
                                          style={{
                                            width: "auto",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <span
                                            style={{
                                              margin: "0",
                                              fontSize: "16px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {member.username}
                                          </span>
                                          <div
                                            style={{
                                              display: "flex",
                                              flexDirection: "row",
                                              gap: "7px",
                                            }}
                                          >
                                            <span
                                              style={{
                                                // margin: "0 0 0 5px",
                                                fontSize: "14px",
                                                color: "#555",

                                                // display: "flex",
                                              }}
                                            >
                                              {member.firstname}
                                            </span>

                                            <span
                                              style={{
                                                fontSize: "14px",
                                                color: "#555",
                                              }}
                                            >
                                              {member.lastname}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <div>
                                            <img
                                              src="projectImg/time.png"
                                              alt="waiting"
                                            />
                                          </div>
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
                          <a
                            href=" "
                            onClick={() => goToProjectViewDetail(item.id)}
                          >
                            <i className="far fa-eye" />
                            View Detail
                          </a>
                        </li>

                        <li>
                          <a href=" " onClick={(e) => openModal(e, item.id)}>
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
