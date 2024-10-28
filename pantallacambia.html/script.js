const informacion = {
    "1": [
        { texto: "Parque Tres de febrero", imagen: "image (5).png" },
        { texto: "Jardin japones", imagen: "image.png" },
        { texto: "Ecoparque", imagen: "image (6).png" },
        { texto: "Parque saavedra", imagen: "image (2).png" },
        { texto: "Barrancas de belgrano", imagen: "image (4).png" },
        { texto: "Jardin Botanico", imagen: "image (7).png" }
    ],
    "2": [
        { texto: "Alto Parque", imagen: "image (8).png" },
        { texto: "Jardin japones", imagen: "image.png" },
        { texto: "Ecoparque", imagen: "image (6).png" },
        { texto: "Estacion Vertical", imagen: "image (9).png" },
        { texto: "Barrancas de Belgrano", imagen: "image (4).png" },
        { texto: "Jardin Botanico", imagen: "image (7).png" }
    ],
    "3": [
        { texto: "Palermo Soho y Hollywood", imagen: "image (10).png" },
        { texto: "Malba", imagen: "image (11).png" },
        { texto: "Barrio chino", imagen: "image (15).png" },
        { texto: "Costanera Norte", imagen: "image (12).png" },
        { texto: "Museo Malvinas", imagen: "image (13).png" },
        { texto: "Museo Larreta", imagen: "image (14).png" }
    ],
    "4": [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    "5": [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    "6": [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    "7": [
        { texto: "Paintball Revolution", imagen: "image (16).png" },
        { texto: "Xtreme Paintball", imagen: "image (17).png" },
        { texto: "Paintball Zona Norte", imagen: "image (18).png" },
        { texto: "Urban Paintball", imagen: "image (19).png" },
        { texto: "Warzone Paintball", imagen: "image (20).png" },
        { texto: "Action live Paintball", imagen: "image (21).png" }
    ],
    "8": [
        { texto: "Patio de los lecheros", imagen: "meriendas 1.png" },
        { texto: "Lagos de Regatas", imagen: "meriendas 2.png" },
        { texto: "El Rosedal Café", imagen: "meriendas 3.png" },
        { texto: "Club de Pescadores", imagen: "meriendas 4.png" },
        { texto: "Casa Cavia", imagen: "meriendas 5.png" },
        { texto: "Action live Paintball", imagen: "meriendas 6.png" }
    ],
    "9": [
        { texto: "Shopping Dot Baires", imagen: "dot.png" },
        { texto: "Distrito Arcos", imagen: "arcos.png" },
        { texto: "Alto Palermo Shopping", imagen: "palermo.png" },
        { texto: "Patio Bullrich", imagen: "patio.png" },
        { texto: "Alcorta Shopping", imagen: "alcorta.png" },
        { texto: "Galerias del Pacifico", imagen: "galeria.png" }
    ],
    "10": [
        { texto: "Paloko Bowling", imagen: "bowling6.png" },
        { texto: "Bowling Snack", imagen: "bowling1.png" },
        { texto: "Brasov Bowling - Pilar", imagen: "bowling2.png" },
        { texto: "Bowling Palermo", imagen: "bowling3.png" },
        { texto: "Bowling Paloko - DOT", imagen: "bowling4.png" },
        { texto: "Galerias del Pacifico", imagen: "bowling5.png" }
    ]
};

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


fetchData("planes", (data) => {
    console.log(data)
    mostrarPlanes(data);
});

function mostrarPlanes(data) {
    let urlIMG1;

    if (data[0] === "Ir a la playa") {
        urlIMG1 = "cine clima.png";
    } else if (data[0] === "Visitar un museo") {
        urlIMG1 = "dot.png";
    }

    const div1 = document.getElementById("div1");
    const p1 = document.getElementById("p1");

    div1.innerHTML = `<img src="${urlIMG1}" alt="Imagen del plan">`;
    p1.innerHTML = `<p>${data[0]}</p>`;
}
