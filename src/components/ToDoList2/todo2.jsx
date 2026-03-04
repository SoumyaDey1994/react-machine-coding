import { useState } from "react";
import "./todo.css";

export const ToDo2 = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // add item to to-do list
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter") {
      const newItem = {
        id: Date.now(),
        name: todoInput,
      };
      setTodoList((prev) => [...prev, newItem]);
      setTodoInput("");
    }
  };

  // remove item from todo list
  const handleRemove = (itemId) => {
    setTodoList((prev) => prev.filter((item) => item.id !== itemId));
  };

  // check/uncheck todo item
  const handleChecked = (event, itemId) => {
    const isChecked = event.target.checked;
    setCheckedItems((prev) => ({ ...prev, [itemId]: isChecked || false }));
  };

  return (
    <div className="todo-conatainer">
      <h1>ToDo List 2</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter Todo Item"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {todoList.length > 0 && (
        <div className="todo-list">
          {todoList.map((item) => (
            <div className="todo-item" key={item.id}>
              <input
                type="checkbox"
                onChange={(e) => handleChecked(e, item.id)}
              />
              <span
                style={{
                  textDecoration: `${checkedItems[item.id] ? "line-through" : "none"}`,
                }}
              >
                {item.name}
              </span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
