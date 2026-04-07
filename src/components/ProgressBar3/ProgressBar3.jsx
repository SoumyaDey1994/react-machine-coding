import { useEffect, useState } from "react";
import "./progress3.css";

export const ProgressBar3 = () => {
  const progressData = [10, 15, 2, 50, 0, 70, 5, 85, 97, 66, 100];
  return (
    <div className="root-container">
      <h1>Progress Bar 3</h1>
      {progressData.map((value) => {
        return (
          <div className="outer">
            <Progress data={value} />
          </div>
        );
      })}
    </div>
  );
};

const Progress = ({ data }) => {
  const [progressData, setProgressData] = useState(0);

  useEffect(() => {
    setProgressData(data);
  }, [data]);

  return (
    <div
      className="inner"
      style={{
        transform: `translate(${progressData - 100}%)`,
        color: `${progressData <= 5 ? "black" : "white"}`,
      }}
      role="progressbar"
      aria-valuenow={progressData}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span>{progressData}%</span>
    </div>
  );
};
