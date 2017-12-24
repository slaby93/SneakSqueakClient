import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

export const USERS_LOGIN_REQUEST = createAction('USER/LOGIN/REQUEST');
export const USERS_LOGIN_SUCCESS = createAction('USER/LOGIN/SUCCESS');
export const USERS_LOGIN_FAILURE = createAction('USER/LOGIN/FAILURE');

export const USERS_SIGNUP_REQUEST = createAction('USER/SIGNUP/REQUEST');
export const USERS_SIGNUP_SUCCESS = createAction('USER/SIGNUP/SUCCESS');
export const USERS_SIGNUP_FAILURE = createAction('USER/SIGNUP/FAILURE');

const defaultState = fromJS({
  isLogging: false,
  isSigningUp: false,
  profile: null,
  token: null,
  error: null,
});

const reducer = handleActions({
  [USERS_LOGIN_REQUEST]: (state) => {
    return state.merge({
      isLogging: true,
      profile: null,
      error: null,
    });
  },
  [USERS_LOGIN_SUCCESS]: (state, { payload: { token } }) => {
    return state.merge({
      isLogging: false,
      token,
      error: null,
    });
  },
  [USERS_LOGIN_FAILURE]: (state) => {
    return state.merge({
      isLogging: false,
      profile: null,
      error: 'Error during logging',
    });
  },
  [USERS_SIGNUP_REQUEST]: (state) => {
    return state.merge({
      isSigningUp: true,
      profile: null,
      error: null,
    });
  },
  [USERS_SIGNUP_SUCCESS]: (state, { payload: { profile } }) => {
    return state.merge({
      isSigningUp: false,
      profile,
      error: null,
    });
  },
  [USERS_SIGNUP_FAILURE]: (state) => {
    return state.merge({
      isSigningUp: false,
      profile: null,
      error: 'Error during logging',
    });
  },
}, defaultState);

export default reducer;
