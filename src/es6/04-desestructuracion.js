// Asignacion de //!desestruracion
function print(texto) {
    console.log(texto)
}

// arrays destructuracion

let fruits = ["manzana", "Pera"] // Array basico

//* Desestructuracion

let [a, b] = fruits

console.log(`\tLos elementos son los siguientes: \n[1] Elemento 0 del array = ${a} \n[2] Elemento 1 del array = ${b}`)

// Esto es lo mismo que:

console.log("\n", fruits[0])

//! Destructuracion de objetos

let user = {
    username: "Jose100",
    age: 17
}
let { username, age } = user
console.log(username)

// Spread Operator

console.log("\n")
let person = { name2: "Jose", age2: 17 }
let country = "GT"

// Creacion de variable donde se junte todo

let data = { ...person, country } // -> Los ... se usan para asignar los datos de un objeto a un objeto nuevo
console.log(data)
data = { id: 1, ...person }
console.log(data)

// rest 
function sum(num1, ...values) {
    console.log(values)
    console.log(num1 + values[0])
    
    return num1 + values[0]
}
sum(1, 1,2,3,4)

array1 = [1, 2, 3, 4, 5, 6]
console.log(array1[0])