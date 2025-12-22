const URL = process.env.REACT_APP_API_URL;

export const fetchCurrentUser = async () => {
  try {
    var response = await fetch(URL + "/Auth/currentUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchCurrentUser response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchCurrentUser: " + error);
  }
};

export const fetchDeleteAccount = async () => {
  try {
    var response = await fetch(URL + "/api/Auth", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      console.log(response.data);

      localStorage.removeItem("token");
      return true;
    }
  } catch (error) {
    console.log("Error in fetchCurrentUser: " + error);
  }
};
