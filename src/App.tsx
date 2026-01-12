import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import Events from './pages/Events/Events';
import Home from './pages/Home/home';
import Hooks from './pages/Hooks/Hooks';
function App() {
  return (
    // Jsx syntax
    <>
      <BrowserRouter>
        <Header variant='compact' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
