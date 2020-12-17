function EventListener(){
    document.getElementById("boton1").addEventListener("click", suma1());
    document.getElementById("boton2").addEventListener("click", suma2());
    document.getElementById("boton3").addEventListener("click", suma3());
}

function suma1(){
    var imprimir = document.getElementById("imprimir1");
    var suma = 350 + 350;
    imprimir.innerText = "El resultado es:"+" "+suma;
}

function suma2(x,y){
    var imprimir = document.getElementById("imprimir2")
   x = 350; y = 350;
   var suma = x + y;
   imprimir.innerText = "El resultado es:"+" "+suma;
}

function suma3(){
    var imprimir = document.getElementById("imprimir3");
    imprimir.innerText = "El resultado es:"+" "+ sumaretur(350,350);
}

function sumaretur(j,r){
    return j + r;
}
