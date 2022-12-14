import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../redux/Actions';
import Header from './Header';
import Input from './Input';
import List from './List';
import ListHeader from './ListHeader';
import Modal from './Modal';
import Space from './Space';

const Todo = () => {
const dispatch = useDispatch();
const modalStatus = useSelector(state=>state.todoReducer.modal);
    return (
        <>
            <div>
            
                <Header />
                <Input />
                <Space/>
                <ListHeader/>
                <List />
                {/* <Modal/>
                <button onClick={()=>{dispatch(showModal())
                console.log(modalStatus)
                }}>Show Modal</button> */}
            </div>
        </>
    )
}

export default Todo;