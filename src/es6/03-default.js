// Parametros por defecto en js 

function newUser(name="No reconocido", age=0, country="No Reconocido") {
    function print(texto) {
        console.log(texto)

    }

    print(`\tEl suario tiene los siguientes datos: \nNombre: ${name} \nEdad: ${age} \nPais: ${country}`)
}


newUser(17, "Guatemala")
