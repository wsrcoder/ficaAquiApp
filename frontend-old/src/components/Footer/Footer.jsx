

import React from 'react'

import './footer.css'


const Footer = () => {
    return(
        <footer className='main-footer'>
            <div className='footer-content'>
                <div className='footer-links'>
                    <a href="#privacidade">Privacidade</a>
                    <a href="#termos">Termos de Uso</a>
                </div>

                <p className='copyright'>© 2024 FiqueAqui. Todos os direitos reservados.</p>
            
                <div className='social-icons'>
                    <span><i className="bi bi-whatsapp"></i></span>
                    <span><i className="bi bi-linkedin"></i></span>
                    <span><i className="bi bi-facebook"></i></span>
                </div>


            </div>

            
        </footer>
    )
}

export default Footer