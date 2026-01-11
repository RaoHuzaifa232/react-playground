import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import Events from './pages/Events/Events';
import Home from './pages/Home/home';

function App() {
  return (
    // Jsx syntax
    <>
      <BrowserRouter>
        <Header variant='minimal' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
