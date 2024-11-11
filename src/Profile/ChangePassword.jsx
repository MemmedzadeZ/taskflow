import React, { useState } from "react";

function ChangePassword() {
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:7157/api/Profile/ChangePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(passwordData),
        }
      );

      if (response.ok) {
        setAlertMessage("Password updated successfully!");
        setTimeout(() => setAlertMessage(""), 5000);
      } else {
        console.error("Failed to update password");
        setAlertMessage("Failed to update password.");
        setTimeout(() => setAlertMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setAlertMessage("Error updating password.");
      setTimeout(() => setAlertMessage(""), 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {alertMessage && (
        <div className="alert alert-success alert-dismissable fade show">
          <button
            className="close"
            onClick={() => setAlertMessage("")}
            aria-label="close"
          >
            &times;
          </button>
          <strong>Success!</strong> {alertMessage}
        </div>
      )}

      <form className="form" onSubmit={handleChangePassword}>
        <div className="formGroup">
          <label>Old Password</label>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter old password"
            className="input"
            value={passwordData.oldPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            className="input"
            value={passwordData.newPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            className="input"
            value={passwordData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttonGroup">
          <button
            type="button"
            className="cancelButton"
            onClick={() =>
              setPasswordData({
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              })
            }
          >
            Cancel
          </button>
          <button type="submit" className="saveButton">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
