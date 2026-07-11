import { useState } from "react";
import "./checkbox5.css";
import { data } from "./data.js";

export const NestedCheckbox5 = () => {
  const [checkboxData, setCheckboxData] = useState(data);
  const [checkboxState, setCheckboxState] = useState({});

  return (
    <div className="root-container">
      <h1>Nested Checkbox 5</h1>
      <Checkbox5
        checkboxData={checkboxData}
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
      />
    </div>
  );
};

const Checkbox5 = ({ checkboxData, checkboxState, setCheckboxState }) => {
  const handleClick = (nodeId, isChecked) => {
    setCheckboxState((prev) => {
      return {
        ...prev,
        [nodeId]: isChecked || false,
      };
    });
  };

  return (
    <div className="checkbox-container">
      {checkboxData.length > 0 &&
        checkboxData.map((node) => {
          return (
            <div key={node.id}>
              <input
                type="checkbox"
                checked={checkboxState[node.id]}
                onClick={(e) => handleClick(node.id, e.target.checked)}
              />
              <span>{node.name}</span>
              {node.children?.length > 0 && (
                <Checkbox5
                  checkboxData={node.children}
                  checkboxState={checkboxState}
                  setCheckboxState={setCheckboxState}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
