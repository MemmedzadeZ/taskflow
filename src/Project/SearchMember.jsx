import $ from "jquery";

export const SearchMember = async (e, key) => {
  console.log("inside search");
  console.log("key=>" + key);
  $("#searched-members").remove();
  var div = document.createElement("div");
  div.className = "search-member-div";
  div.id = "searched-members";

  var response = await fetch("https://localhost:7157/api/Auth/searchedUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(key),
  });
  var data = await response.json();
  console.log(data);
  var ul = document.createElement("ul");
  if (data.users && data.users.length > 0) {
    data.users.forEach((element) => {
      console.log("element: " + element);
      var li = document.createElement("li");
      var p = document.createElement("p");
      p.innerHTML = element.userName;
      p.className = "selection-p";
      li.className = "selection-member-li";

      li.onclick = () => {
        handleUserSelection(element.userName);
      };
      li.appendChild(p);
      ul.appendChild(li);
    });
  } else {
    ul.append($("<li>").text("No users found"));
  }
  div.appendChild(ul);
  $("#member-search-form").append(div);
};
const handleUserSelection = (userName) => {
  var div = document.getElementById("team-member-box");
  if (div) {
    const selectedUserDiv = document.createElement("div");
    selectedUserDiv.className = "selected-tm";
    selectedUserDiv.textContent = userName;

    selectedUserDiv.onclick = () => {
      handleMemberRemoval(userName);
    };
    selectedUserDiv.style.backgroundColor = generatePastelColor();
    div.appendChild(selectedUserDiv);
  }
};

const handleMemberRemoval = async (userName) => {
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

const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 20) + 30;
  const lightness = Math.floor(Math.random() * 20) + 70;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
