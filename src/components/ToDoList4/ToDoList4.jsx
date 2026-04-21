import { useEffect, useRef, useState } from "react";
import "./todo4.css";

export const ToDo4 = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [itemChecked, setItemChecked] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (key) => {
    if (key.toLowerCase() === "enter" && todoInput.trim()) {
      const newItem = {
        id: Date.now(),
        name: todoInput.trim(),
      };

      setTodoList((prev) => [newItem, ...prev]);
      setTodoInput("");
    }
  };

  const handleItemDelete = (targetItemId) => {
    setTodoList((prev) => prev.filter((item) => item.id !== targetItemId));
  };

  const handleCheckedStatusUpdate = (isChecked, targetItemId) => {
    setItemChecked((prev) => ({ ...prev, [targetItemId]: isChecked }));
  };

  return (
    <div className="root-container">
      <h1>Todo List 4</h1>
      <input
        type="text"
        name="todo-input"
        placeholder="Enter Item"
        className="todo-input"
        value={todoInput}
        ref={inputRef}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
      />

      {todoList.length > 0 && (
        <div className="list-container">
          {todoList.map((item) => {
            return (
              <div key={item.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={itemChecked[item.id] || false}
                  onChange={(e) =>
                    handleCheckedStatusUpdate(e.target.checked, item.id)
                  }
                />
                <span
                  style={{
                    textDecoration: `${itemChecked[item.id] ? "line-through" : ""}`,
                  }}
                >
                  {item.name}
                </span>
                <button onClick={() => handleItemDelete(item.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
