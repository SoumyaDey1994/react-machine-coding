import { useEffect, useRef, useState } from "react";
import "./chips.css";

export const ChipsInput2 = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (event) => {
    const value = event.target.value.trim();
    if (!value) return;

    const key = event.key.toLowerCase();
    if (key === "enter") {
      const newItem = { id: Date.now(), name: value };
      setItems((prev) => [...prev, newItem]);
      setInput("");
    }
  };

  const handleDelete = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="chips-container">
      <h1>Chips Input 2</h1>
      <input
        type="text"
        placeholder="Enter value"
        className="chip-input"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {items.length > 0 && (
        <div className="item-container">
          {items.map((item) => (
            <div key={item.id} className="item">
              <span>{item.name}</span>
              <button onClick={() => handleDelete(item.id)}>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
