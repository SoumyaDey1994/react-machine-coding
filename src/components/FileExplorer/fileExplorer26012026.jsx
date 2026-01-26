import { useState } from "react";
import data from "./data.json";
import "./index.css";

export const FileExplorer26012026 = () => {
  const [explorerData, setExplorerData] = useState(data);

  /**
   * Add new Folder
   * @param {*} nodeId
   */
  const addFolder = (nodeId) => {
    const newDirName = prompt("Enter Folder Name: ");
    const newItem = {
      id: Date.now(),
      name: newDirName,
      isDir: true,
      children: [],
    };

    const getUpdatedFileList = (data) => {
      return data.map((node) => {
        if (node.id === nodeId) {
          return { ...node, children: [...node.children, newItem] };
        }

        if (node.isDir && node.children) {
          return { ...node, children: getUpdatedFileList(node.children) };
        }

        return node;
      });
    };

    setExplorerData((prev) => getUpdatedFileList(prev));
  };

  /**
   * Remove existing file/folder from list
   * @param {*} nodeId
   */
  const removeItem = (nodeId) => {
    const getUpdatedFileList = (data) => {
      return data
        .filter((node) => node.id !== nodeId)
        .map((node) => {
          if (node.isDir && node.children.length > 0) {
            return { ...node, children: getUpdatedFileList(node.children) };
          }
          return node;
        });
    };

    setExplorerData((prev) => getUpdatedFileList(prev));
  };

  return (
    <div className="root-container">
      <h1>File Explorer</h1>
      <Explorer
        data={explorerData}
        addFolder={addFolder}
        removeItem={removeItem}
      />
    </div>
  );
};

const Explorer = ({ data, addFolder, removeItem }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const handleBtnClick = (nodeId) => {
    const newState = { ...isExpanded };
    newState[nodeId] = !newState[nodeId];
    setIsExpanded(newState);
  };

  return (
    <div className="explorer-container">
      {data?.map((node) => (
        <div key={node.id}>
          {node.isDir && (
            <button
              className="expand-btn"
              onClick={() => handleBtnClick(node.id)}
            >
              {isExpanded[node.id] ? "-" : "+"}
            </button>
          )}
          <span>{node.name}</span>
          {node.isDir && (
            <button className="option-btn" onClick={() => addFolder(node.id)}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                alt="add-folder"
                width="20px"
                className="option-icon"
              />
            </button>
          )}
          <button className="option-btn" onClick={() => removeItem(node.id)}>
            <img
              src="https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png"
              alt="remove"
              width="30px"
              className="option-icon"
            />
          </button>
          {node.isDir && isExpanded[node.id] && (
            <Explorer
              data={node.children}
              addFolder={addFolder}
              removeItem={removeItem}
            />
          )}
        </div>
      ))}
    </div>
  );
};
