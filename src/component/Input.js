import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/Actions";
import "../Styles/Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { editObj } = useSelector((state) => state.todoReducer);
  useEffect(() => setInput(editObj?.data), [editObj]);
  const handleSubmit = () => {
    if (!input) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className="mainInput">
        <div className="form">
          <input
            value={input}
            title="Add ToDo"
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            type="text"
            placeholder="📝 Add items here..."
          />
          {editObj?  (
            <i
               onClick={handleSubmit}
              className="fa-solid fa-pen-to-square add-btn submit"
            ></i>
          ) : (
            <i
              title="Add to List"
              onClick={handleSubmit}
              className="fa fa-plus add-btn submit"
            ></i>
          )}
          <i
            title="Erase Input Field"
            onClick={() => setInput("")}
            className="fa-solid fa-eraser eraser"
          ></i>
        </div>
        <div>
          {error ? (
            <center>
              <span id="error">Enter todo to add </span>
            </center>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Input;
