// const cardContainer = document.getElementById('cardContainer');

// fetch('https://rickandmortyapi.com/api/character')
// .then(response => response.json())
// .then(response => {
// response.results.map((personaje) => {
//   const card = document.createElement('div');
//   const cardCont = `<img src=${personaje.image} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${personaje.name}</h5>
//   </div>`

//   card.className = 'card col-2 cardBg mt-5 mx-4 g-0'

//   card.innerHTML = cardCont

//   cardContainer.appendChild(card)
//   })
// })

function obtener(){
  fetch('http://localhost:3000/posts/')
  .then(response => response.json())
  .then(response => console.log(response))
}

function postear(){
  fetch('http://localhost:3000/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'Creado con POST v1.1',
      author: 'By Ale Busi',
      desc: "Hemos creado otro item en nuestra db",
      img: 'https://picsum.photos/id/1/200/300'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
.then(response => response.json())
.then(response => console.log(response))
}

function eliminar(id){
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  })
}

function actualizar(){
  fetch('http://localhost:3000/posts/1',{
    method: 'PUT',
    body: JSON.stringify({
      title: 'Actualizado con PUT',
      author: 'typicode'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}

function modificar(){
  fetch('http://localhost:3000/posts/2',{
    method: 'PATCH',
    body: JSON.stringify({
      title: 'Modificado con PUT',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}
