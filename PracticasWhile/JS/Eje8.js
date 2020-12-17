function Eventlistener(){
    document.getAnimations("boton").addEventListener("click", serienum());
}

function serienum(){
    var listado = document.getElementById("lista");
     var x=15;
     while(x>=5){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
        x--;
     }


}