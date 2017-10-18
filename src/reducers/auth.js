import { handleActions } from 'redux-actions';
import { auth } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[auth.modal.showLogInModal]: store =>
		({ ...store, modal: { ...store.modal, isShowLogInModal: true, isShowModal: true, isShowSignUpModal: false } }),
	[auth.modal.showSignUpModal]: store =>
		({ ...store, modal: { ...store.modal , isShowLogInModal: false, isShowModal: true, isShowSignUpModal: true } }),
	[auth.modal.hideModal]: store =>
		({ ...store, modal: { ...store.modal , isShowLogInModal: false, isShowModal: false, isShowSignUpModal: false } }),
	[auth.login.name]: (store, { payload }) =>
		({ ...store, login: { ...store.login, name: payload } }),
	[auth.login.pass]: (store, { payload }) =>
		({ ...store, login: { ...store.login , pass: payload } }),
	[auth.signUp.firstName]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , firstName: payload } }),
	[auth.login.lastName]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , lastName: payload } }),
	[auth.signUp.email]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , email: payload } }),
	[auth.signUp.password]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , password: payload } }),
	[auth.signUp.passwordConfirm]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , passConfirm: payload } }),
	[auth.signUp.rememberMe]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , remember: payload } }),
	[auth.signUp.agree]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign , agree: payload } }),

}, initialState.auth)
