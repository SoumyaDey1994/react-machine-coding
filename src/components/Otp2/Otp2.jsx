import { useEffect, useRef, useState } from "react";
import "./otp2.css";

const NO_OF_DIGITS = 6;

export const Otp2 = () => {
  const [otpInput, setOtpInput] = useState(new Array(NO_OF_DIGITS).fill(""));
  const inputRef = useRef([]);
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    setIsBtnEnabled(() => {
      return otpInput.filter(Boolean).length === NO_OF_DIGITS;
    });
  }, [otpInput]);

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value.trim();
    if (isNaN(value)) return;

    setOtpInput((prev) => {
      const newState = [...prev];
      newState[index] = value.slice(-1);
      return newState;
    });

    value && inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (event, index) => {
    const key = event.key;
    const value = event.target.value;

    if (key.toLowerCase() === "backspace" && index >= 0 && !value) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <h1>OTP Input 2</h1>
      {otpInput?.map((inp, idx) => {
        return (
          <input
            type="text"
            key={idx}
            value={inp}
            ref={(input) => (inputRef.current[idx] = input)}
            className="otp-input-box"
            onChange={(e) => handleOtpInputChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        );
      })}
      <div>
        <button type="button" className="submit-btn" disabled={!isBtnEnabled}>
          Submit
        </button>
      </div>
    </div>
  );
};
