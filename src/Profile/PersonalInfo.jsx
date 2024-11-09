import React, { useEffect, useState } from "react";

function PersonalInfo() {
  const [username, setUserName] = useState(null);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [email, setEmail] = useState(null);
  const [path, setPath] = useState(null);
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchData = async () => {
    var response = await fetch("https://localhost:7157/api/Auth/currentUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    var data = await response.json();
    setUserName(data.username);
    setName(data.firstName);
    setSurname(data.lastName);
    setPhone(data.phone);
    setOccupation(data.occupation);
    setGender(data.gender);
    setBirthday(data.birthday);
    setEmail(data.email);
    setPath(data.path); // Profil resmi URL'si
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Seçilen dosyayı kaydediyoruz
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
        "https://localhost:7157/api/Auth/uploadProfileImage",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPath(data.path); // Yeni resim yolunu güncelle
        alert("Profil resmi başarıyla yüklendi.");
      } else {
        alert("Resim yükleme başarısız oldu.");
      }
    } catch (error) {
      console.error("Resim yükleme hatası:", error);
      alert("Resim yüklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="leftSection">
      <div className="coverImage"></div>
      <div className="profileImage">
        {path ? (
          <img src={path} alt="Profile" className="profilePicture" />
        ) : (
          <div className="profileCircle"></div>
        )}
      </div>
      <h2 className="userName">{username}</h2>
      <p className="userEmail">{email}</p>

      <div className="personalInfo">
        <h3>Personal Info</h3>
        <p>
          <strong>Full Name:</strong> {name} {surname}
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

      {/* Dosya yükleme alanı */}
      <div className="fileUpload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Profil Resmi Yükle</button>
      </div>
    </div>
  );
}

export default PersonalInfo;
