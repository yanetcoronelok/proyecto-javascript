/// OBJETOS

/* Un objeto es algo que tiene varias caracteristicas => una coleccion de propiedades
Cada propiedad se compone de una cable y un valor. 
En JS nosotros lo utilizamos para almacenar datos y funciones. 
*/

// Como se declara un objeto?

/* 
let nombre = {
    // coleccion de propiedades
    clave: valor, 
    clave: valor, 
    clave: valor,
}

*/

/* 
let persona = {
    nombre: "Yanet",
    apellido: "Coronel",
    edad: "35",
    estudios: "Programacion",
}

console.log(persona);
console.log(persona.estudios); */

/* 
let producto = {
    id: 1,
    nombre: "Jarron", 
    material: "marmol",
    color: "gris", 
    precio: 15000,
}

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto["id"]);
console.log(producto["material"]);

// para cambiar el color
producto.color= "negro";
console.log(producto); */


// OBJETOS: CONSTRUCTORES
/* nos permite crear objetos a partir de plantillas que se definen a partir de una funcion. 
Instanciar y crear multiples objetos. 

como se compone un objeto constructor? 
1 - tenemos que definir una funcion que inicia las propiedades del objeto. 
2 - tenemos que pasarle informacion a traves de una palabra clave llamada NEW. 

Para reconocer un objeto constructor escribimos su primera letra en Mayuscula. 

this es una palabra que refiere al contexto de ejecucion. El valor this puede cambiar
dependiendo de como invoquemos a la funcion. 

Instanciar refiere al proceso de crear un objeto a partir de una clave. 
 */
/* 
function Auto (marca, modelo, anio){
    this.marca = marca; 
    this.modelo = modelo;
    this.anio = anio; 
    }
}

let auto1 = new Auto("Renault", "Sandero", 2017);

console.log(auto1); 
console.log(auto1.marca);
console.log(auto1.modelo);
console.log(auto1.anio);

let auto2 = new Auto("Renault", "Duster", 2015);

console.log(auto2); 
console.log(auto2.marca);
console.log(auto2.modelo);
console.log(auto2.anio); */

// Dentro del objeto constructor se pueden utilizar funciones. 
/* function Auto (marca, modelo, anio){
    this.marca = marca; 
    this.modelo = modelo;
    this.anio = anio; 
    this.info = function(){
        return `${this.marca}, ${this.modelo}, ${this.anio}`
    }
}

let auto3 = new Auto("Renault", "Duster", 2011);
console.log(auto3.info()); */

// CLASES:
/* son una manera mas moderna de hacer objetos.  Es mas facil y clara en cuanto a la sintaxis. 
Funcionan de la siguiente manera: 

class nombre {
    constructor(parametros){
        this.parametros
    }
}


Dentro de la clase se crea un constructor que nos sirve para inicializar las propiedades del objeto. 

*/

/* 
class Auto {
    constructor(marca, modelo, anio){
        this.marca = marca; 
        this.modelo = modelo;
        this.anio = anio; 
    }

    info(){
        return `${this.marca}, ${this.modelo}, ${this.anio}`
    }
}

let auto5 = new Auto("Renault", "Fluence", 2009);

console.log(auto5.info());
 */



class Persona {
    constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle, 
            ciudad: ciudad,
            codigoPostal: codigoPostal,
        };
        this.habilidades = habilidades;
    }

    mostrarInfo(){
        console.log(`nombre $this.nombre`)
    }
}



const YANET = new Persona(
        "Yanet", 
        35, 
        "Avenida siempre viva",
        "Springfield",
        1234,
        "Tocar la guitarra",
);

console.log(YANET)