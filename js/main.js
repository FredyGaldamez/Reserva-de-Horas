
document.getElementById("reservar").addEventListener('click',()=>{
    validar();
})

function validar(){
    const sugerencias ={
        email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gim,
        fecha: /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/gim,
        letras: /^[a-zA-Z ñ]*$/gim, 
        numeros: /\d/gim
    };
    var form={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").options[document.getElementById("hora").value].text

    };

    if(!form.nombre.match(sugerencias.letras)){
        alert("El nombre ingresado debe contener solo letras");
        return false;
    }
    if(!form.apellido.match(sugerencias.letras)){
        alert("El apellido ingresado debe contener solo letras");
        return false;
    }
    if(!form.telefono.match(sugerencias.numeros)){
        alert("El telefono debe contener solo numeros")
        return false;
    }
    if(!form.email.match(sugerencias.email)){
        alert("El email ingresado no es valido")
        return false;
    }
    mensaje(form);

}

function mensaje({nombre,apellido,telefono,email,fecha,hora}){
    var mensajito=document.getElementById("mensaje");
    mensajito.innerHTML='Cliente: '+nombre+" "+apellido+" "+" su hora fue reservada para la fecha: "+fecha+" a la hora: "+hora+" se ha enviado a su email: "+email+" los detalles de la reserva - Gracias por preferirnos!";
}










  

