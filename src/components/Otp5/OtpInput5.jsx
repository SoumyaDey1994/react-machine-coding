import { useEffect, useRef, useState } from "react";
import "./otp5.css";

const NO_OF_DIGITS = 6;

export const Otp5 = () => {
  const [inputVal, setInputVal] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRef = useRef([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    inputRef.current && inputRef.current[0].focus();
  }, []);

  useEffect(() => {
    const validInputs = inputVal.filter(Boolean);
    setIsBtnDisabled(!(validInputs.length === NO_OF_DIGITS));
  }, [inputVal]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newInputVal = [...inputVal];
    newInputVal[index] = value.slice(-1);
    setInputVal(newInputVal);
    // set focus on next input box
    value && inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (key, index) => {
    const currValue = inputVal[index];

    if (key.toLowerCase() === "backspace") {
        //set focus on prev input box
      index > 0 && !currValue && inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="root-container">
      <h1>OTP Input 5</h1>
      {inputVal.length > 0 &&
        inputVal.map((val, index) => {
          return (
            <input
              type="text"
              key={index}
              value={val}
              className="otp-input-box"
              ref={(input) => (inputRef.current[index] = input)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e.key, index)}
            />
          );
        })}
      <div>
        <button type="button" className="submitBtn" disabled={isBtnDisabled}>
          Submit
        </button>
      </div>
    </div>
  );
};
