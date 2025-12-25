const URL = process.env.REACT_APP_API_URL;

export const fetchOnGoingProject = async () => {
  try {
    var response = await fetch(URL + "/Project/OnGoingProject", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchOnGoingProject response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchOnGoingProject: " + error);
  }
};

export const fetchDeleteProject = async (id) => {
  try {
    var response = await fetch(URL + `/Project/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return true;
    }
    console.log("In fetchDeleteProject response is FALSE: ");
    return false;
  } catch (error) {
    console.log("Error in fetchDeleteProject: " + error);
  }
};

export const fetchExtendedProjectList = async () => {
  try {
    var response = await fetch(URL + "/Project/ExtendedProjectList", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching projects:", response.statusText);
      return false;
    }
  } catch (error) {
    console.log("Error in fetchExtendedProjectList: " + error);
  }
};

export const fetchCompletedTaskCount = async () => {
  try {
    var response = await fetch(URL + "/Project/CompletedTaskCount", {
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
    console.log("Error in fetchCompletedTaskCount: " + error);
  }
};

export const fetchCreateProject = async (projectData) => {
  try {
    const response = await fetch(URL + "/api/Project", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchCreateProject: " + error);
  }
};

export const fetchProjectWithTitle = async (newTitle) => {
  try {
    const response = await fetch(URL + "/Project/ProjectWithTitle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newTitle),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchProjectWithTitle: " + error);
  }
};

export const fetchOnGoingProjectCount = async () => {
  try {
    var response = await fetch(URL + "/Project/OnGoingProjectCount", {
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
    console.log("Error in fetchOnGoingProjectCount: " + error);
  }
};

export const fetchPendingProjectCount = async () => {
  try {
    var response = await fetch(URL + "/Project/PendingProjectCount", {
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
    console.log("Error in fetchOnGoingProjectCount: " + error);
  }
};

export const fetchUserProjectCount = async () => {
  try {
    var response = await fetch(
      URL + "/Project/UserProjectCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response) {
      var data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchUserProjectCount: " + error);
  }
};

export const fetchUpdateProject = async (projectId, projectData) => {
  try {
    const response = await fetch(URL + `/Project/Put/${projectId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    if (response) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchUpdateProject: " + error);
  }
};

export const fetchGetProject = async (projectId) => {
  try {
    var response = await fetch(URL + `/Project/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchGetProject: " + error);
  }
};

export const fetchProjectDetails = async (projectId) => {
  try {
    const response = await fetch(URL + `/Project/${projectId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch project details");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchProjectDetails: " + error);
  }
};

export const fetchProjectInvolved = async () => {
  try {
    const response = await fetch(URL + "/Project/ProjectInvolved", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchProjectInvolved: " + error);
  }
};

export const fetchProjectTitle = async (projectId) => {
  try {
    const response = await fetch(URL + `/Project/ProjectTitle/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchProjectTitle: " + error);
  }
};

export const fetchAllProjectsUserOwn = async () => {
  try {
    const response = await fetch(URL + `/Project/AllProjectsUserOwn`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchAllProjectsUserOwn: " + error);
  }
};

export const fetchProjectTaskCanban = async (projectId) => {
  try {
    const response = await fetch(
      URL + `/Project/ProjectTaskCanban/${projectId}`,
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
    console.log("Error in fetchProjectTaskCanban: " + error);
  }
};

export const fetchUpdateTaskStatus = async (movedTaskId, newStatus) => {
  try {
    const response = await fetch(
      URL + `/Project/UpdateTaskStatus/${movedTaskId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ newStatus }),
      }
    );
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchUpdateTaskStatus: " + error);
  }
};
