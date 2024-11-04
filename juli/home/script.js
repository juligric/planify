import { subMenu, informacion } from "../repository.js";

for (let i = 0; i < subMenu.length; i++) {
    let menu = document.getElementById(`submenu${i+1}`)
    for (let index = 1; index < subMenu[i].length; index++) {
        let li = document.createElement("li")
        let a = document.createElement("a")

        a.innerText = subMenu[i][index]
        li.addEventListener("click", () => {
            sessionStorage.setItem("opcion", i.toString())
            window.location.href = `../detalle/detalles.html`
        })
        li.appendChild(a)
        menu.appendChild(li)

    }
}




document.getElementById("sideMenuOpen").addEventListener("click", () => {
    toggleMenu();
})



// Función para alternar el menú lateral
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("open");
}

// Simulación de obtención de datos y despliegue de planes


function mostrarPlanes(data) {
    let opciones = {
        "Ir a la playa": "../images/playa.webp",
        "Hacer un picnic en el parque": "../images/picnic.png",
        "Salir a hacer senderismo": "../images/palermo.png",
        "Visitar un jardín botánico": "../images/jardin_botanico.png",
        "Ir a caminar por un parque": "../images/parque.png",
        "Visitar una galería de arte": "../images/museo.png",
        "Ir a una biblioteca": "../images/libros.png",
        "Disfrutar de una clase de yoga en interiores": "../images/yoga.png"
    };
    let contenido = "";

    for (let i = 0; i < data.length; i++) {
        let urlIMG1 = opciones[data[i]];
        if (urlIMG1) {
            contenido += `
                <div class="plan-item">
                    <img src="${urlIMG1}" alt="Imagen del plan" class="plan-imagen">
                    <p class="plan-texto">${data[i]}</p>
                </div>
            `;
        }
    }

    const div1 = document.getElementById("grid-container");
    if (div1) {
        div1.innerHTML = contenido;
    }
}






let mostrarFavoritos = (favorito) => {
    console.log(favorito)
        for (let i = 0; i < informacion[0].length; i++) {
            console.log(informacion[0][i].texto)
            if (informacion[0][i].texto === favorito.texto) {
                console.log("encontrado")
                // Crear el contenedor principal de la grilla
                const gridItem = document.createElement("div");
                gridItem.classList.add("widgetFavoritos");

                // Crear el enlace
                const link = document.createElement("a");

                link.href = `../final/final.html`;
                sessionStorage.setItem("item", (i + 1).toString())
                link.classList.add("link");

                // Crear el contenedor de la imagen
                const imagenContainer = document.createElement("div");
                imagenContainer.classList.add("imagenFavoritos");

                // Crear la imagen
                const imagen = document.createElement("img");
                imagen.id = `imagen${i++} `;
                imagen.classList.add("imagen");
                imagen.src = favorito.imagen; // Especifica la URL de la imagen si la tienes
                imagen.alt = `Imagen ${i++} `;

                // Añadir la imagen al contenedor de la imagen
                imagenContainer.appendChild(imagen);

                // Crear el párrafo de texto
                const texto = document.createElement("p");
                texto.id = "texto5";
                texto.textContent = favorito.texto; // Especifica el texto si lo tienes

                // Añadir el contenedor de la imagen y el texto al enlace
                link.appendChild(imagenContainer);
                link.appendChild(texto);

                // Añadir el enlace al contenedor principal de la grilla
                gridItem.appendChild(link);

                // Insertar el elemento de la grilla en el documento (por ejemplo, en un contenedor con id "grid")
                document.getElementById("sideMenu").appendChild(gridItem);


            }

        

    }
}


let inicio = document.getElementById("inicio")
postData("recibirFavoritos", { username: sessionStorage.getItem("username") }, (data) => {
    sessionStorage.setItem("favoritos", JSON.stringify(data, null, 2))
})
if (sessionStorage.getItem("username")) {
    if (sessionStorage.getItem("favoritos")) {
        inicio.innerText = ""
        let favoritos = JSON.parse(sessionStorage.getItem("favoritos"))
        favoritos.forEach(element => {
            mostrarFavoritos(element)
        });

    } else {
        inicio.innerText = "No se han encontrado favoritos"
    }
} else {
    inicio.innerText = "Iniciar sesión / Registrarse"
}


document.getElementById("messi").addEventListener("click", () => {
    toggleMenu();
}
)




fetchData("planes", (data)=>{
    console.log("HOlaa")
    console.log(data)
    mostrarPlanes(data)
})