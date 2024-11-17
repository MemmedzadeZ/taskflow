import React, { useState, useEffect } from "react";

function HeaderTaskInfo() {
  const [totalTaskCount, setTotalTaskCount] = useState(0);
  const [onholdTaskCount, setOnHoldTaskCount] = useState(0);
  const [completeTaskCount, setCompletedTaskCount] = useState(0);
  const [runningTaskCount, setRunningTaskCount] = useState(0);
  const fetchTotalTaskCount = async () => {
    try {
      const [userTaskCountResponse, projectTaskCountResponse] =
        await Promise.all([
          fetch("https://localhost:7157/api/UserTask/UserTasksCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch("https://localhost:7157/api/Work/UserTasksCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

      if (userTaskCountResponse.ok && projectTaskCountResponse.ok) {
        const userTaskCount = await userTaskCountResponse.json();
        const projectTaskCount = await projectTaskCountResponse.json();

        const totalCount = userTaskCount + projectTaskCount;
        setTotalTaskCount(totalCount);
      } else {
        console.error(" error fetching total task count.");
      }
    } catch (error) {
      console.error(" error fetching total task count:", error);
    }
  };
  const fetchOnHoldTaskCount = async () => {
    console.log("hold task count");
    try {
      const [userTaskCountResponse, projectTaskCountResponse] =
        await Promise.all([
          fetch("https://localhost:7157/api/Work/ToDoTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch("https://localhost:7157/api/UserTask/ToDoTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

      if (userTaskCountResponse.ok && projectTaskCountResponse.ok) {
        const userTaskCount = await userTaskCountResponse.json();
        const projectTaskCount = await projectTaskCountResponse.json();

        const totalCount = userTaskCount + projectTaskCount;
        setOnHoldTaskCount(totalCount);
      } else {
        console.error("  error fetching on hold task count.");
      }
    } catch (error) {
      console.error(" error fetching on hold task count:", error);
    }
  };
  const fetchRunningTaskCount = async () => {
    console.log("running task count");
    try {
      const [userTaskCountResponse, projectTaskCountResponse] =
        await Promise.all([
          fetch("https://localhost:7157/api/Work/InProgressTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch("https://localhost:7157/api/UserTask/InProgressTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

      if (userTaskCountResponse.ok && projectTaskCountResponse.ok) {
        const userTaskCount = await userTaskCountResponse.json();
        const projectTaskCount = await projectTaskCountResponse.json();

        const totalCount = userTaskCount + projectTaskCount;
        setRunningTaskCount(totalCount);
      } else {
        console.error("  error fetching running task count.");
      }
    } catch (error) {
      console.error(" error fetching running task count:", error);
    }
  };
  const fetchCompletedTaskCount = async () => {
    console.log("completed task count");
    try {
      const [userTaskCountResponse, projectTaskCountResponse] =
        await Promise.all([
          fetch(" https://localhost:7157/api/Work/DoneTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch("https://localhost:7157/api/UserTask/DoneTaskCount", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

      if (userTaskCountResponse.ok && projectTaskCountResponse.ok) {
        const userTaskCount = await userTaskCountResponse.json();
        const projectTaskCount = await projectTaskCountResponse.json();

        const totalCount = userTaskCount + projectTaskCount;
        setCompletedTaskCount(totalCount);
      } else {
        console.error("  error fetching completed task count.");
      }
    } catch (error) {
      console.error(" error fetching completed task count:", error);
    }
  };
  useEffect(() => {
    fetchTotalTaskCount();
    fetchOnHoldTaskCount();
    fetchRunningTaskCount();
    fetchCompletedTaskCount();
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="box card-box mb-20">
          <div className="icon-box bg-color-1">
            <div className="icon bg-icon-1">
              <i className="bx bxs-briefcase"></i>
            </div>
            <div className="content">
              <h5 className="title-box fs-15 mt-2">Total Task</h5>
              <div className="themesflat-counter fs-14 font-wb color-1">
                <span
                  className="number"
                  data-from="0"
                  data-to="1225"
                  data-speed="2500"
                  data-inviewport="yes"
                >
                  {totalTaskCount}
                </span>
              </div>
            </div>
          </div>
          <div className="icon-box bg-color-2">
            <div className="icon bg-icon-2">
              <i className="bx bx-task"></i>
            </div>
            <div className="content click-c">
              <h5 className="title-box fs-15 mt-2">Running Task</h5>
              <div className="themesflat-counter fs-14 font-wb color-2">
                <span
                  className="number"
                  data-from="0"
                  data-to="309"
                  data-speed="2500"
                  data-inviewport="yes"
                >
                  {runningTaskCount}
                </span>
              </div>
            </div>
          </div>
          <div className="icon-box bg-color-3">
            <div className="icon bg-icon-3">
              <i className="bx bx-block"></i>
            </div>
            <div className="content click-c">
              <h5 className="title-box fs-15 mt-2">On Hold Task</h5>
              <div className="themesflat-counter fs-14 font-wb color-3">
                <span
                  className="number"
                  data-from="0"
                  data-to="309"
                  data-speed="2500"
                  data-inviewport="yes"
                >
                  {onholdTaskCount}
                </span>
              </div>
            </div>
          </div>
          <div className="icon-box bg-color-5">
            <div className="icon bg-icon-5">
              <i className="bx bx-task color-white"></i>
            </div>
            <div className="content click-c">
              <h5 className="title-box fs-15 mt-2">Complete Task</h5>
              <div className="themesflat-counter fs-14 font-wb color-4">
                <span
                  className="number"
                  data-from="0"
                  data-to="309"
                  data-speed="2500"
                  data-inviewport="yes"
                >
                  {completeTaskCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderTaskInfo;
