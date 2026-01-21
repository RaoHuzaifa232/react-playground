import { useState, memo, useMemo, useCallback } from 'react';

// ============================================
// 1. React.memo - Memoize Components
// ============================================
interface ExpensiveChildProps {
  value: number;
  onClick: () => void;
}

// Without memo - re-renders on every parent render
const ExpensiveChildWithoutMemo = ({ value, onClick }: ExpensiveChildProps) => {
  console.log('ExpensiveChildWithoutMemo rendered');
  // Simulate expensive computation
  const expensiveValue = Array.from({ length: 1000000 }, (_, i) => i).reduce(
    (sum) => sum + 1,
    0
  );
  return (
    <div className="p-4 bg-blue-100 rounded">
      <p>Value: {value}</p>
      <p>Expensive: {expensiveValue}</p>
      <button onClick={onClick} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Click
      </button>
    </div>
  );
};

// With memo - only re-renders when props change
const ExpensiveChildWithMemo = memo(({ value, onClick }: ExpensiveChildProps) => {
  console.log('ExpensiveChildWithMemo rendered');
  const expensiveValue = Array.from({ length: 1000000 }, (_, i) => i).reduce(
    (sum) => sum + 1,
    0
  );
  return (
    <div className="p-4 bg-green-100 rounded">
      <p>Value: {value}</p>
      <p>Expensive: {expensiveValue}</p>
      <button onClick={onClick} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Click
      </button>
    </div>
  );
});

ExpensiveChildWithMemo.displayName = 'ExpensiveChildWithMemo';

// ============================================
// 2. useMemo - Memoize Expensive Calculations
// ============================================
function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  // Expensive calculation - memoized
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);

  // Without useMemo - recalculates every render
  const totalLength = items.reduce((sum, item) => sum + item.length, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useMemo Optimization</h3>
      <p>Count: {count}</p>
      <p>Total Length: {totalLength}</p>
      <p>Sorted Items: {sortedItems.join(', ') || 'None'}</p>
      <div className="space-x-2 mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment (won't trigger sort)
        </button>
        <button
          onClick={() => setItems([...items, `Item ${items.length + 1}`])}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Item (triggers sort)
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Check console - sorting only happens when items change
      </p>
    </div>
  );
}

// ============================================
// 3. useCallback - Memoize Functions
// ============================================
function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Without useCallback - new function on every render
  const handleClickWithoutCallback = () => {
    console.log('Clicked without callback');
  };

  // With useCallback - same function reference
  const handleClickWithCallback = useCallback(() => {
    console.log('Clicked with callback');
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useCallback Optimization</h3>
      <p>Count: {count}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type to trigger re-render"
        className="border p-2 rounded w-full mb-4"
      />
      <div className="space-x-2">
        <button
          onClick={handleClickWithoutCallback}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Without Callback
        </button>
        <button
          onClick={handleClickWithCallback}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          With Callback
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        useCallback prevents child components from unnecessary re-renders
      </p>
    </div>
  );
}

// ============================================
// Main Component
// ============================================
export default function Performance() {
  const [parentCount, setParentCount] = useState(0);
  const [childValue, setChildValue] = useState(0);

  // Without useCallback - new function every render
  const handleClickWithoutCallback = () => {
    setChildValue(childValue + 1);
  };

  // With useCallback - stable function reference
  const handleClickWithCallback = useCallback(() => {
    setChildValue((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Performance Optimization
        </h1>

        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">React.memo Comparison</h2>
          <p className="text-gray-300 mb-4">
            Parent Count: {parentCount} (increment to see re-render behavior)
          </p>
          <button
            onClick={() => setParentCount(parentCount + 1)}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Increment Parent
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ExpensiveChildWithoutMemo
              value={childValue}
              onClick={handleClickWithoutCallback}
            />
            <ExpensiveChildWithMemo
              value={childValue}
              onClick={handleClickWithCallback}
            />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Check console - memoized component only re-renders when props change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UseMemoExample />
          <UseCallbackExample />
        </div>

        <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Performance Tips</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Use React.memo for expensive components</li>
            <li>• Use useMemo for expensive calculations</li>
            <li>• Use useCallback for functions passed as props</li>
            <li>• Avoid creating objects/arrays in render</li>
            <li>• Use React DevTools Profiler to identify bottlenecks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
