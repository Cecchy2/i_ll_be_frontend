const initialState = {
  messaggi: [],
  loading: false,
  error: null,
};

const messaggiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGGI_REQUEST":
      return { ...state, loading: true };
    case "FETCH_MESSAGGI_SUCCESS":
      return { ...state, loading: false, messaggi: action.payload };
    case "FETCH_MESSAGGI_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "INVIA_MESSAGGIO":
      return {
        ...state,
        messaggi: [...state.messaggi, action.payload],
      };
    default:
      return state;
  }
};

export default messaggiReducer;
