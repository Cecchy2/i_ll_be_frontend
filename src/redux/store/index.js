import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import utenteReducer from "../reducers/utenteReducer";
import chatReducer from "../reducers/chatReducer";
import amiciReducer from "../reducers/amiciReducer";
import eventiReducer from "../reducers/eventiReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  utente: utenteReducer,
  chat: chatReducer,
  amicizie: amiciReducer,
  eventi: eventiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
