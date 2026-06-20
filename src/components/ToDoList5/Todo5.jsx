import { useState } from "react";
import "./todo5.css";

export const Todo5 = () => {
  const [currItem, setCurrItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checkedItem, setCheckedItem] = useState({});

  const handleKeyDown = (key) => {
    if (key.toLowerCase() !== "enter") return;

    const itemName = currItem.trim();
    if (!itemName) return;

    const todoItem = { id: Date.now(), name: itemName };
    setTodoList((prev) => [todoItem, ...prev]);
    setCurrItem("");
  };

  return (
    <div className="root-container">
      <h1>Todo List 5</h1>
      <input
        type="text"
        placeholder="Enter Item Name"
        className="item-input"
        value={currItem}
        onChange={(e) => setCurrItem(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
      />

      {todoList.length > 0 && (
        <div className="item-container">
          {todoList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={checkedItem[item.id]}
                  onChange={() =>
                    setCheckedItem((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                />
                <span
                  style={{
                    "text-decoration-line": `${checkedItem[item.id] ? "line-through" : ""}`,
                    "text-decoration-thickness": `${checkedItem[item.id] ? "4px" : ""}`,
                  }}
                >
                  <strong>{item.name}</strong>
                </span>
                <button
                  onClick={() =>
                    setTodoList((prev) =>
                      prev.filter((todoItem) => todoItem.id !== item.id),
                    )
                  }
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
