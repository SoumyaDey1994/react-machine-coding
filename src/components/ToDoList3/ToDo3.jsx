import { useState } from "react";
import "./todo3.css";

export const ToDo3 = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    setInput(value);
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (!input) return;
    if (key === "Enter") {
      const item = {
        id: Date.now(),
        name: input,
        isChecked: false,
      };
      setTodoList((prev) => [...prev, item]);
      setInput("");
    }
  };

  const handleChecked = (isChecked, item) => {
    const newToDoItemState = [...todoList];
    const itemIndex = newToDoItemState.findIndex(
      (todoItem) => todoItem.id === item.id,
    );
    newToDoItemState[itemIndex].isChecked = isChecked || false;

    setTodoList(newToDoItemState);
  };

  const handleRemove = (item) => {
    const newToDoItemState = [...todoList];
    setTodoList(newToDoItemState.filter((todoItem) => todoItem.id !== item.id));
  };

  return (
    <div className="conatiner">
      <h1>To-Do List 3</h1>
      <div className="item-group">
        <input
          type="text"
          placeholder="Enter todo item"
          className="todo-input"
          value={input}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />

        {todoList.length > 0 && (
          <div className="todo-items">
            {todoList.map((item) => {
              return (
                <div key={item.id} className="todo-item">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    checked={item.isChecked}
                    onChange={(e) => handleChecked(e.target.checked, item)}
                  />
                  <span className={`${item.isChecked ? "strike" : ""}`}>
                    {item.name}
                  </span>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
