import { useEffect, useRef, useState } from "react";
import "./index.css";

const NO_OF_DIGITS = 6;

export function OtpInput22012026() {
  const [otpInput, setOtpInput] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRef = useRef([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const shouldEnableSubmit = otpInput.filter(Boolean).length === NO_OF_DIGITS;
    setIsBtnDisabled(!shouldEnableSubmit);
  }, [otpInput]);

  const handleInput = (value, index) => {
    value = value.trim();

    if (isNaN(value)) return;

    setOtpInput((prev) => {
      const tempValues = [...prev];
      tempValues[index] = value.slice(-1);
      return tempValues;
    });

    value && inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (event, index) => {
    const value = event.target.value.trim();
    const key = event.key;

    if (!value && key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <h1>OTP Input - 22nd Jan, 2026</h1>
      {otpInput?.length > 0 &&
        otpInput.map((input, idx) => (
          <input
            type="text"
            className="otp-input"
            key={idx}
            value={input}
            ref={(input) => (inputRef.current[idx] = input)}
            onChange={(e) => handleInput(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      <button type="button" className="otp-btn" disabled={isBtnDisabled}>
        Submit
      </button>
    </div>
  );
}
