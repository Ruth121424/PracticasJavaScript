function Metodosdearreglos(){
     var arreglonumeros = [20,3,4,6,8,5,0,4];
     var arreglo3 = [1,3,11,4,33,111,2,444,5,6];
     var arreglo4 = ["papel", "hoja", "Sapo", "Pelusa"]
     var arreglo5 = ["Quiero", "aprender"]



    console.log(arreglonumeros[5]);

    console.log(arreglonumeros);

    console.log(arreglonumeros.push(10));

    console.log(arreglonumeros.slice());

    console.log(arreglonumeros.unshift(15));

    console.log(arreglonumeros.slice());

    console.log(arreglo3.sort());

    console.log(arreglo3.slice());

    console.log(arreglo3);

    console.log(arreglo3.slice());

    console.log(arreglo4);

    console.log(arreglo4.sort());

    // Pop 
    console.log(arreglonumeros);
    console.log(arreglonumeros.slice());
    console.log(arreglonumeros.pop());
    console.log(arreglonumeros.slice());
   

    //shift
    console.log(arreglonumeros);
    console.log(arreglonumeros.slice());
    console.log(arreglonumeros.shift());
    console.log(arreglonumeros.slice());

     //reverse
    console.log(arreglonumeros);
    console.log(arreglonumeros.reverse());
   
    //join
   
    console.log(arreglo5.join(" "));
    

    


}