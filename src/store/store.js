import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reducers from './../ducks';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas';
import { combineReducers } from 'redux-immutable';

export const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();
const routerMiddlewareInstance = routerMiddleware(history);

const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
});

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(routerMiddlewareInstance, sagaMiddleware));
const store = createStore(combinedReducers, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
