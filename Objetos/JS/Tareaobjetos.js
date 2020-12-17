function EventListener(){
     document.getElementById("boton1").addEventListener("click", tecnologia1());
     document.getElementById("boton2").addEventListener("click", tecnologia2());
     document.getElementById("boton3").addEventListener("click", tecnologia3()); 
     document.getElementById("boton4").addEventListener("click", tecnologia4());
     document.getElementById("boton5").addEventListener("click", tecnologia5());
}

function tecnologia1(){
    var listado1 = document.getElementById("li1");
    var laptop1 = {
        marca1:"Samsung",
        tamañopantalla : 15,
        mouse:"Inalambrico",
        teclado:"Compacto",
        color:"gris",
        precio:7.500
    };

    var laptop2 = {
        marca2:"Sony",
        tamañopantalla : 10,
        mouse:"Inalambrico",
        teclado:"Compacto",
        color:"Negro",
        precio:9.500
    };
    
    var laptop3 = {
        marca3:"LG", 
        tamañopantalla : 12,
        mouse:"Inalambrico",
        teclado:"Compacto",
        color:"Dorado",
        precio:10.500
    };
    
    var laptop4 = {
        marca4:"HP",
        tamañopantalla : 20,
        mouse:"Inalambrico",
        teclado:"Compacto",
        color:"Azul",
        precio:15.500
    };

    var laptop5 = {
        marca5:"Lenovo",
        tamañopantalla : 22,
        mouse:"Inalambrico",
        teclado:"Compacto",
        color:"Rosa",
        precio:25.000
    };
    var lista1 = document.createElement("li");
        lista1.setAttribute("class", "list-group-item");
        lista1.innerText = JSON.stringify(laptop1);
        listado1.appendChild(lista1);

    var lista2 = document.createElement("li");
        lista2.setAttribute("class", "list-group-item");
        lista2.innerText = JSON.stringify(laptop2);
        listado1.appendChild(lista2);

    var lista3 = document.createElement("li");
        lista3.setAttribute("class", "list-group-item");
        lista3.innerText = JSON.stringify(laptop3);
        listado1.appendChild(lista3);


    var lista4 = document.createElement("li");
        lista4.setAttribute("class", "list-group-item");
        lista4.innerText = JSON.stringify(laptop4);
        listado1.appendChild(lista4);
   
    var lista5 = document.createElement("li");
        lista5.setAttribute("class", "list-group-item");
        lista5.innerText = JSON.stringify(laptop5);
        listado1.appendChild(lista5);

}

function tecnologia2(){
    var listado2 = document.getElementById("li2");

    var celular1 = {
        marca: "Samsung",
        tamaño:7.5,
        peso:.300,
        color:"Azul",
        precio:7.500
    };
    var celular2 = {
        marca: "Sony",
        tamaño:5.5,
        peso:.300,
        color:"gris",
        precio:4.500
    };
    var celular3 = {
        marca: "LG",
        tamaño:8.5,
        peso:.100,
        color:"Blanco",
        precio:9.500
    };
    var celular4 = {
        marca:"Lenovo",
        tamaño:6.5,
        peso:.150,
        color:"Negro",
        precio:7.500
    };
    
    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(celular1);
        listado2.appendChild(lista);
    

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(celular2);
        listado2.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(celular3);
        listado2.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(celular4);
        listado2.appendChild(lista);

}

function  tecnologia3(){
     var listado3 = document.getElementById("li3");

    var pantalla1 = {
        marca:"Samsung",
        precio:5.00,
        tamaño:30,
        peso:"3kg",
        altura:"50cm",
        ancho:"70cm"
    };
    var pantalla2= {
        marca:"Sony",
        precio:8.00,
        tamaño:55,
        peso:"4kg",
        altura:"70cm",
        ancho:"90cm"
    };
    var pantalla3 = {
        marca:"LG",
        precio:10.00,
        tamaño:80,
        peso:"5kg",
        altura:"100cm",
        ancho:"140cm"
    };
    var pantalla4 = {
        marca:"Lenovo",
        precio:25.00,
        tamaño:100,
        peso:"6kg",
        altura:"500cm",
        ancho:"1000cm"
    };
    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(pantalla1);
        listado3.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(pantalla2);
        listado3.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(pantalla3);
        listado3.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(pantalla4);
        listado3.appendChild(lista);

}

function tecnologia4(){
    var listado4 = document.getElementById(li4);

    var sw1 = {
        marca:"Samsung",
        ancho:"5cm",
        altura:"6cm",
        tamaño:2,
        peso:"100g",
    };
    var sw2= {
        marca:"Sony",
        ancho:"5cm",
        altura:"6cm",
        tamaño:3,
        peso:"70g",
    };
    var sw3 = {
        marca:"LG",
        ancho:"5cm",
        altura:"6cm",
        tamaño:1,
        peso:"50g",
    };
    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(sw1);
        listado4.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(sw2);
        listado4.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(sw3);
        listado4.appendChild(lista);

}


function tecnologia5(){

    var refrigerdor1 = {
        marca: "Samsung",
        tamaño:"16",
        precio:10.000,
        garantia: "5años"
    };
    var refrigerdor2 = {
        marca: "LG",
        tamaño:"12",
        precio:8.000,
        garantia: "7años"
    };
    var refrigerdor3 = {
        marca: "whirlpool",
        tamaño:"19",
        precio:15.000,
        garantia: "10años"
    };
    var refrigerdor4 = {
        marca: "Mabe",
        tamaño:"15",
        precio:9.000,
        garantia: "6años"
    };

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(refrigerdor1);
        listado5.appendChild(lista);
        
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(refrigerdor2);
        listado5.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(refrigerdor3);
        listado5.appendChild(lista);

        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = JSON.stringify(refrigerdor4);
        listado5.appendChild(lista);

}

