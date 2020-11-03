//EventListener()

function EventListener(){
    document.getElementById("compararedad").addEventListener("click", compararedad());
}

function compararedad(){
    var hermano1 = Number(document.getElementById("hermano1").value);

    var hermano2 = Number(document.getElementById("hermano2").value);

    var imprimirmensaje = document.getElementById("mayor");

    var diferenciaedad = document.getElementById("diferencia");

    var diferencia = 0;



     if(hermano1 > hermano2){
         imprimirmensaje.innerText = "El Hermano 1 es mayor con" + " " +  hermano1 + " " + "años";
        diferencia = hermano1-hermano2;
     }
     else if(hermano1 < hermano2) {
        imprimirmensaje.innerText = "El Hermano 2 es mayor con" + " " +  hermano2 + " " + "años";
        diferencia = hermano2-hermano1;
    }
    diferenciaedad.innerText = hermano2-hermano1 + " " + "años de diferencia";
}

