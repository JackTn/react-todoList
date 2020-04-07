/*
 * @Description:
 * @version:
 * @Author: Do not edit
 * @Date: 2020-03-29 15:34:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-03-31 04:47:39
 */
import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {handleInputvalAction, handleAddItemAction, handleDeleteItemAction, handleInitListItem} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputval = this.handleInputval.bind(this);
    this.handleStore = this.handleStore.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStore);
  }
  render() {
    return (
     <TodoListUI 
     inputValue = {this.state.inputValue}
     handleInputval = {this.handleInputval}
     handleAddItem = {this.handleAddItem}
     handleDeleteItem = {this.handleDeleteItem}
     list = {this.state.list}
     />
    )
  }
  componentDidMount () {
      axios.get('http://localhost.charlesproxy.com:3000/list.json').then((res)=> {
          const action = handleInitListItem(res.data);
          store.dispatch(action);
      })
  }

  handleInputval(e){
    const action = handleInputvalAction(e.target.value)
    store.dispatch(action)
  }
  handleAddItem() {
    const action = handleAddItemAction()
    store.dispatch(action)
  }
  
  handleDeleteItem(index) {
    const action = handleDeleteItemAction(index)
    store.dispatch(action)
  }
  handleStore () {
    this.setState(store.getState());
  }
}

export default TodoList