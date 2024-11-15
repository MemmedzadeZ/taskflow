import React, { useState, useEffect } from "react";

export default function DailyTask() {
  const [items, setItems] = useState([]);

  const fetchMessages = async () => {
    console.log("Fetching daily tasks...");
    try {
      const response = await fetch(
        "https://localhost:7157/api/Work/DailyTask",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const groupedItems = items.reduce((acc, item) => {
    const startHour = new Date(item.startTime).getHours();
    if (!acc[startHour]) {
      acc[startHour] = [];
    }
    acc[startHour].push(item);
    return acc;
  }, {});

  // Eğer veriler boşsa, boş task'lar için placeholder verisi oluşturuyoruz
  const placeholderTasks = [
    {
      title: "No tasks for this hour",
      startTime: new Date(),
      deadline: new Date(),
      color: "#ed8030",
    },
  ];

  const tasksToDisplay =
    items.length > 0
      ? groupedItems
      : {
          0: placeholderTasks,
          1: placeholderTasks,
          2: placeholderTasks,
        };

  return (
    <div className="col-12">
      <div className="box">
        <div className="box-header">
          <h4 className="box-title mb-22">Daily Task</h4>
        </div>
        <div className="box-body">
          {Object.keys(tasksToDisplay).map((hour) => (
            <div className="content-item mb-wrap" key={hour}>
              <div className="left">
                <h5 className="font-w500">{hour}:00</h5>
              </div>
              <div className="right d-flex flex-wrap">
                {Array.isArray(tasksToDisplay[hour]) ? (
                  tasksToDisplay[hour].map((task, index) => (
                    <div
                      key={index}
                      className="content-box mx-2"
                      style={{
                        backgroundColor: task.color || "#ffa500",
                        minWidth: "150px",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <h5 className="font-wb text-white fs-20">
                        {task.title || "Title"}
                      </h5>
                      <h6 className="font-w400 text-w07">
                        {new Date(task.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {new Date(task.deadline).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </h6>
                    </div>
                  ))
                ) : (
                  <div>No tasks for this hour</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
