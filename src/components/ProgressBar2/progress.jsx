import { useEffect, useState } from "react";
import "./progress.css";

export const Progress = ({ value }) => {
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgressVal(value), 100);
  });

  return (
    <div
      style={{
        transform: `translateX(${progressVal - 100}%)`,
        color: `${progressVal < 5 ? "black" : "white"}`,
      }}
      className="inner"
      role="progressbar"
      aria-valuenow={progressVal}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {progressVal}%
    </div>
  );
};
