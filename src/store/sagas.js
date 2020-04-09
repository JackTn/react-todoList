import axios from 'axios'
import {takeEvery, put} from 'redux-saga/effects'
import {GET_LIST_ITEM} from './actionTypes'
import {handleInitListItem} from './actionCreators'

function* fetchUser() {
   try {
    const res = yield axios.get('http://localhost.charlesproxy.com:3000/list.json');
    const action = handleInitListItem(res.data)
    yield put(action);
   } catch(e) {
    console.log(e)
   } 
}

function* todoListSagas() {
    yield takeEvery(GET_LIST_ITEM, fetchUser);
}

export default todoListSagas;