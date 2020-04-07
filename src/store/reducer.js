/*
 * @Description:
 * @version:
 * @Author: Do not edit
 * @Date: 2020-03-29 16:43:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-03-29 16:57:25
 */

//reduce 可以接受state 但不可以修改state
//纯函数指的是 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
import {CHNAGE_INPUT_VALUE, HANDLE_ADD_ITEM, HANDLE_DELETE_ITEM,INIT_LIST_ITEM} from './actionTypes';
const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  if(action.type === CHNAGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === HANDLE_ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === HANDLE_DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(newState.index, 1);
    return newState;
  }
  if(action.type === INIT_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list;
    return newState;
  }
  return state;
}