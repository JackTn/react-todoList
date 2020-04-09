/*
 * @Description:
 * @version:
 * @Author: Do not edit
 * @Date: 2020-03-29 16:43:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-03-29 16:56:18
 */
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import todoListSagas from './sagas'

const loggerMiddleware = createLogger({collapsed: true});
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, loggerMiddleware];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoListSagas);


export default store