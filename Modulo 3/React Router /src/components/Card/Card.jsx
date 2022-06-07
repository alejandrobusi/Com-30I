import React from 'react';

function Card(props) {
  const { image, name ,species } = props.personaje
  return (
    <div className="card mx-2 my-2 col-2 g-0 shadow">
      <img src={image} className="card-img-top" alt={name}/>
      <div className="card-body">
        <h3 className="card-title">Nombre: {name}</h3>
        <p className="card-text">Especie: {species}</p>
      </div>
    </div>
  )
};

export default Card;
