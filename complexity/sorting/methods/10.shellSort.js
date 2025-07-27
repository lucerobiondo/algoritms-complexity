/* 

Shell Sort es una mejora del Insertion Sort que ordena elementos separados por un “gap” o salto, en lugar de comparar elementos adyacentes.
La idea es que al ordenar primero elementos lejanos, se reduce la cantidad de desplazamientos cuando se hace el Insertion Sort final con gap = 1.

Idea general:
Escoge un gap inicial grande (por ejemplo, la mitad del tamaño del arreglo).

Ordena los elementos que están separados por ese gap usando Insertion Sort.

Reduce el gap y repite.

Cuando el gap es 1, haces un Insertion Sort final pero el arreglo ya está parcialmente ordenado, así es más rápido.

Explicación rápida del código
El gap empieza siendo la mitad del arreglo y se reduce a la mitad cada vez.

Para cada gap, se hace un tipo de Insertion Sort pero comparando elementos que están gap posiciones alejados.

Al final, con gap = 1, el arreglo está casi ordenado, por lo que el Insertion Sort final es rápido.
*/

const numbers = require('../millon_numeros.json');

function shellSort(arr) {
    let n = arr.length;

    // Empezar con un gap grande y reducirlo
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Hacer insertion sort con este gap
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            // Mover elementos que están gap posiciones antes si son mayores
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }
    }

    return arr;
}

// Prueba:
// const arr = [23, 12, 1, 8, 34, 54, 2, 3];
console.log(shellSort(numbers));

