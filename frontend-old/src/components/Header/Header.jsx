
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Brand/Logo Area */}
        <div className="brand">
          <span className="logo-icon"><i className="bi bi-person-heart"></i></span> 
          <span className="brand-name">FiqueAqui</span>
          <span ><i className="bi bi-house-heart"></i></span>
        </div>

        {/* Navigation Area */}
        <nav className="nav-menu">
          <a href="#como-funciona" className="nav-link">Como Funciona</a>
          <a href="#sobre-nos" className="nav-link">Sobre Nós</a>
          <button className="btn-register">CADASTRAR UNIDADE</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;