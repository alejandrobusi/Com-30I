let auto = {
	color: "verde",
	marca: "fiat",
	modelo: "bravo",
	año: 2008,
	potencia: "130bhp"
}

// // Agregar propiedad objeto
// auto.puertas = 5;
// //modificar una propiedad
// auto.color = ["rojo", "negro"];
// //Eliminar propiedades
// delete auto.año;

// /////Array de objetos

// let products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];

// for (var i=0; i < products.length; i++) {
//   var product = products[i];
//   console.log(product.name);
//   console.log("  Id: " + product.id);
//   console.log("  Precio: " + product.price);
//   console.log("  Categorías: " + product.categories.join(", "));
// }
// console.log("###########")
// const recorriendoProd = products.map((product) => {
//   console.log(product.name);
//   console.log("  Id: " + product.id);
//   console.log("  Precio: " + product.price);
//   console.log("  Categorías: " + product.categories.join(", "));
// })

///Funcion constructora

function Personas (name, lastName, age) {
  this.nombre = name;
  this.apellido = lastName;
  this.edad = age;
  this.comer = function( x = "un amigo"){
    alert(`Soy ${this.nombre} y estoy comiendo con ${x}.`)
  }
}

const persona1 = new Personas("Vale" , "Reigada" , 21);
const persona2 = new Personas("Marcelo" , "Avila" , 31);



//Objeto Object()

let persona3 = new Object();
// persona3.nombre = "ale"
// persona3.correr = function(){
//   alert("estoy corriendo")
//}
persona3 = auto;
//Object.create()
const auto2 = Object.create(auto)

console.log(auto2)

//Comparando Objetos

let personaA = {nombre: "Juan"};

let personaB = {nombre: "Juan"};

let personaC = personaA

// if (personaA.nombre === personaB.nombre) {
//   alert("true")
// }else {
//   alert("false")
// }

/*si comparamos la referencia(variable) esto va a dar false. amenos que usen la misma referencia en memoria.. pero si hacemos comparacion de propiedad y estas son iguales retornamos un true.*/

//Clases ES6

class Motos {
  constructor(marca, modelo, color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  encender(){
    alert("la moto esta encendida")
  }

  apagar(){
    alert("la moto esta apagada")
  }
  cambiarColor(colorNuevo){
    this.color = colorNuevo
  }
};

const moto = new Motos("KTM", "Duke200", "negro");

//Setter y Getter (metodos especiales para obtener y establecer valores de propiedades)
//Los metodos settet y guetter siguen siendo propiedades(se utilizan como propiedades a pesar de ser funciones)
class Rectangle {
  constructor ( height = 0, width = 0 ) {
    this._height = height;
    this._width = width;
  }

  set changeHeight( value ) {
    this._height = value;
  }

  set changeWidth ( value = 0 ) {
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

const rectangulo = new Rectangle(10, 20)

rectangulo.changeHeight = 5
rectangulo.changeWidth = 12
console.log(rectangulo.area)




