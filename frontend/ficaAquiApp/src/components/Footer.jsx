

import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="/" className="footer-logo">Fica<span>Aqui</span></a>
            <p>© 2024 CareFind. Todos os direitos reservados.</p>
          </div>
          
          <nav className="footer-links">
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos de Uso</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;