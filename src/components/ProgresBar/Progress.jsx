import { useEffect, useState } from "react";
import styles from "./Progress.module.css";

const Progress = (props) => {
  const { value } = props;
  const [progresVal, setProgressVal] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgressVal(value), 100);
  });
  

  return (
    <div
      className={styles.inner}
      style={{
        transform: `translateX(${progresVal - 100}%)`,
        color: value < 10 ? "black" : "white",
      }}
      role="progressbar"
      aria-valuenow={progresVal}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {progresVal}%
    </div>
  );
};

export default Progress;
