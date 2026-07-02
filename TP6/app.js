let titulo = document.querySelector("h1")
let body = document.querySelector("body")
let parrafo = document.querySelector("p")
let botonCambioLetra = document.querySelector("#botonCambioLetra")
let botonCambioparrafo = document.querySelector("#botonCambioparrafo")
let botonCambioColorLetra = document.querySelector("#botonCambioColorLetra")
let botonCambioFondo = document.querySelector("#botonCambioFondo")
let botonCambioTamañoLetra = document.querySelector("#botonCambioTamañoLetra")
let botonReiniciar = document.querySelector("#botonReiniciar")


botonCambioLetra.onclick = function () {
    parrafo.style.fontFamily = 'Arial'
    titulo.style.fontFamily = 'Arial'
}
botonCambioparrafo.onclick = function () {
    parrafo.textContent = 'futbol argentino pampeano'
}
botonCambioColorLetra.onclick = function () {
    titulo.style.color = ' lightgreen'
    parrafo.style.color = 'grey'
}
botonCambioFondo.onclick = function () {
    body.style.backgroundColor ='skyblue'
}
botonCambioTamañoLetra.onclick = function () {
    parrafo.style.fontSize = "30px"
    titulo.style.fontSize = "50px"
}
botonReiniciar.onclick = function () {
    
}
