import { applyMiddleware, /*  , compose, Middleware, */ createStore } from 'redux'
import logger from 'redux-logger'
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

const ping = store => next => action => {
	console.log(`Тип события: ${action.type}, дополнительные данные события: ${action.payload}`)
	return next(action)
  }
// const logger = createLogger()
const	store = createStore(
	reducers,
	initialState,
	applyMiddleware(logger)
)

if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers')
		store.replaceReducer(nextRootReducer)
	})
}

// sagaMiddleware.run(rootSaga)

export default store
