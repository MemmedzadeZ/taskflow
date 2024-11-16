import React, { useEffect, useState } from "react";

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

  const fetchData = async () => {
    var response = await fetch("https://localhost:7157/api/Auth/currentUser", {
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
    </div>
  );
}

export default PersonalInfo;
