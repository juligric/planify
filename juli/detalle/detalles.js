import { subMenu, informacion } from "../repository.js";

for (let i = 1; i < subMenu.length; i++) {
    let menu = document.getElementById(`submenu${i}`)
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

for (let index = 0; index < informacion[0].length; index++) {
    let grid = document.getElementById("grid-container")
    let gridItem = document.createElement("div")
    gridItem.classList.add("grid-item")
    let a = document.createElement("a")
    let imagenContainer = document.createElement("div")
    imagenContainer.classList.add("imagen-container")
    let imagen = document.createElement("img")
    imagen.classList.add("imagen")
    let p = document.createElement("p")
    grid.appendChild(gridItem)
    gridItem.appendChild(a)
    a.appendChild(imagenContainer)
    imagenContainer.appendChild(imagen)
    imagen.src = informacion[sessionStorage.getItem("opcion")][index].imagen
    p.innerText = informacion[sessionStorage.getItem("opcion")][index].texto
    a.appendChild(p)
    gridItem.addEventListener("click", () => {
        sessionStorage.setItem("item", (index + 1).toString())
        window.location.href = `../final/final.html`
    })
}



