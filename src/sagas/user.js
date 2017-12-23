
import { takeLatest, put, all } from 'redux-saga/effects';
import Noty from 'noty';
import { push } from 'react-router-redux';
import { history } from './../store/store';
import {
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  USERS_SIGNUP_REQUEST,
  USERS_SIGNUP_SUCCESS,
  USERS_SIGNUP_FAILURE,
} from './../ducks/user';


export function* login({ payload: { login, password } }) {
  try {
    const response = yield fetch(`http://0.0.0.0:83/user/authorize?userName=${login}&userPassword=${password}`, {
      method: 'GET',
    });
    const { token, success } = yield response.json();
    if (!success) {
      yield put(USERS_LOGIN_FAILURE('Invalid data'));

      return;
    }
    yield put(USERS_LOGIN_SUCCESS({ token }));
    // TODO: MOVE TO SAGA
    new Noty({
      text: 'Login success',
      layout: 'topRight',
      theme: 'semanticui',
      type: 'success',
      timeout: 1200,
      progressBar: true,
    }).show();
    history.push('/dashboard');
  } catch (error) {
    yield put(USERS_LOGIN_FAILURE(error));
  }
}

export function* register({
  payload: {
    nick,
    password,
  },
}) {
  try {
    const response = yield fetch(`http://0.0.0.0:83/user/register?userName=${nick}&userPassword=${password}`, {
      method: 'GET',
      mode: 'no-cors',
    });
    const users = yield response.json();
    yield put(USERS_SIGNUP_SUCCESS({ users }));
  } catch (error) {
    yield put(USERS_SIGNUP_FAILURE(error));
  }
}

export default function* watcher() {
  yield all([
    takeLatest(USERS_LOGIN_REQUEST, login),
    takeLatest(USERS_SIGNUP_REQUEST, register),
  ]);
}
