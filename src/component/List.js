import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/Actions';
import "../Styles/List.css"
import DeleteAll from './DeleteAll';
const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoReducer.list);
    const display = list.map((element)=>{
        return(
            <div className='listItem' >
                <div>{element.data}</div>
                <div className='icons'>
                <span><i onClick={()=>dispatch(deleteTodo(element.id))} className='fa fa-trash'></i></span>
                <span>
                    <i className='fa fa-refresh'></i>
                </span>
                </div>
            </div>
        )
    })
  return (
    <>
        <div className="mainList">

            {display}

            <div className='listItem' >
                <div>Undeletable test Case </div>
                <div className='icons'>
                <span><i className='fa fa-trash'></i></span>
                <span>
                    <i className='fa fa-refresh'></i>
                </span>
                </div>
            </div>
            {list.length>0?<DeleteAll/>:null}
        </div>
    </>
  )
}

export default List;