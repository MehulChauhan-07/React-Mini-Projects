interface CounterDisplayProps {
  count: number;
}

const CounterDisplay = ({ count }: CounterDisplayProps) => {
  return (
    <div className="text-center py-6">
      <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
        Current Count
      </h2>
      <div className="text-6xl font-bold" data-testid="counter-display">
        {count}
      </div>
    </div>
  );
};

export default CounterDisplay;
