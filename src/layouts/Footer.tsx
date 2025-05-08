import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#2c3e50', color: 'white', padding: '1rem 0', marginTop: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} VLXD ABC. All rights reserved.</p>
        <p>Địa chỉ: 123 Đường Xây Dựng, Quận 9, TP.HCM | SĐT: 0123 456 789</p>
      </div>
      <div className="bg-red-500 text-white p-4">
  Nếu bạn thấy nền đỏ, thì Tailwind đã hoạt động 🎉
</div>

    </footer>
  );
};

export default Footer;
