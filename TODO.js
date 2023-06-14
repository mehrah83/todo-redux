import React, { useState } from "react";
import "./TODO.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from "../actions/TodoAction";
const TODO = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container section mt-20">
        <h2 className="text-center">TODO APP</h2>
        <h4 className="text-center text-green">Add Your List Here 👇👇</h4>
        <div className="addItems">
          <input
            type="text"
            className="form-control"
            placeholder="Enter here ✍"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="fa fa-plus add-btn add-btn-icon"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          ></i>
        </div>
        <div className="showItems">
          {list.map((currElem) => {
            return (
              <>
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => dispatch(deleteTodo(currElem.id))}
                    ></i>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={() => dispatch(removeAllTodo())}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TODO;
