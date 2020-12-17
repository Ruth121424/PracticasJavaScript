function EventListener(){
    document.getElementById("boton").addEventListener("click", OrdenarPalabras());
}


function OrdenarPalabras(){
    var arreglo1 = ["Moto", "soto", "Abaco", "abeja", "Sapo", "nieve", "Zumba", "barco"];
    var arreglo2 = ["bicicleta", "silla", "cama", "computadora", "celular", "viento", "salmon", "pared"];
    var imporiginal = document.getElementById("imprimirOriginal");
    var impmodificado = document.getElementById("imprimirArreglo");
    var imporiginal2 = document.getElementById("imprimirOriginal2");
    var impmodificado2= document.getElementById("imprimirArreglo2");

    imporiginal.innerText = "El arreglo original es:"+" "+ arreglo1;
    impmodificado.innerText = "El arreglo ordenado es:"+" "+arreglo1.sort();

    imporiginal2.innerText = "El arreglo original es:"+" "+ arreglo2;
    impmodificado2.innerText = "El arreglo ordenado es:"+" "+arreglo2.sort();



}























