import React from 'react'
import './styles/Planes.css'
export const Planes = () => {
    return (
        <div className="fondo" id="planes">

            <div className="titulo">
            <h1>Planes a tu medida</h1>
            <p>Lograr el cuerpo que deseas es mas fácil de lo que piensas.</p>
            </div>
        <div className="cont-planes">

            <div>
                <h2>Programas personalizado</h2>
                <p>Se te hará un cuestionario de preguntas vía online para saber 
                    cuales son tus objetivos y lo que deseas, hablaras conmigo via WhatsApp
                 y podremos empezar a trabajar de inmediato!</p>
            </div>

            <div>
                <h2>dieta flexible</h2>
                <p>aprende a comer sano sin castigarte. 
                    Con el conteo de macros y calorías aprenderás a llevar una 
                    dieta que se acopla a tu estilo de vida, que te permite comer 
                    lo que quieres y esta basada en la ciencia. ¿no es esto genial?</p>
            </div>

            <div>
                <h2>entrenamiento personalizado</h2>
                <p>tendrás los entrenamientos mas efectivos que hayas hecho en tu vida. 1 vs 1 
                    Recibirás un programa personalizado de acuerdo a los días que puedas entrenar, 
                    con sus respectivos ejercicios y esquemas de progresión y descansos</p>
            </div>

            <div>
                <h2>Pdf “Estilo de vida”</h2>
                <p>En mis planes tendras mi guia pdf
                    “el estilo de vida fitness” con todo lo que debes saber.
                    basado en mis años de entrenamiento y educacion</p>
            </div>
        </div>
        </div>
    )
}

export default Planes
