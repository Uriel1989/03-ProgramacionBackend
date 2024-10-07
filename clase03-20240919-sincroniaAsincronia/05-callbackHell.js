// Define un array de empleados con sus datos
const plantilla = [
    { legajo: 9901, nombre: "Juan", apellido: "Ramirez", categoria: "B" },
    { legajo: 9933, nombre: "Lucia", apellido: "Gaitan", categoria: "A" },
    { legajo: 9941, nombre: "Martina", apellido: "Quiroga", categoria: "A" },
    { legajo: 9942, nombre: "Carlos", apellido: "Estevez", categoria: "B" },
    { legajo: 9952, nombre: "Juan Manuel", apellido: "Lopez", categoria: "C" },
];

// Define un array de categorías con sus respectivas actividades
const categorias = [
    { codigo: "A", descrip: "categoría A", actividades: [1, 3] },
    { codigo: "B", descrip: "categoría B", actividades: [2, 3, 4] },
    { codigo: "C", descrip: "categoría C", actividades: [3, 4] },
    { codigo: "D", descrip: "categoría D", actividades: [4] },
];

// Define un array que relaciona actividades con sus remuneraciones
const remuneracionPorActividad = [
    { actividad: 1, remuneracion: 620000, descrip: "ventas" },
    { actividad: 2, remuneracion: 220000, descrip: "desarrollo" },
    { actividad: 3, remuneracion: 190000, descrip: "marketing" },
    { actividad: 4, remuneracion: 190000, descrip: "seguridad" },
];

// Inicializa un array vacío para almacenar los sueldos calculados
let sueldos = [];

// Itera sobre cada empleado en la plantilla
plantilla.forEach(empleado => {
    let sueldo = 0; // Inicializa el sueldo del empleado en cero
    console.log(`Procesando empleado ${empleado.apellido}`); // Mensaje de procesamiento

    // Busca la categoría del empleado en el array de categorías
    categorias.find(categoria => {
        if (categoria.codigo === empleado.categoria) {
            console.log(`   procesando categoria ${categoria.descrip}`); // Mensaje de categoría procesada
            
            // Itera sobre las actividades de la categoría
            categoria.actividades.forEach(actividad => {
                // Busca la remuneración correspondiente a cada actividad
                remuneracionPorActividad.find(paga => {
                    if (paga.actividad === actividad) {
                        console.log(`       procesando actividad ${paga.descrip}`); // Mensaje de actividad procesada
                        sueldo += paga.remuneracion; // Suma la remuneración al sueldo total
                        return true; // Termina la búsqueda para esta actividad
                    }
                });
            });
            return true; // Termina la búsqueda para esta categoría
        }
    });

    // Agrega el apellido del empleado y su sueldo calculado al array 'sueldos'
    sueldos.push({ apellido: empleado.apellido, sueldo });
});

// Imprime el array de sueldos calculados
console.log(sueldos);

// Llama a la función fetch (sin parámetros ni uso en este contexto)
fetch();
