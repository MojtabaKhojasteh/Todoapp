import React, { useContext } from "react";
import TodoContext from "../../context/todoContext";

const AddNewTask = () => {
  const context = useContext(TodoContext);
  const { todo, handleTodoInput, handleCreateNewTodo } = context;

  return (
    <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
      <form
        className="form-inline justify-content-center "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control rounded"
            placeholder="اضافه کردن کار جدید"
            value={todo}
            onChange={handleTodoInput}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-plus-square text-light"
              onClick={handleCreateNewTodo}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
