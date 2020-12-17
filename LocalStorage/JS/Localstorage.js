function Localstorage(){
    //Gurdar informacion en el local Storage
    localStorage.setItem("Nombre",  "Ruth Reyna");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);
    var ropa = {
        calzado: "Tenis",
        calzado2: "Pantumflas",
        calzado3: "Chanclas",
        jens:"Pantalon Mezclilla" 
    }



    localStorage.setItem("Objeto", JSON.stringify(ropa));
   //imprimo en consola la clave qwue yo tengo en local storage
    console.log( localStorage.getItem("Nombre"));
    
    //removeItem se utiliza para remover o eliminar la clave y el valor
    localStorage.removeItem("booleano");
    
    //clear limpia todo la imformacion que esta en local estorage
    localStorage.clear();


     usuario = {
        nombre: "Ruth",
        edad:18
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log(JSON.parse(localStorage.getItem("usuario")));
   
    





}