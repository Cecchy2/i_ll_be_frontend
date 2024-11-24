import { Stomp } from "@stomp/stompjs";

let stompClient = null;

const url = import.meta.env.VITE_SOCKET_URL;
stompClient = Stomp.over(() => new WebSocket(url));

export const connectToWebSocket = (onMessageReceived) => {
  stompClient = Stomp.over(() => new WebSocket(url));

  stompClient.connect(
    {},
    () => {
      console.log("Connected to WebSocket via Stomp.js");
      // Subscribe to the /topic/public channel
      stompClient.subscribe("/topic/public", (message) => {
        onMessageReceived(JSON.parse(message.body));
      });
    },
    (error) => {
      console.error("WebSocket connection error:", error);
    }
  );
};

export const sendMessage = (messageContent, username) => {
  if (stompClient && stompClient.connected) {
    stompClient.send("/app/chat.sendMessage", {}, JSON.stringify({ content: messageContent, sender: username }));
  } else {
    console.error("WebSocket is not connected.");
  }
};

export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.disconnect(() => {
      console.log("WebSocket disconnected");
    });
  }
};
