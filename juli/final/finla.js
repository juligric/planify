
let data = ""
import { subMenu, } from "../repository.js";

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

window.onload = function () {
    // Obtener el parámetro de la URL
    const item = sessionStorage.getItem("item");
    // Definir la información que se mostrará
    const informacion = {
        "1": { texto: "Detalles sobre Parque Tres de Febrero", imagen: "../images/image (5).png" },
        "2": { site: "https://jardinjapones.org.ar/", texto1: " Jardin Japones", texto: "Sumérgete en un rincón de paz y belleza en pleno corazón de la ciudad. El Jardín Japonés es un espacio ideal para desconectar y disfrutar de la naturaleza con delicados paisajes de inspiración japonesa. Pasea entre estanques llenos de coloridos koi, cruza puentes rojos icónicos y explora la armonía de sus jardines cuidadosamente diseñados. Además, encontrarás un centro cultural que ofrece actividades, exposiciones y talleres para conocer más sobre la cultura japonesa. ¡Un lugar perfecto para una experiencia inolvidable!", imagen: "../images/jardinfinal.png" },
        "3": { site: "https://buenosaires.gob.ar/vicejefatura/ambiente/ecoparque", texto1: "Ecoparque", texto: "detalles sobre ECOparque", imagen: "../images/image (6).png" },
        "4": { texto: "Detalles sobre Parque Saavedra", imagen: "../images/image (2).png" },
        "5": { texto: "Detalles sobre Barrancas debelgrano", imagen: "../images/image (4).png" },
        "6": { texto: "Detalles sobre Jardin Botanico", imagen: "../images/image (7).png" }
    };

    // Actualizar el contenido de la página
    if (informacion[item]) {
        document.getElementById("info-texto").innerText = informacion[item].texto;
        document.getElementById("info-imagen").src = informacion[item].imagen;
        document.getElementById("titulo").innerText = informacion[item].texto1;
        document.getElementById("Cambio").urlParams = informacion[item].site;
    }
    data = informacion[item].texto
    const siteUrl = informacion[item].site;
    if (siteUrl) {
        document.getElementById("Cambio").href = siteUrl; // Cambiar 'urlParams' por 'href'
    }
}


function toggleHeart(element) {
    const item = sessionStorage.getItem("item");
    console.log(item)
    const informacion = {
        "1": { texto: "Alto Parque", imagen: "../images/image (8).png" },
        "2": { texto: "Jardin japones", imagen: "../images/image.png" },
        "3": { texto: "Ecoparque", imagen: "../images/image (6).png" },
        "4": { texto: "Estacion Vertical", imagen: "../images/image (9).png" },
        "5": { texto: "Barrancas de Belgrano", imagen: "../images/image (4).png" },
        "6": { texto: "Jardin Botanico", imagen: "../images/image (7).png" }
    }

    postData("favoritos", { plan: informacion[item], username: sessionStorage.getItem("username") }, (dataRecibida) => {
        console.log(data)
    })
    element.classList.toggle("active");

}

document.getElementById("heart-btn").addEventListener("click", () => {
    toggleHeart(document.getElementById("heart-btn"));
})