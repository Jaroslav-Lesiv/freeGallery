import { /* applyMiddleware , compose, Middleware, */ createStore } from 'redux'

// Saga
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from '../sagas'


import reducers from '../reducers'
import initialState from './initialState'

// const sagaMiddleware = createSagaMiddleware()

// function getMiddleware(): Middleware[] {
// 	let middleware = [sagaMiddleware]
// 	if (__RAVEN__) {
// 		const { RavenMiddleware } = require('../middlewares')
// 		middleware = [RavenMiddleware, ...middleware]
// 	}
//
// 	return middleware
// }

const	store = createStore(
	reducers,
	initialState,
)

if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers')
		store.replaceReducer(nextRootReducer)
	})
}

// sagaMiddleware.run(rootSaga)

export default store
