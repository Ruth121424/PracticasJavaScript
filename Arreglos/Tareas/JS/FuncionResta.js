function EventListener(){
    document.getElementById("boton1").addEventListener("click", resta1());
    document.getElementById("boton2").addEventListener("click", resta2());
    document.getElementById("boton3").addEventListener("click", resta3());
}

function resta1(){
    var imprimir = document.getElementById("imprimir1");
    var resta = 205 - 129;
    imprimir.innerText = "El resultado es:"+" "+resta;
}

function resta2(x,y){
    var imprimir = document.getElementById("imprimir2")
   x = 205; y = 129;
   var resta = x - y;
   imprimir.innerText = "El resultado es:"+" "+resta;
}

function resta3(){
    var imprimir = document.getElementById("imprimir3");
imprimir.innerText = "El resultado es:"+" "+ restareturn(205,129);
}

function restareturn(a,b){
    return a - b;
}