import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, task: "todo1", isFinished: false },
    // { id: 2, task: "todo2", isFinished: false },
    // { id: 3, task: "todo3", isFinished: false },
  ]);

  function addTask(newTask) {
    if (!newTask) return;
    const newTodo = { id: uuid(), task: newTask, isFinished: false };
    setTodos([...todos, newTodo]);
  }

  function deleteTask(id) {
    const updateTask = todos.filter((todo) => todo.id !== id);
    setTodos(updateTask);
  }

  return (
    <div>
      <Header />
      <Input addTask={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
