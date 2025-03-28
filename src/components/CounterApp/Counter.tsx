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
    <div className="flex flex-col items-center justify-center bg-gray-800 dark:bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold mb-4">{Counter}</p>
        <button
          onClick={handleIncrement}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg mt-2 border-3 border-transparent hover:border-white transition-colors duration-300"
        >
          Increase
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg mt-2 border-3 border-transparent hover:border-white transition-colors duration-300"
        >
          decrease
        </button>
      </div>
    </div>
    // <div className="counter-container">
    //   <div className="content">
    //     <p> {Counter}</p>
    //     <button
    //       // onClick={() => setCounter(Counter + 1)}
    //       onClick={handleIncrement}
    //       style={{ background: "#558e55" }}
    //     >
    //       Increase
    //     </button>
    //     <button
    //       // onClick={() => setCounter(Counter - 1)}
    //       onClick={handleDecrement}
    //       style={{ background: "#c56756" }}
    //     >
    //       decrease
    //     </button>
    //   </div>
    // </div>
  );
};

export default Counter;
