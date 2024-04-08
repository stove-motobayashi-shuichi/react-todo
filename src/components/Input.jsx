import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [newTodo, setNewTodo] = useState("");

  //フォームに入力したら随時文字が反映される処理
  function inputChange(event) {
    setNewTodo(event.target.value);
  }

  //空入力の時はtodo追加しない処理
  function handleClick() {
    addTask(newTodo);
    setNewTodo("");
  }

  return (
    <div>
      <input
        type="text"
        onChange={inputChange}
        placeholder="Enter a Task..."
        value={newTodo}
      />
      <button className="add-button" onClick={handleClick}>
        Todoを追加
      </button>
    </div>
  );
};

export default Input;
