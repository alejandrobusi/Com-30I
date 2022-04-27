// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     reject("ya se resolvio la promesa")
//   }, 3000);

// })


// promesa.then((response) => {
//   console.log(response)
// })

// promesa.catch((response) => {
//   console.warn(response)
// })


const motos = [
  {
    id: 1,
    marca: "Acme"
  },
  {
    id: 2,
    marca: "KTM"
  },
  {
    id: 3,
    marca: "Yamaha"
  },
  {
    id: 4,
    marca: "Honda"
  }
]


const buscarMotos = (id) => {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const buscarPorId = motos.find((moto) => moto.id == id)
      if (buscarPorId) {
        resolve(buscarPorId)
      } else {
        reject("No se encontro coincidencia.")
      }
    }, 5000);
  })
}

const arrayCoincidencias = []

buscarMotos(2)
.then((response) => {
  arrayCoincidencias.push(response)
})
.catch((response) => {
  console.log(response)
})
.finally(() => {console.log(arrayCoincidencias)})


fetch("https://rickandmortyapi.com/api/character")
.then((response) => response.json())
.then((personajes) => {
  const img = document.createElement("img")
  img.src = personajes.results[0].image
  document.body.appendChild(img)
})