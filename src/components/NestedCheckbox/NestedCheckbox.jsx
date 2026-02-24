import "./nestedCheckbox.css";
import { data as checkboxData } from "./data.js";
import { useState } from "react";

export const NestedCheckbox = () => {
  const [checkedEntries, setCheckedEntries] = useState({});

  return (
    <div className="root-container">
      <h1>Nested Checkbox</h1>
      <Checkbox
        checkboxData={checkboxData}
        checkedEntries={checkedEntries}
        setCheckedEntries={setCheckedEntries}
      />
    </div>
  );
};

const Checkbox = (props) => {
  const { checkboxData, checkedEntries, setCheckedEntries } = props;

  const handleChange = (isChecked = false, node) => {
    setCheckedEntries((prev) => {
      let newState = { ...prev };
      newState[node.id] = isChecked;
      // method to check if parent is checked/unchecked,
      // corresponding childs should also be marked checked/unchecked
      const checkChildStatus = (node) => {
        newState[node.id] = isChecked || false;
        node.children?.length > 0 &&
          node.children?.forEach((child) => checkChildStatus(child));
      };

      //If all children are marked checked/unchecked, 
      // parent should also be marked checked
      const verifyAllNodes = (node) => {
        if (node?.children.length === 0) return newState[node.id] || false;

        const isAllChildChecked = node.children?.every((child) =>
          verifyAllNodes(child)
        );

        newState[node.id] = isAllChildChecked;
        return isAllChildChecked;
      };

      checkChildStatus(node);
      checkboxData?.length > 0 &&
        checkboxData.forEach((node) => verifyAllNodes(node));

      return newState;
    });
  };

  return (
    <div className="checkbox-container">
      {checkboxData?.length > 0 &&
        checkboxData.map((node) => {
          return (
            <div key={node.id}>
              <input
                type="checkbox"
                className="checkbox-item"
                name={node.name}
                checked={checkedEntries[node.id]}
                onChange={(e) => handleChange(e.target.checked, node)}
              />
              <span>{node.name}</span>
              {node.children?.length > 0 && (
                <Checkbox
                  checkboxData={node.children}
                  checkedEntries={checkedEntries}
                  setCheckedEntries={setCheckedEntries}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
