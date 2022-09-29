//Variables
//Las variables son la manera de almacenar datos dentro de nuestra aplicacion
//Las variables son de tipo destructivas
//Haras mucho uso de las variables, procura que sean nombres cortos.

//variables locales utiliza la palabra var
var nombre = "Casa";
console.log(nombre);

//Contenedores Let
// las variables tienen un alcance o llamado scope
//variables locales o variables de bloque utiliza la palabra reservada let
function saludo() {
    let nombre = 'yacafx';
    console.log(nombre);

    let edad = 33;
    console.log(edad);
}
saludo();

//Contenedores Const
//Es una variable fija, su valor no cambia, utiliza la palabra reservada const
const pi = 3.1416;
console.log(pi);


