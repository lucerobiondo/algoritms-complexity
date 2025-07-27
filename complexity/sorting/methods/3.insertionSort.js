/* 
Insertion Sort ordena el arreglo construyendo una parte ordenada, insertando un elemento a la vez en su posición correcta (como cuando ordenas cartas en la mano).

Idea general:
Empieza desde el segundo elemento.

Compara con los elementos anteriores.

Lo mueve hacia la izquierda hasta encontrar su posición correcta.

Repite hasta que todo esté ordenado.

⏱️ Complejidad Big O
Caso	Tiempo
Mejor caso	O(n) ← ya está ordenado
Promedio	O(n²)
Peor caso	O(n²) ← orden inverso

Espacio: O(1) (en sitio)

Estable: ✅ Sí


 Explicación paso a paso
Ejemplo: [5, 3, 4, 1, 2]

Compara 3 con 5 → lo mueve a la izquierda → [3, 5, 4, 1, 2]

Compara 4 con 5 → lo mueve a la izquierda → [3, 4, 5, 1, 2]

Compara 1 → lo mueve hasta el inicio → [1, 3, 4, 5, 2]

Compara 2 → lo coloca en su lugar → [1, 2, 3, 4, 5]

📌 ¿Cuándo usar Insertion Sort?
✅ Para arreglos pequeños.

✅ Cuando los datos ya están casi ordenados.

❌ No eficiente para listas largas.
*/

const numbers = require('./millon_numeros');

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Mueve los elementos mayores a la derecha
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort(numbers));
