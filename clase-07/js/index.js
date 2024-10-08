// Abstraccion

function sumar(a,b){
    return a + b
}

console.log(sumar(3,5))


// FUNCIONES DE ORDEN SUPERIOR

/* 
Es una funcion que toma una o mas funciones como argumentos o devuelve una funcion como resultado. 



 */


/* function mayorQue(x){
    return(num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueDiez(9));
 */


/* function asignarOperacion(operacion){
    if( operacion === 'sumar'){
        return function(numero1, numero2){
            return numero1 + numero2
        }
    } else if (operacion === 'restar'){
        return (numero1, numero2) => numero1 - numero2
    }

} */

// Funcion que tome dos numeros y que esta funcion qeu toma dos numeros tome una operacion 

/* function operar(num1, num2, operacion){
    return operacion(num1, num2)
}

function suma (a,b){
    return a + b
}

function resta (a,b){
    return a - b
}

function multiplicar (a,b){
    return a * b
}

function dividir (a,b){
    return a / b
}

console.log(operar(5,6,suma))
console.log(operar(5,6,resta))
console.log(operar(5,6,multiplicar))
console.log(operar(5,6,dividir))
 */

// METODOS DE BUSQUEDA Y TRANSFORMACION

//For each
/* 
For each es una funcion que se utiliza para iterar sobre elementos de un array y permite ejecutar
una funcion especifica para cada elemento del array.

Los parametros que se pasan son:
1 - elemento = elemento actual del array que se procesa
2 - indice (opcional) = el indice actual del elemento
3 - arreglo (opcional)

*/
/* 
const FRUTAS = ['manzana', 'pera', 'kiwi', 'naranja'];

FRUTAS.forEach(function(frutas, indice){

    console.log(`${indice} : ${frutas}`)

})

const NUMEROS = [2,4,6,8];
let suma = 0;

NUMEROS.forEach(numero => {
    suma += numero
})

console.log(suma) */


const PERSONAS = [

    {
        nombre:'Pedro',
        edad: 25
    },
    {
        nombre:'Juan',
        edad: 30
    },
    {
        nombre:'Maria',
        edad: 19
    },
    {
        nombre:'Mateo',
        edad: 23
    },
    {
        nombre:'Lucas',
        edad: 18
    },
    {
        nombre:'Judas',
        edad: 35
    },
    {
        nombre:'Magdalena',
        edad: 29
    }

]

/* 
const NOMBRE = []

PERSONAS.forEach(persona => {
    NOMBRE.push(persona.nombre)
})

console.log(NOMBRE) */


// find => DEVOLVER el primer elemento de un arreglo que cumpla con una condicion dada
// si  no cumple ningun elemento con la condicion, devuelve un undefined


/* const MASNUMEROS = [2,5,6,7,8]

const primerPar = MASNUMEROS.find(num => num % 2 === 0)

console.log(primerPar)

 */

// encontrar un estudiante

const NOMBRE_BUSCADO = 'Maria';

let estudianteEncontrado = PERSONAS.find(persona => persona.nombre === NOMBRE_BUSCADO)

if (estudianteEncontrado){
    console.log(`estudianteEncontrado: ${estudianteEncontrado.nombre}`)
}



