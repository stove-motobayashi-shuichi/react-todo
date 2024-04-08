import React from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <li>
        {todo.task} {todo.isFinished ? "TRUE" : "FAULS"}
        <buttonc className="delete-button">削除</buttonc>
      </li>
    </>
  );
};

export default Todo;
