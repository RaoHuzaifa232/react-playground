import { ThemeProvider, useTheme } from '../../context/ThemeContext';
import { UserProvider, useUser } from '../../context/UserContext';

// ============================================
// Theme Consumer Component
// ============================================
function ThemeDisplay() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-6 rounded-lg shadow-lg ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <h3 className="text-2xl font-bold mb-4">Theme Context</h3>
      <p className="mb-4">Current theme: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === 'dark'
            ? 'bg-white text-gray-900'
            : 'bg-gray-900 text-white'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

// ============================================
// User Consumer Component
// ============================================
function UserDisplay() {
  const { user, login, logout, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">User Context</h3>
        <p className="mb-4 text-gray-600">Not logged in</p>
        <button
          onClick={() => login({ id: 1, name: 'John Doe', email: 'john@example.com' })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">User Context</h3>
      <div className="space-y-2 mb-4">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>ID:</strong> {user?.id}</p>
      </div>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

// ============================================
// Combined Example
// ============================================
function CombinedExample() {
  const { theme } = useTheme();
  const { user, isAuthenticated } = useUser();

  return (
    <div className={`p-6 rounded-lg shadow-lg ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <h3 className="text-2xl font-bold mb-4">Multiple Contexts</h3>
      <p className="mb-2">Theme: {theme}</p>
      <p>User: {isAuthenticated ? user?.name : 'Not logged in'}</p>
    </div>
  );
}

// ============================================
// Main Component with Providers
// ============================================
function ContextContent() {
  return (
    <div className="space-y-6">
      <ThemeDisplay />
      <UserDisplay />
      <CombinedExample />
    </div>
  );
}

export default function ContextAPI() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Context API
            </h1>
            <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">What is Context API?</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Share data across component tree without prop drilling</li>
                <li>• Global state management solution</li>
                <li>• Provider pattern for wrapping components</li>
                <li>• Custom hooks for consuming context</li>
              </ul>
            </div>
            <ContextContent />
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
