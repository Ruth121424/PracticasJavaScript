function EventListener(){
    document.getElementById("boton").addEventListener("click", Calcularnumeros());
}

function Calcularnumeros(){
      var areglonumero = [33,2,36,55,4,1];
      var imprimirmenoramayor = document.getElementById("imprimirmenormayor");
      var imprimirmayoramenor  = document.getElementById("imprimirmayormenor");
    
      areglonumero.sort();

      
     imprimirmenoramayor.innerText = areglonumero.sort(MenorAMayor);
    imprimirmayoramenor.innerText= areglonumero.sort(MayorAMnor);

}

function MenorAMayor(num1, num2){
    return num1 - num2;

}

function MayorAMnor(num1, num2){
    return num2 - num1;
}