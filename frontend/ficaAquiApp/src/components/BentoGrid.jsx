import React from 'react';

const BentoGrid = ({ image }) => {
  // images é um array: [foto_cuidado, foto_comida, foto_jardim, foto_social]
  
  return (
    <section className="bento">
      <div className="container">
        <div className="section-header">
          <h2>Cuidado em cada detalhe</h2>
          <p>Encontre instituições que oferecem os cuidados e serviços que você precisa.</p>
        </div>
        
        <div className="bento-container">
          
          {/* CARD 1: Assistência 24h (Vertical) */}
          <div className="bento-item card-1">
            <img src={image[0]} alt="Assistência" className="card-image-bg" />
            <div className="card-bg-overlay"></div>
            <div className="card-content">
              <span className="icon">➕</span>
              <h3>Assistência 24h</h3>
              <p>Equipes multidisciplinares prontas para qualquer necessidade.</p>
            </div>
          </div>
          
          {/* CARD 2: Nutrição (Horizontal) */}
          <div className="bento-item card-2">
            <img src={image[1]} alt="Nutrição" className="card-image-bg img-right" />
            <div className="card-content">
              <span className="icon">🍴</span>
              <h3>Nutrição Balanceada</h3>
              <p>Cardápios saudáveis e saborosos.</p>
            </div>
          </div>
          
          {/* CARD 3: Áreas Verdes */}
          <div className="bento-item card-3">
            <img src={image[2]} alt="Áreas Verdes" className="card-image-bg opacity-30" />
            <div className="card-content">
              <span className="icon">🌲</span>
              <h3>Áreas Verdes</h3>
            </div>
          </div>
          
          {/* CARD 4: Socialização */}
          <div className="bento-item card-4">
            <img src={image[3]} alt="Socialização" className="card-image-bg opacity-30" />
            <div className="card-content">
              <span className="icon">👥</span>
              <h3>Socialização</h3>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;