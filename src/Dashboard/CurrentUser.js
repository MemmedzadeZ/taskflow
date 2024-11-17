import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import LogoutButton from "../Components/Logout";

function CurrentPerson() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [path, setPath] = useState(null);

  const fetchData = async () => {
    console.log("inside user");

    const response = await fetch(
      "https://localhost:7157/api/Auth/currentUser",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setUsername(data.username);
    setEmail(data.email);
    setPath(data.image);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dropdown d-inline-block mt-12">
      <div className="d-flex align-items-center">
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
        <span className="info d-xl-inline-block color-span">
          <span className="d-block fs-20 font-w600">{username}</span>
          <span className="d-block mt-7">{email}</span>
        </span>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="link" className="p-0">
          <i className="bx bx-dots-vertical-rounded"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href="/profile"
            onClick={() => console.log("Profile clicked")}
          >
            <i className="bx bx-edit me-2"></i>Profile
          </Dropdown.Item>
          <LogoutButton />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CurrentPerson;
