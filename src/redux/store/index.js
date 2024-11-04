import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import utenteReducer from "../reducers/utenteReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  utente: utenteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
