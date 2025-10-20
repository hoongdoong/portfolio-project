import React, { useState, useEffect } from 'react';
import { LeftNav } from './LeftNav';
import { useIsMobile } from '../hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        html, body {
          margin: 0;
          padding: 0;
          background-color: #0A0D17;
        }
        .scroll-to-top {
          position: fixed;
          bottom: 60px;
          right: 60px;
          background-color:rgb(77, 128, 186);
          color: white;
          border: none;
          border-radius: 30px;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          transition: opacity 0.3s;
          
        }
        .scroll-to-top.visible {
          opacity: 1;
          animation: bounce 4s infinite;
        }
      `}</style>
      <div>
        {!isMobile && <LeftNav />}
        {children}
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        >
          ^
        </button>
      )}
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
