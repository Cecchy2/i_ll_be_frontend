const initialState = {
  eventi: [],
  error: null,
  evento: null,
};

const eventiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EVENTI":
      return {
        ...state,
        eventi: action.payload,
        error: null,
      };
    case "GET_EVENTO":
      return {
        ...state,
        evento: action.payload,
        error: null,
      };
    case "ADD_EVENTO":
      return {
        ...state,
        eventi: [...state.eventi, action.payload],
        error: null,
      };
    case "UPDATE_EVENTO":
      return {
        ...state,
        eventi: state.eventi.map((evento) => {
          if (evento.id === action.payload.id) {
            return action.payload;
          }
          return evento;
        }),
        error: null,
      };
    case "DELETE_EVENTO":
      return {
        ...state,
        eventi: state.eventi.filter((evento) => evento.id !== action.payload),
        error: null,
      };
    case "ADD_EVENTO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventiReducer;
