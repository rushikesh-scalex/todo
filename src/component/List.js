import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/Actions";
import "../Styles/List.css";
const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  const display = list.map((element) => {
    return (
      <div key={element.id} className="listItem">
        <div>{element.data}</div>
        <div className="icons">
          <span>
            <i
              title="Delete"
              onClick={() => dispatch(deleteTodo(element.id))}
              className="fa fa-trash"
            ></i>
          </span>
          <span>
            <i
              onClick={() => dispatch(updateTodo(element.id))}
              title="edit"
              className="fa-solid fa-pen-to-square"
            ></i>
          </span>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="mainList">
        {display}

        <div className="listItem">
          <div>Undeletable test Case </div>
          <div className="icons">
            <span>
              <i title="Delete" className="fa fa-trash"></i>
            </span>
            <span>
              <i title="edit" className="fa-solid fa-pen-to-square"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
