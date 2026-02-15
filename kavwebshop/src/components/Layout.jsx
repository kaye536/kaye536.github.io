import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/catalog', label: 'Products' },
    { path: '/cart', label: 'Shopping Cart' },
    { path: '/login', label: 'Login' },
  ];

  return (
    <div className="app-wrapper">
      <header>
        <div className="logo-container">
          <div className="logo">🧸🍰</div>
          <h1>Plushie Food Company</h1>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          {children}
        </main>
      </div>

      <footer>
        <p>&copy; 2024 Plushie Food Company | Contact: hello@plushiefood.com</p>
      </footer>
    </div>
  );
};

export default Layout;