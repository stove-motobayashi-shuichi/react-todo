import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTask, upTask }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          todos={todos}
          key={todo.id}
          deleteTask={deleteTask}
          upTask={upTask}
        />
      ))}
    </ol>
  );
}
export default TodoList;
