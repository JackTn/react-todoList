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
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger({collapsed: true});

const middleware = [thunk, loggerMiddleware];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(reducer, enhancer);

export default store