const initialState = {
  isConnected: false,
  messages: [],
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEBSOCKET_CONNECTED":
      return { ...state, isConnected: true };
    case "WEBSOCKET_DISCONNECTED":
      return { ...state, isConnected: false };
    case "NEW_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "WEBSOCKET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
