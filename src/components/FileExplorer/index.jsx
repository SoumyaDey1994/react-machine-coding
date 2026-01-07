import "./index.css";
import data from "./data.json";
import { useState } from "react";

export const FileExplorer = () => {
  const [fileList, setFileList] = useState(data);

  const addFolder = (nodeId) => {
    const name = prompt("Enter Folder Name");
    const newFolder = {
      id: Date.now(),
      name: name,
      isDir: true,
      children: [],
    };

    setFileList((prev) => {
      const updateFileList = (list) => {
        return list.map((node) => {
          if (node.id === nodeId) {
            return { ...node, children: [newFolder, ...node.children] };
          }

          if (node.isDir && node.children) {
            return { ...node, children: updateFileList(node.children) };
          }

          return node;
        });
      };

      const updatedList = updateFileList(prev);
      return updatedList;
    });
  };

  const removeFromList = (itemId) => {
    setFileList((prev) => {
      const removeItem = (list) => {
        return list
          .filter((item) => item.id !== itemId)
          .map((item) => {
            if (item.children && item.children.length > 0) {
              item.children = [...removeItem(item.children)];
            }
            return item;
          });
      };

      const updatedList = removeItem(prev);
      return updatedList;
    });
  };

  return (
    <div className="root-container">
      <h1>File Explorer</h1>
      <Explorer
        fileList={fileList}
        addFolder={addFolder}
        removeFromList={removeFromList}
      />
    </div>
  );
};

const Explorer = (props) => {
  const { fileList, addFolder, removeFromList } = props;
  const [itemsExpanded, setItemsExpanded] = useState({});

  const handleClick = (item) => {
    setItemsExpanded((prev) => {
      return {
        ...prev,
        [item.id]: !prev[item.id],
      };
    });
  };

  if (!fileList || fileList.length === 0) return <></>;

  return (
    <div className="explorer-container">
      {fileList.map((item) => {
        return (
          <div key={item.id} className="explorer-item">
            {item.isDir ? (
              <button
                type="button"
                className="expand-btn"
                onClick={() => handleClick(item)}
              >
                {itemsExpanded[item.id] ? "-" : "+"}
              </button>
            ) : (
              <span># </span>
            )}
            <span
              className="explorer-item-name"
              style={{ fontWeight: `${item.isDir ? "bold" : "normal"}` }}
            >
              {item.name}
            </span>
            {item.isDir && (
              <button className="option-btn" onClick={() => addFolder(item.id)}>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                  alt="add-folder"
                  width="20px"
                  className="option-icon"
                />
              </button>
            )}
            <button
              className="option-btn"
              onClick={() => removeFromList(item.id)}
            >
              <img
                src="https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png"
                alt="remove"
                width="30px"
                className="option-icon"
              />
            </button>
            {itemsExpanded?.[item.id] &&
              item.isDir &&
              item.children?.length > 0 && (
                <Explorer
                  fileList={item.children}
                  addFolder={addFolder}
                  removeFromList={removeFromList}
                />
              )}
          </div>
        );
      })}
    </div>
  );
};
