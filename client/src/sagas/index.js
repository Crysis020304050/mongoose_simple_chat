import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes.js';
import {authSaga} from './authSaga.js';
import {loadChatsSaga} from "./loadChatsSaga.js";

export default function * () {
  yield takeLatest(ACTION_TYPES.AUTH_REQUEST, authSaga);
  yield takeLatest(ACTION_TYPES.LOAD_CHATS_REQUEST, loadChatsSaga);
}