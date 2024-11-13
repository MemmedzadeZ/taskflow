import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

function SignalRHub() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7157/connect")
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    const startConnection = async () => {
      try {
        await connection.start();
        console.log("Connection started");

        connection.on("ReceiveConnectInfo", (message) => {
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

  return (
    <div>
      <h3>Connection Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default SignalRHub;
