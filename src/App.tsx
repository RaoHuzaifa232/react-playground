import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import Events from './pages/Events/Events';
import Home from './pages/Home/home';
import Hooks from './pages/Hooks/Hooks';
import { BMW } from './pages/bmw/bmw';
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
              {/* <Route path="ford" element={<BikeProducts />} /> */}
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
