// Define un array de objetos que representan personajes de Star Wars
const starWarsCharacters = [
    {
        id: 1,
        name: "Luke Skywalker",
        affiliation: "Hero",
        species: "Human",
        weapon: "Lightsaber",
        side: "Light"
    },
    {
        id: 2,
        name: "Darth Vader",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    {
        id: 3,
        name: "Princess Leia Organa",
        affiliation: "Hero",
        species: "Human",
        weapon: "Blaster",
        side: "Light"
    },
    {
        id: 4,
        name: "Emperor Palpatine",
        affiliation: "Villain",
        species: "Human",
        weapon: "Lightsaber",
        side: "Dark"
    },
    // ... (más personajes)
];

// Función que imprime el nombre de los personajes del lado oscuro en mayúsculas
const imprimeMalos = personaje => {
    // Verifica si el personaje pertenece al lado oscuro
    if (personaje.side == "Dark") {
        // Imprime el nombre en mayúsculas
        console.log(personaje.name.toLocaleUpperCase());
    }
}

// Itera sobre el array de personajes y aplica la función 'imprimeMalos'
starWarsCharacters.forEach(imprimeMalos);

// Define un array de números
let numeros = [1, 2, 3, 4, 5];

// Utiliza el método map para crear un nuevo array con los cuadrados de los números
console.log(numeros.map(n => n ** 2)); // Imprime [1, 4, 9, 16, 25]

// Otra forma de hacer lo mismo usando Math.pow
console.log(numeros.map(n => Math.pow(n, 2))); // Imprime [1, 4, 9, 16, 25]