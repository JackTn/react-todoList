import React from 'react'
import { Input, Button, List} from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{ marginLeft: "20px" }}>
        <Input 
          value={props.inputValue} 
          placeholder="input info" 
          style={{ width: '300px', marginTop: '40px' }} 
          onChange={props.handleInputval}
          />
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={props.handleAddItem}>ADD</Button>
        <List
          bordered
          style={{ width: "300px", marginTop: "10px" }}
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={()=> {props.handleDeleteItem(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
}

export default TodoListUI;