import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import utenteReducer from "../reducers/utenteReducer";
import chatReducer from "../reducers/chatReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  utente: utenteReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
