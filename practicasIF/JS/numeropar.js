function Eventlistener(){
    document.getElementById("calcular").addEventListener("click", numerospar());
}
function numerospar(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var imprimirnumpar = document.getElementById("imprimirresultado");


    if(num1 % num2 == 0){
        imprimirnumpar.innerText = "Número 1 es multiplo de Número 2";
    }else {
          imprimirnumpar.innerText = "Número 1 no es multiplo de Número 2";
    }

    
}