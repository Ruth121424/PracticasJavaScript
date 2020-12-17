function usuario(){
    var nombre = String(document.getElementById("nombre").value);
    var email = String(document.getElementById("email").value);
    var contraseña = String(document.getElementById("mensaje").value);
    
    if(nombre !="" && email !="" && contraseña!=""){

           localStorage.setItem("NombreUsuario", nombre);
           localStorage.setItem("Email", email);
           localStorage.setItem("contraseña", contraseña)

        alert("La informacion se envio correctamente");
    
        }else{
        alert("Revisa la información, que todos los campos esten completos");
    }
}