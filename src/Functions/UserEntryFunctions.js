import $ from "jquery";

function inputCheckUp(
  email,
  firstname,
  lastname,
  username,
  password,
  confirmPassword
) {
  console.log("inside checkup");
  $("#email-span").css("display", "none");
  $("#email-div").css("margin-bottom", "0px");
  $("#firstname-span").css("display", "none");
  $("#firstname-div").css("margin-bottom", "0px");
  $("#lastname-span").css("display", "none");
  $("#lastname-div").css("margin-bottom", "0px");
  $("#confirmPassword-span").css("display", "none");
  $("#confirmPassword-div").css("margin-bottom", "0px");
  $("#password-span").css("display", "none");
  $("#password-div").css("margin-bottom", "0px");
  $("#username-span").css("display", "none");
  $("#username-div").css("margin-bottom", "0px");

  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>_]/;

  if (email === "" || email.length < 7 || !email.includes("@")) {
    $("#email-span").css("display", "block");
    $("#email-span").text("Email CANNOT be empty!");
    $("#email-div").css("margin-bottom", "25px");

    console.log("email");
    return false;
  }
  if (firstname === "" || firstname.length < 2) {
    $("#firstname-span").css("display", "block");
    $("#firstname-span").text("Firstname CANNOT be empty!");
    $("#firstname-div").css("margin-bottom", "25px");
    console.log("firstname");
    return false;
  }
  if (lastname === "" || lastname.length < 2) {
    $("#lastname-span").css("display", "block");
    $("#lastname-span").text("Lastname CANNOT be empty!");
    $("#lastname-div").css("margin-bottom", "25px");
    console.log("lastname");
    return false;
  }
  if (username === "" || username.length < 2) {
    $("#username-span").css("display", "block");
    $("#username-span").text("Username CANNOT be empty!");
    $("#username-div").css("margin-bottom", "25px");
    console.log("username");
    return false;
  }
  if (password === "") {
    // alert("Password CANNOT be NULL!");
    $("#password-span").css("display", "block");
    $("#password-span").text("Passwords CANNOT be empty!");
    $("#password-div").css("margin-bottom", "25px");
    console.log("password");
    return false;
  }
  if (!hasLowercase.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a lowercase letter.");
    console.log("password lowercase");
    return false;
  }
  if (!hasUppercase.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a uppercase letter.");
    console.log("password uppercase");
    return false;
  }
  if (!hasNumber.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a number.");
    console.log("password number");
    return false;
  }
  if (!hasSymbol.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a symbol.");
    console.log("password symbol");
    return false;
  }
  if (confirmPassword === "") {
    $("#confirmPassword-span").css("display", "block");
    $("#confirmPassword-span").text("Please, re-enter password!");
    $("#confirmPassword-div").css("margin-bottom", "25px");
    console.log("confirm password");
    return false;
  }

  if (password !== confirmPassword) {
    // alert("Passwords do not match!");
    $("#confirmPassword-span").css("display", "block");
    $("#confirmPassword-span").text("Passwords should match!");
    $("#confirmPassword-div").css("margin-bottom", "25px");
    console.log("password and confirm password");
    return false;
  }

  return true;
}

export const registerUser = (
  e,
  email,
  firstname,
  lastname,
  username,
  password,
  confirmPassword
) => {
  e.preventDefault();
  console.log("inside register");
  if (
    !inputCheckUp(
      email,
      firstname,
      lastname,
      username,
      password,
      confirmPassword
    )
  ) {
    console.log("inputCheckUp returned false");
    return false;
  } else {
    return true;
  }
};

export const createUser = async (
  firstname,
  lastname,
  email,
  password,
  username
) => {
  console.log("inside create");
  const userData = {
    firstname,
    lastname,
    email,
    password,
    username,
  };
  console.log(userData);

  fetch("https://localhost:7157/api/Auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/quiz";
        return response.json();
      } else {
        throw new Error(`HTTP status ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const loginUser = async (e, username, password) => {
  e.preventDefault();
  console.log("inside login");
  const userData = {
    username,
    password,
  };
  console.log(userData);

  const response = await fetch("https://localhost:7157/api/Auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
    const activityData = {
      text: "User logged in.",
      type: "login",
    };

    await fetch("https://localhost:7157/api/Notification/NewRecentActivity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(activityData),
    });
    window.location.href = "/dashboard";
  } else {
    const errorData = await response.json();
    console.error("Error:", errorData);
  }
};
