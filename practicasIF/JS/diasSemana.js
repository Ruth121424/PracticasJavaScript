function Eventlistener(){
    document.getElementById("calculardia").addEventListener("click",calculodedias());
}

function calculodedias(){
    var dias = Number(document.getElementById("dias").value);
    var imprimirdias = document.getElementById("imprimirdiasemana");

    if(dias == 1){
        imprimirdias.innerText = "El día que ingresaste es el Domingo"
    }
    if(dias == 2){
        imprimirdias.innerText = "El día que ingresaste es el Lunes"
    }
    if(dias == 3){
        imprimirdias.innerText = "El día que ingresaste es el Martes"
    }
    if(dias == 4){
        imprimirdias.innerText = "El día que ingresaste es el Miércoles"
    }
    if(dias == 5){
        imprimirdias.innerText = "El día que ingresaste es el Jueves"
    }
    if(dias == 6){
        imprimirdias.innerText = "El día que ingresaste es el Viernes"
    }
    if(dias == 7){
        imprimirdias.innerText = "El día que ingresaste es el Sábado"
    }
}