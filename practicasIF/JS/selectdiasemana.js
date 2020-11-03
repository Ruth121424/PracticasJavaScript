function Eventlistener(){
    document.getElementById("semana").addEventListener("click",calculardias());
}

function calculardias(){
    var diasemana =  document.getElementById("dias").value;
    var imprimirdia = document.getElementById("imprimirdias");

   if(diasemana == "1"){
       imprimirdia.innerText = "El Día que selecciono es Lunes";
   }
   if(diasemana == "2"){
    imprimirdia.innerText = "El Día que selecciono es Martes";
   }
   if(diasemana == "3"){
    imprimirdia.innerText = "El Día que selecciono es Miercoles";
   }
   if(diasemana == "4"){
       imprimirdia.innerText = "El Día que selecciono es Jueves";
   }
   if(diasemana == "5"){
    imprimirdia.innerText = "El Día que selecciono es Viernes";
   } 
   if(diasemana == "6"){
       imprimirdia.innerText = "El Día que selecciono es Sábado";
   }
   if(diasemana == "7"){
       imprimirdia.innerText = "El Día que selecciono es Domingo";
   }

}
