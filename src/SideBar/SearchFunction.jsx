import $ from "jquery";

export const Search = async (e, key) => {
  console.log("inside search");
  console.log("key=>" + key);
  $("#searched-users").remove();
  var div = document.createElement("div");
  div.className = "search-result-div";
  div.id = "searched-users";

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
      li.innerHTML = element.userName;
      ul.appendChild(li);
    });
  } else {
    ul.append($("<li>").text("No users found"));
  }
  div.appendChild(ul);
  $("#user-search-form").append(div);
};
