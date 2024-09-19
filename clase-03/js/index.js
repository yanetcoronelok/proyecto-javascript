// Ciclos e iteraciones

/*son estructuras de control que ejecutan bloques de codigo. Permiten automatizar tareas 
y procesos de datos.
Hay dos tipos de ciclos: 
Conteo loop o Conditional loop. 


Ciclo por Conteo
Sabemos cuantas veces necesitamos que itere el codigo
usa algo llamado contador
y el ejemplo clasico es el ciclo FOR


Ciclo por condicion
No sabemos cuantas veces se va a repetir, pero sabemos que si se cumple una condicion X, el codigo frena. 
Los ejemplos clasicos de los ciclos condicionales son WHILE y el DO WHILE.

*/

/**
 * CICLO POR CONTEO
 * 
 * Operadores importantes
 *  INCREMENTO => 
 *  DECREMENTO => 
 * 
 * Cuando queremos incrementar algo, se hace a traves de un => ++ => i + 1
 * Cuando queremos decrementar algo, utilizamos el => -- => i - 1 
 * 
 * 
 * 
 */

// i ++ => post-incremento. 
// El valor d e la variable se va a incrementar despues de que se utilice la expresion actual. 

/*
let x = 5;

let y = x++;

console.log(y);
console.log(x);
*/


// pre-incremento => ++i
// el valor de la variable incrementa ANTES que se utilice. 

/* 
let a = 6;
let b = ++a;

console.log(b);
*/

/* 
*Ciclo FOR
*es un ciclo por conteo. Posee 3 partes
*una parte es la INICIALIZACION: es el desde. nos va a dar la variable de control inicial. se expresa con una variable. 
otra que es la CONDICION: es el hasta. Hasta donde vamos a hacer que se repita la condicion. Se verifica antes de cada iteracion y nos dice que si la condicion es verdadera el ciclo continua. si es falsa, termina. 
y otra que es la ACTUALIZACIO: es la parte donde se genera el incremento o decremento de la variable inicial.  

*/

/* 
for (inicializacion; condicion; actualizacion){
    bloque de codigo a repetir
}
    */

/** EJERCICIO
 * Imprimir 10 veces un mensaje
 * 
 */

/*
for(let i =0; i <= 10; i++){
    console.log("Se imprimio el mensaje", i);
};
*/ 

/**La inicializacion se ejecuta UNA VEZ al inicio
 * la condicion se evalua antes de cada iteracion. Si es verdadero, continua con la ejecucion. 
 * la actualizacion se ejecuta al final de cada iteracion. Se suma y vuelve a evaluar. 
 * 
 */

// Tabla de multiplicar

let tablaDelCinco = 5;

for(let i = 1; i <= 10; i++){

    let resultado = tablaDelCinco * i;
    
    console.log(tablaDelCinco + " x " + i + " = " + resultado);
}

