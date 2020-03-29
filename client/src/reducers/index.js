import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import chatReducer from './chatReducer.js';
import loadChatsReducer from "./loadChatsReducer";

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
  chats: loadChatsReducer,
});