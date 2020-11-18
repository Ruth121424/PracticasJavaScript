function Eventlistener(){
    document.getAnimations("boton").addEventListener("click", serienum());
}

function serienum(){
    var listado = document.getElementById("lista");


     for(var x=15; x>=5; x--){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
     }



}