const URL = process.env.REACT_APP_API_URL;

export const fetchNewRecentActivity = async (activityData) => {
  try {
    console.log("in new notif: " + localStorage.getItem("token"));
    const response = await fetch(URL + "/Notification/NewRecentActivity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(activityData),
    });
    if (response.ok)
      console.log("In fetchNewRecentActivity response is true: ");
    else console.log("In fetchNewRecentActivity response is FALSE: ");
  } catch (error) {
    console.log("Error in fetchNewRecentActivity: " + error);
  }
};

export const fetchNewRequestNotification = async (activityData) => {
  try {
    console.log("in new notif: " + localStorage.getItem("token"));
    const response = await fetch(URL + "/Notification/NewRequestNotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(activityData),
    });
    if (response.ok)
      console.log("In fetchNewRequestNotification response is true: ");
    else console.log("In fetchNewRequestNotification response is FALSE: ");
  } catch (error) {
    console.log("Error in fetchNewRequestNotification: " + error);
  }
};

export const fetchRecentActivities = async () => {
  try {
    const response = await fetch(URL + "/Notification/RecentActivity", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("In fetchRecentActivities response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchRecentActivities: " + error);
  }
};

export const fetchNotificationSetting = async () => {
  try {
    const response = await fetch(URL + "/Notification/NotificationSetting", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("In fetchNotificationSetting response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchNotificationSetting: " + error);
  }
};

export const fetchUpdatedNotificationSetting = async (settings) => {
  try {
    const response = await fetch(
      URL + "/Notification/UpdatedNotificationSetting",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(settings),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("In fetchUpdatedNotificationSetting response is FALSE: ");

      return false;
    }
  } catch (error) {
    console.log("Error in fetchUpdatedNotificationSetting: " + error);
  }
};

export const fetchRequestNotification = async () => {
  try {
    const response = await fetch(URL + "/Notification/RequestNotification", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch notifications:");
      return false;
    }
  } catch (error) {
    console.error("Error fetching fetchRequestNotification:", error);
  }
};

export const fetchCalendarNotifications = async () => {
  try {
    const response = await fetch(URL + "/Notification/CalendarNotifications", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Fetched notifications:", data);
      return data;
    } else {
      console.error("Failed to fetch fetchCalendarNotifications:");
      return false;
    }
  } catch (error) {
    console.error("Error fetching fetchRequestNotification:", error);
  }
};

export const fetchTwoCalendarNotification = async () => {
  try {
    var response = await fetch(URL + "/Notification/TwoCalendarNotification", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.error("Error fetching fetchTwoCalendarNotification:", error);
  }
};

export const fetchCalendarNotificationCount = async () => {
  try {
    var response = await fetch(
      URL + "/Notification/CalendarNotificationCount",

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
    console.error("Error fetching fetchCalendarNotificationCount:", error);
  }
};

export const fetchUserNotificationCount = async () => {
  try {
    console.log("in fetchUserNotificationCount");
    var response = await fetch(
      URL + "/Notification/UserNotificationCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("in fetchUserNotificationCount: " + JSON.stringify(response));
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log("inside fetchUserNotificationCount");
      return data;
    }
    return false;
  } catch (error) {
    console.error("Error fetching fetchUserNotificationCount:", error);
  }
};

export const fetchTwoNotification = async () => {
  try {
    var response = await fetch(URL + "/Notification/TwoNotification", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.error("Error fetching fetchTwoNotification :", error);
  }
};

export const fetchDeletedCalendarMessage = async (id) => {
  try {
    const response = await fetch(
      URL + `/Notification/DeletedCalendarMessage/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error("Error fetching fetchDeletedCalendarMessage :", error);
  }
};

export const fetchAcceptRequestNotification = async (requestId) => {
  try {
    const response = await fetch(
      URL + `/Notification/AcceptRequestNotification/${requestId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error("Error fetching fetchAcceptRequestNotification :", error);
  }
};

export const fetchDeleteRequestNotification = async (requestId) => {
  try {
    const response = await fetch(
      URL + `/Notification/DeleteRequestNotification/${requestId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.error("Error fetching fetchDeleteRequestNotification :", error);
  }
};
