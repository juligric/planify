import fs from "fs";


// Guardar inf usuario

export let signUp = (data)=>{
   let usuarios = JSON.parse(fs.readFileSync("./usuarios.json","utf-8"))
   let usuario = {
      username:data.username, 
      password:data.password,
      email:data.email,
      planes:[],
   };
   if (!usuarios.includes(usuario.username)) {
      usuarios.push(usuario);
      fs.writeFileSync("usuarios.json", JSON.stringify(usuarios,null,2),"utf-8");
      return "Usuario cargado correctamente"
   }else{
      return "Ese usuario ya existe"
   }
}








  
   

   