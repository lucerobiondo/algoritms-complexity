
/* 
Bucket Sort → cuando los datos están uniformemente distribuidos en un rango conocido 
y quieres un método simple para flotantes o datos con decimales.

Idea general:
Dividir el rango de datos en varios intervalos o cubetas.

Poner cada elemento en la cubeta que corresponde a su valor.

Ordenar cada cubeta.

Concatenar todas las cubetas ordenadas.

Complejidad Big O de Bucket Sort
Tiempo promedio: O(n + k + (n²/k) )
Donde:

n = cantidad de elementos

k = cantidad de cubetas (idealmente proporcional a n)

Tiempo en el mejor caso: O(n + k) (cuando los datos están distribuidos uniformemente y cada cubeta tiene pocos elementos)

Peor caso: O(n²) (si todos los elementos caen en la misma cubeta y el algoritmo de ordenación usado es O(n²))

Espacio: O(n + k)
*/

const numbers = require('../millon_numeros.json');

function findMinMax(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) minValue = arr[i];
        if (arr[i] > maxValue) maxValue = arr[i];
    }

    return { minValue, maxValue };
}

function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    // Encontrar min y max sin usar spread
    const { minValue, maxValue } = findMinMax(arr);

    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);

    for (let num of arr) {
        let bucketIndex = Math.floor((num - minValue) / bucketSize);
        buckets[bucketIndex].push(num);
    }

    return buckets.reduce((sortedArr, bucket) => {
        return sortedArr.concat(bucket.sort((a, b) => a - b));
    }, []);
}


// Prueba:
// const arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(numbers));
