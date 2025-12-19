import { useState } from "react";
import styles from "./Chips.module.css";

const Chips = () => {
  const [inputText, setInputText] = useState("");
  const [chipItems, setChipItems] = useState([]);

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    setInputText(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChipItems([inputText, ...chipItems]);
      setInputText("");
    }
  };

  const removeChip = (index) => {
    const filteredChips = chipItems.filter((_, idx) => idx !== index);
    setChipItems(filteredChips);
  };

  return (
    <div className={styles.chipsContainer}>
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className={styles.input}
        value={inputText}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div
        className={styles.chipItemContainer}
        style={{
          border: `${chipItems.length > 0 ? "1px solid grey" : "none"}`,
        }}
      >
        {chipItems.length > 0 &&
          chipItems.map((item, idx) => {
            return (
              <div key={idx} className={styles.chipItem}>
                <span>{item}</span>
                <button type="button" onClick={() => removeChip(idx)}>
                  X
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Chips;
