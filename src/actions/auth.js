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
      NAME: payload => payload,
      PASS: payload => payload
    },
    SIGN_UP: {
      FIRST_NAME: payload => payload,
      LAST_NAME: payload => payload,
      EMAIL: payload => payload,
      PASSWORD: payload => payload,
      PASSWORD_CONFIRM: payload => payload,
      REMEMBER_ME: payload => payload,
      AGREE: payload => payload,
    }
  }
})
