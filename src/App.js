import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/Home';
import About from './PAGES/About';
import CateringMenu from './PAGES/CateringMenu';
import ProductPage from './PAGES/ProductPage';
import Cart from './PAGES/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu/cateringmenu/:category" element={<CateringMenu/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
