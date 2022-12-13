import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Actions'
import "../Styles/Input.css";

const Input = () => {
    const [input,setInput] = useState('');
    const [error,setError] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{

        e.preventDefault();
    
        if(input == ''){
            setError(true);
        }else{
            setError(false);
            dispatch(addTodo(input));
            setInput('');
        }
        console.log("Hello ",input);

    }
  return (
    <>
        <div className="mainInput">
            <div className='form'>

            <input value={input}
            onChange={(e)=>setInput(e.target.value)}
             type="text" placeholder='📝 Add items here...' />
             
             
             <i onClick={handleSubmit}  className='fa fa-plus add-btn submit'></i>
            
             <i onClick={()=>setInput('')} className="fa-solid fa-eraser eraser"></i>
            </div>
            <div>
            {error?<center>
                <span id='error'>Enter todo to add </span>
            </center>:null}
            </div>
            
        </div>
    </>
  )
}

export default Input;