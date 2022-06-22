// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var arrayFinal = [];
  for (var prop in objeto) {
    var arrNuevo = [];
    arrNuevo.push(prop);
    arrNuevo.push(objeto[prop]);
    arrayFinal.push(arrNuevo);
  }
  return arrayFinal;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var objeto = {};
  for (i = 0; i < string.length; i++) {
    if (objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1;
    } else {
      objeto[string[i]] = 1;
    }
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = "";
  var final = "";
  var minusculas = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i];
    } else {
      minusculas = minusculas + s[i];
    }
  }
  final = mayusculas + minusculas;
  return final;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var arrFrase = "";
  arrFrase = str.split(" ");
  var arrFinal = "";

  for (i = 0; i < arrFrase.length; i++) {
    arrFinal = arrFinal + " " + arrFrase[i].split("").reverse().join("");
  }
  return arrFinal.trim();
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var aString = numero.toString();
  var spliteada = aString.split(""); //esto esta bien
  var reves = spliteada.reverse();
  var numeroReves = reves.join("");

  if (aString === numeroReves) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arrCadena = cadena.split("");
  var resultadoLetras = [];
  for (var i = 0; i < arrCadena.length; i++) {
    if (arrCadena[i] !== "a" && arrCadena[i] !== "b" && arrCadena[i] !== "c") {
      resultadoLetras = resultadoLetras + arrCadena[i];
    }
  }
  return resultadoLetras.toString();
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  // var arrayFinal = [];

  // for (var i = 0; i < arreglo1.length; i++) {
  //   // for (var j = 0; j < arreglo2.length; j++) {
  //   //   if (arreglo1[i] === arreglo2[j]) {
  //   //     arrayFinal.push(arreglo1[i]);
  //   //   }
  //   // }
  // }
  // return arrayFinal;

  var arrayFinal = [];
  for (var i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      arrayFinal.push(arreglo1[i]);
    }
  }
  return arrayFinal;
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
