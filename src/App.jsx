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

  //新規To-Doを追加する処理。
  function addTask(newTask) {
    if (!newTask) return;
    const newTodo = { id: uuid(), task: newTask, isFinished: false };
    setTodos([...todos, newTodo]);
  }

  //削除ボタン。
  function deleteTask(id) {
    const updateTask = todos.filter((todo) => todo.id !== id);
    setTodos(updateTask);
  }

  function upTask(todos) {
    const updateTasks = ([...todos][
      (updateTasks[todos.id], updateTasks[todos.id - 1])
    ] = [updateTasks[todos.id - 1], updateTasks[todos.id]]);
  }

  return (
    <div>
      <Header />
      <Input addTask={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} upTask={upTask} />
    </div>
  );
}

export default App;
