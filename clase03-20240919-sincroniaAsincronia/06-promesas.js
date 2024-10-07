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

// Imprime el resultado de la llamada a la función 'suma' con los argumentos 5 y 6
console.log(suma(5, 6)); // Esto imprimirá una promesa pendiente

// Intenta sumar directamente el resultado de la promesa a 10 (esto no funcionará como se espera)
console.log(suma(5, 6) + 10); // Esto imprimirá NaN porque 'suma(5, 6)' es una promesa

// Intenta multiplicar directamente el resultado de la promesa por 10 (esto no funcionará como se espera)
console.log(suma(5, 6) * 10); // Esto también imprimirá NaN

// Llama a la función 'suma' y maneja el resultado usando then/catch
suma(5, 6)
    .then(res1 => {
        let dato = res1 + 10; // Suma 10 al resultado de la suma
        console.log(dato); // Imprime el resultado (21)
    })
    .catch(error => console.log(error)) // Maneja cualquier error que ocurra
    .finally(() => {
        // Este bloque se ejecuta siempre, independientemente del resultado de la promesa
        console.log(`esto se ejecuta siempre, bien si la promesa sale por res, bien si sale por rej`);
    });

// Llama a la función 'suma' con un argumento inválido (una cadena en lugar de un número)
suma(5, "Juan")
    .then(res1 => {
        let dato = res1 + 10; // Este bloque no se ejecutará debido al error
        console.log(dato);
    })
    .catch(error => console.log(error)) // Imprime el mensaje de error: "Argumentos inválidos"
    .finally(() => {
        console.log(`esto se ejecuta siempre, bien si la promesa sale por res, bien si sale por rej`);
    });

// Realiza una solicitud HTTP usando fetch para obtener datos de una API
fetch("https://reqres.in/api/users?page=2")
    .then(res => {
        // Convierte la respuesta a formato JSON
        res.json()
            .then(datos => console.log(datos)) // Imprime los datos obtenidos
            .catch(e => console.log(e.message)); // Maneja cualquier error al convertir a JSON
    })
    .catch(e => console.log(e.message)); // Maneja cualquier error en la solicitud fetch