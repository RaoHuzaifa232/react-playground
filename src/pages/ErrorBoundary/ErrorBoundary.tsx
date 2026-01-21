import { useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary, BuggyComponent } from '../../components/ErrorBoundary';

export default function ErrorBoundaryPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Error Boundaries
        </h1>

        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">What are Error Boundaries?</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Catch JavaScript errors anywhere in the component tree</li>
            <li>• Display fallback UI instead of crashing</li>
            <li>• Class components only (use react-error-boundary library for hooks)</li>
            <li>• Catch errors in rendering, lifecycle methods, and constructors</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Error Boundary Example</h3>
            <button
              onClick={() => setShouldThrow(!shouldThrow)}
              className="bg-red-500 text-white px-4 py-2 rounded mb-4"
            >
              {shouldThrow ? 'Fix Error' : 'Trigger Error'}
            </button>
            <ReactErrorBoundary>
              <BuggyComponent shouldThrow={shouldThrow} />
            </ReactErrorBoundary>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Best Practices</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Place error boundaries at strategic locations</li>
              <li>• Use for graceful error handling</li>
              <li>• Log errors to error reporting service</li>
              <li>• Don't catch errors in event handlers (use try-catch)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
