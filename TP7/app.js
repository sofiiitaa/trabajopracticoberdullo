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
    else {ejercicio2.textContent ="Bienvenido usuario"          
    }
}
 let nombredeusuario ="marcos" + "nahuel"
 let ejercicio3 = document.querySelector("#eje3")
 let botoneje3 = document.querySelector("#eje")
 
 botoneje3.onclick = function(){
if (nombredeusuario = " marcos" +"nahuel"){
ejercicio3.textContent= "bienvenido marcos" +"bienvenido nahuel"
}                    
else{ ejercicio3.textContent ="bienvenido usuario"




}




 }