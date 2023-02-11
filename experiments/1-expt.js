// Mis propios experimentos con js

//! Crearemos una clase constructora y realizaremos parametros por defecto
function constructora_cars(marca = "No reconocida", color = "Generico", año = 2000) {
    this.marca = marca
    this.color = color
    this.año = año
}

function print(marca, color, año) {
    var carroNuevo = new constructora_cars(`\tLos datos del carro son: \n\nMarca: ${marca} \nColor: ${color} \nAño: ${año}`)
    console.log(carroNuevo)
}

print("Toyota", "Negro", 2019)
