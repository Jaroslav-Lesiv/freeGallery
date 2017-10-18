import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'

// import { routerReducer as router } from 'react-router-redux'

export default combineReducers({
	user,
	auth
})
