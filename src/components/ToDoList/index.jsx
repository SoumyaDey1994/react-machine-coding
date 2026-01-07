import { useState } from "react";
import "./index.css";

export const ToDoList = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <ToDo />
    </div>
  );
};

const ToDo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodoItem = () => {
    const itemName = input.trim();

    if (!itemName) return;

    const newItem = {
      id: Date.now(),
      text: itemName,
      completed: false,
    };

    setInput("");
    setList((prev) => [...prev, newItem]);
  };

  const removeItem = (itemId) => {
    setList((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleStatusChange = (checkedStatus, itemId) => {
    let updatedList = [...list];
    updatedList = updatedList.map((item) => {
      if (item.id === itemId) {
        item.completed = checkedStatus;
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Enter todo"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn" onClick={() => addTodoItem()}>
        Add
      </button>
      <div className="todo-items-list">
        {list.length > 0 &&
          list.map((item) => (
            <div className="todo-item" key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => handleStatusChange(e.target.checked, item.id)}
              />
              <span
                style={{
                  textDecoration: `${item.completed ? "line-through" : ""}`,
                }}
              >
                {item.text}
              </span>
              <button type="button" onClick={() => removeItem(item.id)}>
                <img
                  src="https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png"
                  alt="remove-item"
                  className="remove-icon"
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
