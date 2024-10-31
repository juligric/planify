window.onload = function() {
    // Obtener el parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get('item');

    // Definir la información que se mostrará
    const informacion = {
        "1": { texto: "Detalles sobre Parque Tres de Febrero", imagen: "image (5).png" },
        "2": { texto: "detalles sobre jardin japones", imagen: "image.png" },
        "3": { texto: "Detalles sobre Palermo Soho y Hollywood", imagen: "image (6).png" },
        "4": { texto: "Detalles sobre Paintball Revolution", imagen: "image (16).png" },
        "5": { texto: "Detalles sobre Paintball Zona Norte", imagen: "image (18).png" },
        "6": { texto: "Detalles sobre Urban Paintball", imagen: "image (19).png" }
    };

    // Actualizar el contenido de la página
    if (informacion[item]) {
        document.getElementById("info-texto").innerText = informacion[item].texto;
        document.getElementById("info-imagen").src = informacion[item].imagen;
    }
};