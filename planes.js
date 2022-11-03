// NAV 

let contenedor = document.querySelector ('.contenedor-planes')
let header = document.createElement ('HEADER')
let nav = document.createElement ('NAV')
let ul = document.createElement ('UL')

contenedor.appendChild (header)
header.appendChild (nav)
nav.appendChild (ul)

contenedor.classList.add ('contenedor')
nav.classList.add ('nav')
ul.classList.add ('ul')

let itemsNav = [{'item': 'Inicio',
                 'link': '../paginas/index.html'},
                 {'item': 'Talleres',
                 'link': '../paginas/talleres.html'},
                 {'item': 'Planes',
                 'link': '../paginas/planes.html'},
                 {'item': 'Contacto',
                 'link': '../paginas/contacto.html'}]

let mostrarNav = (item, link) => {
    let li = document.createElement ('LI')
    let a = document.createElement ('A')

    ul.appendChild (li)
    li.appendChild (a)

    li.classList.add ('li')
    a.classList.add ('link')

    a.innerHTML = item;
    a.setAttribute ('href', link)
    

    return header;

}

let navTemporal = document.createDocumentFragment ();

for (let i = 0; i < itemsNav.length; i++) {
    let nuevoNav = mostrarNav (itemsNav[i].item, itemsNav[i].link)
    navTemporal.appendChild (nuevoNav)
}

contenedor.appendChild (navTemporal)