import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
const EditProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [initialProfileData, setInitialProfileData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [path, setPath] = useState("");

  const occupations = [
    "IT (Programming, Systems)",
    "Design (Graphic, UI/UX)",
    "Human Resources",
    "Software Programming",
    "Backend Developer",
    "Frontend Developer",
    "Other (please specify)",
  ];
  const countries = [
    "United States",
    "Germany",
    "Turkey",
    "Azerbaijan",
    "Other",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchWrapper = async (url, options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Request failed");
      }
      return await response.json();
    } catch (error) {
      toast.error(error.message || "An error occurred");
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetchWrapper(
        "https://localhost:7157/api/Auth/currentUser",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setProfileData(data);
      setInitialProfileData(data);
      setPath(data.image);
    } catch {
      toast.error("Failed to fetch profile data.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const file = e.target.files[0]; // Seçilen dosya
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPath(reader.result); // Base64 URL'yi state'e atıyoruz
      };
      reader.readAsDataURL(file); // Resmi okuyup Base64'e çeviriyoruz
    }
  };

  const handleSaveProfileData = async (e) => {
    e.preventDefault();
    try {
      await fetchWrapper("https://localhost:7157/api/Profile/EditedProfile", {
        method: "PUT", // 'PUT' metodunu kullanıyoruz.
        headers: {
          "Content-Type": "application/json", // JSON verisi gönderiyoruz
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profileData), // Profil verilerini JSON formatında gönderiyoruz
      });
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile data.");
    }
  };

  const handleEditProfileImage = async () => {
    if (!selectedFile) {
      toast.error("No image selected.");
      return;
    }

    const formData = new FormData(); // FormData kullanıyoruz, çünkü dosya gönderiyoruz
    formData.append("file", selectedFile);

    try {
      const data = await fetchWrapper(
        "https://localhost:7157/api/Profile/EditedProfileImage",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );
      setPath(data.image);
      toast.success("Profile image updated successfully!");
    } catch {
      toast.error("Failed to update profile image.");
    }
  };

  const handleCancel = () => {
    setProfileData(initialProfileData);
    toast.info("Changes have been cancelled.");
  };

  return (
    <form onSubmit={handleSaveProfileData} className="editProfileForm">
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
            onChange={handleFileChange}
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
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="username"
          name="fullname"
          value={profileData.fullname || ""}
          onChange={handleChange}
          placeholder="Enter your fullname"
          className="input"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          value={profileData.email || ""}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input"
          value={profileData.phone || ""}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="occupation">Occupation</label>
        <select
          className="input"
          id="occupation"
          name="occupation"
          value={profileData.occupation || ""}
          onChange={handleChange}
        >
          <option value="">Select Occupation</option>
          {occupations.map((occupation) => (
            <option key={occupation} value={occupation}>
              {occupation}
            </option>
          ))}
        </select>
      </div>

      <div className="formGroup">
        <label htmlFor="gender">Gender</label>
        <select
          className="input"
          id="gender"
          name="gender"
          value={profileData.gender || ""}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="formGroup">
        <label htmlFor="country">Country</label>
        <select
          className="input"
          id="country"
          name="country"
          value={profileData.country || ""}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="formGroup">
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          name="birthday"
          className="input"
          value={profileData.birthday}
          onChange={handleChange}
        />
      </div>

      <div className="buttonGroup" style={{ marginTop: "20px" }}>
        <button
          type="button"
          onClick={handleEditProfileImage}
          className="saveButton"
          style={{
            backgroundColor: "transparent",
            color: "#753CF0",
            border: "1px solid #753CF0",
          }}
        >
          Update Profile Image
        </button>
        <button type="submit" className="saveButton">
          Save Profile Data
        </button>
        <button type="button" onClick={handleCancel} className="cancelButton">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
