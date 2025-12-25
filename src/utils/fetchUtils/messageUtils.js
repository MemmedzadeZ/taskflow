const URL = process.env.REACT_APP_API_URL;

export const fetchUserMessage = async () => {
  try {
    var response = await fetch(URL + "/Message/UserMessage", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchUserMessage: " + error);
  }
};

export const fetchUserMessageCount = async () => {
  try {
    var response = await fetch(
      URL + "/Message/UserMessageCount",

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
    console.log("Error in fetchUserMessageCount: " + error);
  }
};

export const fetchTwoMessage = async () => {
  try {
    const response = await fetch(URL + "/Message/TwoMessage", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchTwoMessage: " + error);
  }
};
