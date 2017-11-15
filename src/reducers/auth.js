import { handleActions } from 'redux-actions';
import { auth } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[auth.modal.showLogInModal]: store =>
		({ ...store, modal: { ...store.modal, isShowLogInModal: true, isShowSignUpModal: false } }),
	[auth.modal.showSignUpModal]: store =>
		({ ...store, modal: { ...store.modal , isShowLogInModal: false, isShowSignUpModal: true } }),
	[auth.modal.hideModal]: store =>
		({ ...store, modal: { ...store.modal , isShowLogInModal: false, isShowSignUpModal: false } }),	

	// LOGIN
	[auth.login.request.success]: store =>
		({ ...store,  })
}, initialState.auth)
