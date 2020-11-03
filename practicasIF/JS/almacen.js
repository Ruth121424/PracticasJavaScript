function EventListener(){
    document.getElementById("descuento").addEventListener("click", porsentaje());
}

function porsentaje(){

    var precio = Number(document.getElementById("precio").value);
    var  preciototal = document.getElementById("presiototal");
    var  descuentototal = document.getElementById("rebaja")
    var descuento, cantidadDescuento = 0;

    if(precio > 3600){
        descuento = (precio * 0.84);
        cantidadDescuento =  (precio - descuento);
        descuentototal.innerText ="Descuento aplicado" + " " +(precio - descuento) ;
        preciototal.innerText = "Total a pagar"+" " + descuento;
    }
    else{
        descuento = (precio * 0.93);
        cantidadDescuento =  (precio - descuento);
        descuentototal.innerText ="Descuento aplicado"+" "+(precio - descuento);
        preciototal.innerText = "Total a pagar"+ " " + descuento;
    }


}