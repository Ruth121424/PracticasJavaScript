function Eventlistener(){
    document.getElementById("calcular").addEventListener("click", calcularcalificacion());
}

function calcularcalificacion(){

    var cal = String(document.getElementById("calificacion").value);
    var imprimircal = document.getElementById("imprimircal");

    if(cal == "10"){
        imprimircal.innerText = "Tu calificacion es A"
    }else if(cal == "9"){
        imprimircal.innerText = "Tu calificacion es B"
    }else if(cal == "8"){
        imprimircal.innerText = "Tu calificacion es C"
    }else if(cal == "7"){
        imprimircal.innerText = "Tu calificacion es D"
    }else if(cal == "6"){
        imprimircal.innerText = "Tu calificacion es D"
    }else if(cal == "5"){
        imprimircal.innerText = "Tu calificacion es F"
    }else if(cal == "4"){
        imprimircal.innerText = "Tu calificacion es F"
    }else if(cal == "3"){
        imprimircal.innerText = "Tu calificacion es F"
    }else if(cal == "2"){
        imprimircal.innerText = "Tu calificacion es F"
    }else if(cal == "1"){
        imprimircal.innerText = "Tu calificacion es F"
    }else if(cal == "0"){
        imprimircal.innerText = "Tu calificacion es F"
    }
}