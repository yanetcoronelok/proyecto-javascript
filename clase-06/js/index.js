//Arrays

/* Un array es una lista o estructura de datos que se utiliza para almacenar una coleccion de valores. 

Los valores en arrays pueden ser de cualquier tipo. Tambien podemos tener un array dentro de otro array. 

Tambien puede contener funciones.*/

// como se declara  un array?
/* let nombre = [
    coleccion de datos que debe estar ordenada.
    ]
 */

//let array = []; //array vacio

let strings = ["numero", "perro", "jaime", "tyrion"]; 

console.log(strings)

// El array tiene un indice y un valor. 
// Los arrays siempre inician con el indice cero (el indice es la posicion). 
// El array me permite acceder a una posicion determinada. 

console.log(strings[2])

let numeros = [1,2,3,4,5];

console.log(numeros);
// length hace referencia a la cantidad de elementos que contiene el array. Nos dice la longitud del array.

let boolean = [true, false, true, false, true, false];

console.log(boolean);

let mixto = [1, "numero", false, 2 ];
console.log(mixto)



let pokemon = [
    {
        pokemon: "Pikachu",
        tipo: "Electrico"
    }, 
    {
        pokemon: "Eevee",
        tipo: "Normal"
    },
    {
        pokemon: "Lugia",
        tipo: "Legendario"
    }
]

console.log(pokemon)


// como recorrer un array?
// para traer el objeto entero
for(let i =  0; i < pokemon.length; i++){
    console.log(pokemon[i])
}

// para traer un elemento del objeto
for(let i =  0; i < pokemon.length; i++){
    console.log(pokemon[i].pokemon)
}

for(let i =  0; i < pokemon.length; i++){
    console.log(pokemon[i].tipo)
}

// Length no es un metodo de array. Es una propiedad. Sirve para darnos o devolvernos la cantidad de elementos. 

// METODOS. 
/* Los metodos en arrays son funciones incorporadas en js que nos van a permitir realizar  
 */

// Metodo push: nos permite agregar uno o mas elementos al final del array

strings.push("japon", "pepe");

console.log(strings);

// Metodo pop: me va a eliminar un elemento o varios del array siempre y cuando esten al final. 

strings.pop("pepe");

console.log(strings);

// Metodo UNSHIFT: Agrega elementos al inicio del array

strings.unshift("Que larga esta clase");
console.log(strings);


// Metodo SHIFT: elimina elementos al inicio del array

strings.shift();
console.log(strings);

// Metodo Splice: se utiliza para modificar el array eliminando, 
// agregando o reemplazando elementos en posiciones especificas.
// Este metodo necesita una nueva variable que contenga el array. 
// Elimina los datos del array original y los guarda en el array nuevo. 


let miNuevoArray = strings.splice(1,2);

console.log(miNuevoArray);



// Metodo Join, nos convierte los elementos de un array en una cadena de texto y los une a traves de un separador.
// el separador lo especificamos nosotros. 

/* let pasoAString = string.join("-");
console.log(pasoAString)
 */

// Metodo IndexOf nos sirve para buscar un elemento de un array
// en caso de que se llegue a replicar.
// nos sirve para buscar el primer elemento de un array que se repita 

let frutas = [ 'manzana', 'pera', 'durazno', 'manzana'];

let indice = frutas.indexOf('manzana');
console.log("el indice de manzana es: " + indice);
// me dice cual es el indice de la primer aparicion de ese objeto. Si el objeto no existe, devuelve un -1.

//Metodo Includes: Este metodo me dice si un elemento existe o no en el array. Nos devuelve un booleano. 

let existe = frutas.includes('pera');
console.log(existe)
let existe2 = frutas.includes('frutilla');
console.log(existe2)


// Metodo reverse: nos ayuda a invertir el orden de los elementos del array. 

let frutasInvertidas = frutas.reverse();
console.log(frutasInvertidas);

// Metodo CONCAT: se utiliza para combinar dos o mas arrays en uno nuevo. 

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let array3 = [9,10,11,12];

/* let arrayCombinado = array1.concat(array2);
console.log(arrayCombinado); */

let arrayCombinado = array1.concat(array2,array3);
console.log(arrayCombinado);


// Metodo Slice: se utiliza para extraer o sacar una porcion de un array y devolverlo en un nuevo array. 

let alumnos = ['franco', 'stefany', 'natalia', 'jonatan'];

let aprobadas = alumnos.slice(1,3);
console.log(aprobadas);
console.log(alumnos);