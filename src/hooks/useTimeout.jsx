import { useEffect, useRef } from "react";

export default function useTimeout(callback = () => {}, delay = 1000) {
  if (typeof delay !== "number" || delay < 0) {
    throw new Error(
      "Invalid delay value. Please provide a non-negative numeric value."
    );
  }

  if (typeof callback !== "function") {
    throw new Error("Invalid callback. Please provide a function.");
  }

  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => callbackRef.current();
    timeoutRef.current = setTimeout(tick, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  return [timeoutRef, callbackRef];
}
