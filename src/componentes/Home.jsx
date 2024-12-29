import React from 'react'
import fondo1 from '../img/fondo1.png'
import './styles/Home.css'

const Home = () => {
    return (
    <>        
        <img src={fondo1} alt="" className="fondoprin1"/>
        <div className="cont-home" id="home">
            <div className="info-home">
                <h2 className="text-backfriday">BLACK FRIDAY! 50% OFF!!! </h2>
                <h3>fisicos reales en personas reales, entra en el camino del fitness natural</h3>
            <a href="#planes" className="comenzar">Comenzar Ahora →</a>
            </div>
        </div>
    </>    
    )
}
export default Home
