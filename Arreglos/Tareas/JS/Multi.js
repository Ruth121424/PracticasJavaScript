function EventListener(){
    document.getElementById("boton1").addEventListener("click", mul1());
    document.getElementById("boton2").addEventListener("click", mul2());
    document.getElementById("boton3").addEventListener("click", mul3());
}

function mul1(){
    var imprimir = document.getElementById("imprimir1");
    var mul = 123 * 45;
    imprimir.innerText = "El resultado es:"+" "+mul;
}

function mul2(x,y){
    var imprimir = document.getElementById("imprimir2")
   x = 123; y = 45;
   var mul = x * y;
   imprimir.innerText = "El resultado es:"+" "+mul;
}

function mul3(){
    var imprimir = document.getElementById("imprimir3");
imprimir.innerText = "El resultado es:"+" "+ mulreturn(123,45);
}


function mulreturn(x, y){
    return x * y;
}
