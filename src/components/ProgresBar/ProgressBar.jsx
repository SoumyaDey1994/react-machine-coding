import { useEffect, useState } from "react";
import Progress from "./Progress";
import styles from "./Progress.module.css";

const ProgressBar = () => {
  const progress = [70, 50, 10, 2, 90, 35];

  return (
    <div className={styles.container}>
      <h1>Progress Bars</h1>
      {progress.map((value) => (
        <div className={styles.outer}>
          <Progress value={value} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
