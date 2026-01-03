import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const NO_OF_DIGITS = 6;

export const OtpInput = () => {
  const [otpInputs, setOtpInputs] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRefs = useRef([]); // tricky part - for updating focus in input box
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (otpInputs.filter(Boolean).length === NO_OF_DIGITS) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [otpInputs]);

  const handleInput = (event, index) => {
    const value = event.target?.value.trim();

    if (isNaN(value)) return;

    const tempInputs = [...otpInputs];
    tempInputs[index] = value.slice(-1);
    setOtpInputs(tempInputs);

    value && inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (event, index) => {
    const value = event.target?.value.trim();

    if (event.key === "Backspace" && !value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <h1>OTP Input</h1>
      {otpInputs.length > 0 &&
        otpInputs.map((input, index) => (
          <input
            type="text"
            className="otp-input"
            key={index}
            value={input}
            ref={(input) => (inputRefs.current[index] = input)} // Trick part - setting up ref to each input
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      <button type="submit" disabled={isBtnDisabled} className="otp-btn">
        Submit
      </button>
    </div>
  );
};
