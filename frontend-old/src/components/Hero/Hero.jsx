// Hero.jsx
import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero"
            style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${heroImage})` }}
        >
            <div className="hero-content">
                <h1 className="hero-title">Encontre o lar que você precisa.</h1>
                <p className="hero-subtitle">Achar o lugar ideal parece difícil às vezes. Estamos aqui para ajudar.</p>

            </div>
        </section>
    );
}

export default Hero;