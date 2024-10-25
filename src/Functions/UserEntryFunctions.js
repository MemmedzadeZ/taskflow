export const registerUser = (e, email, password, confirmPassword, username) => {
  e.preventDefault();
  console.log("inside register");

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (password === null || confirmPassword === null) {
    alert("Password CANNOT be NULL!");
    return;
  }
  if (username === null || email === null) {
    alert("Password CANNOT be NULL!");
    return;
  }
  const userData = {
    email,
    password,
    username,
  };
  console.log(userData);

  fetch("https://localhost:7268/api/Auth/register", {
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
  var response = await fetch("https://localhost:7268/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  var data = await response.json();

  console.log(data.token);
  localStorage.setItem("token", data.token);

  var isFirstTime = await fetch("https://localhost:7268/api/Auth/RouteToQuiz", {
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
  //   "https://localhost:7268/api/Auth/FindCurrentUserForToken",
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
