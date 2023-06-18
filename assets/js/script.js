console.log('Tarea 5 - Introduccion Javascript');

// Paso 0: Declaración e inicialización de variables

const notas = [6, 8, 9, 2, 5, 10];
const cantidadNotas = notas.length;
const decimales = 2
let sumaNotas = 0;
let resultado = 0;



// Paso 1: Definición de funciones a utiliza

// Función: Suma de valores - recibe el arreglo, lo itera y suma los valores
//          Retorna - un entero que es la suma de los elementos en el arreglo
function sumaValores(par_arreglo){
    let suma = 0
    par_arreglo.forEach(valor => {
        suma += valor;
    });

    return suma;
}

// Función: Promedio - Se promedia el resultado y se retorna (ajustado)
function promedio(sumaValores, cantidadValores, decimales){

    const valorPromedio = (sumaValores/cantidadValores)
    return valorPromedio.toFixed(decimales)    

}

// Llamada a las funciones creadas
sumaNotas = sumaValores(notas)
resultado = promedio(sumaNotas, cantidadNotas, decimales)

// Detalle de lo solicitado

console.log("Notas del estudiante: " + notas);
console.log("Total de notas: " + cantidadNotas);
console.log("Cantidad de cifras decimales a usar: " + decimales);
console.log("Suma de las notas del estudiante: " + sumaNotas);
console.log("El promedio de los valores es: " + resultado)
