import React from "react";

const Todo = ({ todo, deleteTask, upTask, downTask }) => {
  return (
    <>
      <li>
        {todo.task} {todo.isFinished ? "TRUE" : "FAULS"}
        <button className="delete-button" onClick={() => deleteTask(todo.id)}>
          削除
        </button>
        <button className="up-button" onClick={() => upTask(todo.id)}>
          UP
        </button>
        <button className="down-button" onClick={() => downTask(todo.id)}>
          DOWN
        </button>
      </li>
    </>
  );
};

export default Todo;
