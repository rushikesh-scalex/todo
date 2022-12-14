import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/Actions';
import "../Styles/List.css"
const DeleteAll = () => {
    const dispatch = useDispatch();
    
  return (
    <>
        <div title='Delete all todos'
        onClick={()=>dispatch(removeTodo())}
        className='deleteDiv'>
        Delete All
        </div>
    </>
  )
}

export default DeleteAll;