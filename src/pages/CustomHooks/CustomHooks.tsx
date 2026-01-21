import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useToggle } from '../../hooks/useToggle';

// ============================================
// useLocalStorage Example
// ============================================
function LocalStorageExample() {
  const [name, setName] = useLocalStorage('userName', 'Guest');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useLocalStorage Hook</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <p className="mt-2 text-sm text-gray-600">
            Value persists after page refresh!
          </p>
        </div>
        <div>
          <label className="block mb-2">Theme:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ============================================
// useDebounce Example
// ============================================
function DebounceExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useDebounce Hook</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        className="border p-2 rounded w-full mb-4"
      />
      <div className="space-y-2">
        <p className="text-sm">
          <span className="font-semibold">Current:</span> {searchTerm || '(empty)'}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Debounced:</span>{' '}
          {debouncedSearch || '(empty)'}
        </p>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Debounced value updates 500ms after you stop typing
      </p>
    </div>
  );
}

// ============================================
// useFetch Example
// ============================================
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function FetchExample() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
  const { data, loading, error } = useFetch<Todo>(url);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useFetch Hook</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter API URL"
      />
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {data && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre className="text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// ============================================
// useToggle Example
// ============================================
function ToggleExample() {
  const [isOpen, toggle, setValue, setTrue, setFalse] = useToggle(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">useToggle Hook</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded">
          <p className="font-semibold">Status: {isOpen ? 'Open' : 'Closed'}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={toggle}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Toggle
          </button>
          <button
            onClick={setTrue}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Open
          </button>
          <button
            onClick={setFalse}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================
export default function CustomHooks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Custom React Hooks
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LocalStorageExample />
          <DebounceExample />
          <FetchExample />
          <ToggleExample />
        </div>
        <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Why Custom Hooks?
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Reusable logic across components</li>
            <li>• Cleaner component code</li>
            <li>• Easier testing</li>
            <li>• Share stateful logic without classes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
