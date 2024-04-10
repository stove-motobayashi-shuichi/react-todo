import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTask, upTask, downTask }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTask={deleteTask}
          upTask={upTask}
          downTask={downTask}
        />
      ))}
    </ol>
  );
}
export default TodoList;
