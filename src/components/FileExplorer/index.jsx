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
    console.log(`New Folder: ${name}`);

    setFileList((prev) => {
      const updateFileList = (list) => {
        return list.map((node) => {
          if (node.id === nodeId) {
            return { ...node, children: [newFolder, ...node.children] };
          } else if (node?.children > 0) {
            return updateFileList(node.children);
          }

          return node;
        });
      };

      const updatedList = updateFileList(prev);
      return updatedList;
    });
  };

  return (
    <div className="root-container">
      <h1>File Explorer</h1>
      <Explorer fileList={fileList} addFolder={addFolder} />
    </div>
  );
};

const Explorer = (props) => {
  const { fileList, addFolder } = props;
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
              <button
                className="add-folder-btn"
                onClick={() => addFolder(item.id)}
              >
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                  alt="add-folder"
                  width="20px"
                  className="add-folder-icon"
                />
              </button>
            )}
            {itemsExpanded?.[item.id] &&
              item.isDir &&
              item.children?.length > 0 && (
                <Explorer fileList={item.children} addFolder={addFolder} />
              )}
          </div>
        );
      })}
    </div>
  );
};
