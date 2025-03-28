import { useState, useCallback } from "react";

interface HistoryItem {
  id: number;
  value: number;
  action: string;
  timestamp: Date;
}

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = useCallback((value: number, action: string) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        value,
        action,
        timestamp: new Date(),
      },
      ...prev,
    ]);
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    addToHistory(1, "Increment");
  }, [addToHistory]);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
    addToHistory(-1, "Decrement");
  }, [addToHistory]);

  const reset = useCallback(() => {
    setCount(initialValue);
    addToHistory(initialValue - count, "Reset");
  }, [initialValue, count, addToHistory]);

  const incrementBy = useCallback(
    (value: number) => {
      setCount((prev) => prev + value);
      addToHistory(value, `Add ${value}`);
    },
    [addToHistory]
  );

  return {
    count,
    increment,
    decrement,
    reset,
    incrementBy,
    history,
  };
};

export default useCounter;
