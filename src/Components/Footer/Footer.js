import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();

    const handleLegoClick = () => {
    // Navigeer naar de geheime Lego pagina
    navigate('/lego');
    window.scrollTo(0, 0); // Zorg dat de nieuwe pagina bovenaan begint
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2026 Timo Maessen's Portfolio.</p>
        </div>
        
        <div className="footer-center"  onClick={handleLegoClick}>
          <img 
            src={`${process.env.PUBLIC_URL}/Images/other/stud.gif`} 
            alt="Easter Egg" 
            className="footer-stud"
          />
         
        </div>

        <div className="footer-right">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;