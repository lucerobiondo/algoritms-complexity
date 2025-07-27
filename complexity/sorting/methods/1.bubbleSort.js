/*

Bubble Sort es un algoritmo de ordenamiento simple que funciona comparando pares de elementos adyacentes y los intercambia si están en el orden incorrecto. Se repite esto muchas veces hasta que no se requieren más intercambios, lo que significa que el arreglo está ordenado.

Idea general:
Comparar el primer y segundo elemento, si el primero es mayor que el segundo, intercambiarlos.

Luego comparar el segundo y tercero, y hacer lo mismo.

Al final del primer recorrido, el elemento más grande “burbujea” hasta la última posición.

Repetir el proceso para los elementos restantes.

Complejidad Big O de Bubble Sort
Peor caso y promedio: O(n²)

Mejor caso (arreglo ya ordenado): O(n) si optimizas para detectar que no hubo intercambios.

Espacio: O(1) (ordenación en sitio).
 */

const numbers = require('../millon_numeros.json');

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // Si no hubo intercambios, el arreglo está ordenado
        if (!swapped) break;
    }

    return arr;
}

// Prueba:
console.log(bubbleSort(numbers));
