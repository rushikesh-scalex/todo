import React from 'react'
import { useSelector } from 'react-redux'
import DeleteAll from './DeleteAll';
const headStyle = {
    width:"90%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom:"1%"
}
const ListHeader = () => {
    const list = useSelector(state => state.todoReducer.list);
    return (
        <>
            <div style={headStyle}>
                <div></div>
                <div>
                    <h3>List Goes Here</h3>
                </div>
                <div>
                    {list.length > 0 ? <DeleteAll /> : null}
                </div>
            </div>
        </>
    )
}

export default ListHeader;