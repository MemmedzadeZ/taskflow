import React, { useState, useEffect } from "react";

const Notifier = ({ message, error = false }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const styles = {
    notifierDiv: {
      position: "fixed",
      display: "inline-flex",
      zIndex: 3,
      bottom: "10%",
      border: "5px solid white",
      padding: "5px 9px",
      whiteSpace: "nowrap",
      width: "auto",
      borderColor: error ? "red" : "springgreen",
      backgroundColor: error ? "#febece" : "#baffd8",
      transform: "translateX(-50%)",
      color: "#333",
      borderRadius: "5px",
    },
    messageText: {
      margin: 0,
      fontSize: "2rem",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.notifierDiv}>
      <p style={styles.messageText}>{message}</p>
    </div>
  );
};

export default Notifier;

// const handleUpdateProject = async (e) => {
//   e.preventDefault();

//   if (!title || !startDate || !endDate || !description || !color) {
//     console.error("Missing required fields");
//     return;
//   }

//   const projectData = {
//     title: title.trim(),
//     description: description.trim(),
//     startDate: startDate,
//     endDate: endDate,
//     isCompleted: false,
//     color: color.trim(),
//     members: [],
//   };

//   try {
//     const response = await fetch(
//       `http://localhost:5204/api/Project/Put/${projectId}`,
//       {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(projectData),
//       }
//     );

//     if (response.ok) {
//       const activityData = {
//         text: "Project updated",
//         type: "Project",
//       };

//       const notificationResponse = await fetch(
//         "http://localhost:5204/api/Notification/NewRecentActivity",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify(activityData),
//         }
//       );

//       if (notificationResponse.ok) {
//         console.log("Notification sent successfully.");
//       } else {
//         console.error(
//           "Failed to send notification:",
//           notificationResponse.statusText
//         );
//       }

//       // handleMemberAdding();

//       //////handleaddmember
//       try {
//         console.log("Inside member handler");
//         const container = document.getElementById("team-member-box");

//         if (!container) {
//           console.error("Element with ID 'team-member-box' not found.");
//           return;
//         }

//         const usernames = Array.from(
//           container.querySelectorAll(".selected-tm")
//         ).map((div) => div.textContent.trim());

//         if (!title || typeof title !== "string") {
//           console.error("Title is undefined, empty, or not a string.");
//           return;
//         }

//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("Authorization token not found.");
//           return;
//         }

//         const newTitle = title.trim();
//         const projectResponse = await fetch(
//           "http://localhost:5204/api/Project/ProjectWithTitle",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ title: newTitle }),
//           }
//         );

//         if (!projectResponse.ok) {
//           console.error(
//             "Failed to fetch project ID:",
//             projectResponse.statusText
//           );
//           return;
//         }

//         let projectData;
//         try {
//           projectData = await projectResponse.json();
//         } catch (error) {
//           console.error("Failed to parse project data:", error);
//           return;
//         }

//         const projectId = projectData.id;
//         if (!projectId) {
//           console.error("Project ID not found.");
//           return;
//         }

//         const payload = {
//           projectId,
//           Members: usernames,
//         };

//         fetch(
//           "http://localhost:5204/api/TeamMember/UpdateTeamMemberCollections",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload),
//           }
//         ).then((response) => {
//           if (response.ok) {
//             setModalClose(true);
//           }
//         });
//         if (isModalClose) {
//           // closeModal();
//         }
//       } catch (error) {
//         console.error("Error in handleMemberAdding:", error);
//       }
//       ////////
//     } else {
//       const errorText = await response.text();
//       console.error("Failed to update project:", errorText);
//     }
//   } catch (error) {
//     console.error("Error while updating project:", error);
//   }
// };
