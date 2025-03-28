interface HistoryItem {
  id: number;
  value: number;
  action: string;
  timestamp: Date;
}

interface CounterHistoryProps {
  history: HistoryItem[];
}

const CounterHistory = ({ history }: CounterHistoryProps) => {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">History</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center py-4">
          No actions performed yet
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">History</h2>

      <div className="max-h-60 overflow-y-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-2 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-right">Value</th>
              <th className="py-2 px-4 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="py-2 px-4">{item.action}</td>
                <td className="py-2 px-4 text-right">{item.value}</td>
                <td className="py-2 px-4 text-right text-sm text-gray-600 dark:text-gray-300">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CounterHistory;
