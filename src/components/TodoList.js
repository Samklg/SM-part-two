import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem = { title: newTodo };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  const handleDeleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  const handleSearch = () => {
    fetch(`http://localhost:3001/todos?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error searching todos:", error);
      });
  };

  useEffect(() => {
    if (!sort) return;
    const sortedTodos = [...todos].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setTodos(sortedTodos);
  }, [sort, todos]);

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <input
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Введите новое дело"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      <div>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск дела"
        />
        <button className="search-button" onClick={handleSearch}>
          Поиск
        </button>
      </div>

      <div>
        <label>
          Сортировать по алфавиту:
          <input
            className="sort-checkbox"
            type="checkbox"
            checked={sort}
            onChange={() => setSort(!sort)}
          />
        </label>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
