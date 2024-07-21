import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './scenes/Home';
import Details from './scenes/Details';
import Cart from './scenes/Cart';
import UploadBookForm from './components/UploadBookForm';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/upload" element={<UploadBookForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
