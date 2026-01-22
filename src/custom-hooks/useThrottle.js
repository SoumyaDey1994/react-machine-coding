import { useEffect, useRef, useState } from "react";

export const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  const lastRun = useRef(0);

  useEffect(() => {
    const now = Date.now();
    if (now - lastRun.current >= delay) {
      lastRun.current = now;
      if (value !== throttledValue) {
        setThrottledValue(value);
      }
    }
  }, [value, delay, throttledValue]);

  return throttledValue;
};
