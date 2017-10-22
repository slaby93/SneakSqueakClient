import { createAction, handleActions } from 'redux-actions'

export const FETCH_USERS_REQUEST = createAction('FETCH_USERS/REQUEST')
export const FETCH_USERS_SUCCESS = createAction('FETCH_USERS/SUCCESS')
export const FETCH_USERS_FAILURE = createAction('FETCH_USERS/FAILURE')

const defaultState = {
  isRequesting: false
}

const reducer = handleActions({
  [FETCH_USERS_REQUEST]: (state, action) => {
    return Object.assign({}, state, {
      isRequesting: true,
      users: null,
      error: null
    })
  },
  [FETCH_USERS_SUCCESS]: (state, { payload: { users } }) => {
    return Object.assign({}, state, {
      isRequesting: false,
      users,
      error: null
    })
  },
  [FETCH_USERS_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      isRequesting: false,
      users: null,
      error: 'Error during data fetch'
    })
  }
}, defaultState)

export default reducer
