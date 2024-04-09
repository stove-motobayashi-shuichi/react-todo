import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTask, upTask }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          upTask={upTask}
        />
      ))}
    </ol>
  );
}
export default TodoList;
