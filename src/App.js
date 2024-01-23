// Component Import
import Footer from './component/Footer';
import Header from './component/Header';
import About from './component/About';
import Main from './containers';
import ProductDetail from './containers/ProductDetail';
import ShopingCart from './containers/Cart';
import CheckOut from './containers/Checkout';
import PaymentSuccess from './containers/Payment-Success';
// Redux Import
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Thirtparty Import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about-us" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ShopingCart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </>
      </Router>
    </Provider>
   
  );
}

export default App;
