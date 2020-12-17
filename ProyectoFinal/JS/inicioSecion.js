function EventListener(){
    document.getElementById("buton").addEventListener("click", contacto());
}

function contacto(){
    var nombre = String(document.getElementById("nombre").value);
    var apellido = String(document.getElementById("apellido").value);
    var email = String(document.getElementById("email").value);
    var mensaje = String(document.getElementById("mensaje").value);
    
    if(nombre !="" && apellido !="" && email !="" && mensaje!=""){

           localStorage.setItem("NombreUsuario", nombre);
           localStorage.setItem("apellido", apellido)
           localStorage.setItem("Email", email);
           localStorage.setItem("mensaje", mensaje);

        alert("La informacion se envio correctamente");
    
        }else{
        alert("Revisa la información, que todos los campos esten completos");
    }
}