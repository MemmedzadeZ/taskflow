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
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For previewing the selected image

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
    setPath(data.path);
    setCountry(data.country);

    // Format the birthday if it's available
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for the selected file
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Lütfen bir dosya seçin.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        "https://localhost:7157/api/Profile/EditedProfile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData, // Use the formData object with the file
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPath(data.path); // Update the profile image path
        alert("Profil resmi başarıyla yüklendi.");
      } else {
        alert("Resim yükleme başarısız oldu.");
      }
    } catch (error) {
      console.error("Resim yükleme hatası:", error);
      alert("Resim yüklenirken bir hata oluştu.");
    }
  };

  useEffect(() => {
    if (selectedFile) {
      handleFileUpload(); // Start upload when file is selected
    }
  }, [selectedFile]);

  return (
    <div className="leftSection">
      <div className="coverImage"></div>
      <div className="profileImage">
        {imagePreview ? (
          <img src={imagePreview} alt="Profile" className="profilePicture" /> // Display selected file preview
        ) : path ? (
          <img src={path} alt="Profile" className="profilePicture" /> // Display the current profile image from path
        ) : (
          <div className="profileCircle">
            <input
              type="file"
              id="fileInput"
              className="fileInput"
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the file input
            />
            <label htmlFor="fileInput" className="fileInputLabel">
              <span>+</span>
            </label>
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
