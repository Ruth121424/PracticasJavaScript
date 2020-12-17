function EventLisener(){
    document.getElementById("btcalcular").addEventListener("click",calcularfrase());
}

function calcularfrase(){
    var salida1 = document.getElementById("imprimirfarce");
     
    var x = 0;

    while(x < 10){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = "Hola mundo"
        salida1.appendChild(lista);
        x++;
    }

}