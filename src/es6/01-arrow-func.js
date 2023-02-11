//
//! Las "funciones de fecla"
/* Estas no pueden ser metodos o pueden tener argumentos */

// sintaxis normal
function squeare(num) {
    return num * num
}

// funcion flecha

const squeare2 = (num) => {
    return num * num
}

// Parecido a funciones lambda 
const squeare3 = num => console.log(num * num)


squeare3(3)

