import fs from "fs";


// Guardar inf usuario




 export let login = (data) => {
    
   
   let usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
   let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === data.email && usuarios[i].password === data.password) { 
            usuarioEncontrado = usuarios[i];
            break;
         }
      }
  
      // Verifica si se encontró el usuario y si la contraseña coincide
      if (usuarioEncontrado) {
          return {valid: true, msg: "Se ha iniciado sesion correctamente",favoritos:usuarioEncontrado.planes}
      } else {
          return {valid: false, msg:"Usuario o contraseña incorrectos"}
      }
  };


