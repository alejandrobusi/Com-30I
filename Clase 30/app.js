//Eventos.

function ejecutandoEvento(){
  document.title = "Comision 30I"
};

// function getEmail(data) {
//   if (data.value == "alejandrobusi@gmail.com") {
//     window.location.pathname = "/home.html"
//   } else {
//     alert("No existe el usuario.")
//   }
// };
function getEmail(data) {
  console.log(data.value)
};

function adivinarNumero (numero) {
  const numRandom = Math.round( Math.random() * 10 );
  const numeroInput = numero.value;
  if (numeroInput <= 10 && !isNaN(numeroInput)){
    if(numeroInput == numRandom){
      alert(`Adivinaste!!! El numero magico es ${numRandom}`)
    } else {
      alert(`Perdiste, Gil!!! El numero magico es ${numRandom}`)
    }
  } else {
    alert("Solo puedes ingresar NUMEROS del 0 al 10.")
  }
}
