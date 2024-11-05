import React, { useEffect, useState } from "react";

function EditProfile() {
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
    setPath(data.path);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className="form">
      <div className="formGroup">
        <label>Full Name*</label>
        <input type="text" placeholder="Enter Full Name" className="input" />
      </div>
      <div className="formGroup">
        <label>Email*</label>
        <input
          type="email"
          placeholder={email ? email : "Enter email address"}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label>Phone</label>
        <input
          type="tel"
          placeholder={phone ? phone : "Enter phone number"}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label>Department*</label>
        <select className="input">
          <option>Select Event Title</option>
          <option>IT</option>
          <option>Software Developer</option>
          <option>Backend Developer</option>
          <option>Human Resource</option>
        </select>
      </div>
      <div className="formGroup">
        <label>Country*</label>
        <select className="input">
          <option>Select Designation Title</option>
          <option>Turkey</option>
          <option>Azerbaijan</option>
          <option>Germany</option>
          <option>Italy</option>
        </select>
      </div>
      <div className="formGroup">
        <label>Gender*</label>
        <select className="input">
          <option>Select Language</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className="formGroup">
        <label>Birthday</label>
        <input
          type="date"
          className="input"
          placeholder={birthday ? birthday : "Select Birthday"}
        />
      </div>
      <div className="buttonGroup">
        <button type="button" className="cancelButton">
          Cancel
        </button>
        <button type="submit" className="saveButton">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProfile;
