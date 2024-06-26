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

  //UPボタン。
  function upTask(id) {
    const updateTasks = [...todos];
    // トップボタンでエラーが起きる処理の別解。const indexの処理をさせる手間がない。
    // if(updateTasks[0].id === id) return;
    const index = updateTasks.findIndex((todo) => todo.id === id);
    if (index === 0) return;
    [updateTasks[index], updateTasks[index - 1]] = [
      updateTasks[index - 1],
      updateTasks[index],
    ];
    setTodos(updateTasks);
  }

  //Downボタン。
  function downTask(id) {
    const updateTasks = [...todos];
    if (updateTasks[updateTasks.length - 1].id === id) return;
    const index = updateTasks.findIndex((todo) => todo.id === id);
    [updateTasks[index], updateTasks[index + 1]] = [
      updateTasks[index + 1],
      updateTasks[index],
    ];
    setTodos(updateTasks);
  }

  //Todoが完了したかしてないかを切り替える処理。
  //id:切り替えたいTodoのid
  function togglesFinished(id) {
    //todosの中にあるtodoを分割して、そのidによって処理する方法を決める
    //もし、切り替えたいTodoのidが、map処理で分けたidと違えばreturnとして何もしない。
    //もし、切り替えたいTodoのidが、map処理で分けたidと同じならば、isFinishedの表示を切り替える。
    const updateTasks = todos.map((todo) => {
      if (todo.id === id)
        return { id: todo.id, task: todo.task, isFinished: !todo.isFinished };
      return todo;
    });
    //この関数内で行われた処理をsetTodosとして更新する。
    setTodos(updateTasks);
  }

  return (
    <div>
      <Header />
      <Input addTask={addTask} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        upTask={upTask}
        downTask={downTask}
        togglesFinished={togglesFinished}
      />
    </div>
  );
}

export default App;
