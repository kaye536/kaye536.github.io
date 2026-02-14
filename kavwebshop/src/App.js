import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;