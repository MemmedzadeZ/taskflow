import $ from "jquery";
import styled from "styled-components";
import { fetchFriendAllUsers } from "../utils/fetchUtils/friendUtils";

// export async function GetAllUsers() {
//   const response = await fetch("http://localhost:5204/api/Friend/AllUser", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   if (!response.ok) {
//     console.error(response.error);
//   }
//   const data = await response.json();
//   console.log(data);
//   let content = "";
//   for (let i = 0; i < data.length; i++) {
//     let style = "";
//     let subContent = "";
//     // if (data[i].hasRequestPending) {
//     //   subContent = `<button class='btn btn-outline-secondary' onclick="TakeRequest('${data[i].id}')">Already Sent</button>`;
//     // } else {
//     //   if (data[i].isFriend) {
//     //     subContent = `<button class='btn btn-outline-secondary' onclick="UnfollowRequest('${data[i].id}')">UnFollow</button>
//     //         <a class='btn btn-outline-secondary m-2' href='/Home/GoChat/${data[i].id}' >Go Chat</a>`;
//     //   } else {
//     //       subContent = `<button class='btn btn-outline-primary' onclick="SendFollow('${data[i].id}')">Follow</button>`;
//     //     }
//     subContent = `<button class='btn btn-outline-primary' onclick="SendFollow('${data[i].id}')">Follow</button>`;

//     if (data[i].isOnline) {
//       style = "color:springgreen;";
//     } else {
//       style = "color: red;";
//     }

//     var item = `
//             <div class="box-body pt-5 pb-0">
//               <div class="img-box">
//                 <img
//                   src="${data[i].friendPhoto || "./images/client/1.png"}"
//                   style="height: 100px, width: 100px"
//                   alt=""
//                 />
//                 <div
//                   class="pulse-css"
//                   id="online-dot"
//                   style="${style}"
//                 />
//               </div>
//               <a >
//                 <h5 class="mt-17">${data[i].friendName}</h5>
//               </a>
//               <p class="fs-14 font-w400 font-main">
//                 Founder at
//                 <span class="text-clo-primary font-w500 pl-4">
//                   ${data[i].friendOccupation}
//                 </span>
//               </p>
//               <ul class="info">
//                 <li class="fs-14">
//                   <i class="bx bxs-phone" style="color: #cfe7e0" />
//                   ${data[i].friendPhone}
//                 </li>
//                 <li class="fs-14">
//                   <i class="bx bxs-envelope" style="color: #cfe7e0"  />
//                   ${data[i].friendEmail}
//                 </li>
//               </ul>
//               <div class="group-btn d-flex justify-content-between">
//                ${subContent}

//                  </div>
//             </div>

// `;
//     content += item;
//   }
//   $("#all-users-div").html(content);
// }

//   {followStatus[item.friendEmail] === "sent"
//     ? "Follow Request Sent"
//     : "Follow"}
{
  /* <button
className="bg-btn-pri color-white"
style={{ backgroundColor: "green" }}
onClick={() => handleFollow(item.friendEmail)}
disabled={followStatus[item.friendEmail] === "sent"}
> */
}
{
  /* <a
class="bg-btn-sec color-main"
style={{ backgroundColor: "#cfe7e0" }}
onClick={() => goToUserProfile(item.friendEmail)}
> */
}
export async function GetAllUsers() {
  console.log("in getall");
  if (window.location.pathname !== "/friends") {
    console.log("in first if getall");
    return;
  }
  console.log("out first if getall");

  const data = await fetchFriendAllUsers();

  console.log(data);
  let content = "";

  for (let i = 0; i < data.length; i++) {
    let style = data[i].isOnline
      ? "background: springgreen"
      : "background: red";
    let subContent = `
        <button class="btn btn-outline-primary" style="border:solid 2px lightblue" onclick="SendFollow('${data[i].id}')">Follow</button>
      `;

    content += `
        <div class="box-body pt-5 pb-0">
          <div class="img-box">
            <img
              src="${data[i].friendPhoto || "./images/client/1.png"}"
              style="height: 100px; width: 100px;"
              alt=""
            />
            <div
              class="pulse-css"
              
              style="${style}"
            ></div>
          </div>
          <a>
            <h5 class="mt-17">${data[i].friendName}</h5>
          </a>
          <p class="fs-14 font-w400 font-main">
            Founder at
            <span class="text-clo-primary font-w500 pl-4">
              ${data[i].friendOccupation}
            </span>
          </p>
          <ul class="info">
            <li class="fs-14">
              <i class="bx bxs-phone" style="color: #cfe7e0;"></i>
              ${data[i].friendPhone}
            </li>
            <li class="fs-14">
              <i class="bx bxs-envelope" style="color: #cfe7e0;"></i>
              ${data[i].friendEmail}
            </li>
          </ul>
          <div class="group-btn d-flex justify-content-between" style="display:flex">
            ${subContent}
              <a
                  class="bg-btn-sec color-main"
                  style="background-color:lightblue"
                  onClick="goToUserProfile(${data[i].friendEmail})"
                >
                  View Profile
                </a>
          </div>
        </div>
      `;
  }

  document.getElementById("all-users-div").innerHTML = content;
}
