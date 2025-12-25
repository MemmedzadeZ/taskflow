import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchCurrentUser,
  fetchDeleteAccount,
} from "../utils/fetchUtils/authUtils";
import "react-toastify/dist/ReactToastify.css";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { fetchNewRecentActivity } from "../utils/fetchUtils/notificationUtils";
import { fetchLogOut } from "../utils/fetchUtils/profileUtils";
function PersonalInfo() {
  const [username, setUserName] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [email, setEmail] = useState(null);
  const [path, setPath] = useState(null);
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const response = await fetchDeleteAccount();
    if (response) navigate("/");
  };

  const handleLogout = async () => {
    const response = await fetchLogOut();
    if (response) {
      const activityData = {
        text: "User logged out",
        type: "logout",
      };

      await fetchNewRecentActivity(activityData);

      localStorage.removeItem("token");
      navigate("/auth");
    }
  };

  const fetchData = async () => {
    const data = await fetchCurrentUser();

    setUserName(data.username);
    setFullname(data.fullname);
    setPhone(data.phone);
    setOccupation(data.occupation);
    setGender(data.gender);
    setEmail(data.email);
    setPath(data.image);
    setCountry(data.country);

    if (data.birthday) {
      const date = new Date(data.birthday);
      const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
      setBirthday(formattedDate);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5204/connect", {
        accessTokenFactory: () => token,
      })
      .configureLogging("information")
      .build();
    conn
      .start()
      .then(() => {
        console.log("SignalR connected.");
      })
      .catch((err) => console.error("SignalR connection error:", err));

    conn.on("ProfileUpdated", (message) => {
      fetchData();
    });

    return () => {
      if (conn) {
        conn.stop();
      }
    };
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="leftSection">
      <div className="coverImage"></div>
      <div className="profileImage">
        {path ? (
          <img src={path} alt="Profile" className="profilePicture" />
        ) : (
          <div className="profileCircle">
            <span>No image available</span>{" "}
            {/* Eğer resim yoksa burası görünecek */}
          </div>
        )}
      </div>
      <h2 className="userName">{username}</h2>
      <p className="userEmail">{email}</p>

      <div className="personalInfo">
        <h3>Personal Info</h3>
        <p>
          <strong>Full Name:</strong> {fullname}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone Number:</strong> {phone}
        </p>
        <p>
          <strong>Department:</strong> {occupation}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Birthday:</strong> {birthday}
        </p>
      </div>

      <div className="buttonGroup" style={{ justifyContent: "center" }}>
        <button type="submit" className="saveButton" onClick={handleLogout}>
          Log Out
        </button>
        <button
          type="button"
          className="cancelButton"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
