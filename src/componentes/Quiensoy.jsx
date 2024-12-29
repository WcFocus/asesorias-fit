import React from 'react'
import './styles/Quiensoy.css'
import quiensoy from '../img/quiensoy.png'
const Quiensoy = () => {
    return (
        <div className="cont-Quiensoy" id="acerca">
        <div className="acerca-quien">
            <h2>CAMILO ECHEVERRI COMO TU PERSONAL COACH ONLINE</h2>
            <p>Soy un atleta natural con mas de 8 años de entrenamiento
                y alimentacion con todas las "dietas" existentes, trabajando 
                con mas de 100 clientes satisfecho con un rotundo exito
                junto a mi conseguiras el cuerpo que siempre haz querido,
                dejate de tonterias tu cambio esta juzto a un click.
                Que esperas? 
            </p>
        </div>
        <div className="foto-quiensoy">
            <img src={quiensoy} alt=""/>
        </div>
        </div>
    )
}

export default Quiensoy
