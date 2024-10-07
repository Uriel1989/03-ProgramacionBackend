// Define una función llamada 'operacion' que toma dos números y una función de callback
const operacion = (a, b, callback) => {
    // Verifica si 'a' y 'b' son números
    if (typeof a != "number" || typeof b != "number") {
        // Si alguno de los argumentos no es un número, llama al callback con un error
        return callback(new Error("argumentos inválidos..."));
    }
    // Si ambos argumentos son válidos, llama al callback con null (sin error) y los dos números
    return callback(null, a, b);
}

// Define una función de callback para sumar
const sumar = (error, op1, op2) => {
    // Verifica si hay un error
    if (error) {
        // Si hay un error, retorna el mensaje de error
        return error.message;
    }
    // Si no hay error, retorna la suma de op1 y op2
    return op1 + op2;
}

// Define una función de callback para restar
const restar = (error, op1, op2) => {
    // Verifica si hay un error
    if (error) {
        // Si hay un error, retorna el mensaje de error
        return error.message;
    }
    // Si no hay error, retorna la resta de op1 y op2
    return op1 - op2;  
}

// Llama a la función 'operacion' con números válidos y la función 'sumar'
let resultado = operacion(5, 4, sumar);
// Imprime el resultado de la suma: 9
console.log(resultado);

// Llama a la función 'operacion' con números válidos y la función 'restar'
resultado = operacion(5, 4, restar);
// Imprime el resultado de la resta: 1
console.log(resultado);

// Llama a la función 'operacion' con un argumento inválido (una cadena en lugar de un número)
resultado = operacion("5", 4, restar);
// Imprime el mensaje de error: "argumentos inválidos..."
console.log(resultado);

// Imprime un mensaje final indicando que el script ha terminado
console.log("fin...!!!");