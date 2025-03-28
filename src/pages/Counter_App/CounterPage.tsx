import { useState } from "react";
import Button from "@components/ui/Button";
import CounterDisplay from "@components/CounterApp/CounterDisplay";
import CounterControls from "@components/CounterApp/CounterControls";
import CounterHistory from "@components/CounterApp/CounterHistory";
import useCounter from "@hooks/useCounter";

const CounterPage = () => {
  const { count, increment, decrement, reset, incrementBy, history } =
    useCounter();

  const [incrementAmount, setIncrementAmount] = useState(5);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setIncrementAmount(value);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Counter App</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <CounterDisplay count={count} />

        <CounterControls
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="number"
            value={incrementAmount}
            onChange={handleAmountChange}
            className="w-full sm:w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
            aria-label="Increment amount"
          />

          <Button
            onClick={() => incrementBy(incrementAmount)}
            className="w-full sm:w-auto"
          >
            Add {incrementAmount}
          </Button>
        </div>
      </div>

      <CounterHistory history={history} />
    </div>
  );
};

export default CounterPage;

// import React from "react";
// import Counter from "@components/CounterApp/Counter";
// const CounterApp = () => {
//   // we can also make toggle button to show and hide the counter component using the state
//   const [showCounter, setShowCounter] = React.useState<boolean>(true);
//   return (
//     <div className="default content">
//       <h1>Counter App Component</h1>
//       <Counter /> <br />
//       <button onClick={() => setShowCounter(!showCounter)}>Toggle</button>
//       {showCounter ? <Counter /> : ""}
//       <br />
//       <button onClick={() => (window.location.href = "/")}>Home</button>
//     </div>
//   );
// };

// export default CounterApp;
