import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserFriend() {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  // Kullanıcının token bilgisinden userId çekilir
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken?.nameid;
  };

  // Arkadaşları Fetch etme
  const fetchFriends = async () => {
    try {
      const response = await fetch(
        "https://localhost:7157/api/Friend/AllFriends",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) throw new Error("Error fetching friends");

      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.error("Error fetching friend list:", error);
    }
  };

  // Arkadaş silme işlemi
  const unfollowFriend = async (friendEmail) => {
    try {
      const response = await fetch(
        `https://localhost:7157/api/Friend/UnFollow/${friendEmail}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error unfollowing friend:", errorData.message);
        return;
      }

      const result = await response.json();
      console.log(result.message);

      fetchFriends();
    } catch (error) {
      console.error("Error while unfollowing friend:", error);
    }
  };

  const goToUserProfile = (friendEmail) => {
    navigate(`/viewProfile/${friendEmail}`);
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div
      className="row"
      style={{
        justifyContent: "flex-start",
      }}
    >
      {friends.map((friend, index) => (
        <div className="col-3 col-md-6 col-sm-12 mb-25" key={index}>
          <div className="box client">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-custom-components">
                <BsThreeDotsVertical size={24} className="text-primary" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                  onClick={() => unfollowFriend(friend.friendEmail)}
                >
                  UnFollow
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="box-body pt-5 pb-0">
              <div className="img-box">
                <img
                  src={
                    friend.friendPhoto
                      ? friend.friendPhoto
                      : "./images/client/1.png"
                  }
                  style={{ height: "100px", width: "100px" }}
                  alt=""
                />
              </div>
              <h5 className="mt-17">{friend.friendName}</h5>
              <p className="fs-14 font-w400 font-main">
                <span className="text-clo-primary font-w500 pl-4">
                  {friend.friendOccupation}
                </span>
              </p>
              <ul className="info">
                <li className="fs-14">
                  <i className="bx bxs-phone" />
                  {friend.friendPhone}
                </li>
                <li className="fs-14">
                  <i className="bx bxs-envelope" />
                  {friend.friendEmail}
                </li>
              </ul>
              <div className="group-btn d-flex justify-content-between">
                <button className="bg-btn-pri color-white">Message</button>
                <button
                  className="bg-btn-sec color-main"
                  style={{ cursor: "pointer" }}
                  onClick={() => goToUserProfile(friend.friendEmail)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserFriend;
