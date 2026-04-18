import { useEffect, useRef, useState } from "react";
import "./otp4.css";

const NO_OF_DIGITS = 6;

export const Otp4 = () => {
  const [otpInput, setOtpInput] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRef = useRef([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // focus on current input box
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  // check wether to enable submit button
  useEffect(() => {
    const allBoxFilled = otpInput.filter(Boolean).length === NO_OF_DIGITS;
    setIsBtnDisabled(!allBoxFilled);
  }, [otpInput]);

  // value input against type number &
  // assign to correct index + move focus to next box
  const handleInputChange = (event, index) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    setOtpInput((prev) => {
      const newState = [...prev];
      newState[index] = value.slice(-1);
      return newState;
    });

    value && index < NO_OF_DIGITS - 1 && inputRef.current[index + 1]?.focus();
  };

  // Handle value removal & move focus to prev box
  const handleKeyDown = (event, index) => {
    const key = event.key.toLowerCase();
    const value = event.target.value.trim();

    if (key === "backspace") {
      !value && index > 0 && inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="root-container">
      <h1>OTP Input 4</h1>
      <div>
        {otpInput.map((input, idx) => {
          return (
            <input
              type="text"
              className="otp-input-box"
              key={idx}
              value={input}
              ref={(input) => (inputRef.current[idx] = input)}
              onChange={(e) => handleInputChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          );
        })}
      </div>

      <button className="submitBtn" disabled={isBtnDisabled}>
        Submit
      </button>
    </div>
  );
};
