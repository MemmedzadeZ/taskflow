import $ from "jquery";
import { fetchSearchedUser } from "../utils/fetchUtils/authUtils";

export const SearchMember = async (e, key) => {
  console.log("inside search");
  console.log("key=>" + key);
  $("#searched-members").remove();
  var div = document.createElement("div");
  div.className = "search-member-div";
  div.id = "searched-members";

  var data = await fetchSearchedUser();
  console.log(data);
  var ul = document.createElement("ul");
  if (data.users && data.users.length > 0) {
    for (var i = 0; i < data.users.length; i++) {
      console.log("element: " + data.users[i]);
      var li = document.createElement("li");
      var p = document.createElement("p");
      p.innerHTML = data.users[i].userName;
      p.className = "selection-p";
      li.className = "selection-member-li";

      const username = data.users[i].userName;
      li.onclick = () => {
        handleUserSelection(username);
      };
      li.appendChild(p);
      ul.appendChild(li);
    }
  } else {
    ul.append($("<li>").text("No users found"));
  }
  div.appendChild(ul);
  $("#member-search-form").append(div);
  const handleClickOutside = (event) => {
    const searchDiv = document.getElementById("searched-members");
    const isClickInside = searchDiv && searchDiv.contains(event.target);

    if (!isClickInside) {
      $("#searched-members").remove();
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
};
// signalr

const checkDiv = (username) => {
  const container = document.getElementById("team-member-box");

  const usernames = Array.from(container.querySelectorAll(".selected-tm")).map(
    (div) => div.textContent.trim()
  );

  console.log("Usernames in container:", usernames);
  console.log("Username to check:", username.trim());
  return usernames.includes(username.trim());
};

export const handleUserSelection = (userName) => {
  if (checkDiv(userName)) {
    return;
    ///alertNeed
  }
  var div = document.getElementById("team-member-box");
  if (div) {
    const selectedUserDiv = document.createElement("div");
    selectedUserDiv.className = "selected-tm";
    selectedUserDiv.textContent = userName;
    selectedUserDiv.style.cursor = "pointer";
    selectedUserDiv.onclick = () => {
      handleMemberRemoval(userName);
    };
    selectedUserDiv.style.backgroundColor = generatePastelColor();
    div.appendChild(selectedUserDiv);
  }
};

export const handleMemberRemoval = async (userName) => {
  var div = document.getElementById("team-member-box");
  if (div) {
    const userDivs = div.getElementsByClassName("selected-tm");
    for (let i = 0; i < userDivs.length; i++) {
      if (userDivs[i].textContent === userName) {
        div.removeChild(userDivs[i]);
        break;
      }
    }
  }
};

export const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 20) + 30;
  const lightness = Math.floor(Math.random() * 20) + 70;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
