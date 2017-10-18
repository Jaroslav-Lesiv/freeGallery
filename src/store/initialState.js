export default {
	user: {
		isLogin: false,
    userSettings: {},
		Favorite: [],
		isShow: false,
		isShowMiniFavorite: false,
  },
	auth: {
		modal: {
			isShowLogInModal: false,
			isShowModal: false,
			isShowSignUpModal: false
		},
		login: {
			name: null,
			pass: null
		},
		sign: {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			passConfirm: null,
			remember: false,
			agree: false
		}
	}
}
