import { delay } from 'redux-saga'
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects'

import * as action from '../actions'
// import api from '../service/api'

export function* helloSaga() {
	yield delay(3000)
	yield put(action.user.hideFavoriteList())
  }

export function* watchIncrementAsync() {
	yield takeEvery(action.user.showFavoriteList, helloSaga)
}

// AUTH

export function* fetchLogin() {
	yield takeEvery(action.auth.request.pending, helloSaga)
}



export default function* rootSaga() {
	yield all([
		watchIncrementAsync(),
		// Auth
		fetchLogin()
	])
  }
