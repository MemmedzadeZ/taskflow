import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function HeaderViewProfile() {
  const { email } = useParams();

  const [totalTaskCount, setTotalTaskCount] = useState(0);
  const [onholdTaskCount, setOnHoldTaskCount] = useState(0);
  const [completeTaskCount, setCompletedTaskCount] = useState(0);
  const [runningTaskCount, setRunningTaskCount] = useState(0);
  const fetchTotalTaskCount = async () => {
    console.log("inside message");

    var response = await fetch(
      `http://localhost:5204/api/Work/UserTasksCountForEmail/${email}`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();
    console.log(data);
    setTotalTaskCount(data);
  };
  const fetchOnHoldTaskCount = async () => {
    console.log("hold task count");

    var response = await fetch(
      `http://localhost:5204/api/Work/ToDoTaskCountForMail/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();
    console.log(data);
    setOnHoldTaskCount(data);
  };
  const fetchRunningTaskCount = async () => {
    console.log("running task count");

    var response = await fetch(
      `http://localhost:5204/api/Work/InProgressTaskCountForEmail/${email}`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();
    console.log(data);
    setRunningTaskCount(data);
  };
  const fetchCompletedTaskCount = async () => {
    console.log("completed task count");

    var response = await fetch(
      `http://localhost:5204/api/Work/DoneTaskCountForEmail/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();
    console.log(data);
    setCompletedTaskCount(data);
  };
  useEffect(() => {
    fetchTotalTaskCount();
    fetchOnHoldTaskCount();
    fetchRunningTaskCount();
    fetchCompletedTaskCount();
  }, []);

  return (
    <div className="box card-box mb-20">
      <div className="icon-box bg-color-1">
        <div className="icon bg-icon-1">
          <i className="bx bxs-briefcase" />
        </div>
        <div className="content">
          <h5 className="title-box fs-15 mt-2">Total Task</h5>
          <div className="themesflat-counter fs-14 font-wb color-1">
            <span
              className="number"
              data-from={0}
              data-to={1225}
              data-speed={2500}
              data-inviewport="yes"
            >
              {totalTaskCount}
            </span>
          </div>
        </div>
      </div>
      <div className="icon-box bg-color-2">
        <div className="icon bg-icon-2">
          <i className="bx bx-task" />
        </div>
        <div className="content click-c">
          <h5 className="title-box fs-15 mt-2">Running Task</h5>
          <div className="themesflat-counter fs-14 font-wb color-2">
            <span
              className="number"
              data-from={0}
              data-to={309}
              data-speed={2500}
              data-inviewport="yes"
            >
              {runningTaskCount}
            </span>
          </div>
        </div>
      </div>
      <div className="icon-box bg-color-3">
        <div className="icon bg-icon-3">
          <i className="bx bx-block" />
        </div>
        <div className="content click-c">
          <h5 className="title-box fs-15 mt-2">On Hold Task</h5>
          <div className="themesflat-counter fs-14 font-wb color-3">
            <span
              className="number"
              data-from={0}
              data-to={309}
              data-speed={2500}
              data-inviewport="yes"
            >
              {onholdTaskCount}
            </span>
          </div>
        </div>
      </div>
      <div className="icon-box bg-color-5">
        <div className="icon bg-icon-5">
          <i className="bx bx-task color-white" />
        </div>
        <div className="content click-c">
          <h5 className="title-box fs-15 mt-2">Complete Task</h5>
          <div className="themesflat-counter fs-14 font-wb color-4">
            <span
              className="number"
              data-from={0}
              data-to={309}
              data-speed={2500}
              data-inviewport="yes"
            >
              {completeTaskCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderViewProfile;
