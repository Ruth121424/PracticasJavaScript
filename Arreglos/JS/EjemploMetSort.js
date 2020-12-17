function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularnumeros());
}

function Calcularnumeros(){
      var areglonumero = [1,4,2,9,11,44,111,7,4];
      var imprimirmenoramayor = document.getElementById("imprimirmenormayor");
      var imprimirmayoramenor  = document.getElementById("imprimirmayormenor");
      // ordenar los numeros alfabeticamente
      areglonumero.sort();

      //creo una funcion para ordenar de mayor a menor
     imprimirmenoramayor.innerText = areglonumero.sort(MenorAMayor);
    imprimirmayoramenor.innerText= areglonumero.sort(MayorAMnor);

}

function MenorAMayor(elem1, elem2){
    return elem1 - elem2;

}

function MayorAMnor(elem1, elem2){
    return elem2 - elem1;
}