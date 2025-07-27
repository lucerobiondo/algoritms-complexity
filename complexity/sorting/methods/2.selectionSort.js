

/* 
Selection Sort es un algoritmo de ordenamiento sencillo que funciona seleccionando
 repetidamente el elemento mínimo del arreglo no ordenado y colocándolo en la posición correcta, avanzando de izquierda a derecha.

Idea general:
Buscar el elemento más pequeño en el arreglo.

Intercambiarlo con el primer elemento.

Luego buscar el siguiente elemento más pequeño en el resto del arreglo.

Repetir hasta que todo esté ordenado.

Complejidad Big O de Selection Sort
Tiempo (mejor, promedio, peor caso): O(n²)
Porque siempre compara pares de elementos para encontrar el mínimo.

Espacio: O(1) (ordena en sitio, sin memoria extra significativa).

 */

const numbers = require('../millon_numeros.json');

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Encontrar el índice del elemento mínimo en la parte no ordenada
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Intercambiar el elemento mínimo con el actual
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Prueba:
// const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers));
