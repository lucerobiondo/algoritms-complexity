const numbers = require('../millon_numeros.json');

/* 

Radix Sort es un algoritmo de ordenamiento no comparativo que ordena los números procesando sus dígitos, de menor a mayor significancia (del dígito de unidades al de miles, etc.).

✅ Ideal para números enteros positivos, especialmente cuando tienen pocos dígitos.
❌ No funciona directamente con números negativos (requiere ajustes).

⚙️ ¿Cómo funciona?
Empieza por ordenar los números según su dígito menos significativo (las unidades).

Luego ordena por las decenas, centenas, etc.

Repite esto hasta haber procesado todos los dígitos del número más largo.

👉 Para ordenar por dígito, se usa Counting Sort internamente.

⏱️ Complejidad Big O
Tiempo: O(d × (n + k))

n = cantidad de números

d = número de dígitos del número más largo

k = base (10 en decimal)

Espacio: O(n + k)

Radix Sort → cuando trabajas con números enteros o cadenas con una longitud fija o limitada.

Explicación rápida
getDigit(num, k): obtiene el dígito en la posición k.

digitCount(num): cuenta cuántos dígitos tiene un número.

mostDigits(arr): encuentra cuántas pasadas necesitamos (máximo número de dígitos).

radixSort(arr):

Repite una vez por cada dígito.

Distribuye los números en 10 buckets (0–9) según el dígito actual.

Luego concatena los buckets para formar el nuevo arreglo.

🧩 ¿Y los negativos?
Radix Sort no funciona con negativos directamente porque los dígitos no indican orden en números negativos. Pero se puede adaptar así:

Separar negativos y positivos.

Aplicar Radix Sort a ambos.

Invertir los negativos ordenados y unirlos con los positivos:

const sorted = [...radixSort(negativos).reverse(), ...radixSort(positivos)];
*/

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let num of nums) {
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

// Prueba:
// const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));

