const initialState = {
  amici: [],
  utenti: [],
};

const amiciReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AMICI":
      return {
        ...state,
        amici: action.payload,
      };
    case "ADD_AMICO":
      return {
        ...state,
        amici: [...state.amici, action.payload],
      };
    case "DELETE_AMICO":
      return {
        ...state,
        amici: state.amici.filter((amico) => amico.id !== action.payload),
      };
    case "GET_UTENTI":
      return {
        ...state,
        utenti: action.payload,
      };
    default:
      return state;
  }
};

export default amiciReducer;
