
import { takeLatest, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  USERS_SIGNUP_REQUEST,
  USERS_SIGNUP_SUCCESS,
  USERS_SIGNUP_FAILURE,
  USERS_TOKEN_LOAD,
  USERS_TOKEN_SET,
  USERS_LOGOUT,
  USERS_TOKEN_REMOVE,
} from './../ducks/user';
import notificationManager from './../utils/notificationManager';
import localStorageManager from './../utils/localStorageManager';
import { TOKEN } from './../consts/localStorageKeys';
import { REACT_APP_API } from './../consts/environment';

export function* login({ payload: { login, password } }) {
  try {
    const response = yield fetch(`${REACT_APP_API}/user/authorize?userName=${login}&userPassword=${password}`, {
      method: 'GET',
    });
    const { token, success } = yield response.json();
    if (!success) {
      yield put(USERS_LOGIN_FAILURE('Invalid data'));
      notificationManager.show({
        text: 'Provided credentials are incorrect',
        layout: 'topRight',
        type: 'error',
      });

      return;
    }
    localStorageManager.set(TOKEN, token);
    notificationManager.show({
      text: 'Login success',
      layout: 'topRight',
      type: 'success',
    });
    yield put(push('/dashboard'));
    yield put(USERS_LOGIN_SUCCESS({ token }));
  } catch (error) {
    yield put(USERS_LOGIN_FAILURE(error));
    notificationManager.show({
      text: 'Unable to connect to server',
      layout: 'topRight',
      type: 'error',
    });
  }
}

export function* register({
  payload: {
    nick,
    password,
  },
}) {
  try {
    const response = yield fetch(`${REACT_APP_API}/user/register?userName=${nick}&userPassword=${password}`, {
      method: 'GET',
    });
    const { success, token } = yield response.json();
    if (!success) {
      yield put(USERS_SIGNUP_FAILURE({ message: 'User already exists' }));
      notificationManager.show({
        text: 'User already exists',
        layout: 'topRight',
        type: 'error',
      });

      return;
    }
    yield put(USERS_SIGNUP_SUCCESS({ token }));
    yield put(USERS_LOGIN_REQUEST({ login: nick, password }));
  } catch (error) {
    yield put(USERS_SIGNUP_FAILURE(error));
    notificationManager.show({
      text: 'Unable to connect to server',
      layout: 'topRight',
      type: 'error',
    });
  }
}


export function* logout() {
  localStorageManager.remove(TOKEN);
  yield put(USERS_TOKEN_REMOVE());
  yield put(push('/'));
}

export function* loadToken() {
  const token = localStorageManager.get(TOKEN);
  if (token) {
    yield put(USERS_TOKEN_SET({ token }));
  }
}

export default function* watcher() {
  yield all([
    takeLatest(USERS_LOGIN_REQUEST, login),
    takeLatest(USERS_LOGOUT, logout),
    takeLatest(USERS_SIGNUP_REQUEST, register),
    takeLatest(USERS_TOKEN_LOAD, loadToken),
  ]);
}
