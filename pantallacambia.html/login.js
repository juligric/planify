let username = document.getElementById("username")
let password = document.getElementById("password")
let button = document.getElementById("button")
  
button.addEventListener("click",async()=>{
   await postData("login",({username: username.value,password:password.value}),(data)=>{
    if (data === true) {
            
    }
})
})


fetchData("planes",({ubicacion...}),(data)=>{
    mostrarPlanes(data)
            
    }

let data2 = [
    {"img":"imgs/foto1", "descripcion": "cumple de ari"},
    {,},
    {},
    {}
]

mostrarPlanes(data2){

    urlIMG1 = if (data[0] == "cine"){
        
    }

    div1.innerHTML = `<img href="${urlIMG1}">`
    p1.innerHTML = `<p>${data[0]}</p>`
}


    x.img
    x.descripcion