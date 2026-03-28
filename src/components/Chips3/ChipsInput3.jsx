import { useState } from "react";
import "./chipsinput3.css";

export const ChipsInput3 = () => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter" && input.trim()) {
      const item = {
        id: Date.now(),
        name: input.trim(),
      };
      setItemList((prev) => [...prev, item]);
      setInput("");
    }
  };

  const handleDelete = (itemId) => {
    setItemList((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="root-container">
      <h1>Chips Input 3</h1>
      <input
        type="text"
        className="item-input"
        placeholder="Enter Value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {itemList.length > 0 && (
        <div className="item-container">
          {itemList.map((item) => {
            return (
              <div key={item.id} className="item">
                <span>{item.name}</span>
                <button onClick={() => handleDelete(item.id)}>X</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
