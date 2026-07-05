import "./fileExplorer5.css";
import data from "./explorerData.json";
import { useState } from "react";

export const FileExplorer5 = () => {
  const [explorerData, setExplorerData] = useState(data);

  const [expandedItems, setExpandedItems] = useState({});

  /**
   * Handle adding of new directory
   * @param {*} parentNodeId
   */
  const handleAddNode = (parentNodeId) => {
    const newNodeName = prompt("Enter Directory Name: ");
    const newNodeItem = {
      id: Date.now(),
      name: newNodeName,
      isDir: true,
      children: [],
    };

    const setData = (data) => {
      return data.map((node) => {
        if (node.id === parentNodeId) {
          return { ...node, children: [...node.children, newNodeItem] };
        }

        if (node.children?.length > 0) {
          const updatedChild = setData(node.children);
          return { ...node, children: updatedChild };
        }

        return node;
      });
    };

    setExplorerData((prev) => setData(prev));
  };

  /**
   * Remove existing node
   * @param {*} targetNodeId
   */
  const handleRemoveNode = (targetNodeId) => {
    const removeNode = (data) => {
      return data
        .filter((node) => node.id !== targetNodeId)
        .map((node) => {
          if (node.children?.length > 0) {
            const updatedChild = removeNode(node.children);
            return { ...node, children: updatedChild };
          }

          return node;
        });
    };

    setExplorerData((prev) => removeNode(prev));
  };

  return (
    <div className="root-container">
      <h1>File Explorer 5</h1>
      <Explorer
        data={explorerData}
        expandedItems={expandedItems}
        setExpandedItems={setExpandedItems}
        handleAddNode={handleAddNode}
        handleRemoveNode={handleRemoveNode}
      />
    </div>
  );
};

const Explorer = ({
  data,
  expandedItems,
  setExpandedItems,
  handleAddNode,
  handleRemoveNode,
}) => {
  const handleExpandedItems = (nodeId) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      newState[nodeId] = !(prev[nodeId] || false);
      return newState;
    });
  };

  return (
    <div className="explorer-container">
      {data.length > 0 &&
        data.map((node) => {
          return (
            <div key={node.id} className="explorer-node">
              {node.isDir ? (
                <strong>{node.name}</strong>
              ) : (
                <span>{node.name}</span>
              )}
              {node.isDir && (
                <button
                  className="expand-btn"
                  onClick={() => handleExpandedItems(node.id)}
                >
                  {expandedItems[node.id] ? "-" : "+"}
                </button>
              )}
              {node.isDir && (
                <button
                  className="add-btn"
                  onClick={() => handleAddNode(node.id)}
                >
                  Add
                </button>
              )}
              {
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveNode(node.id)}
                >
                  Delete
                </button>
              }
              {node.children?.length > 0 && expandedItems[node.id] && (
                <Explorer
                  data={node.children}
                  expandedItems={expandedItems}
                  setExpandedItems={setExpandedItems}
                  handleAddNode={handleAddNode}
                  handleRemoveNode={handleRemoveNode}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
