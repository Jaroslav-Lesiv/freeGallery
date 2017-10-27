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
	},
	gallery: {
		result: [{name: 'images1', src: './images/standart-img.jpg', id: 0},
					{name: 'images2', src: './images/1x1.png', id: 1},
					{name: 'images3', src: './images/standart-img.jpg', id: 2},
					{name: 'images4', id: 3},
					{ id: 4}
				,],
	}
}
