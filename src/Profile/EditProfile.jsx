import React, { useEffect, useState } from "react";

function EditProfile() {
  const [profileData, setProfileData] = useState({
    fullname: null,
    phone: null,
    occupation: null,
    email: null,
    country: null,
    gender: null,
    birthday: null,
  });

  const [initialProfileData, setInitialProfileData] = useState(null);
  const [alertMessage, setAlertMessage] = useState(""); // Alert mesajı için state

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Auth/currentUser",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setInitialProfileData(data); // Store the initial profile data
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:7157/api/Profile/EditedProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(profileData), // JSON formatında gönder
        }
      );

      if (response.ok) {
        setAlertMessage("Profil başarıyla güncellendi!");
        setTimeout(() => setAlertMessage(""), 5000);
      } else {
        console.error("Profil güncellenemedi");
        setAlertMessage("Profil güncellenemedi.");
        setTimeout(() => setAlertMessage(""), 5000);
      }
    } catch (error) {
      console.error("Profil güncellenirken hata oluştu:", error);
      setAlertMessage("Profil güncellenirken hata oluştu.");
      setTimeout(() => setAlertMessage(""), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date
      .toLocaleDateString("en-GB")
      .split("/")
      .reverse()
      .join("-");
    setProfileData((prevData) => ({
      ...prevData,
      birthday: formattedDate,
    }));
  };

  const handleCancel = () => {
    if (initialProfileData) {
      setProfileData(initialProfileData); //reset profile data to initial state
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {alertMessage && (
        <div className="alert alert-success alert-dismissable fade show">
          <a
            href=" "
            className="close"
            onClick={() => setAlertMessage("")}
            aria-label="close"
          >
            &times;
          </a>
          <strong>Success!</strong> {alertMessage}
        </div>
      )}

      <form className="form" onSubmit={handleEditProfile}>
        <div className="formGroup">
          <label>Full Name*</label>
          <input
            type="text"
            name="fullname"
            placeholder={profileData.fullname || "Enter Full Name"}
            className="input"
            onChange={handleChange}
            value={profileData.fullname || ""}
          />
        </div>
        <div className="formGroup">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder={profileData.email || "Enter email address"}
            className="input"
            onChange={handleChange}
            value={profileData.email || ""}
          />
        </div>
        <div className="formGroup">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder={profileData.phone || "Enter phone number"}
            className="input"
            onChange={handleChange}
            value={profileData.phone || ""}
          />
        </div>
        <div className="formGroup">
          <label>Occupation*</label>
          <select
            name="occupation"
            className="input"
            value={profileData.occupation || ""}
            onChange={handleChange}
          >
            <option value="">Select occupation</option>
            <option value="IT">IT</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Human Resource">Human Resource</option>
          </select>
        </div>
        <div className="formGroup">
          <label>Country*</label>
          <select
            name="country"
            className="input"
            value={profileData.country || ""}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="Turkey">Turkey</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
        <div className="formGroup">
          <label>Gender*</label>
          <select
            name="gender"
            className="input"
            value={profileData.gender || ""}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="formGroup">
          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
            className="input"
            value={profileData.birthday || ""}
            onChange={handleDateChange}
          />
        </div>
        <div className="buttonGroup">
          <button type="button" className="cancelButton" onClick={handleCancel}>
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

export default EditProfile;
