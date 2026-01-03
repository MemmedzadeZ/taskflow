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
      console.log("fetchCurrentUser: " + data);
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
    var response = await fetch(URL + "/Auth", {
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

export const fetchUsersCount = async () => {
  try {
    var response = await fetch(
      URL + "/Auth/UsersCount",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("data in fetchUsersCount: " + data);
      return data;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchUsersCount: " + error);
  }
};

export const fetchSignUp = async (userData) => {
  try {
    const response = await fetch(URL + "/Auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log("Error in fetchSignUp: " + error);
  }
};

export const fetchSignIn = async (userData) => {
  try {
    const response = await fetch(URL + "/Auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("in fetch: " + JSON.stringify(data));
      return data.token;
    }
    return false;
  } catch (error) {
    console.log("Error in fetchSignIn: " + error);
  }
};

export const fetchSearchedUser = async (key) => {
  try {
    var response = await fetch(URL + "/Auth/searchedUser", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(key),
    });
    if (response.ok) return await response.json();
    return false;
  } catch (error) {
    console.log("Error in fetchSearchedUser: " + error);
  }
};
