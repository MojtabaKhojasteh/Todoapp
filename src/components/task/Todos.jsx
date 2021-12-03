import React, { useContext } from "react";
import TodoContext from "../../context/todoContext";
import Todo from "./Todo";

const Todos = () => {
  const context = useContext(TodoContext);
  const { todos, handleDeleteTodo, handleCompletedTodo } = context;

  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map((todoItem) => (
          <li key={todoItem.id} className="list-group-item">
            <Todo
              text={todoItem.text}
              isCompleted={todoItem.completed}
              deleted={() => handleDeleteTodo(todoItem.id)}
              completed={() => handleCompletedTodo(todoItem.id)}
            />
          </li>
        ))
      ) : (
        <div className="alert alert-light mt-3 w-75 mx-auto">
          <p className="text-center">هیچ کاری یرای امروز ثبت نشده</p>
        </div>
      )}
    </ul>
  );
};

export default Todos;
