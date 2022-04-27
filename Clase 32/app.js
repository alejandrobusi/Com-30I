class Movies {
  constructor(){
    this.arrMovies = JSON.parse(localStorage.getItem("Peliculas")) || []
  }
  
  addMovies(name, score){
    const movie = {
      name: name.value,
      score: score.value
    }
    this.arrMovies.push(movie)
    localStorage.setItem( "Peliculas", JSON.stringify(this.arrMovies))
  }

  getMovies(){
    if (localStorage.getItem("Peliculas")) {
      const list = JSON.parse(localStorage.getItem("Peliculas"))
      list.map((movie) => {
        console.group("Item")
        console.log(`Nombre: ${movie.name}`)
        console.log(`Puntaje: ${movie.score}`)
        console.groupEnd()
      })
    } else {
      alert("No hay peliculas en tu LocalStorage")
    }
  }
  
  deleteMovies(){
    const warning = confirm("Estas seguro? esto no tiene vuelta atras RICKYY")
    if (warning) {
      localStorage.clear()
    }
  }
}

const libraryMovies = new Movies()

