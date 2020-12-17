function Objetos(){

   var coche1 ={

    ruedas: 4,
    puertas: 4,
    color: "verde",
    anio: 2010,
    luces:4,
    espejos:2
   };

   var coche2 ={
       ruedas:4,
       puertas:2,
       color:"rojo",
       anio:2015,
       luces:4,
       espejos:2

   };

   var coche3 ={
       ruedas:4,
       puertas:4,
       color:"azul",
       anio:2020,
       luces:4,
      espejos:2

   };

   var coche4 = {
      ruedas: 4,
      puertas: 2,
      color:"negro",
      anio:2018,
      luces:4,
      espejos:2

   };

  var fabricantes = {
    marca1: "Ford",
    marca2: "Nissan",
    marca3: "Fiat",
    marca4: "Chevrolet"
   };

  var ford = {
     ruedas:coche1.ruedas,
     puertas:coche1.puertas,
     color: coche1.color,
     anio: coche1.anio,
     espejos: coche1.espejos,
     luces: coche1.luces,
     marca1: fabricantes.marca1
  };

  var nissan ={
    ruedas:coche2.ruedas,
    puertas:coche2.puertas,
    color: coche2.color,
    anio: coche2.anio,
    espejos: coche2.espejos,
    luces: coche2.luces,
    marca2: fabricantes.marca2
    
  };
  var fiat ={
    ruedas:coche3.ruedas,
    puertas:coche3.puertas,
    color: coche3.color,
    anio: coche3.anio,
    espejos: coche3.espejos,
    luces: coche3.luces,
    marca3: fabricantes.marca3
  };

  var chevrolet = {
    ruedas:coche4.ruedas,
    puertas:coche4.puertas,
    color: coche4.color,
    anio: coche4.anio,
    espejos: coche4.espejos,
    luces: coche4.luces,
    marca4: fabricantes.marca4
  }

 console.log(ford);
 console.log(nissan);
 console.log(fiat);
 console.log(chevrolet);


}