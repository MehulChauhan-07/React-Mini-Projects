import Button from "@components/ui/Button";

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const CounterControls = ({
  onIncrement,
  onDecrement,
  onReset,
}: CounterControlsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        variant="primary"
        onClick={onIncrement}
        aria-label="Increment counter"
        data-testid="increment-button"
      >
        Increment (+1)
      </Button>

      <Button
        variant="danger"
        onClick={onDecrement}
        aria-label="Decrement counter"
        data-testid="decrement-button"
      >
        Decrement (-1)
      </Button>

      <Button
        variant="secondary"
        onClick={onReset}
        aria-label="Reset counter"
        data-testid="reset-button"
      >
        Reset
      </Button>
    </div>
  );
};

export default CounterControls;
