import { useSelector } from "react-redux";
import Input from "../component/Input";
import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL,
  SHOW_MODAL,
  CLOSE_MODAL,
  UPDATE_TODO,
  SET_INPUT,
} from "./ActionTypes";

const initialData = {
  list: [],
  editObj:null,
  modal: false,
  input:'',
  error:false
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case DELETE_TODO:
      const newList = state.list.filter((element) => element.id != action.id);
      return {
        ...state,
        list: newList,
      };
    case UPDATE_TODO:
      const userData = state.list.find((ele) => ele.id === action.id);
      state.editObj=userData;
      return { ...state };
    case CLEAR_ALL:
      return {
        list: [],
      };
    case SET_INPUT:
        const {inputString} = action.payload;
        return {...state.input,input:action.inputString} 
    case SHOW_MODAL:
      return { ...state, modal: true };
    case CLOSE_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
};
export default todoReducer;
