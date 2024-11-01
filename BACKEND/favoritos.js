import fs from "fs"
export let favoritos = (data) => {
   console.log(data)
    let favoritos = JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].email === data.username) {
            favoritos[i].planes.push(data.plan)
   fs.writeFileSync("./usuarios.json", JSON.stringify(favoritos,null,2),"utf-8")
        }
        
    }
        

   return "Cargado correctamente"
   };
 
 
 export let recibirFavoritos = (data)=>{
    let planes
    let favoritos = JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
    for (let i = 0; i < favoritos.length; i++) {
        console.log(favoritos[i])
        console.log(data.username)
        if (favoritos[i].email === data.username) {
            
            planes = favoritos[i].planes
        }
        
    }
    console.log(planes)
    return planes
 }