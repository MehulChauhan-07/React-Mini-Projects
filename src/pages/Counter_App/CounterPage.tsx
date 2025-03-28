import React from "react";
import Counter from "@components/CounterApp/Counter";
const CounterApp = () => {
  // we can also make toggle button to show and hide the counter component using the state
  const [showCounter, setShowCounter] = React.useState<boolean>(true);
  return (
    <div className="default content">
      <h1>Counter App Component</h1>
      <Counter /> <br />
      <button onClick={() => setShowCounter(!showCounter)}>Toggle</button>
      {showCounter ? <Counter /> : ""}
      <br />
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default CounterApp;
