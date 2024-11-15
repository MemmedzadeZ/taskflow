import { useState, useEffect } from "react";

const RecentActivity = () => {
  const [activityList, setActivityList] = useState([]);
  const fetchData = async () => {
    console.log("recent activity");
    var response = await fetch(
      "https://localhost:7157/api/ProjectActivity/TeamMemberActivities",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    var data = await response.json();
    console.log(data);
    if (data) {
      setActivityList(data.list);
    } else {
      console.log("empty");
    }
    // console.log(data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-6 col-md-12">
      <div className="box">
        <div className="box-header  pt-0 align-items-start">
          <div className="me-auto">
            <h4 className="card-title mb-0 fs-22">Recent Activity</h4>
            <p className="mt-6 fs-14 mb-14">
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="card-options pr-3">
            {/* <div className="dropdown">
              <a
                href=" "
                className="btn ripple btn-outline-light dropdown-toggle fs-12"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Date <i className="feather feather-chevron-down" />{" "}
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
            </div> */}
          </div>
        </div>
        {activityList ? (
          activityList.map((item, index) => (
            <div className="box-body pb-0" key={index}>
              <ul className="message mb-2">
                <li className="dlab-chat-user">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="./images/avatar/message-01.png"
                        className="rounded-circle user_img"
                        alt=""
                      />
                    </div>
                    <div className="user_info">
                      <div>
                        <a
                          className="font-w500 mt-5 mb-5"
                          href="message.html"
                          style={{ fontSize: "20px" }}
                        >
                          {item.username}
                        </a>
                        <span style={{ color: "gray", marginLeft: "5px" }}>
                          {item.createDate}
                        </span>
                      </div>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                  <div className="card-options me-0 d-flex align-items-center">
                    <a href=" " className="text-primary fs-14">
                      Add New Task
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p>No Data Exists!</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
