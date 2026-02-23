import { Progress } from "./progress";
import "./progress.css";

const progress = [70, 50, 10, 2, 90, 35];

export const ProgressBar2 = () => {
  return (
    <div className="container">
      <h1>Progres Bar</h1>
      {progress.length > 0 &&
        progress.map((p) => {
          return (
            <div className="outer">
              <Progress value={p} />
            </div>
          );
        })}
    </div>
  );
};
