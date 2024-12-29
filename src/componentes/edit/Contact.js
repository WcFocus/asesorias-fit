(function(){
    var formulario = document.getElementById('formulario'),
         nombre = formulario.nombre,
         correo = formulario.correo,
         sexo = formulario.sexo,
         terminos = formulario.terminos,
         error = document.getElementById('error');
 
 
         function validarNombre(e){    //la e llama para detener ejecucion si falla y no se envie formulario
             if (nombre.value == '' || nombre.value == null ) {
                 console.log('por favor completa el campo nombre');
                 error.style.display= 'block';
                 error.innerHTML= error.innerHTML + '<li>por favor completa el campo nombre </li>';
                 e.preventDefault();  //detener ejecucion
             } else{
                 error.style.display= "none";
             }   
         }
 
         function validarCorreo(e){
             if (correo.value == '' || correo.value == null ) {
                 console.log('por favor ingresar un correo valido');
                 error.style.display= 'block';
                 error.innerHTML= error.innerHTML + '<li>por favor ingresar un correo </li>';
                 e.preventDefault();  //detener ejecucion
             }  else{
                 error.style.display= "none";
             }    
         }
 
         function validarSexo(e){
             if (sexo.value == '' || sexo.value == null) {
                 console.log('por favor escoja un sexo')
                 error.style.display= 'block';
                 error.innerHTML= error.innerHTML + '<li>por favor escoja un sexo </li>';
                 e.preventDefault();  //detener ejecucion
             }else{
                 error.style.display= "none";
             } 
         }
 
         function validarTerminos(e){
             if (terminos.checked = false ) {
                 console.log('por favor acepte terminos')
                 error.style.display= 'block';
                 error.innerHTML= error.innerHTML + '<li>por favor acepte terminos</li>';
                 e.preventDefault();  //detener ejecucion
             }else{
                 error.style.display= "none";
             } 
         }
 
         function validarFormulario(e){
             error.innerHTML= '';
             validarNombre(e);
             validarCorreo(e);
             validarSexo(e);
             validarTerminos(e);
         }
         formulario.addEventListener('submit', validarFormulario)
     }())