import { useState, useEffect, useMemo, useCallback, useRef, useReducer, memo } from 'react';

// ============================================
// 1. useEffect - Side Effects & Lifecycle
// ============================================
export function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Runs after every render
  useEffect(() => {
    console.log('Component rendered or updated');
  });

  // Runs only once on mount (componentDidMount)
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount (cleanup)');
    };
  }, []);

  // Runs when count changes (componentDidUpdate for count)
  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = 'React App';
    };
  }, [count]);

  // Cleanup example - subscription
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useEffect Hook</h3>
      <p className="mb-2">Count: {count}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
        className="border p-2 rounded mb-4"
      />
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <p className="mt-4 text-sm text-gray-600">
        Check console and document title to see effects
      </p>
    </div>
  );
}

// ============================================
// 2. useMemo - Memoization (Performance)
// ============================================
export function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  // Expensive calculation - only recomputes when items change
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return items.reduce((sum, item) => sum + item.length, 0);
  }, [items]);

  // Without useMemo, this would run on every render
  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useMemo Hook</h3>
      <p className="mb-2">Count: {count}</p>
      <p className="mb-2">Double Count: {doubleCount}</p>
      <p className="mb-2">Total Characters: {expensiveValue}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increment Count
      </button>
      <button
        onClick={() => setItems([...items, 'New Item'])}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
      <p className="mt-4 text-sm text-gray-600">
        Expensive calculation only runs when items change
      </p>
    </div>
  );
}

// ============================================
// 3. useCallback - Memoized Functions
// ============================================
interface ChildProps {
  onClick: () => void;
  name: string;
}

const ChildComponent = memo(({ onClick, name }: ChildProps) => {
  console.log(`Child ${name} rendered`);
  return (
    <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded">
      Click {name}
    </button>
  );
});

ChildComponent.displayName = 'ChildComponent';

export function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Parent');

  // Without useCallback, this function is recreated on every render
  // With useCallback, it's only recreated when dependencies change
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount((prev) => prev + 1);
  }, []); // Empty deps = function never changes

  const handleNameChange = useCallback(() => {
    setName((prev) => prev + '!');
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useCallback Hook</h3>
      <p className="mb-2">Count: {count}</p>
      <p className="mb-2">Name: {name}</p>
      <div className="space-x-2">
        <ChildComponent onClick={handleClick} name="Button 1" />
        <ChildComponent onClick={handleNameChange} name="Button 2" />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Check console - child components won't re-render unnecessarily
      </p>
    </div>
  );
}

// ============================================
// 4. useRef - Mutable References
// ============================================
export function UseRefExample() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleIncrement = () => {
    countRef.current += 1;
    setCount(count + 1);
    console.log('State count:', count + 1);
    console.log('Ref count:', countRef.current);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useRef Hook</h3>
      <p className="mb-2">State Count: {count}</p>
      <p className="mb-2">Ref Count: {countRef.current}</p>
      <p className="mb-2">Render Count: {renderCountRef.current}</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me with button"
        className="border p-2 rounded mb-2"
      />
      <div className="space-x-2">
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={handleFocus}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        useRef doesn't cause re-renders when value changes
      </p>
    </div>
  );
}

// ============================================
// 5. useReducer - Complex State Management
// ============================================
interface State {
  count: number;
  step: number;
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'setStep'; payload: number };

const initialState: State = { count: 0, step: 1 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return initialState;
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useReducer Hook</h3>
      <p className="mb-2">Count: {state.count}</p>
      <p className="mb-2">Step: {state.step}</p>
      <div className="space-x-2 mb-4">
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
      <input
        type="number"
        value={state.step}
        onChange={(e) =>
          dispatch({ type: 'setStep', payload: Number(e.target.value) })
        }
        placeholder="Set step"
        className="border p-2 rounded"
      />
      <p className="mt-4 text-sm text-gray-600">
        useReducer is great for complex state logic
      </p>
    </div>
  );
}

// ============================================
// Main Component
// ============================================
export default function AdvancedHooks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Advanced React Hooks
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UseEffectExample />
          <UseMemoExample />
          <UseCallbackExample />
          <UseRefExample />
          <UseReducerExample />
        </div>
      </div>
    </div>
  );
}
