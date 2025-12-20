import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      var response = await fetch(
        "http://localhost:5204/api/Profile/Logout",

        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        const activityData = {
          text: "User logged out",
          type: "logout",
        };

        await fetch(
          "http://localhost:5204/api/Notification/NewRecentActivity",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(activityData),
          }
        );

        localStorage.removeItem("token");
        navigate("/auth");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed");
    }
  };

  return (
    <Dropdown.Item href="#" onClick={handleLogout}>
      <i className="bx bx-trash me-2"></i> Logout
    </Dropdown.Item>
  );
}

export default LogoutButton;
