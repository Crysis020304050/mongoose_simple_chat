import {put} from 'redux-saga/effects';
import {createAuthErrorAction, createAuthSuccessAction} from '../actions';
import {loginUser, signUpUser, signUpUserWithPicture} from '../api/http/authController.js';

export function* authSaga({values}) {
    try {
        const response = values instanceof FormData
            ? [...values.values()][3] instanceof File
                ? yield signUpUserWithPicture(values)
                : yield signUpUser(values)
            : yield loginUser(values);
        yield put(createAuthSuccessAction(response.data));
    } catch (e) {
        yield put(createAuthErrorAction(e));
    }
}


