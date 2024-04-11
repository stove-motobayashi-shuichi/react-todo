import React from "react";

const Todo = ({ todo, deleteTask, upTask, downTask, togglesFinished }) => {
  return (
    <>
      <li>
        {todo.task} {todo.isFinished}
        <button
          key="change"
          className="change-button"
          onClicke={() => togglesFinished(todo.id)}
        >
          切り替え
        </button>
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
