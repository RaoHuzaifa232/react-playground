import React, { useState, ReactNode, ComponentType } from 'react';

// ============================================
// 1. Higher-Order Component (HOC)
// ============================================
interface WithLoadingProps {
  loading: boolean;
}

function withLoading<P extends object>(
  Component: ComponentType<P>
): ComponentType<P & WithLoadingProps> {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { loading, ...restProps } = props;
    
    if (loading) {
      return (
        <div className="p-4 bg-gray-100 rounded">
          <p>Loading...</p>
        </div>
      );
    }
    
    return <Component {...(restProps as P)} />;
  };
}

// Example component
function UserProfile({ name, email }: { name: string; email: string }) {
  return (
    <div className="p-4 bg-blue-100 rounded">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

// Enhanced component with HOC
const UserProfileWithLoading = withLoading(UserProfile);

// ============================================
// 2. Render Props Pattern
// ============================================
interface MousePosition {
  x: number;
  y: number;
}

interface MouseProps {
  render: (mouse: MousePosition) => ReactNode;
}

function Mouse({ render }: MouseProps) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="h-64 bg-gray-200 rounded">
      {render(position)}
    </div>
  );
}

// ============================================
// 3. Compound Components Pattern
// ============================================
interface AccordionContextType {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

function Accordion({ children }: { children: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }: { index: number; title: string; children: ReactNode }) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionItem must be used within Accordion');
  
  const { openIndex, setOpenIndex } = context;
  const isOpen = openIndex === index;

  return (
    <div className="border rounded">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
      >
        {title} {isOpen ? '▼' : '▶'}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

Accordion.Item = AccordionItem;

// ============================================
// 4. Controlled vs Uncontrolled Components
// ============================================
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="font-bold mb-2">Controlled Input</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type here..."
      />
      <p className="mt-2 text-sm">Value: {value}</p>
    </div>
  );
}

function UncontrolledInput() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(`Value: ${inputRef.current?.value}`);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="font-bold mb-2">Uncontrolled Input</h4>
      <input
        ref={inputRef}
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Type here..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Value
      </button>
    </div>
  );
}

// ============================================
// Main Component
// ============================================
export default function AdvancedPatterns() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Advanced React Patterns
        </h1>

        <div className="space-y-8">
          {/* HOC Example */}
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Higher-Order Component (HOC)</h2>
            <div className="space-y-4">
              <button
                onClick={() => setLoading(!loading)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Toggle Loading
              </button>
              <UserProfileWithLoading
                loading={loading}
                name="John Doe"
                email="john@example.com"
              />
            </div>
          </div>

          {/* Render Props Example */}
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Render Props Pattern</h2>
            <Mouse
              render={({ x, y }) => (
                <div className="text-center text-white">
                  <p>Mouse Position: ({x}, {y})</p>
                  <p className="text-sm mt-2">Move your mouse over the gray area</p>
                </div>
              )}
            />
          </div>

          {/* Compound Components Example */}
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Compound Components Pattern</h2>
            <Accordion>
              <Accordion.Item index={0} title="What is React?">
                <p>React is a JavaScript library for building user interfaces.</p>
              </Accordion.Item>
              <Accordion.Item index={1} title="What are Hooks?">
                <p>Hooks are functions that let you use state and other React features in functional components.</p>
              </Accordion.Item>
              <Accordion.Item index={2} title="What is JSX?">
                <p>JSX is a syntax extension that lets you write HTML-like code in JavaScript.</p>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Controlled vs Uncontrolled */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ControlledInput />
            <UncontrolledInput />
          </div>
        </div>
      </div>
    </div>
  );
}

