import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { GetAllUsers } from "./HubFunctions/connection";

function SignalRHub() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No JWT token found");
      return;
    }
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect", {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
    const startConnection = async () => {
      try {
        await connection.start();
        console.log("Connection started");

        connection.on("ReceiveConnectInfo", (message) => {
          console.log(message);
          GetAllUsers();
          setMessages((prevMessages) => [...prevMessages, message]);
        });

        connection.on("DisconnectInfo", (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
      } catch (err) {
        console.error("Error starting connection:", err);
      }
    };

    startConnection();

    return () => {
      connection.stop().then(() => console.log("Connection stopped"));
    };
  }, []);
  return <></>;
}

export default SignalRHub;
