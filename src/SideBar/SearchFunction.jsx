import $ from "jquery";

export const Search = async (e, key) => {
  console.log("inside search");
  console.log("key=>" + key);
  $("#searched-users").remove();
  var div = document.createElement("div");
  div.className = "search-result-div";
  div.id = "searched-users";

  var response = await fetch("http://localhost:7157/api/Auth/searchedUser", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
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
      var atag = document.createElement("a");
      atag.innerHTML = element.userName;
      atag.style.cursor = "pointer";
      atag.href = `/viewProfile/${element.email}`;
      // atag.onclick = () => {
      //   console.log(element.email);
      //   window.location.href = `/viewProfile/${element.email}`;
      // };
      li.append(atag);
      ul.appendChild(li);
    });
  } else {
    var li = document.createElement("li");
    var atag = document.createElement("a");
    li.append(atag);
    atag.innerHTML = "No users found";
    ul.append(li);
  }
  div.appendChild(ul);
  $("#user-search-form").append(div);
};
