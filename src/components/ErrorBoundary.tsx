import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-6 bg-red-100 border border-red-400 rounded-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Something went wrong
            </h2>
            <p className="text-red-600 mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

// Component that throws an error for testing
export function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('This is a test error!');
  }
  return <div className="p-4 bg-green-100 rounded">Everything is fine!</div>;
}
