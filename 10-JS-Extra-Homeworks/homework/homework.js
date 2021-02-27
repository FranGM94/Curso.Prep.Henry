// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var keys = Object.keys(objeto);
  var values = Object.values(objeto);

  var matriz = keys.map(function(e, i){
    return [e, values[i]];
  });
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:

  var objeto = {};

  for (let i = 0; i < string.length; i++){
    let letra = string[i]
    let value = Object.keys(objeto)
    let isPresent = value.indexOf(letra) != -1
    
    if(!isPresent) {
      objeto[letra] = 1;
    }
    else {
      objeto[letra] += 1;
  }
}
return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var stringMayus = "";
  var stringMinus = "";

  for ( let i = 0; i < s.length; i++){
    let upper = s[i].toUpperCase()
        if (s[i] == upper){
      stringMayus = stringMayus.concat(s[i]);
    }
  }
  
  for ( let y = 0; y < s.length; y++){
    if (s[y] != s[y].toUpperCase()){
      stringMinus = stringMinus.concat(s[y]);
    }
  }
return stringMayus + stringMinus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
    const arr = str.split(" ");
    const reversed = arr.map(function(el){
      return el.split('').reverse().join("");
    });
    return reversed.join(" ");
  }


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  var arr = numero.toString().split("");
  const reversed = arr.reverse();
  if (numero == reversed.join("")){
    return "Es capicua";
  }
  else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arr = cadena.split("")
  for (i = 0; i < cadena.length; i++){
    if (arr[i] == "a" || arr[i] == "b" || arr[i] == "c"){
      arr.splice(i,1);
      i--;
    }
  }
 return arr.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
arr.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return a.length - b.length;
});
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  var arregloFinal = arreglo1.filter(v => arreglo2.includes(v))
  return arregloFinal;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

