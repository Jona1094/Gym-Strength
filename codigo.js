let inicio = document.getElementById ('conteiner')
let header = document.getElementById ('header')

                // INICIO // 
// Imagen Inicio 
let bienvenida = document.createElement ('DIV')
bienvenida.classList.add ('bienvenida')
inicio.appendChild (bienvenida)
let imgInicio1 = document.createElement ('IMG')
let imgInicio2 = document.createElement ('IMG')
bienvenida.appendChild (imgInicio1)
bienvenida.appendChild (imgInicio2)
imgInicio1.classList.add ('imgInicio')
imgInicio2.classList.add ('imgInicio')
imgInicio1.setAttribute ('SRC', '../img/persona3.jpg')
imgInicio2.setAttribute ('SRC', '../img/persona4.jpg')

//Texto Inicio
let textoInicio1 = document.createElement ('H1')
let textoInicio2 = document.createElement ('H1')
let textoInicio3 = document.createElement ('H1')
let textoInicio4 = document.createElement ('H1')
bienvenida.appendChild (textoInicio1)
bienvenida.appendChild (textoInicio2)
bienvenida.appendChild (textoInicio3)
bienvenida.appendChild (textoInicio4)
textoInicio1.classList.add ('textoInicio1')
textoInicio2.classList.add ('textoInicio2')
textoInicio3.classList.add ('textoInicio3')
textoInicio4.classList.add ('textoInicio4')
textoInicio1.innerHTML = 'Eres mas FUERTE'
textoInicio2.innerHTML = 'De lo que CREES'
textoInicio3.innerHTML = 'Conocé nuestros planes'
textoInicio4.innerHTML = '"El mayor placer de la vida es hacer lo que la gente dice que <del> no puedes hacer. </del>"' 

// Efecto Máquina
let texto = document.querySelector (".textoInicio1")
let str = texto.innerHTML;
texto.innerHTML = "";
let speed = 100;
let i = 0;

function efectoMaquina () {
    if (i < str.length) {
        texto.innerHTML += str.charAt(i); i++;
    }
    setTimeout (efectoMaquina, speed)
}
setTimeout (efectoMaquina, speed)

// Efecto Scroll frase Inicio

let scroll1 = document.querySelector ('.textoInicio4')

const aparecerTexto = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add ('visible');
        } else {
            entrada.target.classList.remove ('visible')
        }
    })
}

const observador = new IntersectionObserver (aparecerTexto, {
    rootMargin: "100px",
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

observador.observe(scroll1)














/* let botonInicio = document.createElement ('BUTTON') */
/* bienvenida.appendChild (botonInicio) */
/* botonInicio.innerHTML = 'INGRESA AQUÍ' */
/* botonInicio.classList.add ('botonInicio') */
let contenedor = document.createElement ('SECT')
contenedor.classList.add ('contenedor-general')
inicio.appendChild (contenedor)

/* document.addEventListener ('DOMContentLoaded', () =>{
    header.style.display = 'none'
    bienvenida.classList.add ('bienvenida')
})

botonInicio.addEventListener ('click', () => {
        header.style.display = 'flex'
        contenedor.style.visibility = 'visible'
        botonInicio.style.display = 'none' 
        bienvenida.classList.add ('cerrar')
        bienvenida.classList.remove ('bienvenida')
}) 
 */
// Aside

let aside = document.createElement ('ASIDE')
contenedor.appendChild (aside)

let itemsAside = 
    [{'imgAs': '../img/persona1.jpg',
      'link': '/paginas/index.html',
      'item': 'Galeria'},
     {'imgAs': '../img/persona1.jpg',
      'link': '../paginas/contacto.html',
      'item': 'prueb'},
     {'imgAs': '../img/persona1.jpg',
      'link': '../paginas/planes.html',
      'item': 'prueb'}]

let mostrarAside = (imgAs, link, item) => {

let contItem = document.createElement ('DIV')
let imgAside = document.createElement ('IMG')
let itemAside = document.createElement ('A')
aside.appendChild (contItem)
contItem.appendChild (imgAside)
contItem.appendChild (itemAside)
aside.classList.add ('grid1')
contItem.classList.add ('contItem')
itemAside.classList.add ('itemAside')
imgAside.classList.add ('imgAside')
itemAside.innerHTML = item;
itemAside.setAttribute ('href', link)
imgAside.setAttribute ('src', imgAs)

return aside;
}

let AsideTemporal = document.createDocumentFragment()

for (let i = 0; i < itemsAside.length; i++) {
   let nuevoItemAside = mostrarAside (itemsAside[i].imgAs, itemsAside[i].link, itemsAside[i].item)
   AsideTemporal.appendChild(nuevoItemAside)
}

contenedor.appendChild (AsideTemporal)


// SECTION II 

let sect1 = document.createElement ('DIV')
contenedor.appendChild (sect1)

let titulo1 = document.createElement ('h1')
let pSect1 = document.createElement ('P')

sect1.appendChild (titulo1)
sect1.appendChild (pSect1)

sect1.classList.add ('grid2')
titulo1.classList.add ('titulo1')
pSect1.classList.add ('pSect1')

titulo1.innerHTML = 'ELIGE TU PLAN'
pSect1.innerHTML = 'Entrena con nosotros eligiendo un plan. Todos incluyen las áreas de cardio, peso integrado, peso libre, funcional, profesores de piso para evaluaciones y creación de rutinas, vestuarios y más.'

let datosPlanes = [{'tipo': 'Basic',
                    'Precio': '$ 3500',
                    'li1': 'Acceso a todos los aparatos',
                    'li2': 'Clases de Yoga 1 vez por semana',
                    'li3': 'Pilates 1 vez por semana',
                    'li4': 'Boxeo 1 vez por semana',
                    'btn': 'Comprar Plan'},
                    {'tipo': 'Black',
                    'Precio': '$ 5000',
                    'li1': 'Acceso a clases de Natación y nado libre',
                    'li2': 'Todas las clases disponibles 2 veces por semana',
                    'li3': 'Locker disponible',
                    'li4': 'Consulta gratis 1 vez al mes con Nutricionista',
                    'btn': 'Comprar Plan'},
                    {'tipo': 'Premium',
                    'Precio': '$ 7500',
                    'li1': 'Acceso a todos los aparatos',
                    'li2': 'Clases de Yoga 1 vez por semana',
                    'li3': 'Pilates 1 vez por semana',
                    'li4': 'Boxeo 1 vez por semana',
                    'btn': 'Comprar Plan'}]

let mostrarPlanes = (tipo, Precio, li1, li2, li3, li4, btn) => {
    let plan = document.createElement ('DIV')
    let tipoPlan = document.createElement ('H1')
    let precioPlan = document.createElement ('H1')
    let lis1 = document.createElement ('LI')
    let lis2 = document.createElement ('LI')
    let lis3 = document.createElement ('LI')
    let lis4 = document.createElement ('LI')
    let bntComprar = document.createElement ('BUTTON')

    sect1.appendChild (plan)
    plan.appendChild (bntComprar)
    plan.appendChild (tipoPlan)
    plan.appendChild (precioPlan)
    plan.appendChild (lis1)
    plan.appendChild (lis2)
    plan.appendChild (lis3)
    plan.appendChild (lis4)

    plan.classList.add ('plan')
    tipoPlan.classList.add ('tipoPlan')
    precioPlan.classList.add ('precioPlan')
    lis1.classList.add ('liPlanes')
    lis2.classList.add ('liPlanes')
    lis3.classList.add ('liPlanes')
    lis4.classList.add ('liPlanes')
    bntComprar.classList.add ('btnComprar')

    tipoPlan.textContent = tipo;
    precioPlan.textContent = Precio;
    lis1.textContent = li1;
    lis2.textContent = li2;
    lis3.textContent = li3;
    lis4.textContent = li4;
    bntComprar.textContent = btn;

    return titulo1;
}

let datoTemporal = document.createDocumentFragment ();
for (let i = 0; i < datosPlanes.length; i++) {
    let nuevoDato = mostrarPlanes (datosPlanes[i].tipo, datosPlanes[i].Precio, datosPlanes[i].li1, datosPlanes[i].li2, datosPlanes[i].li3, datosPlanes[i].li4, datosPlanes[i].btn)
    datoTemporal.appendChild (nuevoDato);
}
    sect1.appendChild (datoTemporal)












let sect2 = document.createElement ('DIV')
contenedor.appendChild (sect2)
sect2.classList.add ('grid3')

let tituloSect2 = document.createElement ('H1')
tituloSect2.innerHTML = 'Talleres'
tituloSect2.classList.add ('tituloSect2')
sect2.appendChild (tituloSect2)
let divTalleres = document.createElement ('DIV')
divTalleres.classList.add ('divTalleres')
sect2.appendChild (divTalleres)

let talleres = [{'nombre': 'YOGA',
                 'desc': 'Aprende herramientas yoguicas para mejorar tu calidad de Vida, conocer los principios trascendentales de la vida y encontrarte con tu propio Ser.',
                 'img': '../img/persona2.jpg'},
                 {'nombre': 'PILATES',
                  'desc': 'Aprende herramientas yoguicas para mejorar tu calidad de Vida, conocer los principios trascendentales de la vida y encontrarte con tu propio Ser.',
                  'img': '../img/persona1.jpg'},
                  {'nombre': 'NATACIÓN',
                  'desc': 'Aprende herramientas yoguicas para mejorar tu calidad de Vida, conocer los principios trascendentales de la vida y encontrarte con tu propio Ser.',
                  'img': '../img/persona1.jpg'},
                  {'nombre': 'BOXEO',
                  'desc': 'Aprende herramientas yoguicas para mejorar tu calidad de Vida, conocer los principios trascendentales de la vida y encontrarte con tu propio Ser.',
                  'img': '../img/persona1.jpg'}]

let mostrarTalleres = (nombre, desc, img) => {
    let taller = document.createElement ('DIV')
    let tallerNombre = document.createElement ('H1')
    let tallerDesc = document.createElement ('P')
    let tallerImg = document.createElement ('IMG')

    divTalleres.appendChild (taller)
    taller.appendChild (tallerNombre)
    taller.appendChild (tallerDesc)
    taller.appendChild (tallerImg)

    taller.classList.add ('taller')
    tallerNombre.classList.add ('tallerNombre')
    tallerDesc.classList.add ('tallerDesc')
    tallerImg.classList.add ('tallerImg')

    tallerNombre.textContent = nombre;
    tallerDesc.textContent = desc;
    tallerImg.setAttribute ('SRC', img)

    return divTalleres;
}

let tallertemporal = document.createDocumentFragment ();
for (let i = 0; i < talleres.length; i++) {
    let nuevoTaller = mostrarTalleres(talleres[i].nombre, talleres[i].desc, talleres[i].img);
    tallertemporal.appendChild (nuevoTaller)
}

sect2.appendChild (tallertemporal)


// Sect 1 y Sect 2 ACORDION **

/* let contSect = document.createElement ('DIV')  */

/* let contAcord = document.createElement ('DIV')
contAcord.classList.add ('contAcord')
sect1.appendChild (contAcord)


let mostrarArordion = (titulo, desc) => { 
    let acordion = document.createElement ('DIV')
    acordion.classList.add ('acordion')
    let verAcordion = document.createElement ('DIV')
    verAcordion.classList.add ('verAcordion')
    let tituloAcord = document.createElement ('H1')
    tituloAcord.classList.add ('tituloAcord')
    tituloAcord.textContent = titulo;
    let pAcord = document.createElement ('P')
    pAcord.classList.add ('pAcord')
    pAcord.textContent = desc;
    contAcord.appendChild (acordion)
    contAcord.appendChild (verAcordion)
    acordion.appendChild (tituloAcord)
    verAcordion.appendChild (pAcord)

acordion.addEventListener ('click', () => {
    acordion.classList.toggle ('active')
    if (verAcordion.style.display == 'flex') {
        verAcordion.style.display = 'none'
    } else {
        verAcordion.style.display = 'flex';
    }
})
return contAcord;
} 

  let descAcord = [{'titulo': 'PLAN BASIC',
                    'desc': '- Acceso a todas las áreas del gimnasio'},
                    {'titulo': 'PLAN PREMIUM',
                    'desc': 'el yoga me cambio la life'},
                    {'titulo': 'PLAN BLACK',
                    'desc': 'sarasa sarasa'},
                    {'titulo': 'PLAN ANUAL',
                    'desc': 'sarasa sarasa'}]

let acordTemporal = document.createDocumentFragment ();

for (let i = 0; i < descAcord.length; i++) {
    nuevoAcord = mostrarArordion (descAcord[i].titulo, descAcord[i].desc);
    acordTemporal.appendChild (nuevoAcord)
}
sect1.appendChild (acordTemporal)
 */