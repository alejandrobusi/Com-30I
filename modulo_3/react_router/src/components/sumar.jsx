import React, { useState, useEffect } from 'react'

function Sumar() {
  const [ count , setCount ] = useState(0);
  console.log("Soy Sumar");

  useEffect(() => {
    document.title = count;
  });
  

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={() => {

        setCount(count + 1);
        
        }} >Aumentar</button>

      <button onClick={() => {
        setCount(count + 2);
      }} >Aumentar 2</button>

      <button onClick={() => {
        setCount(count + 3);
      }} >Aumentar 3</button>
        
    </div>
  )
}

export default Sumar;