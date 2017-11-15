import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';

import * as action from '../actions';
import api from '../service/api'

export function* helloSaga() {
	yield delay(3000);
	yield put(action.user.hideFavoriteList());
  }

export function* watchIncrementAsync() {
	yield takeEvery(action.user.showFavoriteList, helloSaga);
}

// AUTH


export function* workerFetchLogin() {
	yield takeEvery(action.auth.logOut, api.fetchLogOut);
}

export function* fetchSignUp() {
	yield takeLatest(action.auth.signUp.request.pending, api.fetchSignUp)
}

export function* fetchLogin() {
	yield takeLatest(action.auth.login.request.pending, api.fetchLogin)
}


export default function* rootSaga() {
	yield all([
		watchIncrementAsync(),
		// Auth
		workerFetchLogin(),
		fetchSignUp(),
		fetchLogin(),
	])
  }
