import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </li>
  );
};

export default TodoItem;
