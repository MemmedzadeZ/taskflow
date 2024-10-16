import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

// async function start() {
//   try {
//     await connection.start();
//     console.log("SignalR connected");
//   } catch (err) {
//     console.log(err);
//     // setTimeout(() => {
//     //   start();
//     // }, 5000);
//   }
// }

// start();

// connection.on("ReceiveConnectInfo", (message) => {
//   let element = document.querySelector("#status-span");
// });

function SignalRHub() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7268/connect")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection
      .start()
      .then(() => {
        console.log("SignalR connected");
        connection.on("ReceiveConnectInfo", (message) => {
          setMessage(message);
        });
      })
      .catch((err) => console.error("SignalR connection error:", err));

    return () => {
      connection.stop();
    };
  }, []);

  return <></>;
}

export default SignalRHub;
