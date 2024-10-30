import "../Dashboard/Dashboard.css";
import React, { useEffect, useState } from "react";

function CurrentProjects() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      console.log("Fetching project data");
      const response = await fetch(
        "https://localhost:7157/api/Project/ExtendedProjectList",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Data fetch failed");
      }
      const data = await response.json();
      console.log(data);
      setProjects(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-12">
      <div className="box">
        <div className="box-header">
          <div className="me-auto">
            <h4 className="card-title mb-6">Current Projects</h4>
            <p className="mb-0 fs-14 mt-9">Your Projects</p>
          </div>
        </div>

        <div className="box-body pt-20">
          <div
            className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix"
            data-gap="30"
            data-column="4"
            data-column2="2"
            data-column3="1"
            data-auto="true"
          >
            {projects.length === 0 ? (
              <p className="fw-bold" style={{ fontSize: "3vh" }}>
                No Data
              </p>
            ) : (
              <div className="owl-carousel owl-theme">
                {projects.map((project, index) => (
                  <div className="box box-carousel" key={index}>
                    <div className="card-top d-flex justify-content-between align-items-center">
                      <div className="sm-f-wrap d-flex align-items-center">
                        <h5 className="icon-gold text-white bg-green">
                          {project.title.charAt(0).toUpperCase()}
                        </h5>
                        <a
                          href="project-details.html"
                          className="h5 t-title ms-2"
                        >
                          {project.title}
                        </a>
                      </div>
                      <div className="dropdown">
                        <a
                          href=" "
                          className="btn-link"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href=" ">
                            <i className="bx bx-trash me-2"></i> Delete
                          </a>
                          <a className="dropdown-item" href=" ">
                            <i className="bx bx-edit me-2"></i>Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-center">
                      <h6 className="font-w400 fs-16">
                        Task Done: {project.completedTask}/{project.totalTask}
                      </h6>
                      <div
                        className="progress skill-progress mb-3"
                        style={{ height: "7px", width: "80%" }}
                      >
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{
                            width: `${
                              project.totalTask > 0
                                ? (project.completedTask / project.totalTask) *
                                  100
                                : 0
                            }%`,
                            height: "7px",
                          }}
                          role="progressbar"
                        ></div>
                      </div>
                      <div className="sm-f-wrap d-flex justify-content-between">
                        <ul className="user-list">
                          {project.participantsPath?.length > 0 ? (
                            project.participantsPath.map((participant, i) => (
                              <li key={i}>
                                <img src={participant} alt="user" />
                              </li>
                            ))
                          ) : (
                            <li>No Participants</li>
                          )}
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentProjects;
