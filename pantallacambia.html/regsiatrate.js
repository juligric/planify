let username = document.getElementById("username")
let password = document.getElementById("password")
let button = document.getElementById("button")
button1.addEventListener("click",()=>{
   
    postData("signup",{username: username.value,password:password.value,email: username.value},(data)=>{
    console.log(data)
})
})