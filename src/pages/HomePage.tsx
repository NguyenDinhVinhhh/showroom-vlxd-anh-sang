import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Chào mừng đến với Vật Liệu Xây Dựng ABC</h1>
      <p>
        Chúng tôi chuyên cung cấp các loại vật liệu xây dựng chất lượng như: xi măng, gạch, cát đá, sắt thép...
      </p>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/products" style={{ marginRight: '1rem' }}>Xem sản phẩm</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>
    </div>
  );
};

export default HomePage;
