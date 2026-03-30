import "./fileExplorer3.css";
import data from "./data.json";
import { useState } from "react";

export const FileExplorer3 = () => {
  const [explorerData, setExplorerData] = useState(data);

  const addNewNode = (parentNodeId) => {
    const newDirName = prompt("Enter Folder Name");
    const newItem = {
      id: Date.now(),
      name: newDirName,
      isDir: true,
      children: [],
    };

    const getUpdatedNodes = (data) => {
      return data.map((node) => {
        if (node.id === parentNodeId) {
          const newNode = { ...node, children: [...node.children, newItem] };
          return newNode;
        }

        if (node.children && node.children.length > 0) {
          return { ...node, children: getUpdatedNodes(node.children) };
        }

        return node;
      });
    };

    setExplorerData((prev) => getUpdatedNodes(prev));
  };

  const removeExistingNode = (targetNodeId) => {
    const getUpdatedNodes = (data) => {
      return data
        .filter((node) => node.id !== targetNodeId)
        .map((node) => {
          if (node.children && node.children.length > 0) {
            node.children = getUpdatedNodes(node.children);
            return node;
          }
          return node;
        });
    };

    setExplorerData((prev) => getUpdatedNodes(prev));
  };

  return (
    <div className="root-container">
      <h1>File Explorer 3</h1>
      <Explorer
        data={explorerData}
        addNewNode={addNewNode}
        removeExistingNode={removeExistingNode}
      />
    </div>
  );
};

export const Explorer = ({ data, addNewNode, removeExistingNode }) => {
  const [expanded, setExpanded] = useState({});

  const handleExpandCollapse = (nodeId) => {
    setExpanded((prev) => {
      return {
        ...prev,
        [nodeId]: !prev[nodeId],
      };
    });
  };

  const addNode = (nodeId) => {
    addNewNode(nodeId);
  };

  const removeNode = (nodeId) => {
    removeExistingNode(nodeId);
  };

  return (
    <div className="explorer-node-container">
      {data.length > 0 &&
        data.map((node) => {
          return (
            <div key={node.id} className="explorer-node">
              {node.isDir && (
                <button
                  className="expand-btn"
                  onClick={() => handleExpandCollapse(node.id)}
                >
                  {expanded[node.id] ? "-" : "+"}
                </button>
              )}
              <span>{node.name}</span>
              {node.isDir && (
                <button className="add-btn" onClick={() => addNode(node.id)}>
                  Add
                </button>
              )}
              <button
                className="remove-btn"
                onClick={() => removeNode(node.id)}
              >
                Remove
              </button>
              {node.isDir && node.children.length > 0 && expanded[node.id] && (
                <Explorer
                  data={node.children}
                  addNewNode={addNewNode}
                  removeExistingNode={removeExistingNode}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
