import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/Home/Home';
import About from './PAGES/About/About';
import CateringMenu from './PAGES/Menu/CateringMenu';
import MakanMartMenu from './PAGES/Menu/MakanMartMenu';
import ProductPage from './PAGES/Product/ProductPage';
import Cart from './PAGES/Cart/Cart';
import Contact from './PAGES/Contact/Contact';
import Event from './PAGES/Event/Event';
import UserProfile from './PAGES/User/UserProfile';

// import Login from './PAGES/Auth/Login';
// import Signup from './PAGES/Auth/Signup';
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

        <Route path="/product/:pagetype/:prodid" element={<ProductPage/>} />
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
