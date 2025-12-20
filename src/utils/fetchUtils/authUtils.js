const URL = process.env.REACT_APP_API_URL;

export const fetchEmailConfirmation = async (email) => {
  try {
    var response = await fetch(URL + "/Profile/email-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ NameOrEmail: email }),
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchEmailConfirmation response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchEmailConfirmation: " + error);
  }
};

export const fetchResetPassword = async (payload) => {
  try {
    var response = await fetch(URL + "/Profile/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchResetPassword response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchResetPassword: " + error);
  }
};

export const fetchConfirmPassword = async (email) => {
  try {
    var response = await fetch(URL + "/Profile/ForgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ NameOrEmail: email }),
    });
    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchConfirmPassword response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchConfirmPassword: " + error);
  }
};
