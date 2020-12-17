function persona(){
    var implista = document.getElementById("listado");
    var persona ={
        Nombre:"Anyoranza",
        Apellido: "Reyna",
        Edad:18,
        Genero:"Mujer",
        Nacionalidad:"Mexicana"
    };

    localStorage.setItem("persona", JSON.stringify(persona));
    
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = localStorage.getItem("persona");
    implista.appendChild(lista);

}

function comida(){
    var implista = document.getElementById("listado2");
    var comida = {
        Mexicana:"Tacos",
        Española: "Paella",
        Francesa:"Ratatouille",
        Italiana:"Lasaña",
        Estadounudense:"Hamburguesa"
    };

    localStorage.setItem("comida", JSON.stringify(comida));

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = localStorage.getItem("comida");
    implista.appendChild(lista);

}

function peliculas(){
    var implista = document.getElementById("listado3");

    var peliculas = {
        Terror:"El conjuro",
        Comedia:"¿Donde estan las rubias?",
        Ficción:"Volver al futuro",
        Romanticas:"Yo antes de ti"
    };

    localStorage.setItem("peliculas", JSON.stringify(peliculas));


    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = localStorage.getItem("peliculas");
    implista.appendChild(lista);
}

function musica(){
    var implista = document.getElementById("listado4");
    var musica ={
        Rock:"The Beatles",
        Pop:" Adele",
        HipHop:"Eminem",
        Reggaeton:"J Balvin"
    };
    localStorage.setItem("musica", JSON.stringify(musica));

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = localStorage.getItem("musica");
    implista.appendChild(lista);
}
