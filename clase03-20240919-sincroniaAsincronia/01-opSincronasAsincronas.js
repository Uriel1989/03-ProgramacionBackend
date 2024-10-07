// Inicializa la variable 'i' con el valor 1
let i = 1;

// Imprime en la consola "operacion 1"
console.log(`operacion ${i}`);

// Incrementa 'i' en 1 (ahora 'i' es 2)
i++;

// Imprime en la consola "operacion 2"
console.log(`operacion ${i}`);

// Incrementa 'i' en 1 (ahora 'i' es 3)
i++;

// Establece una fecha de finalización que es 3 segundos (3000 ms) a partir de ahora
let fechaFin = Date.now() + 1000 * 3;

// Bucle que espera hasta que el tiempo actual sea mayor que 'fechaFin'
// Este bucle no hace nada, solo espera
while (Date.now() < fechaFin) {
    // espere
}

// Imprime en la consola "operacion 3"
console.log(`operacion ${i}`);

// Incrementa 'i' en 1 (ahora 'i' es 4)
i++;

// Imprime en la consola "operacion 4"
console.log(`operacion ${i}`);

// Incrementa 'i' en 1 (ahora 'i' es 5)
i++;

// Imprime en la consola "operacion 5"
console.log(`operacion ${i}`);

// Incrementa 'i' en 1 (ahora 'i' es 6)
i++;

// Establece un temporizador que ejecutará la función después de 3000 ms (3 segundos)
setTimeout(() => {
    console.log(`op 1`);
}, 3000);

// Establece un temporizador que ejecutará la función después de 1000 ms (1 segundo)
setTimeout(() => {
    console.log(`op 2`);
}, 1000);

// Establece un temporizador que ejecutará la función después de 300 ms
setTimeout(() => {
    console.log(`op 3`);
}, 300);

// Inicializa un contador con el valor de 3
let contador = 3;

// Define una función llamada 'imprimeOp'
function imprimeOp() {
    // Incrementa el contador en 1
    contador++;

    // Imprime en la consola "op" seguido del valor actual de 'contador'
    console.log(`op ${contador}`);

    // Si el contador llega a 10, se detiene el intervalo
    if (contador == 10) {
        clearInterval(intervalo01);
    }
}

// Establece un intervalo que ejecutará la función 'imprimeOp' cada 200 ms
let intervalo01 = setInterval(imprimeOp, 200);


