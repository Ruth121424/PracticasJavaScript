function EventListener(){
    document.getElementById("boton1").addEventListener("click", div1());
    document.getElementById("boton2").addEventListener("click", div2());
    document.getElementById("boton3").addEventListener("click", div3());
}

function div1(){
    var imprimir = document.getElementById("imprimir1");
    var div = 6789 / 12;
    imprimir.innerText = "El resultado es:"+" "+div;
}

function div2(x,y){
    var imprimir = document.getElementById("imprimir2")
   x = 6789; y = 12;
   var div = x / y;
   imprimir.innerText = "El resultado es:"+" "+div;
}

function div3(){
    var imprimir = document.getElementById("imprimir3");
imprimir.innerText = "El resultado es:"+" "+ divreturn(6789,12);
}

function divreturn(x,y){
    return x / y;
}
