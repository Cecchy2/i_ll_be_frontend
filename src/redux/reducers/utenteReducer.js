import { UPLOAD_IMMAGINE, UPLOAD_IMMAGINE_COPERTNA } from "../actions/imagesUploadActions";
import { GET_PROFILE, UPDATE_PROFILE } from "../actions/utentiActions";

const initialState = {
  utente: {},
};

const utenteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        utente: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        utente: action.payload,
      };
    case UPLOAD_IMMAGINE:
      return {
        ...state,
        utente: {
          ...state.utente,
          immagine: action.payload.immagine,
        },
      };
    case UPLOAD_IMMAGINE_COPERTNA:
      return {
        ...state,
        utente: {
          ...state.utente,
          immagineCopertina: action.payload.immagineCopertina,
        },
      };
    default:
      return state;
  }
};

export default utenteReducer;
