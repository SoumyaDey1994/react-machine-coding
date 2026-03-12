import { data as checkboxData } from "./data.js";
import "./checkbox.css";
import { useState } from "react";

export const NestedCheckbox3 = () => {
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxStateChange = (isChecked, targetNode) => {
    setCheckboxState((prev) => {
      const newState = { ...prev };
      newState[targetNode.id] = isChecked;

      const childNodes = (node) => {
        newState[node.id] = isChecked || false;
        node.children?.forEach((child) => childNodes(child));
      };

      const verifyNodeStates = (node) => {
        if (node?.children.length === 0) {
            return node.id === targetNode.id ? isChecked : (newState[node.id] || false)
        };

        const isAllChildChecked = node.children?.every((child) => {
          return verifyNodeStates(child);
        });
        newState[node.id] = isAllChildChecked;
        return isAllChildChecked;
      };

      childNodes(targetNode);
      checkboxData.length > 0 &&
        checkboxData.forEach((node) => verifyNodeStates(node));
      return newState;
    });
  };

  return (
    <div className="root-container">
      <h1>Nested Checkbox 3</h1>
      <Checkbox
        data={checkboxData}
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        handleCheckboxStateChange={handleCheckboxStateChange}
      />
    </div>
  );
};

const Checkbox = ({ data, checkboxState, handleCheckboxStateChange }) => {
  return (
    <div className="checkbox-container">
      {data.length > 0 &&
        data?.map((node) => {
          return (
            <div key={node.id} className="checkbox-node">
              <input
                type="checkbox"
                className="checkbox"
                checked={checkboxState[node.id]}
                onChange={(e) =>
                  handleCheckboxStateChange(e.target.checked, node)
                }
              />
              <label for={node.name}>{node.name}</label>
              {node.children?.length > 0 && (
                <Checkbox
                  data={node.children}
                  checkboxState={checkboxState}
                  handleCheckboxStateChange={handleCheckboxStateChange}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
