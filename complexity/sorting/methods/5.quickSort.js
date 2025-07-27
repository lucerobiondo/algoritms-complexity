/* 
Quick Sort es un algoritmo divide y vencerás que:

Elige un pivote (pivot).

Reorganiza el arreglo de modo que todos los elementos menores al pivote queden a su izquierda y los mayores a su derecha (esto se llama partición).

Luego aplica recursivamente Quick Sort a las sublistas izquierda y derecha.

Complejidad Big O de Quick Sort
Mejor caso: O(n log n)

Promedio: O(n log n)

Peor caso: O(n²) → cuando el pivote es el mínimo o máximo en cada paso
(aunque esto se puede mitigar con pivotes aleatorios o usando la mediana).

Espacio: O(log n) (por la pila de llamadas recursivas)

Explicación rápida del código
Se elige el último elemento como pivote.

Se recorre el resto del arreglo:

Si el valor es menor que el pivote, va al arreglo left.

Si es mayor o igual, va a right.

Se ordenan recursivamente left y right, y se concatenan:
→ [ordenado izquierda] + [pivote] + [ordenado derecha].

Nota: Quick Sort es generalmente más rápido que Merge Sort para datos en memoria porque usa menos espacio y tiene mejor rendimiento en caché, aunque no es estable.
*/

const numbers = require('../millon_numeros.json');

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbers));
