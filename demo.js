//var suma = 0;
//suma = suma + 1;
//////console.log (suma);
//suma = suma + 1;
//console.log (suma);
//suma = suma + 1;
//console.log (suma);

//for (var i = 0 ; i < 5 ; i ++){
    //console.log (i)
//}

//function encontrarVocalA(string){
   // console.log(string [3])
//}

//encontrarVocalA ('Nohe')

//function encontrarVocalA(string) {
    //for (var i = 0 ; i < string.length ; i++){
        //if (string[i] === 'a'){
          //  return 'encontramos la vocal a'
       // }
    //}
    //return 'El string que recibimos por parametro no tiene la vocal a';
//}

//console.log(encontrarVocalA ('Ana'))

//function cuentaRegresiva(num){
//for (var i = num ; i >= 0 ; i --){
  //  console.log (i)
//}
//}
//cuentaRegresiva (3)

function contarLetra (string, letra){
    var contador_letra = 0;
    for ( var i = 0 ; i < string.length; i ++) {
        if (string [i] === letra) {
            contador_letra = contador_letra + 1;
            console.log (contador_letra)
        }
 
    }

   
    return contador_letra;
}

contarLetra('Mariana', 'a')