import "./index.css";
import { data as checkboxData } from "./data.js";
import { useState } from "react";

export const NestedCheckbox = () => {
  const [checkboxState, setCheckboxState] = useState({});

  return (
    <div className="checkbox-container">
      <h1>Nested Checkbox</h1>
      <Checkbox
        data={checkboxData}
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
      />
    </div>
  );
};

const Checkbox = (props) => {
  const { data, checkboxState, setCheckboxState } = props;

  if (data.length === 0) return;

  const handleStateChange = (isChecked = false, record) => {
    setCheckboxState((prev) => {
      const newState = { ...prev };
      newState[record.id] = isChecked;

      const updateChildStates = (node) => {
        newState[node.id] = isChecked || false;
        node.children?.length > 0 &&
          node.children.forEach((child) => {
            updateChildStates(child);
          });
      };

      const verifyNodeStates = (node) => {
        if (node?.children.length === 0) return newState[node.id] || false;

        const isAllChildChecked = node.children?.every((child) =>
          verifyNodeStates(child)
        );

        newState[node.id] = isAllChildChecked;
        return isAllChildChecked;
      };

      updateChildStates(record);
      checkboxData?.length > 0 &&
        checkboxData.forEach((node) => verifyNodeStates(node));

      return newState;
    });
  };

  return (
    <div className="checkboxes">
      {data.map((record) => {
        return (
          <div key={record.id} className="checkbox">
            <input
              type="checkbox"
              className="checkbox-input"
              name={record.name}
              checked={checkboxState[record.id]}
              onChange={(e) => handleStateChange(e.target.checked, record)}
            ></input>
            <label className="checkbox-label">{record.name}</label>
            {record.children && record.children.length > 0 && (
              <Checkbox
                data={record.children}
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
