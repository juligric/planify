let username = document.getElementById("username")
let password = document.getElementById("password")
let button1 = document.getElementById("button1")
button1.addEventListener("click", () => {

    postData("signup", { username: username.value, password: password.value, email: username.value }, (data) => {
        console.log(data)
        if (data === "Usuario cargado correctamente") {
            window.location.href = "./normal.html"

        } else {
            alert("Usuario ya registrado")
        }
    })
})