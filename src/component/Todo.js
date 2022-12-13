import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/Actions';

const Todo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoReducer.list);
    // console.log("list is = "+list.length);


    const display = list.map((element)=>{
        // console.log(element)
        return(
            <>
                <div key={element.id}>
                <h1>{element.data}</h1>
                <i className="fa fa-trash" onClick={()=>{    
                dispatch(deleteTodo(element.id))
                }}></i>
                <i class="fa fa-refresh"></i>
                </div>
            </>
        )
    })
    return (
        <>
            <div>
                <div><center>Save your Todos here...</center></div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "100px", border: "" }}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder='📝 Write your ToDo here..' />
                    <i
                        onClick={() => {
                            dispatch(addTodo(input))
                            setInput('')
                        }
                        }
                        className="fa fa-plus add-btn" style={{ cursor: "pointer" }}></i>
                </div>
                <div>
                <h1>Testing</h1>
                        {display}
                        
                    
                </div>
                <div><button onClick={()=>{
                    dispatch(removeTodo())
                }}>Delete All</button></div>

            </div>
        </>
    )
}

export default Todo;