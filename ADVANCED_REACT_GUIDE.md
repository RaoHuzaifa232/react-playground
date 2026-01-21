# Advanced React Learning Guide

This guide covers all the advanced React concepts implemented in this project.

## 📚 Table of Contents

1. [Advanced Hooks](#advanced-hooks)
2. [Custom Hooks](#custom-hooks)
3. [Context API](#context-api)
4. [Performance Optimization](#performance-optimization)
5. [Advanced Patterns](#advanced-patterns)
6. [Error Boundaries](#error-boundaries)

---

## 🎣 Advanced Hooks

### useEffect
- **Purpose**: Handle side effects and lifecycle events
- **Use Cases**: 
  - API calls
  - Subscriptions
  - DOM manipulation
  - Cleanup functions
- **Example**: `src/pages/AdvancedHooks/AdvancedHooks.tsx`

### useMemo
- **Purpose**: Memoize expensive calculations
- **Use Cases**: 
  - Expensive computations
  - Preventing unnecessary recalculations
- **Example**: `src/pages/AdvancedHooks/AdvancedHooks.tsx`

### useCallback
- **Purpose**: Memoize functions to prevent re-renders
- **Use Cases**: 
  - Functions passed as props
  - Optimizing child components
- **Example**: `src/pages/AdvancedHooks/AdvancedHooks.tsx`

### useRef
- **Purpose**: Access DOM elements and store mutable values
- **Use Cases**: 
  - DOM references
  - Storing values without causing re-renders
- **Example**: `src/pages/AdvancedHooks/AdvancedHooks.tsx`

### useReducer
- **Purpose**: Manage complex state logic
- **Use Cases**: 
  - Complex state updates
  - State machines
  - Redux-like state management
- **Example**: `src/pages/AdvancedHooks/AdvancedHooks.tsx`

---

## 🛠️ Custom Hooks

### useLocalStorage
- **Purpose**: Sync state with localStorage
- **Location**: `src/hooks/useLocalStorage.ts`
- **Usage**:
```typescript
const [value, setValue] = useLocalStorage('key', 'default');
```

### useDebounce
- **Purpose**: Debounce values (useful for search)
- **Location**: `src/hooks/useDebounce.ts`
- **Usage**:
```typescript
const debouncedValue = useDebounce(searchTerm, 500);
```

### useFetch
- **Purpose**: Fetch data with loading/error states
- **Location**: `src/hooks/useFetch.ts`
- **Usage**:
```typescript
const { data, loading, error } = useFetch('https://api.example.com/data');
```

### useToggle
- **Purpose**: Boolean toggle state
- **Location**: `src/hooks/useToggle.ts`
- **Usage**:
```typescript
const [isOpen, toggle] = useToggle(false);
```

---

## 🌐 Context API

### Theme Context
- **Purpose**: Manage theme (light/dark) globally
- **Location**: `src/context/ThemeContext.tsx`
- **Usage**:
```typescript
const { theme, toggleTheme } = useTheme();
```

### User Context
- **Purpose**: Manage user authentication state
- **Location**: `src/context/UserContext.tsx`
- **Usage**:
```typescript
const { user, login, logout, isAuthenticated } = useUser();
```

### Best Practices
- Create separate contexts for different concerns
- Use custom hooks to consume contexts
- Wrap providers at appropriate levels

---

## ⚡ Performance Optimization

### React.memo
- **Purpose**: Prevent unnecessary re-renders
- **When to use**: 
  - Expensive components
  - Components that receive same props frequently
- **Example**: `src/pages/Performance/Performance.tsx`

### useMemo
- **Purpose**: Memoize expensive calculations
- **When to use**: 
  - Complex computations
  - Derived state calculations
- **Example**: `src/pages/Performance/Performance.tsx`

### useCallback
- **Purpose**: Memoize functions
- **When to use**: 
  - Functions passed to memoized components
  - Event handlers in lists
- **Example**: `src/pages/Performance/Performance.tsx`

### Performance Tips
1. Use React DevTools Profiler to identify bottlenecks
2. Avoid creating objects/arrays in render
3. Memoize expensive components
4. Use code splitting for large apps

---

## 🎨 Advanced Patterns

### Higher-Order Components (HOC)
- **Purpose**: Reuse component logic
- **Example**: `withLoading` HOC in `src/pages/AdvancedPatterns/AdvancedPatterns.tsx`
- **Use Cases**: 
  - Authentication
  - Loading states
  - Data fetching

### Render Props
- **Purpose**: Share code between components using props
- **Example**: `Mouse` component in `src/pages/AdvancedPatterns/AdvancedPatterns.tsx`
- **Use Cases**: 
  - Shared state logic
  - Cross-cutting concerns

### Compound Components
- **Purpose**: Components that work together
- **Example**: `Accordion` component in `src/pages/AdvancedPatterns/AdvancedPatterns.tsx`
- **Use Cases**: 
  - Complex UI components
  - Flexible component APIs

### Controlled vs Uncontrolled
- **Controlled**: React controls the value
- **Uncontrolled**: DOM controls the value
- **Example**: Input components in `src/pages/AdvancedPatterns/AdvancedPatterns.tsx`

---

## 🛡️ Error Boundaries

### Error Boundary Component
- **Purpose**: Catch JavaScript errors in component tree
- **Location**: `src/components/ErrorBoundary.tsx`
- **Features**:
  - Display fallback UI
  - Log errors
  - Prevent app crashes

### Best Practices
1. Place error boundaries at strategic locations
2. Use for graceful error handling
3. Log errors to error reporting service
4. Don't catch errors in event handlers (use try-catch)

---

## 🚀 Getting Started

1. **Start the dev server**:
```bash
npm run dev
```

2. **Navigate to Advanced Learning**:
   - Click "Advanced Learning" in the navigation
   - Or visit `/advanced-learning`

3. **Explore each topic**:
   - Each page has interactive examples
   - Modify the code to see how it behaves
   - Check browser console for logs

---

## 📖 Learning Path

1. **Start with Advanced Hooks** - Foundation for everything else
2. **Build Custom Hooks** - Reusable logic patterns
3. **Master Context API** - Global state management
4. **Optimize Performance** - Make apps faster
5. **Explore Advanced Patterns** - Production-ready patterns
6. **Handle Errors Gracefully** - Error boundaries

---

## 💡 Tips

- **Experiment**: Modify the code examples to see how they behave
- **Console**: Open browser DevTools to see logs and understand flow
- **Comments**: Read code comments - they explain what's happening
- **Combine**: Try combining multiple concepts together
- **Build**: Create your own variations of these examples

---

## 🔗 Resources

- [React Official Docs](https://react.dev)
- [React Hooks Reference](https://react.dev/reference/react)
- [React Patterns](https://reactpatterns.com)
- [Kent C. Dodds Blog](https://kentcdodds.com/blog)

---

## 📝 Notes

- All examples use TypeScript for type safety
- Tailwind CSS is used for styling
- React Router is used for navigation
- Examples are production-ready patterns

Happy Learning! 🎉
