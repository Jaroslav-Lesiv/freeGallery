import { handleActions } from 'redux-actions';
import { user, auth } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[user.showUserModal]: (store, { payload }) =>
		({ ...store, isShowUserModal: true }),
	[user.hideUserModal]: (store, { payload }) =>
		({ ...store, isShowUserModal: false }),
	[user.setSettings]: (store, { payload }) =>
		({ ...store, userSettings: payload }),
	[user.addToFavorite]: (store, { payload }) =>
		({ ...store, Favorite: [...store.Favorite, payload] }),
	[user.showInform]: store =>
		({ ...store, isShow: !store.isShow }),
	[user.hideFavoriteList]: store =>
		({ ...store, isShowMiniFavorite: false }),
	[user.showFavoriteList]: store =>
		({ ...store, isShowMiniFavorite: true }),
	[user.showUserSettings]: store =>
		({ ...store, isShowUserSettings: true, isShowUserModal: false }),
	
	[auth.logOut]: store =>
		({ ...store, isLogin: false }),

	[auth.login.request.success]: (store, { payload }) =>
		({ ...store, isLogin: true, user: payload })
}, initialState.user)
