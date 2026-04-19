import "./nestedcheckbox4.css";
import { data } from "./checkboxData.js";
import { useState } from "react";

export const NestedCheckbox4 = () => {
  const [checkboxData, setCheckboxData] = useState(data);
  const [checkedState, setCheckedState] = useState({});

  const handleStateChange = (node, isChecked) => {
    const newCheckedState = { ...checkedState };

    // if parent is checked, check all child nodes
    const verifyChildState = (node) => {
      const isNodeChecked = isChecked || false;
      newCheckedState[node.id] = isNodeChecked;

      if (node.children && node.children.length > 0) {
        node.children.forEach((childNode) => verifyChildState(childNode));
      }
    };

    // Verify state of parent, based on all childs checked/unchecked status
    const verifyParentState = (node) => {
      const isNodeChecked = newCheckedState[node.id] || false;
      //   console.log(`Current Node: ${node.id} - ${isNodeChecked}`);
      if (node.children.length === 0) {
        return isNodeChecked;
      }

      const isAllChildChecked = node.children.every((child) => {
        // console.log(`Child: ${child.id}`);
        return verifyParentState(child);
      });
      newCheckedState[node.id] = isAllChildChecked;
      //   console.log(`Evaluated Node: ${node.id} - ${isAllChildChecked}`);
      return isAllChildChecked;
    };

    verifyChildState(node);
    checkboxData.length > 0 &&
      checkboxData.forEach((node) => verifyParentState(node));
    setCheckedState(newCheckedState);
  };

  console.log(checkedState);
  return (
    <div className="root-container">
      <h1>Nested Checkbox 4</h1>
      <Checkbox
        checkboxData={checkboxData}
        checkedState={checkedState}
        handleStateChange={handleStateChange}
      />
    </div>
  );
};

const Checkbox = ({ checkboxData, checkedState, handleStateChange }) => {
  return (
    <div className="checkbox-container">
      {checkboxData?.map((node) => {
        return (
          <div key={node.id}>
            <input
              type="checkbox"
              checked={checkedState[node.id]}
              className="checkbox"
              onClick={(e) => handleStateChange(node, e.target.checked)}
            />
            <span>{node.name}</span>
            {node.children?.length > 0 && (
              <Checkbox
                checkboxData={node.children}
                checkedState={checkedState}
                handleStateChange={handleStateChange}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
