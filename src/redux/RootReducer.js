import { combineReducers } from "redux";
import  todoReducer  from "./Reducers";

const RootReducer = combineReducers({todoReducer});

export default RootReducer;