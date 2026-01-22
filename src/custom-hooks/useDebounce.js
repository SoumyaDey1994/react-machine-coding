import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.trim() && value !== debounceValue) {
        setDebounceValue(value.trim());
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, debounceValue]);

  return debounceValue;
};
