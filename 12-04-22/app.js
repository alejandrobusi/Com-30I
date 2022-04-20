class Rectangle {
  constructor(alto = 0, ancho = 0){
    this.alto = alto;
    this.ancho = ancho;
  }
  set setAncho (x){
    this.ancho = x;
  }
  set setAlto (y){
    this.alto = y;
  }
  get getArea (){
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangle();

rectangulo1.setAlto = 5;
rectangulo1.setAncho = 10;
//console.log(rectangulo1.getArea)

///DOM Y BOM

//console.log(window.location)

// if (window.location.protocol == "http:") {
//   alert("Estas en una pagina no segura")
//   //window.location.href = "https://www.google.com.ar"
// } else {
//   alert("Estas en una pagina segura")
  
// }
// const statusCode = 400;

// if (statusCode == 200) {
//   window.alert("Esta todo ok")
// } else {
//   window.alert("La pagina que buscas esta en mantenimiento")
//   window.location.href = "https://www.google.com.ar"
// }


//Eventos de tiempo

//SetInterval
// const bucle = setInterval(() => {
//   console.log("Hola Mundo!")
// }, 1000);
// //ClearInterval
// const detenerBucle = () => {
//   clearInterval(bucle)
//   alert("Se ha detenido el proceso")
// }
// //SetTimeOut
// setTimeout(() => {
//   alert("ya pasaron 5 segundos kpo!")
// }, 5000);
 /////////

const elemento = document.getElementById("Hello")
const elemento2 = document.getElementsByClassName("adios")
const elemento3 = document.getElementsByTagName("h1")

// console.log(elemento)
// console.log(elemento2)
// console.log(elemento3)
const title = prompt("agregar titulo");
const imgSrc = prompt("insertar un link");
const parr = prompt("agregar descripcion");


//Primer paso (crear elemento)
const elementoNuevo = document.createElement("div")
//segundo paso (agregarle contenido al elemento)
elementoNuevo.innerHTML = `<div class="card" style="width: 18rem;">
<img src=${imgSrc} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${parr}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

console.log(elementoNuevo)
//tercer paso (agregar el elemento nuevo al Document)
document.body.appendChild(elementoNuevo)



