window.onload = function() {
    // Obtener el parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get('item');

    // Definir la información que se mostrará
    const informacion = {
        "1": { texto: "Detalles sobre Parque Tres de Febrero", imagen: "image (5).png" },
        "2": { site: "https://jardinjapones.org.ar/", texto1: " Jardin Japones", texto: "Sumérgete en un rincón de paz y belleza en pleno corazón de la ciudad. El Jardín Japonés es un espacio ideal para desconectar y disfrutar de la naturaleza con delicados paisajes de inspiración japonesa. Pasea entre estanques llenos de coloridos koi, cruza puentes rojos icónicos y explora la armonía de sus jardines cuidadosamente diseñados. Además, encontrarás un centro cultural que ofrece actividades, exposiciones y talleres para conocer más sobre la cultura japonesa. ¡Un lugar perfecto para una experiencia inolvidable!", imagen: "jardinfinal.png" },
        "3": { site: "https://buenosaires.gob.ar/vicejefatura/ambiente/ecoparque", texto1: "Ecoparque" ,texto: "detalles sobre ECOparque", imagen: "image (6).png" },
        "4": { texto: "Detalles sobre Parque Saavedra", imagen: "image (2).png" },
        "5": { texto: "Detalles sobre Barrancas debelgrano", imagen: "image (4).png" },
        "6": { texto: "Detalles sobre Jardin Botanico", imagen: "image (7).png" }
    };

    // Actualizar el contenido de la página
    if (informacion[item]) {
        document.getElementById("info-texto").innerText = informacion[item].texto;
        document.getElementById("info-imagen").src = informacion[item].imagen;
        document.getElementById("titulo").innerText = informacion [item].texto1;
        document.getElementById("Cambio").urlParams = informacion [item].site;
    }
    const siteUrl = informacion[item].site;
    if (siteUrl) {
        document.getElementById("Cambio").href = siteUrl; // Cambiar 'urlParams' por 'href'
    }
}


function toggleHeart(element) {
element.classList.toggle("active");
}