
/* 
Merge Sort es un algoritmo de ordenamiento divide y vencerás que:

Divide el arreglo en mitades hasta que cada subarreglo tenga solo un elemento.

Luego combina (merge) esas mitades de forma ordenada para formar arreglos más grandes ordenados.

Repite el proceso hasta obtener el arreglo completo ordenado.

Complejidad Big O de Merge Sort
Tiempo (mejor, promedio y peor caso): O(n log n)

Espacio: O(n) (porque usa espacio extra para las mitades y el merge).

Explicación rápida del código
mergeSort divide el arreglo en dos hasta que quedan arreglos de un solo elemento.

merge combina dos arreglos ordenados en uno solo ordenado.

Se repite recursivamente hasta que todo el arreglo está ordenado.
*/

const numbers = require('../millon_numeros.json');

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Agrega lo que quede
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(numbers));
