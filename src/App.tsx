import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import Events from './pages/Events/Events';
import Home from './pages/Home/home';
import Hooks from './pages/Hooks/Hooks';
import { BMW } from './pages/bmw/bmw';
import { Toyota } from './pages/toyota/toyota';
import { Honda } from './pages/honda/honda';
import { Ford } from './pages/ford/ford';
import { Tesla } from './pages/tesla/tesla';

function App() {
  return (
    // Jsx syntax
    <>
      <BrowserRouter>
        <Routes>
          {/* React Outlet using element "shared layout for all child routes."  */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} >
              <Route path="bmw" element={<BMW />} />
              <Route path="toyota" element={<Toyota />} />
              <Route path="honda" element={<Honda />} />
              <Route path="ford" element={<Ford />} />
              <Route path="tesla" element={<Tesla />} />
            </Route>
            <Route path="/events" element={<Events />} />
            <Route path="/hooks" element={<Hooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
