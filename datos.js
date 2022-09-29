//En javascript contamos con ditintos tipos de datos
//1. Datos numericos
//numeros enteros, numeros flotantes, numeros positivos, numeros negativos
var edad = 40;
var cantidad = "100"; // esto no es un dato numerico, si no un dato de texto
var nuevaCantidad = Number(cantidad);

parseInt() //convertir un dato en entero
parseFloat()// convertor un dato en flotantes


//2. Cadenas de Texto o String
//Podemos trabajar con cadenas de texto con comillas simples o comillas dobles.
var bebidas = "agua";
var comida = 'ceviche';
var instrucciones = "El platillo se llama " + comida;
console.log(instrucciones);
var edad = 34;

var edadtxt = String(edad);
console.log(edadtxt);


//3. Datos Booleanos
//Te ofrecen solo dos valores. falso o verdadero - activo o inactivo
var activo = false;
var estado = Boolean( 10 > 9); // mayor
var estado = Boolean( 10 < 9); // menor


//4. Datos de Fechas
var fecha = new Date(); //Generando una nueva fecha
console.log(fecha);

fecha.getDay()
fecha.getFullYear()
fecha.getHours()
fecha.setDate()


//5. Simbolos en Javascript
//valores como identificadores claves. symbol
var simbolo1 = Symbol(); //El simbolo no es un constructor
var simbolo2 = Symbol(); //Los valores son completamente valores distintos y unicos.

var ambiente = Symbol('dev'); //simbolo de desarrollo


//6. Datos JSON
//JSON -> Formato de javascript Object Notation
//es la manera ideal para intercarmbiar datos organizados con nuestra aplicacion o con servicios externos
var persona = { nombre: 'Sergio', twitter: 'yacaksj'};

var personas = [
    { nombre: 'Paco', twitter: 'dpacos'},
    { nombre: 'Lulo', twitter: 'cdlulo'},
    { nombre: 'Juno', twitter: 'fsjuno'},
];

var personaJSON = JSON.stringify(persona);
var nuevaPersona = JSON.parse(personaJSON);
























