import React from "react";
import Todo from "./Todo";

function TodoList({
  todos,
  deleteTask,
  upTask,
  downTask,
  togglesFinished,
}) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTask={deleteTask}
          upTask={upTask}
          downTask={downTask}
          togglesFinished={togglesFinished}
        />
      ))}
    </ol>
  );
}
export default TodoList;
