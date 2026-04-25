import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">Fica<span>Aqui</span></a>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><a href="#instituicoes">Instituições</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#sobre-nos">Sobre Nós</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <a href="/login" className="login-btn">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;