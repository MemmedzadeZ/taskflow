const URL = process.env.REACT_APP_API_URL;

export const fetchAllMessages = async (mail) => {
  try {
    var response = await fetch(URL + `/ChatMessage/AllMessages/${mail}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchAllMessages: " + error);
  }
};

export const fetchRemoveMessage = async (id) => {
  try {
    var response = await fetch(URL + `/ChatMessage/RemoveMessage/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchRemoveMessage: " + error);
  }
};

export const fetchNewMessage = async (dto) => {
  try {
    var response = await fetch(URL + `/ChatMessage/NewMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchNewMessage: " + error);
  }
};
export const fetchAllChatsWithFriends = async () => {
  try {
    var response = await fetch(URL + "/Chat/AllChatsWithFriends", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchAllChatsWithFriends: " + error);
  }
};
