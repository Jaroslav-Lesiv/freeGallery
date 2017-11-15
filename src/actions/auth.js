import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { auth } = createActions({
  AUTH: {
    MODAL: {
      SHOW_LOG_IN_MODAL: payload => payload,
      SHOW_SIGN_UP_MODAL: payload => payload,
      HIDE_MODAL: payload => payload,
    },
    LOGIN: {
      REQUEST,
    },
    SIGN_UP: {
      REQUEST,
    },
    LOG_OUT: payload => payload

  }
})
