import React , { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

function Main() {
const [ personajes, setPersonajes ] = useState();
const [ personajesAux, setPersonajesAux ] = useState();
const [ isLoading, setIsLoading ] = useState(false);
  
  const getData = () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(response => {
      setPersonajes(response.results);
      setPersonajesAux(response.results);
      setIsLoading(true);
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
  const handleChange = (e) => {
    if (e.length >= 3) {
      const personajesFiltrados = personajes.filter((personaje) => {
        if (personaje.name.toLowerCase().indexOf(e.toLowerCase()) !== -1) {
          return personaje;
        }
      })
      setPersonajesAux(personajesFiltrados);
    } else {
      getData();
    }
  };

  return (
    <div className='container'>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Buscar por nombre</label>
        <input type="text" class="form-control" onChange={(e) => handleChange(e.target.value)} id="exampleFormControlInput1"/>
      </div>
      <h1 className='text-center'>Bienvenidos a la pagina de Rick</h1>
      <div className='row mt-5 justify-content-center shadow'>
        {
          isLoading 
            ?
              personajesAux.map((personaje) => <Card personaje={personaje} />)
            :
              <Loader />
        }
      </div>
    </div>
  )
};

export default Main;
