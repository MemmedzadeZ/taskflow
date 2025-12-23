const URL = process.env.REACT_APP_API_URL;

export const fetchUpdatePassword = async (passwordData) => {
  try {
    const response = await fetch(URL + "/Profile/ChangePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(passwordData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("In fetchUpdatePassword response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchUpdatePassword: " + error);
  }
};

export const fetchEditedProfile = async (profileData) => {
  try {
    const response = await fetch(URL + "/Profile/EditedProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(profileData),
    });
    if (response.ok) {
      console.log("In fetchEditedProfile response is FALSE: ");
      return true;
    } else {
      console.log("In fetchEditedProfile response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchEditedProfile: " + error);
  }
};
export const fetchEditedProfileImage = async (formData) => {
  try {
    const data = await fetch(URL + "/Profile/EditedProfileImage", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });
  } catch (error) {}
};
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

export const fetchVerifyCode = async (enteredCode, email) => {
  try {
    var response = await fetch(URL + "/Profile/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Code: enteredCode, Email: email }),
    });

    if (response.ok) {
      var data = await response.json();
      return data;
    } else {
      console.log("In fetchVerifyCode response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchVerifyCode: " + error);
  }
};

export const fetchLogOut = async () => {
  try {
    var response = await fetch(
      URL + "/Profile/Logout",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) {
      console.log(response.data);
      return true;
    } else {
      console.log("In fetchLogOut response is FALSE: ");
      return false;
    }
  } catch (error) {
    console.log("Error in fetchLogOut: " + error);
  }
};

export const fetchBasicInfoForProfil = async (ownerMail) => {
  try {
    const response = await fetch(
      URL + `/Profile/BasicInfoForProfil/${ownerMail}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching user profile");
      return false;
    }
  } catch (error) {
    console.error(" Error:", error);
  }
};
