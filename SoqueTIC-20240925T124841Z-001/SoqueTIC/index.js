import { onEvent, startServer } from "soquetic";

function verificarPalabra(palabra) {
  if (palabra === "soquetic") {
    return true;
  } else {
    return false;
  }
}

onEvent("adivino", verificarPalabra);

startServer();
