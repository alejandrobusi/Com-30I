// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("resolucion de promesa")
//   }, 4000);

// })

// const promise2 = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     reject("resolucion de promesa fallida")
//   }, 4000);

// })

// promise
// .then((response) => {
//   console.log(response)
// })

// promise2
// .catch((response) => {
//   console.log(response)
// })

// const motos = [
//   {
//     id: 1,
//     marca: "Acme"
//   },
//   {
//     id: 2,
//     marca: "KTM"
//   },
//   {
//     id: 3,
//     marca: "Yamaha"
//   },
//   {
//     id: 4,
//     marca: "Honda"
//   }
// ]

// const buscarMoto = (id) => {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       const filtroId = motos.find((moto) => moto.id == id)
//       console
//       if(filtroId) {
//         resolve(filtroId)
//       } else {
//         reject("No se encontro coincidencia")
//       }
//     }, 5000);
//   })
// }

// buscarMoto(0)
// .then((response) => console.log(response))
// .catch((err) => {console.log(err)})


fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
  method: "GET"
})
.then((response) => response.json())
.then((response) => console.log(response))
