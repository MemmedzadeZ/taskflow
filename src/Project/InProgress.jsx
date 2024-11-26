import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useState, useEffect } from "react";

const InProgress = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    var response = await fetch(
      "https://localhost:7157/api/Project/OnGoingProject",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    var data = await response.json();
    if (data) {
      setProjects(data);
      console.log(data);
    }
  };

  const calculateDeadline = (deadline) => {
    const timeDifference = new Date(deadline) - new Date();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };
  const calculateProgress = (startTime, deadline) => {
    const startDate = new Date(startTime);
    const endDate = new Date(deadline);
    const today = new Date();

    const totalDuration = Math.max(
      (endDate - startDate) / (1000 * 60 * 60 * 24),
      1
    );
    const elapsedDuration = Math.max(
      (today - startDate) / (1000 * 60 * 60 * 24),
      0
    );

    return Math.min(Math.round((elapsedDuration / totalDuration) * 100), 100);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-6 col-md-12">
      <div className="box">
        <div className="box-header  pt-0">
          <div className="me-auto">
            <h4 className="card-title mb-0 fs-22">In Progress Project</h4>
          </div>
          <div className="card-options pr-3"></div>
        </div>
        <div
          className="box-body pb-0"
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "54vh",
          }}
        >
          <div className="vertical-scroll">
            {projects.length > 0 ? (
              projects.map((item, index) => {
                const progress = calculateProgress(
                  item.startDate,
                  item.endDate
                );
                console.log(new Date(item.startDate), new Date(item.endDate));
                return (
                  <div
                    className="project-progress-content mt-21 mb-26"
                    key={index}
                  >
                    <div
                      className="list-group-item d-sm-flex  align-items-center border-0 pd-0"
                      style={{ width: "33vw" }}
                    >
                      <div className="d-flex w-10">
                        <div
                          className="task-img bg-primary-transparent"
                          style={{
                            backgroundColor: item.color,
                            borderColor: item.color,
                          }}
                        >
                          <h5 className="icon-gold text-white ">
                            {item.title.charAt(0).toUpperCase()}
                          </h5>
                        </div>
                      </div>
                      <div className="w-90 mt-4 mt-md-0 pl-13">
                        <p className="fs-16 font-w500 ms-auto mb-13">
                          {item.title}
                        </p>
                        <div className="progress progress-sm w-100">
                          <div
                            className="progress-bar bg-green-1"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <div className="d-flex justify-content-between mt-17">
                          <div className="deadline fs-14 font-w500 me-auto d-flex align-items-center">
                            <i className="bx bxs-time-five fs-20 mr-9" />
                            Deadline : {calculateDeadline(item.endDate)} days
                            left
                          </div>

                          <ul className="user-list mb-0">
                            {item.membersPath?.length > 0 ? (
                              item.membersPath.map((participant, i) => (
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
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  width: "33vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3vh",
                }}
              >
                <img
                  src="/assets/images/empty-box.png"
                  alt="img"
                  style={{ width: "11vw", height: "16vh" }}
                />
                <h3 style={{ fontWeight: "600" }}>No Data Found!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
