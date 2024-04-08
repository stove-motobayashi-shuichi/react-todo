import React from "react";

const Todo = ({ todo, deleteTask }) => {
  return (
    <>
      <li>
        {todo.task} {todo.isFinished ? "TRUE" : "FAULS"}
        <button className="delete-button" >削除</button>
      </li>
    </>
  );
};

export default Todo;
