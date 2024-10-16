export const registerUser = (e, email, password, confirmPassword) => {
  e.preventDefault();
  console.log("inside register");

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  const userData = {
    email,
    password,
  };
  fetch("https://localhost:7268/api/Auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const loginUser = (e, username, password) => {
  e.preventDefault();
  console.log("inside login");

  const userData = {
    username,
    password,
  };

  fetch("https://localhost:7268/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
