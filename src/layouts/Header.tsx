import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header style={{ padding: '1rem', background: '#2c3e50', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VLXD ABC</Link>
        </h1>

        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: isActive('/') ? '#f1c40f' : 'white', textDecoration: 'none' }}>Trang chủ</Link>
          <Link to="/products" style={{ color: isActive('/products') ? '#f1c40f' : 'white', textDecoration: 'none' }}>Sản phẩm</Link>
          <Link to="/contact" style={{ color: isActive('/contact') ? '#f1c40f' : 'white', textDecoration: 'none' }}>Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
