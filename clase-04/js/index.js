/** Sentencia Switch
 * 
 * Es una estructura de control similar a los condicionales. 
 * Se usa para tomar decisiones en base a un valor 
 *  Funciona a traves de casos.. en el Case se pasa un valor
 * Y luego se genera el codigo de ejecucion 
 * */ 

/* switch(expresion){
    case valor1:
        // codigo de ejecucion;
        break;
    case valor 2:
        // codigo de ejecucion;
        break; 
    case valor 3:
        // codigo de ejecucion;
        break; 
    
    default;
        // codigo de ejecucion en caso de que no se cumpla ninguna condicion. Viene a ser como el else. Siempre queda al final de la sentencia switch. 
} */
/* 
const NUM1 = parseFloat(prompt("Ingrese un numero"));
const OPERACION = prompt("Ingrese la operacion a realizar( + - * ?) ");
const NUM2 = parseFloat(prompt("Ingrese otro numero"));
let resultado; */

/* 
if (OPERACION === +){
    NUM1 + NUM2 
} */
/* 
switch(OPERACION){
    
    case "+": 
        resultado = NUM1 + NUM2;
        break;
    
    case "-":
        resultado = NUM1 - NUM2; 
        break;

    case "*":
        resultado = NUM1 * NUM2;
        break;

    case "/":
        resultado = NUM1 / NUM2;
        break;

    default:
        alert ("No estas ingresando una operacion valida.")
};
alert("El resultado es: " + resultado) */

// FUNCIONES

// son un bloque de codigo reutilizable que va  aejecutar una funcion especifica. 
// las funciones se utilizan para agrupar ocnjuntos de instrucciones se van a ejecutar cuando se llamen
// nos sirven para dividir tareas en bloques de codigo mas pequenos. 

// reutilizar codigo, modularizarlo y organizarlo, facilita el mantenimiento y actualizaciones. 

// ESTRUCTURA
/**
 function nombreFuncion(parametros){
    // escribir el codigo a ejecutar
 } 


 nombreFuncion();
 

 // las funciones suelen ser verbos de acciones
 // se escriben en camelCase
 */


/*  function saludar(){
    console.log("Buenas noches pibes, todos sufran con esto.")
 }; 

saludar(); 
saludar(); 
saludar(); 
saludar(); 
saludar();  */

/* function sumar(){
    let num1 = parseInt(prompt("Ingresa un numero"));
    let num2 = parseInt(prompt("Ingresa otro numero")); 

    let suma = num1 + num2; 

    console.log("la suma es: " + suma);
}

sumar();
sumar(); 
 */

/* let nombreIngresado = prompt("Ingresa nombre"); 
console.log(
    "El nombre ingresado es: " + nombreIngresado
);  */

/* 
function ingresarNombre(nombre){

    console.log("El nombre ingresado es " + nombre );
}

ingresarNombre("Fabricio"); 
ingresarNombre("Yanet"); 
ingresarNombre("Cliope"); 
 */

/* function saludar(){
    let nombreIngresado = prompt("Ingresa un nombre");
    console.log("Hola " + nombreIngresado )
}

saludar()
saludar()
 */

/* 
function datosPersonales(nombre, apellido, edad){
    console.log("Esta persona se llama " + nombre + ", " + "su apellido es " + apellido + " y su edad es " + edad + " años");
}

datosPersonales('Fabricio', 'Ruiz', 26);
datosPersonales('Yanet', 'Coronel', 35);

 */

function calcular(montoInicial){
    let tasaInteres = 0.05;

    function calcularInteres(){
        return montoInicial * tasaInteres;
    }

let intereses = calcularInteres();
let total = montoInicial + intereses;

return total
}

console.log(calcular(100))


/** FUNCIONES ANONIMAS Y FUNCIONES FLECHA
 *  
 *      function nombre (parametros){
 *       // ejecutar
 * 
 *      return
 * }
 * 
 * nombre(argumentos)
 * 
 *  Funcion anonima: no tiene un nombre especifico. 
 * Se define en el momento y se puede asignar a una variable. 
 * Se utilizan en callbacks de funciones de orden superior (lo vemos mas adelante).
 * En la creacion de modulos
 * Cuando sabemos que la funcion no la vamos a volver a utilizar. 
 * 
 * 
 * 
 *  */

let suma = function(a,b){
    return a + b;
}

console.log(suma(5,3)); 


/* Funcion flecha: 

let suma = (a,b) => {
        return a + b;
    }


    Es una sintaxis mucho mas limpia y conscisa, se utilizan mas que nada en funciones cortas. 
    No posee argumentos. 

    no posee return, esta implicito, y cuando la funcion se expresa 
    en una sola linea no es necesario ponerle las {}


    La funcion flecha se utiliza cuando
    necesitamos una sintaxis limpia y concisa
    necesitamos mantener el contexto this (objetos)
    y cuando trabajamos con metodos de arrays (mas adelante)


    Funcion Normal
    Hablamos de un contexto propio de this
    cuando necesitamos acceder a argumentos
    cuando creamos un objeto (lo vemos ahora)
    Cuando son funciones complejas.  
*/

let sumaDos = (a,b) => a + b;

console.log(sumaDos(5,6));