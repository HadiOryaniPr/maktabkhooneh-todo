import React from "react";
import TodoItem from "./TodoItem";
import "./styles/TodoList.css";

const TodoList = ({
  tasks,
  filter,
  onToggle,
  onDelete,
  onFilterChange,
  onDeleteCompleted,
}) => {
  const filteredTasks =
    filter === "completed"
      ? tasks.filter((task) => task.isCompleted)
      : filter === "incomplete"
      ? tasks.filter((task) => !task.isCompleted)
      : tasks;

  return (
    <div>
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          isCompleted={task.isCompleted}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      <div className="buttonContainer">
        <button onClick={() => onFilterChange("all")}>All</button>
        <button onClick={() => onFilterChange("incomplete")}>Active</button>
        <button onClick={() => onFilterChange("completed")}>Completed</button>
        <button onClick={onDeleteCompleted}>Delete Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
