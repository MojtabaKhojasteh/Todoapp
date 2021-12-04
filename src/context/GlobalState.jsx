import React, { useState } from "react";
import TodoContext from "./todoContext";
import { v4 as uuidv4 } from "uuid";

const GlobalState = (props) => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");

  const handleCreateNewTodo = () => {
    const newTodos = [...getTodos];
    const task = {
      id: uuidv4(),
      text: getTodo,
      completed: false,
    };

    if (getTodo !== "" && getTodo !== " ") {
      newTodos.push(task);
      setTodos(newTodos);
      setTodo("");
    }
  };

  const handleCompletedTodo = (id) => {
    const newTodos = [...getTodos];
    const todoIndex = newTodos.findIndex((t) => t.id === id);
    const todo = newTodos[todoIndex];
    todo.completed = !todo.completed;
    newTodos[todoIndex] = todo;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = [...getTodos];
    const filteredTodos = newTodos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        handleCreateNewTodo: handleCreateNewTodo,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleTodoInput: handleTodoInput,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
