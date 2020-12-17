function guardarinformacion(){
    var nombre = String(document.getElementById("usuario"). value);
    var email = String(document.getElementById("email").value);
    var password1 = String(document.getElementById("contraseña1").value);
    var password2 = String(document.getElementById("contraseña2").value);

    if(nombre !="" && email !="" && password1 !="" && password2 !=""){

           localStorage.setItem("NombreUsuario", nombre);
           localStorage.setItem("Email", email);

           if(password1 == password2){
            localStorage.setItem("Password1", password1);
            localStorage.setItem("Password2", password2);

            alert("La informacion se guardo correctamente");
    
           }else{
               alert("Las contraseñas no coinsiden");
           }
        
    }else{
        alert("Revisa la información, que este completa");
    }
    
 
}

function optenerinformacion(){

    var impnombre = document.getElementById("impnombre");
    var impemail = document.getElementById("impemail");
    var imppassword= document.getElementById("imppassword");

    impnombre.innerText = "El nombre del usuario es:"+" "+ localStorage.getItem("NombreUsuario");
     impemail.innerText= "El email del usuario es:"+" "+ localStorage.getItem("Email");
     imppassword.innerText = "La contrasela del usuario es:"+" "+ localStorage.getItem("Password1");


}