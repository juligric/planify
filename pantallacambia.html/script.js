const informacion = [
    [
        { texto: "Parque Tres de febrero", imagen: "image (5).png" },
        { texto: "Jardin japones", imagen: "image.png" },
        { texto: "Ecoparque", imagen: "image (6).png" },
        { texto: "Parque saavedra", imagen: "image (2).png" },
        { texto: "Barrancas de belgrano", imagen: "image (4).png" },
        { texto: "Jardin Botanico", imagen: "image (7).png" }
    ],
    [
        { texto: "Alto Parque", imagen: "image (8).png" },
        { texto: "Jardin japones", imagen: "image.png" },
        { texto: "Ecoparque", imagen: "image (6).png" },
        { texto: "Estacion Vertical", imagen: "image (9).png" },
        { texto: "Barrancas de Belgrano", imagen: "image (4).png" },
        { texto: "Jardin Botanico", imagen: "image (7).png" }
    ],
    [
        { texto: "Palermo Soho y Hollywood", imagen: "image (10).png" },
        { texto: "Malba", imagen: "image (11).png" },
        { texto: "Barrio chino", imagen: "image (15).png" },
        { texto: "Costanera Norte", imagen: "image (12).png" },
        { texto: "Museo Malvinas", imagen: "image (13).png" },
        { texto: "Museo Larreta", imagen: "image (14).png" }
    ],
    [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    [
        { texto: "Patio de los lecheros", imagen: "meriendas 1.png" },
        { texto: "Lagos de Regatas", imagen: "meriendas 2.png" },
        { texto: "El Rosedal Café", imagen: "meriendas 3.png" },
        { texto: "Club de Pescadores", imagen: "meriendas 4.png" },
        { texto: "Casa Cavia", imagen: "meriendas 5.png" },
        { texto: "Action live Paintball", imagen: "meriendas 6.png" }
    ],
    [
        { texto: "Shopping Dot Baires", imagen: "dot.png" },
        { texto: "Distrito Arcos", imagen: "arcos.png" },
        { texto: "Alto Palermo Shopping", imagen: "palermo.png" },
        { texto: "Patio Bullrich", imagen: "patio.png" },
        { texto: "Alcorta Shopping", imagen: "alcorta.png" },
        { texto: "Galerias del Pacifico", imagen: "galeria.png" }
    ],
    [
        { texto: "Paloko Bowling", imagen: "bowling6.png" },
        { texto: "Bowling Snack", imagen: "bowling1.png" },
        { texto: "Brasov Bowling - Pilar", imagen: "bowling2.png" },
        { texto: "Bowling Palermo", imagen: "bowling3.png" },
        { texto: "Bowling Paloko - DOT", imagen: "bowling4.png" },
        { texto: "Galerias del Pacifico", imagen: "bowling5.png" }
    ]
];

// Función para obtener el valor del parámetro de la URL
function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Función para actualizar los cuadros en base a la opción seleccionada
function actualizarContenido(opcion) {
    const datos = informacion[opcion];

    if (datos) {
        datos.forEach((dato, index) => {
            // Actualiza el texto y la imagen de cada cuadro
            const imagen = document.getElementById(`imagen${index + 1}`);
            const texto = document.getElementById(`texto${index + 1}`);

            imagen.src = dato.imagen; // Establece la URL de la imagen
            texto.textContent = dato.texto; // Establece el texto
        });
    } else {
        console.error("Opción no válida o no encontrada en la información.");
    }
}

// Obtén la opción seleccionada de la URL
const opcionSeleccionada = obtenerParametro('opcion');

// Actualiza el contenido según la opción seleccionada
if (opcionSeleccionada) {
    actualizarContenido(opcionSeleccionada);
}

// Función para alternar el menú lateral
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("open");
}

// Simulación de obtención de datos y despliegue de planes



function mostrarPlanes(data) {
    let opciones = {
        "Ir a la playa": "playa.webp",
        "Hacer un picnic en el parque": "picnic.png",
        "Salir a hacer senderismo": "palermo.png",
        "Visitar un jardín botánico": "jardin botanico.png",
        "Ir a caminar por un parque": "picnic.png",
        "Visitar una galería de arte": "museo.png",
        "Ir a una biblioteca": "libros.png",
        "Disfrutar de una clase de yoga en interiores": "yoga.png"


<<<<<<< HEAD
        


    };  
    
=======

    };

>>>>>>> c4fcfc66c0f42a546db7c7fdfa61aae057f9a235
    let contenido = "";

    for (let i = 0; i < 4; i++) {
        let urlIMG1 = opciones[data[i]];
        contenido += `
            <div class="plan-item">
                <img src="${urlIMG1}" alt="Imagen del plan" class="plan-imagen">  <!-- Clase 'plan-imagen' -->
                <p class="plan-texto">${data[i]}</p>  <!-- Clase 'plan-texto' -->
            </div>
        `;
    }

    const div1 = document.getElementById("grid-container");
    div1.innerHTML = contenido;
}







let mostrarFavoritos = (favorito) => {
    console.log(favorito)
    for (let index = 0; index < informacion.length; index++) {
        for (let i = 0; i < informacion[index].length; i++) {
            console.log(informacion[index][i].texto)
            if (informacion[index][i].texto === favorito.texto) {
                console.log("encontrado")
                // Crear el contenedor principal de la grilla
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");

                // Crear el enlace
                const link = document.createElement("a");
                link.href = `final.html?item=${i + 1}`;

                // Crear el contenedor de la imagen
                const imagenContainer = document.createElement("div");
                imagenContainer.classList.add("imagenFavoritos");

                // Crear la imagen
                const imagen = document.createElement("img");
                imagen.id = `imagen${i++}`;
                imagen.classList.add("imagen");
                imagen.src = favorito.imagen; // Especifica la URL de la imagen si la tienes
                imagen.alt = `Imagen ${i++}`;

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
