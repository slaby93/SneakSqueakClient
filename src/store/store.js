import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import reducers from './../ducks'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../sagas'

export const sagaMiddleware = createSagaMiddleware()
const combinedReducers = combineReducers(reducers)

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(hashHistory))
)
const store = createStore(combinedReducers, enhancer)
sagaMiddleware.run(rootSaga)
export default store
