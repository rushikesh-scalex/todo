import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/Actions';
import Header from './Header';
import Input from './Input';
import List from './List';

const Todo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoReducer.list);
    // console.log("list is = "+list.length);


    
    return (
        <>
            <div>
                <Header />
                <Input />
                <List/>

            </div>
        </>
    )
}

export default Todo;