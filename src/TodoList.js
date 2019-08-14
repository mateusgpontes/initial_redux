import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodoActions } from "./actions/todos";

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const [stateTodo, setStateTodo] = useState("");

  function addTodo(string) {
    dispatch(addTodoActions(string));
  }

  return (
    <div>
      {todos.map((todos, i) => {
        return <li key={i}>{todos.text}</li>;
      })}
      <input
        type="text"
        onChange={e => {
          setStateTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(stateTodo);
        }}
      >
        Adiciona list
      </button>
    </div>
  );
};

export default TodoList;
