
/* global fetch */
import { takeLatest, put, all } from 'redux-saga/effects';
import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILURE, USERS_SIGNUP_REQUEST, USERS_SIGNUP_SUCCESS, USERS_SIGNUP_FAILURE } from './../ducks/user';

const fakeTimeout = (time = 500, output = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      output ? resolve() : reject();
    }, time);
  });
};

export function* login() {
  try {
    yield fakeTimeout(1000);
    const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    const users = yield response.json();
    yield put(USERS_LOGIN_SUCCESS({ users }));
  } catch (error) {
    yield put(USERS_LOGIN_FAILURE(error));
  }
}

export function* register() {
  try {
    yield fakeTimeout(1000);
    const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
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
