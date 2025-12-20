import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HubConnectionBuilder } from "@microsoft/signalr";
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
    try {
      var response = await fetch("http://localhost:5204/api/Auth", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data);

        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.error("Delete account failed:", error);
      toast.error("Delete account  failed");
    }
  };

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
      toast.error("Logout failed");
    }
  };

  const fetchData = async () => {
    var response = await fetch("http://localhost:5204/api/Auth/currentUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    var data = await response.json();
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
