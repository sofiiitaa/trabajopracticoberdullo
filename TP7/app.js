let ejercicio1 = document.querySelector("#eje1")
let botoneje1 = document.querySelector("#botonEje1")
let edad = 26


botoneje1.onclick = function () {
    if (edad >= 18) {
        ejercicio1.textContent = 'Sos mayor de edad'
    } else {
        ejercicio1.textContent = 'No sos mayor de edad'
    }
}
let nombredeusuario = "Nahuel"
let ejercicio2 = document.querySelector("#eje2")
let botoneje2 = document.querySelector("#eje")


botoneje2.onclick = function () {
    if (nombredeusuario == "Nahuel") {
        ejercicio2.textContent = "Bienvenido Nahuel,como estas?"

    }
    else {
        ejercicio2.textContent = "Bienvenido usuario"
    }
}
let nombredeusuario2 = "marcos"
let ejercicio3 = document.querySelector("#eje3")
let botoneje3 = document.querySelector("#eje")

botoneje3.onclick = function () {
    if (nombredeusuario = " marcos" + "nahuel") {
        ejercicio3.textContent = "bienvenido marcos" + "bienvenido nahuel"
    }
    else {
        ejercicio3.textContent = "bienvenido usuario"

    }
}
let numero = 0
let botoneje4 = document.querySelector("#botoneje4")
let eje4 = document.querySelector("#eje4")
botoneje4.onclick = function () {
    if (numero < 0) {
        eje4.textcontent = "El número es negativo"
    } else if (numero > 0) {
        eje4.textContent = "el numero es positivo"
    } else {
        eje4.textContent = "el numero es 0"

    }
}
let ejercicio = document.querySelector("#eje5")
let botoneje5 = document.querySelector("#botoneje5")
let edad2 = 80

botoneje5.onclick = function () {
    if ((edad >= 6) && (edad <= 11)) {
        eje5.textContent = "la edad corresponde es a un niño"
    } else if ((edad >= 12) && (edad <= 18)) {
        eje5.textContent = "la edad correspnde a un adolecente"
    } else if ((edad >= 19) && (edad <= 26)) {
        eje5.textContent = "la edad corresponde a un adulto"
    } else if (edad >= 60) {
        eje5.textContent = "la edad corresponde a un anciano"
    }
}

let eje7 = document.querySelector("#eje7")
let botoneje7 = document.querySelector("#botoneje7")
let contraseña = '123456'

botoneje7.onclick = function () {
    if (contraseña = 'secreto') {

        eje7.textContent = 'acesso concedido'
    }
    else {
        eje7.textContent = 'acesso denegado'


    }
}