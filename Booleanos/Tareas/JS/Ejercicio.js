function EventListenr(){
    document.getElementById("boton").addEventListener("click", MetodoBooleano());
}

function MetodoBooleano(){
    var imp1 = document.getElementById("imp1");
    var imp2 = document.getElementById("imp2");
    var imp3 = document.getElementById("imp3");
    var imp4 = document.getElementById("imp4");
    var num1 = 30; 
    var num2 = 70;
    var bool1 = true;
    var bool2 = false;

    imp1.innerText = "La suma de la variable boleana con una variable numerica es:"+" "+(bool1 + num1);
    imp2.innerText = "La suma de la variable boleana con una variable numerica es:"+" "+(bool2 + num2);
    imp3.innerText = "Este es el resultado de combinar un booliano y .toString:"+" "+ bool1.toString();
    imp4.innerText = "Este es el resultado de combinar un booliano y .toString:"+" "+ bool2.toString();



}