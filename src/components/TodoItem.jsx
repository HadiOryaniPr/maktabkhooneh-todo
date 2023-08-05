import React from 'react';
import './styles/TodoItems.css';

const TodoItem = ({ task, isCompleted, onToggle, onDelete }) => {
  return (
    <div className='tasksContainer'>
      <input type="checkbox" checked={isCompleted} onChange={() => onToggle(task.id)} />
      <span className='taskName' style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task.text}</span>
      <button className='deleteTask' onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;