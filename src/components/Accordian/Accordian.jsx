import { useState } from "react";
import styles from "./Accordian.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordian = () => {
  const data = [
    {
      heading: "JavaScript",
      content: "JavaScript is beautiful.",
    },
    {
      heading: "React JS",
      content: "React is a JS library to build UI.",
    },
    {
      heading: "Node JS",
      content: "Node is a JS runtime built on-top of Chrome v8 engine.",
    },
    {
      heading: "SQL",
      content: "Structure Query Language for data retrieval & manipluation.",
    },
  ];

  const [openedItemIndex, setOpenedItemIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenedItemIndex(index === openedItemIndex ? -1 : index);
  };

  return (
    <div className={styles.container}>
      <h1>Accordians</h1>
      {data.map((obj, idx) => (
        <div className={styles.block} key={idx}>
          <div className={styles.header} onClick={() => handleClick(idx)}>
            <span>
              {idx === openedItemIndex ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <h3>{obj.heading}</h3>
          </div>
          {idx === openedItemIndex && (
            <div className={styles.content}>
              <p>{obj.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
