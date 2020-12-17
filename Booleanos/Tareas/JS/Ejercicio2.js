function EventListener(){
    document.getElementById("boton").addEventListener("click",Booleano());
}

function Booleano(){
    var imp = document.getElementById("listado");
     var b1 = Boolean(100);
     var b2 = Boolean(3.14);
     var b3 = Boolean(-15);
     var b4 = Boolean("Hola");
     var b5 = Boolean("falso");
     var b6 = Boolean(1 + 7 + 3.14);
     var b7 = Boolean(5 < 6) ;
     var b8 = Boolean(0);
     var b9 = Boolean(-0);
     var b10 = Boolean("");
     var b11 = Boolean();
     var b12 = Boolean(null);
     var b13 = Boolean(false);
     var x;
     var b14 = Boolean(10 / x);
     
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 100 en booleano es:"+" "+b1;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 3.14 en booleano es:"+" "+b2;
    imp.appendChild(lista);
    

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número -15 en booleano es:"+" "+b3;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El string hola enbooleano es:"+" "+b4;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El string  falso en booleano es:"+" "+b5;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La suma de 1 + 7 + 3.14 en booleano es:"+" "+b6;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La comparacion de 5 < 6 en booleano es:"+" "+b7;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 0 en booleano es:"+" "+b8;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número -0 en booleano es:"+" "+b9;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "Las comillas vasias  en booleano es:"+" "+b10;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El valor sin dado en booleano es:"+" "+b11;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número null en booleano es:"+" "+b12;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "Falso en booleano es:"+" "+b13;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La divicion de un número y un letra (10 / x) en booleano es:"+" "+b14;
    imp.appendChild(lista);
    
    


}