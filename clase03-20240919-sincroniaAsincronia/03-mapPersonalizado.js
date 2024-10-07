// Define un array de números
let numeros = [1, 2, 3, 4, 5];

// Define una función llamada 'miMap' que simula el comportamiento del método 'map' de los arrays
const miMap = (datoArray = [], callback) => {
    // Verifica si 'datoArray' es un array
    if (!Array.isArray(datoArray)) {
        // Si no es un array, retorna un mensaje de error
        return `Argumento debe ser un array`;
    }
    
    // Inicializa un array vacío para almacenar los resultados
    let resultado = [];
    
    // Itera sobre cada elemento del array de entrada
    for (let i = 0; i < datoArray.length; i++) {
        // Aplica la función de callback al elemento actual y almacena el resultado
        let resultadoCallback = callback(datoArray[i]);
        // Agrega el resultado al array 'resultado'
        resultado.push(resultadoCallback);
    }
    
    // Retorna el array con los resultados transformados
    return resultado;
}

// Utiliza el método nativo 'map' para elevar al cuadrado cada número en 'numeros'
console.log(numeros.map(n => n ** 2)); // Imprime: [1, 4, 9, 16, 25]

// Utiliza la función personalizada 'miMap' para elevar al cuadrado cada número en 'numeros'
console.log(miMap(numeros, n => n ** 2)); // Imprime: [1, 4, 9, 16, 25]