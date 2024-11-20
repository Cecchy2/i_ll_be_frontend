import { ADD_AMICO, ADD_AMICO_ERROR, DELETE_AMICO, GET_AMICI, GET_UTENTI } from "../actions/amiciActions";

const initialState = {
  amici: [],
  utenti: [],
  error: null,
};

const amiciReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AMICI:
      return {
        ...state,
        amici: action.payload,
      };
    case ADD_AMICO:
      return {
        ...state,
        amici: [...state.amici, action.payload],
      };
    case DELETE_AMICO:
      return {
        ...state,
        amici: state.amici.filter((amico) => amico.id !== action.payload),
      };
    case GET_UTENTI:
      return {
        ...state,
        utenti: action.payload,
      };
    case ADD_AMICO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default amiciReducer;
