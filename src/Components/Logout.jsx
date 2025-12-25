import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { fetchLogOut } from "../utils/fetchUtils/profileUtils";
import { fetchNewRecentActivity } from "../utils/fetchUtils/notificationUtils";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      var response = await fetchLogOut();
      if (response) {
        const activityData = {
          text: "User logged out",
          type: "logout",
        };

        await fetchNewRecentActivity(activityData);

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
