import React, { useState } from "react";
import "./css/Profile.css";
import CurrentPerson from "../Dashboard/CurrentUser";
import SidebarComponent from "../SideBar/SidebarComponent";
import PersonalInfo from "./PersonalInfo";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [imagePreview, setImagePreview] = useState(
    "assets/images/user-grid/user-grid-img13.png"
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Toggle function for password field
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Toggle function for confirm password field
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const readURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const [activeTab, setActiveTab] = useState("Edit Profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="sidebar-expand">
        <div className="DIV">
          <SidebarComponent />

          {/* Main Header */}

          <div className="container" style={{ width: 2000 }}>
            {/* Left Section */}
            <PersonalInfo />

            {/* Right Section */}
            <div className="rightSection">
              <div className="tabs">
                <button
                  className={activeTab === "Edit Profile" ? "activeTab" : "tab"}
                  onClick={() => handleTabClick("Edit Profile")}
                >
                  Edit Profile
                </button>
                <button
                  className={
                    activeTab === "Change Password" ? "activeTab" : "tab"
                  }
                  onClick={() => handleTabClick("Change Password")}
                >
                  Change Password
                </button>
                <button
                  className={
                    activeTab === "Notification Settings" ? "activeTab" : "tab"
                  }
                  onClick={() => handleTabClick("Notification Settings")}
                >
                  Notification Settings
                </button>
              </div>

              {/* Conditional Form Rendering */}
              {activeTab === "Edit Profile" && <EditProfile />}

              {activeTab === "Change Password" && (
                <form className="form">
                  <div className="formGroup">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="input"
                    />
                  </div>
                  <div className="formGroup">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="input"
                    />
                  </div>
                  <div className="buttonGroup">
                    <button type="button" className="cancelButton">
                      Cancel
                    </button>
                    <button type="submit" className="saveButton">
                      Save
                    </button>
                  </div>
                </form>
              )}
              {/* Notification Settings */}
              {activeTab === "Notification Settings" && (
                <div className="notification-settings">
                  <div className="custom-switch mb-16">
                    <div className="switch-label">
                      <span>Company News</span>
                    </div>
                    <input
                      type="checkbox"
                      id="companzNew"
                      className="switch-input"
                    />
                  </div>

                  <div className="custom-switch mb-16">
                    <div className="switch-label">
                      <span>Push Notification</span>
                    </div>
                    <input
                      type="checkbox"
                      id="pushNotification"
                      className="switch-input"
                      defaultChecked
                    />
                  </div>

                  <div className="custom-switch mb-16">
                    <div className="switch-label">
                      <span>Weekly News Letters</span>
                    </div>
                    <input
                      type="checkbox"
                      id="weeklyLetters"
                      className="switch-input"
                      defaultChecked
                    />
                  </div>

                  <div className="custom-switch mb-16">
                    <div className="switch-label">
                      <span>Meetups Near You</span>
                    </div>
                    <input
                      type="checkbox"
                      id="meetUp"
                      className="switch-input"
                    />
                  </div>

                  <div className="custom-switch mb-16">
                    <div className="switch-label">
                      <span>Orders Notifications</span>
                    </div>
                    <input
                      type="checkbox"
                      id="orderNotification"
                      className="switch-input"
                      defaultChecked
                    />
                  </div>

                  <div className="buttonGroup">
                    <button type="button" className="cancelButton">
                      Cancel
                    </button>
                    <button type="submit" className="saveButton">
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
