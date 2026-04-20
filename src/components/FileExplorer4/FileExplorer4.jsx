import { useState } from "react";
import "./explorer.css";
import data from "./explorerData.json";

export const FileExplorer4 = () => {
  const [explorerData, setExplorerData] = useState(data);

  const addNewDir = (parentNode) => {
    const newDirName = prompt("Enter Folder Name: ");
    if (!newDirName?.trim()) return;

    const newDir = {
      id: Date.now(),
      name: newDirName,
      isDir: true,
      children: [],
    };

    const updatedExplorerData = (data) => {
      return data.map((node) => {
        if (node.id === parentNode.id) {
          return { ...node, children: [...node.children, newDir] };
        }

        if (node.children?.length > 0) {
          node = { ...node, children: updatedExplorerData(node.children) };
          return node;
        }

        return node;
      });
    };

    setExplorerData((prev) => updatedExplorerData(prev));
  };

  const removeNode = (targetNode) => {
    const updatedExplorerData = (data) => {
      return data
        .filter((node) => node.id !== targetNode.id)
        .map((node) => {
          if (node.children?.length > 0) {
            const updatedChildNodes = updatedExplorerData(node.children);
            return { ...node, children: updatedChildNodes };
          }
          return node;
        });
    };

    setExplorerData((prev) => updatedExplorerData(prev));
  };

  return (
    <div className="root-container">
      <h1>File Explorer 4</h1>
      <Explorer
        explorerData={explorerData}
        addNewDir={addNewDir}
        removeNode={removeNode}
      />
    </div>
  );
};

const Explorer = ({ explorerData, addNewDir, removeNode }) => {
  const [expandedState, setExpandedState] = useState({});

  const handleExpandClick = (nodeId) => {
    setExpandedState((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const handleAdd = (node) => {
    addNewDir(node);
  };

  const handleRemove = (node) => {
    removeNode(node);
  };

  return (
    <div className="node-item">
      {explorerData.length > 0 &&
        explorerData.map((node) => {
          return (
            <div key={node.id} className="node">
              {node.isDir && (
                <button
                  className="expand-btn"
                  onClick={() => handleExpandClick(node.id)}
                >
                  {expandedState[node.id] ? "-" : "+"}
                </button>
              )}
              <span>
                {node.isDir ? <strong>{node.name}</strong> : node.name}
              </span>
              {node.isDir && (
                <button className="add-btn" onClick={() => handleAdd(node)}>
                  Add
                </button>
              )}
              <button className="remove-btn" onClick={() => handleRemove(node)}>
                Remove
              </button>
              {node.isDir &&
                node.children.length > 0 &&
                expandedState[node.id] && (
                  <Explorer
                    explorerData={node.children}
                    addNewDir={addNewDir}
                    removeNode={removeNode}
                  />
                )}
            </div>
          );
        })}
    </div>
  );
};
