//Es el metodo que se agrega para utilizar una funcion para el boton
//EventListener()

function EventListener(){
    document.getElementById("calcularedad").addEventListener("click" ,CalcularEdad());
}

function CalcularEdad()
{   
    var edad = Number(document.getElementById("edad").value);

    var ine = Number(document.getElementById("INE").value);
    //Sedeclaro variable para imprimir informacion
    var imprimirmensaje = document.getElementById("ImprimirEdad");
   
   if(edad >= 18 && ine==1 ){
       imprimirmensaje.innerText = "La persona es mayor de edad, tiene su INE y puede tomar";
   }
   else if( edad >=18 && ine==0){
    imprimirmensaje.innerText = "La presona es mayor de edad, pero como no tiene su INE y no puede tomar";
   }
   else if( edad < 18 && ine == 0)
   {
       imprimirmensaje.innerText = "La presona es menor de edad, pero no puede tener INE ";
   }
  
}