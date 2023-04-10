import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/Home';
import About from './PAGES/About';
import CateringMenu from './PAGES/CateringMenu';
import ProductPage from './PAGES/ProductPage';
import Cart from './PAGES/Cart';
import Contact from './PAGES/Contact';
import Event from './PAGES/Event';
import UserProfile from './PAGES/UserProfile';
import MakanMart from './COMPONENTS/Product/MakanMart';
import MakanMartMenu from './PAGES/MakanMartMenu';
// import Login from './PAGES/Auth/Login';
// import Signup from './PAGES/Auth/Signup';

function App() {
  return (
    <BrowserRouter
     basename='/'
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu/cateringmenu/:mycategoryid" element={<CateringMenu/>} />
        <Route path="/menu/makanmart/:mycategoryid" element={<MakanMartMenu/>} />

        <Route path="/product/:prodid" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/event" element={
          <Event/>
        } />
        <Route path="/user/:activepage" element={<UserProfile/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="/signup" element={<Signup/>} /> */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// produts categroy page 2 headings , filter by price , sidebar subcategory , latest additions
// make all banners like about us page banner & fixed on scroll
// contact us phone number country code selection option
