const initialState = {
  messages: [],
  socket: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECT_WEBSOCKET":
      return {
        ...state,
        socket: action.payload,
      };
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;
