import { faTry } from "@fortawesome/free-solid-svg-icons";

const URL = process.env.REACT_APP_API_URL;

export const fetchWorkUserTasks = async () => {
  try {
    const response = await fetch(URL + "/Work/UserTasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkUserTasks: " + error);
  }
};

export const fetchWorkDailyTasks = async () => {
  try {
    const response = await fetch(URL + "/Work/DailyTask", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkDailyTasks: " + error);
  }
};

export const fetchWorkNewTask = async (taskData) => {
  try {
    const response = await fetch(URL + "/Work/NewTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(taskData),
    });

    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkNewTask: " + error);
  }
};

export const fetchGetWork = async (taskId) => {
  try {
    const response = await fetch(URL + `/Work/${taskId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchGetWork: " + error);
  }
};

export const fetchEditedProjectForPmTask = async (
  taskId,
  userTask,
  selectedUserId,
  proId
) => {
  try {
    const response = await fetch(
      URL + `/Work/EditedProjectForPmTask/${taskId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...userTask,
          createdById: selectedUserId,
          projectId: proId,
        }), // Send updated task data
      }
    );
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchEditedProjectForPmTask: " + error);
  }
};

export const fetchDeleteProjectTask = async (taskId, projectId) => {
  try {
    const response = await fetch(
      URL + `/Work/DeleteProjectTask/${taskId}?projectId=${projectId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchDeleteProjectTask: " + error);
  }
};

export const fetchGetProjectWorks = async (projectId) => {
  try {
    const response = await fetch(URL + `/Work/ProjectWorks/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchGetProjectWorks: " + error);
  }
};

export const fetchWorkUserWorks = async () => {
  try {
    const response = await fetch(URL + "/Work/UserWorks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user works");
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkUserWorks: " + error);
  }
};

export const fetchWorkUserTasksCount = async () => {
  try {
    const response = await fetch(URL + "/Work/UserTasksCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkUserTasksCount: " + error);
  }
};

export const fetchWorkToDoTaskCount = async () => {
  try {
    const response = fetch(URL + "/Work/ToDoTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    }
    return false;
  } catch (error) {
    console.log("Error in fetchWorkToDoTaskCount: " + error);
  }
};

export const fetchWorkInProgressTaskCount = async () => {
  try {
    const response = await fetch(URL + "/Work/InProgressTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchWorkInProgressTaskCount: " + error);
  }
};

export const fetchWorkDoneTaskCount = async () => {
  try {
    const response = await fetch(URL + "/Work/DoneTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchWorkDoneTaskCount : " + error);
  }
};

export const fetchEditedProjectTask = async (id, userTask) => {
  try {
    const response = await fetch(URL + `/Work/EditedProjectTask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userTask),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchEditedProjectTask : " + error);
  }
};

export const fetchWorkUserTasksCountForEmail = async (email) => {
  try {
    var response = await fetch(URL + `/Work/UserTasksCountForEmail/${email}`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchWorkUserTasksCountForEmail : " + error);
  }
};

export const fetchWorkInProgressTaskCountForEmail = async (email) => {
  try {
    var response = await fetch(
      URL + `/Work/InProgressTaskCountForEmail/${email}`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchWorkInProgressTaskCountForEmail : " + error);
  }
};

///////////////////////////////UserTasks

export const fetchUserTasks = async () => {
  try {
    const response = await fetch(URL + "/UserTask/UserTasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchUserTasks: " + error);
  }
};

export const fetchEditedTaskForCalendar = async (
  newStartDate,
  newEndDate,
  taskId
) => {
  try {
    const response = await fetch(
      URL + `/UserTask/EditedTaskForCalendar/${taskId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          startDate: newStartDate,
          deadline: newEndDate,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchEditedTaskForCalendar: " + error);
  }
};

export const fetchDailyTask = async () => {
  try {
    const response = await fetch(URL + "/UserTask/DailyTask", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchDailyTask: " + error);
  }
};

export const fetchUserTasksCount = async () => {
  try {
    const response = await fetch(URL + "/UserTask/UserTasksCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    }
    return false;
  } catch (error) {
    console.log("Error in fetchUserTasksCount: " + error);
  }
};

export const fetchToDoTaskCount = async () => {
  try {
    const response = await fetch(URL + "/UserTask/ToDoTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    }
    return false;
  } catch (error) {
    console.log("Error in fetchToDoTaskCount: " + error);
  }
};

export const fetchInProgressTaskCount = async () => {
  try {
    const response = await fetch(URL + "/UserTask/InProgressTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchInProgressTaskCount: " + error);
  }
};

export const fetchDoneTaskCount = async () => {
  try {
    const response = await fetch(URL + "/UserTask/DoneTaskCount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchDoneTaskCount: " + error);
  }
};

export const fetchToDoTaskCountForMail = async (email) => {
  try {
    var response = await fetch(URL + `/Work/ToDoTaskCountForMail/${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchToDoTaskCountForMail: " + error);
  }
};

export const fetchWorkDoneTaskCountForEmail = async (email) => {
  try {
    var response = await fetch(URL + `/Work/DoneTaskCountForEmail/${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchWorkDoneTaskCountForEmail: " + error);
  }
};
