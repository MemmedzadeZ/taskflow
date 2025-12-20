import { HubConnectionBuilder } from "@microsoft/signalr";

const generalUrl = "http://localhost:5204/connect";

async function startSignalRConnection() {
  const token = localStorage.getItem("token");
  const connection = new HubConnectionBuilder()
    .withUrl(generalUrl, {
      accessTokenFactory: () => token,
    })
    .withAutomaticReconnect()
    .build();

  try {
    await connection.start();
    console.log("SignalR Connected");
    // Example method call
  } catch (error) {
    console.error("SignalR connection failed: ", error);
  }
}

export default startSignalRConnection;
