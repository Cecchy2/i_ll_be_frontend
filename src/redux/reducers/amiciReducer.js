import { ADD_AMICO, ADD_AMICO_ERROR, DELETE_AMICO, GET_AMICI, GET_AMICO, GET_UTENTI } from "../actions/amiciActions";
import { UPDATE_ONLINE_STATUS } from "../actions/onlineActions";

const initialState = {
  amici: [],
  amico: null,
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
    case GET_AMICO:
      return {
        ...state,
        amico: action.payload,
      };
    case UPDATE_ONLINE_STATUS:
      return {
        ...state,
        utenti: state.utenti.map((utente) => (utente.id === action.payload.id ? action.payload : utente)),
        amici: state.amici.map((amico) => (amico.id === action.payload.id ? action.payload : amico)),
      };
    default:
      return state;
  }
};

export default amiciReducer;
