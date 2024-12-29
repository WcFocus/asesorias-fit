import React from 'react'
import './styles/Contacto.css'


const Contacto = () => {
    return (
    <>    
        <div class="contenedor" id="contacto">
        <form class="formulario" id="formulario" name="formulario">
            <div class="contenedor-inputs">
                <input type="text" name="nombre" placeholder="Nombre"/>
                <input type="text" name="nombre" placeholder="Apellido"/>
                <input type="email" name="correo" placeholder="correo"/>
                <input type="text" name="nombre" placeholder="numero de celular"/>
               <div class="sexo">
                   <input type="radio" name="sexo" id="hombre" value="hombre"/>
                   <label for="hombre" class="label-radio hombre">hombre</label>

                   <input type="radio" name="sexo" id="mujer" value="mujer"/>
                   <label for="mujer" class="label-radio mujer">mujer</label>
               </div>

               <div class="terminos">
                   <input type="checkbox" name="terminos" id="terminos"/>
                   <label for="terminos">Acepto Terminos y Condiciones</label>
               </div>

               <ul class="error" id="error">
               </ul>
            </div>

            <input type="submit" class="btn" value="Unete!"/>
        </form>
    </div>

    {/* <script src={Contact}></script> */}
 </>   
    )
}

export default Contacto
