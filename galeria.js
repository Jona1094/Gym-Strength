let contenedorGaleria = document.querySelector ('.contenedor-galeria')

let galeriaImg = ['../img/ejercicios.yoga.jpg', '../img/yoga.adultos.jpg']

let mostrarGaleria = (galeriaImg) => {

    let imgGaleria = document.createElement ('IMG')
    imgGaleria.setAttribute ('SRC', galeriaImg)
    imgGaleria.classList.add ('imgGaleria')

    return imgGaleria;
}

let imgTemporal = document.createDocumentFragment ();

for (let i = 0; i < galeriaImg.length; i++) {
    let nuevaImg = mostrarGaleria (galeriaImg[i]);
    imgTemporal.appendChild (nuevaImg)
} 
    contenedorGaleria.appendChild (imgTemporal)
