function Eventlistener(){
    document.getAnimations("boton").addEventListener("click", serienum());
}

function serienum(){
    var listado = document.getElementById("lista");


     for(var x=10; x<=20; x+=2){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
     }

}