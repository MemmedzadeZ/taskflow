const URL = process.env.REACT_APP_API_URL;

export const fetchFriendAllUsers = async () => {
  try {
    const response = await fetch(URL + "/Friend/AllUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchFriendAllUsers: " + error);
  }
};

export const fetchUnFollowFriend = async (friendEmail) => {
  try {
    const response = await fetch(URL + `/Friend/UnFollow/${friendEmail}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchUnFollowFriend: " + error);
  }
};

export const fetchSendFollow = async (friendId) => {
  try {
    const response = await fetch(URL + `/Friend/NewFriend`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(friendId),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchSendFollow: " + error);
  }
};

export const fetchAllFriends = async () => {
  try {
    const response = await fetch(URL + "/Friend/AllFriends", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchAllFriends: " + error);
  }
};
