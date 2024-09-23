/** Ejercicios de la clase 1
 * 1-Realizá un programa que permita ingresar 3 notas pertenecientes 
 * para cierto alumno de nivel secundario. 
 * Debe calcularse y mostrarse la nota promedio. [EC]  */

/* 
let nota1;
let nota2;
let nota3;
let promedio;

nota1 = parseInt(prompt("Ingresar primer nota del trimestre:"));
nota2 = parseInt(prompt("Ingresar segunda nota del trimestre:"));
nota3 = parseInt(prompt("Ingresar tercer nota del trimestre:"));

promedio = (nota1 + nota2 + nota3)/3;

    console.log("La nota promedio es " +  promedio.toFixed(2));

    */


/** Ejercicios de la clase 1
* 2-Realizá un programa que permita ingresar un número entero. 
* Debe mostrarse el número ingresado: a. Multiplicado por 5. b. Dividido por 2. 
*/

/*
let numeroEntero = parseInt(prompt("Ingresa tu numero: "));

console.log(numeroEntero);

let multiplicadoPorCinco;
let divididoPorDos;

multiplicadoPorCinco = numeroEntero*5;
console.log(multiplicadoPorCinco);


divididoPorDos = multiplicadoPorCinco/2;
console.log("El resultado final de lo que pediste es " +divididoPorDos.toFixed(2));

*/

/** Ejercicios de la clase 1
 * 3-. Realizá un programa que permita ingresar el valor monetario de una hora de trabajo 
 * y la cantidad de horas trabajadas por día por un trabajador. Debes mostrar el valor del salario 
 * semanal, sabiendo que trabaja todos los días hábiles y la mitad de las horas del día hábil 
 * los sábados. (Todas las horas valen lo mismo.)  
 * 
 */ 

/* 
let precioPorHora
let horasTrabajadasPorDiaHabil
let horasTrabajadasSabado
let diasTrabajados
let salarioSemanal

precioPorHora = parseInt(prompt("Ingresa el valor de la hora trabajada: "));
horasTrabajadasPorDiaHabil = parseInt(prompt("Ingresa la candidad de horas trabajadas por dia habil: "));
horasTrabajadasSabado = parseInt(prompt("Ingresa las horas trabajadas los sabados: "));
diasTrabajados = parseFloat(prompt("Ingresa los dias trabajos esta semana: "));
salarioSemanal = (diasTrabajados * (horasTrabajadasPorDiaHabil + horasTrabajadasSabado)) * precioPorHora;

console.log("El salario total es de $" + salarioSemanal); */



/**Ejercicios de la clase 1
 * 4-Realizá un programa que permita ingresar valores del mismo tipo para las variables num1 y num2. 
 * Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores 
 * (que lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas actualizadas. [EC]
 */

/* let num1
let num2

num1 = parseInt(prompt("Ingresa el primer nummero: "));
num2 = parseInt(prompt("Ingresa el segundo numero: "));

console.log("Los valores iniciales son: " + num1 + " y " + num2); 

let nuevoNum1 = num2;
let nuevoNum2 = num1;

console.log("Ahora los valores son: " + nuevoNum1 + " y " + nuevoNum2 ); 
 */


/** Ejercicios de la clase 2 */

/* 1-Realizá un programa que permita ingresar un número entero 
 e indique si se trata de un número par o impar.  */
 
/*  let numeroEntero

 numeroEntero = parseInt(prompt("Ingrese un numero entero: ")); 

 if (numeroEntero % 2 === 0){
    console.log("El numero ingresado " + numeroEntero + " es un numero par");
 } else (console.log("El numero ingresado " + numeroEntero + " es un numero impar"));  */




/*  2-Realizá un programa que permita ingresar dos números enteros 
 e indique cuál de ellos es el mayor. [EC]  */

/* let numeroEntero1
let numeroEntero2

numeroEntero1 = parseInt(prompt("Ingrese un numero: ")); 
numeroEntero2 = parseInt(prompt("Ingrese otro numero: "))

if (numeroEntero1 > numeroEntero2){ 
  console.log("El primer valor ingresado " + numeroEntero1 + " es mayor que el segundo valor ingresado " + numeroEntero2);
} else { 
  console.log("El segundo valor ingresado " + numeroEntero2 + " es mayor que el primer valor ingresado " + numeroEntero1);
}

 */

 
/*  
  3.Realizá un programa para ingresar tres números enteros e 
  indique cuál de ellos es el mayor y su valor. [EC]  */
 

  let primerNumeroEntero
  let segundoNumeroEntero
  let tercerNumeroEntero

primerNumeroEntero = parseInt(prompt("Ingrese un numero: ")); 
segundoNumeroEntero = parseInt(prompt("Ingrese otro numero: "));
tercerNumeroEntero = parseInt(prompt("Ingrese un numero mas: "));

if (primerNumeroEntero > segundoNumeroEntero && primerNumeroEntero > tercerNumeroEntero){
  console.log("El primer valor ingresado " + primerNumeroEntero + " es el mayor de los numeros ingresados");
} else if(segundoNumeroEntero > primerNumeroEntero && segundoNumeroEntero > tercerNumeroEntero) { 
  console.log("El segundo valor ingresado " + segundoNumeroEntero + " es el mayor de los numeros ingresados");
} else if  (tercerNumeroEntero > primerNumeroEntero && tercerNumeroEntero > segundoNumeroEntero) {
    console.log("El tercer valor ingresado " + tercerNumeroEntero + " es el mayor de los numeros ingresados");
}






