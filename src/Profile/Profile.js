import React, { useState } from "react";
import "./css/Profile.css";

const Profile = () => {
  const [imagePreview, setImagePreview] = useState(
    "assets/images/user-grid/user-grid-img13.png"
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      {/* Left Section */}
      <div className="leftSection">
        <div className="coverImage"></div>
        <div className="profileImage">
          <img src={imagePreview} alt="Profile" className="profileCircle" />
          <input type="file" onChange={readURL} />
        </div>
        <h2 className="userName">Jacob Jones</h2>
        <p className="userEmail">ifrandom@gmail.com</p>

        <div className="personalInfo">
          <h3>Personal Info</h3>
          <p>
            <strong>Full Name:</strong> Will Jonto
          </p>
          <p>
            <strong>Email:</strong> willjontoax@gmail.com
          </p>
          <p>
            <strong>Phone Number:</strong> (1) 2536 2561 2365
          </p>
          <p>
            <strong>Department:</strong> Design
          </p>
          <p>
            <strong>Designation:</strong> UI UX Designer
          </p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Bio:</strong> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>

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
            className={activeTab === "Change Password" ? "activeTab" : "tab"}
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

        {/* Tab Content */}
        {activeTab === "Edit Profile" && (
          <form className="form">
            <div className="formGroup">
              <label>Full Name*</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="input"
              />
            </div>
            <div className="formGroup">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="input"
              />
            </div>
            <div className="formGroup">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="input"
              />
            </div>
            <div className="formGroup">
              <label>Department*</label>
              <select className="input">
                <option>Select Department</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Designation*</label>
              <select className="input">
                <option>Select Designation</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Language*</label>
              <select className="input">
                <option>Select Language</option>
              </select>
            </div>
            <div className="formGroup">
              <label>Description</label>
              <textarea
                placeholder="Write description..."
                className="textarea"
              ></textarea>
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

        {activeTab === "Notification Settings" && (
          <div className="notificationSettings">
            <div className="customSwitch">
              <label>Company News</label>
              <input type="checkbox" />
            </div>
            <div className="customSwitch">
              <label>Push Notification</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="customSwitch">
              <label>Weekly News Letters</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="customSwitch">
              <label>Meetups Near You</label>
              <input type="checkbox" />
            </div>
            <div className="customSwitch">
              <label>Orders Notifications</label>
              <input type="checkbox" defaultChecked />
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
  );
};

export default Profile;
