import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import About from './component/About';
import Main from './containers';
import ProductDetail from './containers/ProductDetail';
import ShopingCart from './containers/Cart';
import CheckOut from './containers/Checkout';
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about-us" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<ShopingCart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
