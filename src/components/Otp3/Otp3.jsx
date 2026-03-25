import { useEffect, useRef, useState } from "react";
import "./otp3.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const NO_OF_DIGITS = 6;

export const Otp3 = () => {
  const [otpInput, setOtpInput] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRef = useRef([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const noOfValidInputs = otpInput.filter(Boolean).length;
    setIsDisabled(noOfValidInputs !== NO_OF_DIGITS);
  }, [otpInput]);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;

    setOtpInput((prev) => {
      const newState = [...prev];
      newState[index] = value.slice(-1);
      return newState;
    });

    value && inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (event, index) => {
    const key = event.key.toLowerCase();
    if (!event.target.value && key === "backspace") {
      index > 0 && inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="container">
      <h1>OTP Input 3</h1>
      {otpInput.length > 0 &&
        otpInput.map((otp, idx) => {
          return (
            <input
              type="text"
              key={idx}
              className="otpInputBox"
              value={otp}
              ref={(input) => (inputRef.current[idx] = input)}
              onChange={(e) => handleInputChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          );
        })}
      <div>
        <button className="submitBtn" disabled={isDisabled}>
          Submit
        </button>
      </div>
    </div>
  );
};
