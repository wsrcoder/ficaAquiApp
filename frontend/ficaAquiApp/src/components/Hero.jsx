import React from 'react';



const Hero = ({image}) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Encontre a melhor instituição para quem você cuida</h1>
          <p>
            Apoiamos famílias na busca por lares de repouso e centros de cuidado com segurança, 
            transparência e acolhimento.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              <span className="icon">📍</span> Ver opções próximas
            </button>
            <button className="btn-secondary">
              <span className="icon">💬</span> Me ajude a decidir
            </button>
          </div>
          
          <div className="hero-badge">
            <div className="avatar-group">
              <img src="../assets/images/avatar1.jpg" alt="Avatar 1" />
              <img src="../assets/images/avatar2.jpg" alt="Avatar 2" />
              <img src="../assets/images/avatar3.jpg" alt="Avatar 3" />
            </div>
            <div className="badge-text">
              <div className="stars">★★★★★</div>
              <p>+5k famílias auxiliadas</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          {/* Mockup da imagem do lar de idosos */}
          <img src={image} alt="Lar FiqueAqui" />
        </div>
      </div>
    </section>
  );
};

export default Hero;