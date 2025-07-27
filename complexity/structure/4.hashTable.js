/* 
Una tabla hash es una estructura que almacena pares clave-valor y usa una función hash para convertir la clave en un índice donde guardar o buscar el valor muy rápidamente.

🔍 Esto permite acceso, inserción y eliminación en tiempo promedio cercano a O(1).

| Operación | Complejidad Promedio | Complejidad Peor Caso | Espacio |
| --------- | -------------------- | --------------------- | ------- |
| Insertar  | O(1)                 | O(n)                  | —       |
| Buscar    | O(1)                 | O(n)                  | —       |
| Eliminar  | O(1)                 | O(n)                  | —       |

*/

class HashTable {
    constructor(size = 1_000_000) {
        this.size = size;
        this.buckets = Array(size).fill(null).map(() => []);
    }

    // Función hash simple: suma códigos de caracteres módulo tamaño
    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt(0);
        }
        return hashValue % this.size;
    }

    // Insertar o actualizar clave-valor
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const found = bucket.find(item => item[0] === key);

        if (found) {
            found[1] = value; // actualizar
        } else {
            bucket.push([key, value]);
        }
    }

    // Buscar valor por clave
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const found = bucket.find(item => item[0] === key);
        return found ? found[1] : undefined;
    }

    // Eliminar clave-valor
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const idx = bucket.findIndex(item => item[0] === key);
        if (idx !== -1) {
            bucket.splice(idx, 1);
            return true;
        }
        return false;
    }
}

const ht = new HashTable();

ht.set("apple", 10);
ht.set("banana", 20);
console.log(ht.get("apple"));  // 10
console.log(ht.get("banana")); // 20
console.log(ht.get("grape"));  // undefined

ht.set("apple", 15);  // actualizar valor
console.log(ht.get("apple"));  // 15

ht.delete("banana");
console.log(ht.get("banana")); // undefined


//Problema: Crea una tabla hash que guarde estudiantes con su nota. Inserta 3 estudiantes y busca la nota de uno.

console.log("//Problema resuelto: ");
const students = new HashTable();

students.set("Ana", 8.5);
students.set("Luis", 7.0);
students.set("Maria", 9.2);

console.log(students.get("Luis"));  // 7.0
