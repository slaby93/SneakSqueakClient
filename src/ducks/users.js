import { createAction, handleActions } from 'redux-actions'
import {fromJS} from 'immutable'
export const FETCH_USERS_REQUEST = createAction('FETCH_USERS/REQUEST')
export const FETCH_USERS_SUCCESS = createAction('FETCH_USERS/SUCCESS')
export const FETCH_USERS_FAILURE = createAction('FETCH_USERS/FAILURE')

const defaultState = fromJS({
  isRequesting: false
})

const reducer = handleActions({
  [FETCH_USERS_REQUEST]: (state, action) => {
    return state.merge({
      isRequesting: true,
      users: null,
      error: null
    })
  },
  [FETCH_USERS_SUCCESS]: (state, { payload: { users } }) => {
    return state.merge({
      isRequesting: false,
      users,
      error: null
    })
  },
  [FETCH_USERS_FAILURE]: (state, action) => {
    return state.merge({
      isRequesting: false,
      users: null,
      error: 'Error during data fetch'
    })
  }
}, defaultState)

export default reducer
