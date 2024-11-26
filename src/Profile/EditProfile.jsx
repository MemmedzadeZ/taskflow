import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile() {
  const [path, setPath] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileData, setProfileData] = useState({
    fullname: "",
    phone: "",
    occupation: "",
    email: "",
    country: "",
    gender: "",
    birthday: "",
  });
  const [initialProfileData, setInitialProfileData] = useState(null);

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
        toast.error("Failed to fetch profile data.");
      }
    } catch (error) {
      toast.error("Error fetching profile data.");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPath(previewUrl);
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
          const activityData = {
            text: "Has updated their profile image.",
            type: "ProfileImageUpdate",
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
          toast.success("Profile image updated successfully!");
        } else {
          toast.error(
            "Invalid image format. Please upload a JPG, JPEG, or PNG."
          );
          return;
        }
      }

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
        toast.success("Profile updated successfully!");
        const data = await response.json();
        setProfileData({
          ...data,
          birthday: data.birthday
            ? new Date(data.birthday).toISOString().split("T")[0]
            : "",
        });
        const activityData = {
          text: "Updated profile information.",
          type: "ProfileUpdate",
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
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error("Error updating profile.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setProfileData(initialProfileData);
    setPath(initialProfileData?.image || null);
    setSelectedFile(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <form className="form" onSubmit={handleEditProfile}>
        <div className="avatar-upload">
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{
                backgroundImage: path
                  ? `url(${path})`
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

        <div className="formGroup">
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            className="input"
            value={profileData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="input"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            className="input"
            value={profileData.phone}
            onChange={handleChange}
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
            value={profileData.birthday}
            onChange={handleChange}
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
