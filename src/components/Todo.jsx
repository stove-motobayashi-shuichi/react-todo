import React from "react";

function onDeleteTask(index) {
  const addtodo = todos.filter((index) => index !== todos);
  setTodos(addtodo);
}

const Todo = ({ todo }) => {
  return (
    <>
      <li>
        {todo.task} {todo.isFinished ? "TRUE" : "FAULS"}
        <buttonc className="delete-button" onClick={() => onDeleteTask(index)}>
          削除
        </buttonc>
      </li>
    </>
  );
};

export default Todo;
