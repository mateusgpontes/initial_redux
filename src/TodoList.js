import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodoActions } from "./actions/todos";

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const [stateTodo, setStateTodo] = useState("");
  const [auxList] = useState([]);

  function checkList(state, list, string) {
    for (let i = 0; i < list.length; i++) {
      if (state === list[i]) {
        return alert(`Você já adicionou ${state} à lista.`);
      }
    }
    return [dispatch(addTodoActions(string)), auxList.push(stateTodo)];
  }

  function addTodo(string) {
    if (stateTodo.length > 0) {
      checkList(stateTodo, auxList, string);
    } else {
      alert(`Escreva no campo "Adicionar à lista"`);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Adicionar à lista"
        onChange={e => {
          setStateTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(stateTodo);
        }}
      >
        Adicionar à lista
      </button>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
