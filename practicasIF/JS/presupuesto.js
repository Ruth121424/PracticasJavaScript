function Eventlistener(){
    document.getElementById("calcular").addEventListener("click",calcuarpresupuesto());
}

function calcuarpresupuesto(){

    var pre = Number(document.getElementById("presupuesto").value);
    var art1 = Number(document.getElementById("ar1").value);
    var art2 = Number(document.getElementById("ar2").value);
    var art3 = Number(document.getElementById("ar3").value);
    var art4 = Number(document.getElementById("ar4").value);
    var imprimirsuma = document.getElementById("suma");
    var imprimirpre = document.getElementById("comparacion");
    var suma = art1 + art2 + art3 + art4;

    if(suma <= pre){
        imprimirsuma.innerText = "La suma de los articulos es" + " " + suma;
        imprimirpre.innerText = "El precio esta adentro del presupuesto";
    }else{
        imprimirsuma.innerText = "La suma de los articulos es" +" "+ suma;
        imprimirpre.innerText = "El precio esta fuera del prsupuesto";
    }


}
