import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/Home';
import About from './PAGES/About';
import CateringMenu from './PAGES/CateringMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu/cateringmenu/:category" element={<CateringMenu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
