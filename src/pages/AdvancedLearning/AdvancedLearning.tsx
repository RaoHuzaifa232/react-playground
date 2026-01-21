import { Link } from 'react-router-dom';

interface LearningCardProps {
  title: string;
  description: string;
  link: string;
  gradient: string;
  concepts: string[];
}

function LearningCard({ title, description, link, gradient, concepts }: LearningCardProps) {
  return (
    <Link
      to={link}
      className={`block p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${gradient}`}
    >
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <ul className="space-y-1">
        {concepts.map((concept, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-center">
            <span className="mr-2">✓</span>
            {concept}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default function AdvancedLearning() {
  const learningPaths = [
    {
      title: 'Advanced Hooks',
      description: 'Master useEffect, useMemo, useCallback, useRef, and useReducer',
      link: '/advanced-hooks',
      gradient: 'from-blue-600 to-blue-800',
      concepts: [
        'useEffect for side effects',
        'useMemo for memoization',
        'useCallback for function memoization',
        'useRef for mutable references',
        'useReducer for complex state',
      ],
    },
    {
      title: 'Custom Hooks',
      description: 'Create reusable logic with custom hooks',
      link: '/custom-hooks',
      gradient: 'from-purple-600 to-purple-800',
      concepts: [
        'useLocalStorage hook',
        'useDebounce hook',
        'useFetch hook',
        'useToggle hook',
        'Building reusable logic',
      ],
    },
    {
      title: 'Context API',
      description: 'Manage global state without prop drilling',
      link: '/context-api',
      gradient: 'from-indigo-600 to-indigo-800',
      concepts: [
        'Creating contexts',
        'Provider pattern',
        'Consuming contexts',
        'Multiple contexts',
        'Custom context hooks',
      ],
    },
    {
      title: 'Performance',
      description: 'Optimize React applications for better performance',
      link: '/performance',
      gradient: 'from-green-600 to-green-800',
      concepts: [
        'React.memo',
        'useMemo optimization',
        'useCallback optimization',
        'Preventing unnecessary re-renders',
        'Performance best practices',
      ],
    },
    {
      title: 'Advanced Patterns',
      description: 'Learn advanced React patterns and techniques',
      link: '/advanced-patterns',
      gradient: 'from-pink-600 to-pink-800',
      concepts: [
        'Higher-Order Components (HOC)',
        'Render Props pattern',
        'Compound Components',
        'Controlled vs Uncontrolled',
        'Design patterns',
      ],
    },
    {
      title: 'Error Boundaries',
      description: 'Handle errors gracefully in React applications',
      link: '/error-boundary',
      gradient: 'from-red-600 to-red-800',
      concepts: [
        'Error boundary class components',
        'Error handling strategies',
        'Fallback UI',
        'Error logging',
        'Best practices',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Advanced React Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master advanced React concepts with hands-on examples and interactive demos.
            Each topic includes practical examples you can experiment with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningPaths.map((path) => (
            <LearningCard key={path.link} {...path} />
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Learning Path</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">1</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Start with Advanced Hooks</h3>
                <p>Learn useEffect, useMemo, useCallback, useRef, and useReducer. These are fundamental for building complex applications.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">2</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Build Custom Hooks</h3>
                <p>Create reusable logic by building your own custom hooks. This helps keep your components clean and DRY.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">3</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Master Context API</h3>
                <p>Learn to manage global state without prop drilling. Essential for larger applications.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">4</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Optimize Performance</h3>
                <p>Learn React.memo, useMemo, and useCallback to prevent unnecessary re-renders and improve app performance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">5</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Explore Advanced Patterns</h3>
                <p>Understand HOCs, Render Props, Compound Components, and other advanced patterns used in production apps.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-indigo-400 mr-4">6</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Handle Errors Gracefully</h3>
                <p>Implement error boundaries to catch and handle errors without crashing your entire application.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">💡 Pro Tips</h3>
          <ul className="space-y-2 text-gray-200">
            <li>• Experiment with each example - modify the code to see how it behaves</li>
            <li>• Open browser DevTools console to see logs and understand the flow</li>
            <li>• Try combining multiple concepts together</li>
            <li>• Read the comments in the code - they explain what's happening</li>
            <li>• Build your own variations of these examples</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
