import React, { useState, useEffect } from "react";

function RecentActivity() {
  const [activities, setActivities] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Notification/RecentActivity",
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
      setActivities(data);
    } catch (error) {
      console.error("Error fetching recent activities:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };
  const colors = [
    "#3C21F7",
    "#00BC8B",
    "#FFB800",
    "#00ECCC",
    "#EF7F5A",
    "#5D45FB",
    "#6c757d",
  ];
  return (
    <div className="d-flex align-items-stretch col-lg-4">
      <div className="w-100 h-100">
        <div className="card">
          <div className="card-body">
            <div className="d-md-flex">
              <div>
                <h4 className="card-title">Recent Activity</h4>
              </div>
              <div className="ms-auto"></div>
            </div>
            <div className="mt-3">
              <div className="steamline mt-5">
                {activities.map((activity, index) => (
                  <div className="sl-item" key={index}>
                    <div
                      className="sl-left"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-activity icon-dual-primary"
                      >
                        <g>
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </g>
                      </svg>
                    </div>
                    <div className="sl-right">
                      <div className="font-medium">
                        {activity.type}{" "}
                        <span className="sl-date">
                          {formatDate(activity.created)}
                        </span>
                      </div>
                      <div className="desc">{activity.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
