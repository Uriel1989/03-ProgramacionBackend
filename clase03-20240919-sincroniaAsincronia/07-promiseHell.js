// Define una función 'suma' que toma dos argumentos y devuelve una promesa
const suma = (a, b) => {
    return new Promise((res, rej) => {   // 'res' es la función para resolver la promesa, 'rej' para rechazarla

        // Verifica si los argumentos son números
        if (typeof a != "number" || typeof b != "number") {
            // Si alguno de los argumentos no es un número, rechaza la promesa con un mensaje de error
            rej("Argumentos inválidos");
        }

        // Si ambos argumentos son válidos, resuelve la promesa con la suma de 'a' y 'b'
        res(a + b);
        // También se podría usar: res("Juan") para resolver con un valor diferente (comentar esta línea)
    });
}

// Realiza una serie de sumas encadenadas utilizando promesas
suma(5, 5)  // Llama a la función suma con 5 y 5
    .then(res1 => {  // Maneja el resultado de la primera suma
        suma(res1, 5)  // Llama a suma nuevamente usando el resultado anterior (10) y 5
            .then(res2 => {  // Maneja el resultado de la segunda suma
                suma(res2, 5)  // Llama a suma nuevamente usando el resultado anterior (15) y 5
                    .then(resFinal => {  // Maneja el resultado de la tercera suma
                        console.log(resFinal, "Promise Hell");  // Imprime el resultado final (20) y un mensaje
                    });
            });
    });