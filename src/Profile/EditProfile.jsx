import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditProfile() {
  const [path, setPath] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
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
  const [alertMessage, setAlertMessage] = useState("");

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
        setInitialProfileData(data);
        setPath(data.image);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPath(URL.createObjectURL(file)); // Select the image preview
    }
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();

    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const uploadResponse = await fetch(
          "https://localhost:7157/api/Profile/EditedProfileImage",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
          }
        );

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json();
          setPath(uploadData.image);
          toast.success("Profile image uploaded successfully!");
        } else {
          toast.error(
            "Not a valid image file. Please select a jpg, jpeg or png file."
          );
          return;
        }
      }

      // Profil düzenleme işlemini devam ettir
      const response = await fetch(
        "https://localhost:7157/api/Profile/EditedProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(profileData),
        }
      );

      if (response.ok) {
        toast.success("Profile edited successfully!");
        //  setTimeout(() => setAlertMessage(""), 5000);

        const activityData = {
          text: "Profil güncellendi",
          type: "Profile",
        };

        await fetch(
          "https://localhost:7157/api/Notification/NewRecentActivity",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(activityData),
          }
        );
      } else {
        console.error(" Failed to edit profile.");
        toast.error(" failed to edit profile.");
        //  setTimeout(() => setAlertMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error editing profile:", error);
      toast.error("Failed to edit profile.");
      //   setTimeout(() => setAlertMessage(""), 5000);
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
      setProfileData(initialProfileData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
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
        <div className="mb-24 mt-16">
          <div className="avatar-upload">
            <div className="avatar-preview">
              <div
                id="imagePreview"
                style={{
                  backgroundImage: path
                    ? `url('${path}')`
                    : "url('https://shorturl.at/jh9kV')",
                }}
              ></div>
            </div>
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handleFileSelect}
              />
              <button
                type="button"
                onClick={() => document.getElementById("imageUpload").click()}
                className="camera-icon"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
          </div>
        </div>

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
          <label>Birthday*</label>
          <input
            type="date"
            name="birthday"
            value={profileData.birthday || ""}
            className="input"
            onChange={handleDateChange}
          />
        </div>

        <div className="buttonGroup">
          <button type="submit" className="saveButton">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="cancelButton">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
