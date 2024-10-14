let entrada = document.getElementById("palabra");
let boton = document.getElementById("enviar");
let salida = document.getElementById("respuesta");

function enviarPalabra() {
  postData("adivino", entrada.value, recibirRespuesta);
}

function recibirRespuesta(respuesta) {
  console.log(respuesta);
  if (respuesta) {
    salida.innerText = "¡Palabra correcta!";
  } else {
    salida.innerText = "¡Palabra incorrecta! Seguí intentando.";
  }
}

boton.addEventListener("click", enviarPalabra);
