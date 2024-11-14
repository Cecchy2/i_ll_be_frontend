export const CONNECT_WEBSOCKET = "CONNECT_WEBSOCKET";
export const DISCONNECT_WEBSOCKET = "DISCONNECT_WEBSOCKET";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

let socket = null;

export const connectWebSocket = () => (dispatch) => {
  socket = new WebSocket("ws://localhost:3002/ws");

  socket.onopen = () => {
    console.log("Connected to WebSocket");
    dispatch({ type: "WEBSOCKET_CONNECTED" });
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    dispatch({ type: "NEW_MESSAGE", payload: message });
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    dispatch({ type: "WEBSOCKET_ERROR", payload: error });
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
    dispatch({ type: "WEBSOCKET_DISCONNECTED" });
  };
};

export const sendMessage = (message) => {
  return () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      console.log("Sending message:", message);
      socket.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open. Cannot send message.");
    }
  };
};
