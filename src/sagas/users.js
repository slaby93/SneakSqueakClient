
/* global fetch */
import { takeLatest, put, all } from 'redux-saga/effects'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './../ducks/users'

const fakeTimeout = (time = 500, output = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      output ? resolve() : reject()
    }, time)
  })
}

export function * test () {
  try {
    yield fakeTimeout(1000)
    const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      mode: 'no-cors'
    })
    const users = yield response.json()
    yield put(FETCH_USERS_SUCCESS({ users }))
  } catch (error) {
    yield put(FETCH_USERS_FAILURE(error))
  }
}

export default function * watcher () {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, test)
  ])
}
