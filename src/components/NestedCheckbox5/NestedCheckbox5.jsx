import { useState } from "react";
import "./checkbox5.css";
import { data } from "./data.js";

export const NestedCheckbox5 = () => {
  const [checkboxData, setCheckboxData] = useState(data);
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxStateUpdate = (node, isChecked) => {
    const newCheckboxState = { ...checkboxState };

    const hanldeChildStateAgainstParent = (node) => {
      newCheckboxState[node.id] = isChecked || false;
      node.children?.length > 0 &&
        node.children.forEach((child) => hanldeChildStateAgainstParent(child));
    };

    const handleParentStateAgainstChild = (node) => {
      const currState = newCheckboxState[node.id] || false;
      if (!node.children || node.children.length === 0) return currState;

      const isAllChildChecked = node.children.every((child) =>
        handleParentStateAgainstChild(child),
      );

      newCheckboxState[node.id] = isAllChildChecked;
      return isAllChildChecked;
    };

    // initial invocation
    hanldeChildStateAgainstParent(node);
    checkboxData.length > 0 &&
      checkboxData.forEach((inputNode) =>
        handleParentStateAgainstChild(inputNode),
      );

    setCheckboxState(newCheckboxState);
  };

  return (
    <div className="root-container">
      <h1>Nested Checkbox 5</h1>
      <Checkbox5
        checkboxData={checkboxData}
        checkboxState={checkboxState}
        handleCheckboxStateUpdate={handleCheckboxStateUpdate}
      />
    </div>
  );
};

const Checkbox5 = ({
  checkboxData,
  checkboxState,
  handleCheckboxStateUpdate,
}) => {
  const handleClick = (node, isChecked) => {
    handleCheckboxStateUpdate(node, isChecked);
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
                onClick={(e) => handleClick(node, e.target.checked)}
              />
              <span>{node.name}</span>
              {node.children?.length > 0 && (
                <Checkbox5
                  checkboxData={node.children}
                  checkboxState={checkboxState}
                  handleCheckboxStateUpdate={handleCheckboxStateUpdate}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
