function Eventlistener(){
    document.getElementById("numero").addEventListener("click", numeropar());
}

function numeropar(){
   
   var listado = document.getElementById("listado");


   for(var x=0; x<=100; x+=2){
      var lista = document.createElement("li");
      lista.setAttribute("class", "list-group-item");
      lista.innerText = x;
      listado.appendChild(lista);
   }

}