import React, { useState, useEffect } from "react";
import "./Counter.css";
const Counter: React.FC = () => {
  const [Counter, setCounter] = useState<number>(0);

  // userEffect here when i go to the counter component then in the console it will show me the message that the counter is mounted
  useEffect(() => {
    console.log("Counter Mounted");
    // this will run when the counter is unmounted
    return () => {
      console.log("Counter Unmounted");
    };
  }, []);

  // this will run when the counter is updated
  useEffect(() => {
    console.log("Counter updated count", Counter);
    // here we can return a function that will run when before the counter is updated
    return () => {
      console.log("Counter useEffect return ", Counter);
    };
  }, [Counter]);
  console.log("Counter", Counter);

  const handleIncrement = () => {
    setCounter(Counter + 1);
  };
  const handleDecrement = () => {
    // if you want to prevent the counter from going below 0
    if (Counter === 0) return;
    setCounter(Counter - 1);
  };
  return (
    <div className="counter-container">
      <div className="content">
        <p> {Counter}</p>
        <button
          // onClick={() => setCounter(Counter + 1)}
          onClick={handleIncrement}
          style={{ background: "#558e55" }}
        >
          Increase
        </button>
        <button
          // onClick={() => setCounter(Counter - 1)}
          onClick={handleDecrement}
          style={{ background: "#c56756" }}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
