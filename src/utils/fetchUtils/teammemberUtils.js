const URL = process.env.REACT_APP_API_URL;

export const fetchGetUsersByProject = async (projectId) => {
  try {
    const response = await fetch(
      URL + `/TeamMember/GetUsersByProject/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Fail in fetch fetchGetUsersByProject");
      return false;
    }
  } catch (error) {
    console.error("Error fetching fetchGetUsersByProject:", error);
  }
};

export const fetchMemberRemove = async (payload) => {
  try {
    const response = await fetch(URL + `/TeamMember/MemberRemove`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error("Error fetching fetchMemberRemove:", error);
  }
};

export const fetchGetTeammembers = async (id) => {
  try {
    const response = await fetch(URL + `/TeamMember/get/${id}`, {
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
    console.error("Error fetching fetchGetTeammembers:", error);
  }
};

export const fetchPostTeamMemberCollections = async (payload) => {
  try {
    const response = await fetch(URL + "/TeamMember/TeamMemberCollections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to add team members:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error fetching fetchTeamMemberCollections:", error);
  }
};

export const fetchUpdateTeamMemberCollections = async (payload) => {
  try {
    fetch(URL + "/TeamMember/UpdateTeamMemberCollections", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.ok) {
        return true;
      }
      return false;
    });
  } catch (error) {
    console.error("Error fetching fetchUpdateTeamMemberCollections:", error);
  }
};

export const fetchTeamMemberActivities = async () => {
  try {
    const response = await fetch(
      URL + "/ProjectActivity/TeamMemberActivities",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.error("Error fetching fetchTeamMemberActivities:", error);
  }
};

export const fetchTeamMemberActivitiesWithId = async (projectId) => {
  try {
    const response = await fetch(
      URL + `/ProjectActivity/TeamMemberActivities/${projectId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.error("Error fetching fetchTeamMemberActivitiesWithId:", error);
  }
};
