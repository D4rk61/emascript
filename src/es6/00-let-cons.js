// Nuevas palabras "let" y "const", con estas nuevas palabras habran nuevas reglas 

function print(texto) {
    console.log(texto)
}


var lastName = "David"; // Asisgnamo variable 
lastName = "Jose"; // Reasignar

console.log(lastName);


console.log("\n")

// Variable let en js

let fruit = "Apple"; //! Declarar y asignar

fruit = "Kiwi";
console.log(fruit)

console.log("\n")
// Constante en js

const animal = "Dog"; //! Una constante no es posible reasignar
try {
    animal = "cat"
} catch {
    console.log("Una \"constante\" no se puede cambiar\n")
}

console.log(`Valor inicial de la constante ${animal}`)

const fruits = () => {
    if (true) {
        var fruta1 = "Apple"; // scope global
        let fruta2 = "Kiwi";    //* scope local
        const fruta3 = "Banana";    //* scope local

    }
    print(fruta1);
    print(fruta2);
    print(fruta3);
    
}

fruits();

/* Posdata, la palabra "var" puede ser llamada en cualquier ara de nuestro codigo (scope global)
Por otra parte en let y const; solo pueden ser llamadas en el mismo pedazo de codigo donde fueron declaradas (scope local) */
