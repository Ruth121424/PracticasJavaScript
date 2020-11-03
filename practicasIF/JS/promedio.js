
function EventListener(){
    document.getElementById("comparar").addEventListener("click", promedio());
}

function promedio(){

    var cal1 = Number(document.getElementById("cal1").value);
    var cal2 = Number(document.getElementById("cal2").value);
    var cal3 = Number(document.getElementById("cal3").value);
    var cal3 = Number(document.getElementById("cal4").value);
    
    var printresultado2= document.getElementById("imprimir");
    var printresultado = document.getElementById("menor");
    var valorminimo, resultado;

    if(cal1 < cal2 && cal1 < cal3 && cal1 < cal4){
       valorminimo = Math.min(cal, cal2, cal3, cal4);
       printresultado2.innerText = valorminimo;
       resultado = (cal2 + cal3 + cal4) / 3;
       printresultado.innerText = resultado;
    }

    if(cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        valorminimo = Math.min(cal, cal2, cal3, cal4);
        printresultado2.innerText = valorminimo;
        resultado = (cal1 + cal3 + cal4) / 3;
        printresultado.innerText = resultado;  
    }

    if(cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        valorminimo = Math.min(cal, cal2, cal3, cal4);
        printresultado2.innerText = valorminimo;
        resultado = (cal1 + cal2+ cal4) / 3;
        printresultado.innerText = resultado;     
    }

    if(cal4 < cal && cal4 < cal2 && cal4 < cal3){
        valorminimo = Math.min(cal, cal2, cal3, cal4);
        printresultado2.innerText = valorminimo;
        resultado = (cal1 + cal2 + cal3) / 3;
        printresultado.innerText = resultado; 
    } 
   
}