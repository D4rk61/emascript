console.clear()
// Experimentacion con la desconstruccion, llamar a datos de listas u objetos
let lista1 = [1, 2, 3, 4, 5]


let data = {
    name: "Jose",
    age: 17

}

let [a, b] = lista1

console.log(`EL primer dato del array es: ${a}\nEL segundo dato del array es: ${b}\n\n`)
console.log("\tDesconstruccion en un \"Objeto\":")

let { name, age } = data
console.log(name)