import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #0A0D17;
        }
      `}</style>
      <div>
        {children}
      </div>
      <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '20px 0', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/hoandoan/" target="_blank" style={{ marginRight: '10px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
          </a>
          <span>+84 901 915 100</span>
        </div>
      </footer>
    </>
  );
};
