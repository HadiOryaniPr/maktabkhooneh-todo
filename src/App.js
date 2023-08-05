import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Snowfall from 'react-snowfall';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    if (newTaskText.trim() === "") {
      return;
    }
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTaskText, isCompleted: false },
    ]);
    setNewTaskText("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const deleteCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Snowfall color="#6E828A" snowflakeCount={100} />
      <h1 className="appTitle">Todo App</h1>
      <input
        className="input"
        type="text"
        placeholder="Add new task..."
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <TodoList
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onFilterChange={setFilter}
        onDeleteCompleted={deleteCompletedTasks}
      />
      <p className="totalTaksTitle">
        Total Tasks: {tasks.filter((task) => !task.isCompleted).length}
      </p>
    </div>
  );
  
};

export default App;
