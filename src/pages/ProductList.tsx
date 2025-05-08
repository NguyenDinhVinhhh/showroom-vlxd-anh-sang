import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Xi măng Hà Tiên',
    image: 'https://via.placeholder.com/150',
    price: 120000
  },
  {
    id: 2,
    name: 'Gạch đỏ 4 lỗ',
    image: 'https://via.placeholder.com/150',
    price: 950
  },
  {
    id: 3,
    name: 'Thép Việt Nhật',
    image: 'https://via.placeholder.com/150',
    price: 250000
  }
];

const ProductList: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Danh sách vật liệu xây dựng</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              width: '200px',
              borderRadius: '8px'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <h4>{product.name}</h4>
            <p>Giá: {product.price.toLocaleString()} VND</p>
            <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
