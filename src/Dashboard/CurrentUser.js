import React, { useEffect, useState } from "react";

function CurrentPerson() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [path, setPath] = useState(null);
  const fetchData = async () => {
    console.log("inside user");

    var response = await fetch(
      "https://localhost:7157/api/Auth/currentUser",

      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    var data = await response.json();

    console.log(data);

    setUsername(data.username);
    setEmail(data.email);
    setPath(data.path);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <button
      type="button"
      className="btn header-item waves-effect"
      id="page-header-user-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img
        className="rounded-circle header-profile-user"
        src={
          path
            ? path
            : "https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png"
        }
        style={{ width: "70px", height: "70px" }}
        alt="Header Avatar"
      />
      <span className="pulse-css"></span>
      <span className="info d-xl-inline-block color-span">
        <span className="d-block fs-20 font-w600">{username}</span>

        <span className="d-block mt-7">{email}</span>
      </span>
      <i className="bx bx-chevron-down"></i>
    </button>
  );
}

export default CurrentPerson;
