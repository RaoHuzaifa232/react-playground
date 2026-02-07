import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Existing pages
import Home from './pages/Home/home';
import Hooks from './pages/Hooks/Hooks';
import Events from './pages/Events/Events';

// Advanced learning pages
import AdvancedHooks from './pages/AdvancedHooks/AdvancedHooks';
import CustomHooks from './pages/CustomHooks/CustomHooks';
import ContextAPI from './pages/ContextAPI/ContextAPI';
import Performance from './pages/Performance/Performance';
import AdvancedPatterns from './pages/AdvancedPatterns/AdvancedPatterns';
import ErrorBoundaryPage from './pages/ErrorBoundary/ErrorBoundary';
import AdvancedLearning from './pages/AdvancedLearning/AdvancedLearning';

// Auth pages
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

// Context
import { UserProvider, useUser } from './context/UserContext';

function Navigation() {
  const { user, logout, isAuthenticated } = useUser();

  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            React Playground
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/hooks"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Basic Hooks
            </Link>
            <Link
              to="/advanced-learning"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Advanced Learning
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
                <span className="text-gray-300 text-sm">
                  Hi, <span className="text-indigo-400 font-medium">{user?.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="min-h-screen bg-gray-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/events" element={<Events />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Advanced Learning Routes */}
            <Route path="/advanced-learning" element={<AdvancedLearning />} />
            <Route path="/advanced-hooks" element={<AdvancedHooks />} />
            <Route path="/custom-hooks" element={<CustomHooks />} />
            <Route path="/context-api" element={<ContextAPI />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/advanced-patterns" element={<AdvancedPatterns />} />
            <Route path="/error-boundary" element={<ErrorBoundaryPage />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
