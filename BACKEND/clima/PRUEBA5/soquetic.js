import {onEvent, startServer} from "soquetic";

function clima () {

return JSON.parse (fs.readFileSync ("data/sabores.json", "utf-8"));
}



onEvent ("clima", clima)

/* Para resolver esto podrria hacer un json que actualice todos los ip de los usuarios, la ciudad, clima y por lo tanto tire recomendaciones para  cada uysuario. Luego que el fs lea esa data del json y le mande al front para cada user esos planes.*/