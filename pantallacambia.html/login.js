let username = document.getElementById("username")
let password = document.getElementById("password")
let button = document.getElementById("button")


button.addEventListener("click", async () => {

    postData("login", { email: username.value, password: password.value }, async (data) => {
        console.log(data.msg)
        if (data.valid) {


            sessionStorage.setItem("username", username.value)
            sessionStorage.setItem("favoritos", data.favoritos)
            location.href = "./normal.html"

        }
    })
})




let data2 = [
    { "img": "imgs/foto1", "descripcion": "cumple de ari" },
    {},
    {},
    {}
]

function mostrarPlanes(data2) {
    let urlIMG1;

    if (data[0] === "Ir al cine") {
        urlIMG1 = "cine clima.png"; // Inserta aquí la URL de tu imagen
    }
    else if (data[0] === "Visitar un museo") {
        urlIMG1 = "dot.png";
    }

    div1.innerHTML = `<img href="${urlIMG1}">`
    p1.innerHTML = `<p>${data[0]}</p>`
}


