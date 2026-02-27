import { useState } from "react";
import data from "./explorerData.json";
import "./explorer.css";

export const FileExplorer2 = () => {
  const [explorerData, setExplorerData] = useState(data);

  const addFolder = (nodeId) => {
    const newDirName = prompt("Enter New Folder Name: ");

    const newDir = {
      id: Date.now(),
      name: newDirName,
      isDir: true,
      children: [],
    };

    const updatedList = (data) => {
      return data.map((node) => {
        if (node.id === nodeId) {
          return { ...node, children: [...node.children, newDir] };
        }

        if (node.children?.length > 0) {
          return { ...node, children: updatedList(node.children) };
        }

        return node;
      });
    };

    setExplorerData((prev) => updatedList(prev));
  };

  const deleteNode = (nodeId) => {
    const updatedList = (data) => {
      return data
        .filter((node) => node.id !== nodeId)
        .map((node) => {
          if (node.children?.length > 0) {
            node.children = [...updatedList(node.children)];
            return node;
          }

          return node;
        });
    };

    setExplorerData((prev) => updatedList(prev));
  };

  return (
    <div className="explorer-container">
      <h1>File Explorer 2</h1>
      <Explorer
        explorerData={explorerData}
        addFolder={addFolder}
        deleteNode={deleteNode}
      />
    </div>
  );
};

const Explorer = ({ explorerData, addFolder, deleteNode }) => {
  const [expanded, setExpanded] = useState({});

  const handleClick = (nodeId) => {
    setExpanded((prev) => {
      const newState = { ...prev };
      newState[nodeId] = !prev[nodeId];
      return newState;
    });
  };

  return (
    <div className="explorer-item-container">
      {explorerData?.map((data) => {
        return (
          <div className="explorer-item">
            {data.isDir && (
              <button
                className="expand-btn"
                onClick={() => handleClick(data.id)}
              >
                {expanded[data.id] ? "-" : "+"}
              </button>
            )}
            {data.isDir && (
              <span>
                <strong>{data.name}</strong>
                <button className="add-btn" onClick={() => addFolder(data.id)}>
                  Add
                </button>
              </span>
            )}
            {!data.isDir && <span>{data.name}</span>}
            <button className="remove-btn" onClick={() => deleteNode(data.id)}>
              Remove
            </button>
            {data.isDir && data.children?.length > 0 && expanded[data.id] && (
              <Explorer
                explorerData={data.children}
                addFolder={addFolder}
                deleteNode={deleteNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
