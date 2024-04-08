import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ol>
  );
}
export default TodoList;
