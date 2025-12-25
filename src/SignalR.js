import { HubConnectionBuilder } from "@microsoft/signalr";

const signalrUrl = process.env.REACT_APP_SIGNALR_URL;
async function startSignalRConnection() {
  const token = localStorage.getItem("token");
  const connection = new HubConnectionBuilder()
    .withUrl(signalrUrl, {
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
