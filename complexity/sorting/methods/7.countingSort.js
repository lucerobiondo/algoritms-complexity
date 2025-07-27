/* 
Counting Sort es un algoritmo no comparativo que funciona contando cuántas veces aparece cada valor en el arreglo, y luego reconstruyendo el arreglo ordenado a partir de esas cuentas.

🔒 Requisitos importantes:

Solo funciona bien con números enteros no negativos.

Es más eficiente cuando los números están en un rango pequeño (por ejemplo, del 0 al 100).

⏱️ Complejidad Big O
Tiempo: O(n + k)

n = número de elementos

k = valor máximo en el arreglo

Espacio: O(k)

Explicación paso a paso
count[num]++: contamos cuántas veces aparece cada número.

Luego recorremos el array count:

Si count[i] = 3, agregamos el número i tres veces al arreglo.

No hay comparación entre elementos. Por eso es O(n + k).

⚠️ Limitaciones
❌ No funciona con números negativos sin modificaciones.

❌ No es práctico si el valor máximo (max) es muy grande en comparación con la cantidad de datos (por ejemplo, ordenar [1, 1000000]).

✅ Es estable si se implementa correctamente.
*/

const numbers = require('../millon_numeros.json');

function countingSort(arr) {
    if (arr.length === 0) return [];

    // Encontrar el valor máximo sin usar spread
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    const count = Array(max + 1).fill(0);

    // Contar ocurrencias
    for (let num of arr) {
        count[num]++;
    }

    // Reconstruir arreglo ordenado
    let sorted = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted.push(i);
            count[i]--;
        }
    }

    return sorted;
}


console.log(countingSort(numbers)); // [1, 2, 2, 3, 3, 4, 8]
