import { ADD_TODO, DELETE_TODO, CLEAR_ALL, CLOSE_MODAL, SHOW_MODAL, UPDATE_TODO, SET_INPUT, SET_ERROR } from "./ActionTypes"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),//SEPERATE IN UTILS FILES GET UUID
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id

    }
};
export const updateTodo = (id)=>{
    return{
        type:UPDATE_TODO,
        id
    }
} 
export const removeTodo = () => {
    return {
        type: CLEAR_ALL
    }
};
export const setInput = (inputString) => {
    return {
        type: SET_INPUT,
        payload:inputString
    }
};
export const setError = (value) =>{
    return{
        type:SET_ERROR,
        payload : value
    }
}

export const hideModal = () =>{
    return{
        type:CLOSE_MODAL
    }
}
export const showModal = () =>{
    return{
        type:SHOW_MODAL
    }
}