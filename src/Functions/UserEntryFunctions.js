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
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;

  if (email === "") {
    $("#email-span").css("display", "block");
    $("#email-span").text("Email CANNOT be empty!");
    $("#email-div").css("margin-bottom", "25px");
    console.log(email);
    return false;
  }
  if (firstname === "") {
    $("#firstname-span").css("display", "block");
    $("#firstname-span").text("Firstname CANNOT be empty!");
    $("#firstname-div").css("margin-bottom", "25px");
    return false;
  }
  if (lastname === "") {
    $("#lastname-span").css("display", "block");
    $("#lastname-span").text("Lastname CANNOT be empty!");
    $("#lastname-div").css("margin-bottom", "25px");
    return false;
  }
  if (username === "") {
    $("#username-span").css("display", "block");
    $("#username-span").text("Username CANNOT be empty!");
    $("#username-div").css("margin-bottom", "25px");
    return false;
  }
  if (password === "") {
    // alert("Password CANNOT be NULL!");
    $("#password-span").css("display", "block");
    $("#password-span").text("Passwords CANNOT be empty!");
    $("#password-div").css("margin-bottom", "25px");
    return false;
  }
  if (!hasLowercase.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a lowercase letter.");
  }
  if (!hasUppercase.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a uppercase letter.");
  }
  if (!hasNumber.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a number letter.");
  }
  if (!hasSymbol.test(password)) {
    $("#password-span")
      .css("display", "block")
      .text("Password must include a symbol letter.");
  }
  if (confirmPassword === "") {
    $("#confirmPassword-span").css("display", "block");
    $("#confirmPassword-span").text("Please, re-enter password!");
    $("#confirmPassword-div").css("margin-bottom", "25px");

    return false;
  }

  if (password !== confirmPassword) {
    // alert("Passwords do not match!");
    $("#confirmPassword-span").css("display", "block");
    $("#confirmPassword-span").text("Passwords should match!");
    $("#confirmPassword-div").css("margin-bottom", "25px");
    return false;
  }
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
    inputCheckUp(
      email,
      firstname,
      lastname,
      username,
      password,
      confirmPassword
    )
  )
    return;
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

function loginCheckUp(username, password) {
  $("#login-password-span").css("display", "none");
  $("#login-password-div").css("margin-bottom", "0px");
  $("#login-username-span").css("display", "none");
  $("#login-username-div").css("margin-bottom", "0px");
}

export const loginUser = async (e, username, password) => {
  e.preventDefault();
  console.log("inside login");
  loginCheckUp(username, password);
  const userData = {
    username,
    password,
  };
  console.log(userData);
  var response = await fetch("https://localhost:7157/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  var data = await response.json();

  console.log(data.token);
  localStorage.setItem("token", data.token);

  var isFirstTime = await fetch("https://localhost:7157/api/Auth/RouteToQuiz", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(isFirstTime);
  if (response.ok) {
    // isFirstTime
    //   ? (window.location.href = "/quiz")
    window.location.href = "/dashboard";
  } else {
    console.log(response.json());
  }

  //CurrentUserForToken

  // var newResponse = await fetch(
  //   "https://localhost:7157/api/Auth/FindCurrentUserForToken",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${data.token}`,
  //     },
  //   }
  // );
  // const newData = await newResponse.json();

  // if (newResponse.ok) {
  //   console.log("Current user:", newData);
  // } else {
  //   console.error("Failed to get current user:", newData);
  // }

  // .then((response) => {
  //   console.log(response.json());
  // })
  // .then((data) => {
  //   console.log("Success:", data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
};
