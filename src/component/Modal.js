import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../redux/Actions';

const ModalStyle = {
    position: "fixed",
    top: "20%",
    left: "40%",
    zIndex: 1000,
    backgroundColor: "aqua",
    width: "20%",
    height: "10vh"
}
const backLayout = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.7)"
}

const Modal = () => {
    const modalStatus = useSelector(state => state.todoReducer.modal);
    // useEffect(console.log("in Modal ",modalStatus),[modalStatus]);
    if(modalStatus){
        console.log('In Modal',modalStatus);
        return(
            <div style={backLayout}>
            <div style={ModalStyle}>Modal Hello </div>

            </div>
        )
    }
    return(
        <div>
            <h2>Hello World</h2>
        </div>
    )
}

export default Modal;