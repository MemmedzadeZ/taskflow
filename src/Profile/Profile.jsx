import React, { useState, useEffect } from "react";
import "./css/Profile.css";
import SidebarComponent from "../SideBar/SidebarComponent";
import PersonalInfo from "./PersonalInfo";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import NotificationSetting from "./NotificationSetting";
import RecentActivity from "./RecentActivity";
import RequestList from "./RequestList";
import Reminder from "./Reminder";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [activeTab, setActiveTab] = useState("Edit Profile");

  useEffect(() => {
    const fetchData = async () => {
      var response = await fetch("http://localhost:5204/api/Auth/currentUser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      var data = await response.json();
      setProfileData(data);
    };

    fetchData();
  }, []);

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
            <PersonalInfo
              profileData={profileData}
              setProfileData={setProfileData}
            />

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

              {activeTab === "Change Password" && <ChangePassword />}
              {/* Notification Settings */}
              {activeTab === "Notification Settings" && <NotificationSetting />}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", width: "1250px" }}>
        <RecentActivity />
        <div style={{ display: "flex", flexDirection: "column", width: "85%" }}>
          <RequestList />
          <Reminder />
        </div>
      </div>
    </>
  );
};

export default Profile;
