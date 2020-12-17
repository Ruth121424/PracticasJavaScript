function EventListener(){
    document.getElementById("boton").addEventListener("click", pares());
}

function pares(){
    var listado = document.getElementById("listado");
    var x=0;

    while (x<=100) {
        var lista = document.createElement("li");
      lista.setAttribute("class", "list-group-item");
      lista.innerText = x;
      listado.appendChild(lista);
      x+=2;
    }



}