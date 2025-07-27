/* 
Heap Sort es un algoritmo de ordenamiento basado en una estructura de datos llamada heap binario (un árbol binario completo con propiedades específicas).

Usa típicamente un max heap:

Construye un max heap del arreglo (el elemento más grande queda en la raíz).

Intercambia el primer (máximo) elemento con el último.

Reduce el tamaño del heap y reacomoda (heapify) para mantener la propiedad de max heap.

Repite hasta que todo esté ordenado.

⏱️ Complejidad Big O
Tiempo (mejor, promedio, peor): O(n log n)

Espacio: O(1) (ordenación in-place, sin estructuras adicionales)
*/

const numbers = require('../millon_numeros.json');

function heapSort(arr) {
  let n = arr.length;

  // Construir el max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extraer elementos del heap uno por uno
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // intercambia raíz con el último
    heapify(arr, i, 0); // reconstruir heap para el resto
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

console.log(heapSort(numbers));
