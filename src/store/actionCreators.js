import {CHNAGE_INPUT_VALUE, HANDLE_ADD_ITEM, HANDLE_DELETE_ITEM, INIT_LIST_ITEM, GET_LIST_ITEM} from './actionTypes'

export const handleInputvalAction = (value) => ({
    type: CHNAGE_INPUT_VALUE,
    value
})
export const handleAddItemAction = () => ({
    type: HANDLE_ADD_ITEM
})
export const handleDeleteItemAction = (value) => ({
    type: HANDLE_DELETE_ITEM,
    value
})
export const handleInitListItem = (list) => ({
    type: INIT_LIST_ITEM,
    list
})

export const getTodoListItem = () => ({
    type: GET_LIST_ITEM
})