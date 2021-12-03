import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddNewTask from "../components/task/AddNewTask";
import TodoContext from "../context/todoContext";
import Todos from "../components/task/Todos";

const App = () => {
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
      <AddNewTask />
      <div className="d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <Todos />
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
};
export default App;
