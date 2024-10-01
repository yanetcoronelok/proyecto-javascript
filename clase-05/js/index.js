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


    Es una sintacsis mucho mas conscisa, se utilizan mas que nada en funciones cortas. 
    No posee argumentos. 

    no posee return, esta implicito, y cuando la funcion se expresa 
    en una sola linea no es necesario ponerle las {}
*/

let sumaDos = (a,b) => a + b;

console.log(sumaDos(5,6));