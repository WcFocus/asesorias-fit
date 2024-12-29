import React from 'react'
import './styles/Navbar.css'
import logo from '../img/logo.png'
import whatsapp from '../img/whatsapp.png'
const Nabvar = () => {
    return (
        
        <div className="cont-navbar">
            <div className="logo">
                <span className="animlogo">
                    <span>
                    <a href="https://wa.me/573125803503?text=Deseo%20ser%20parte%20del%20Team%20WcFocus%20Ahora!!!" target="_blank">
                    <img src={whatsapp} alt="" className="whatsapp"/>
                    </a>
                    </span>                    
                    <img src={logo} alt=".." className="logo"/>
                </span>
            </div>
            <nav className="cont-nav">
                <ul className="navegador">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#planes">PLANES</a></li>
                    <li><a href="#acerca">ACERCA DE</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nabvar
