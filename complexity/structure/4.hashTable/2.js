// Ejemplo 1 Parte 1: Medir rendimiento usando console.time()

class SimpleHashTable {
    constructor(size = 1000) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) this.table[index] = [];
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) return undefined;
        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return undefined;
    }
}


const ht = new SimpleHashTable(1000);

const N = 1000000;
const claves = [];
for (let i = 0; i < N; i++) {
    claves.push("clave" + i);
}

// Medir tiempo de inserción
console.time("inserción");
for (let i = 0; i < N; i++) {
    ht.set(claves[i], i);
}
console.timeEnd("inserción");

// Medir tiempo de búsqueda
console.time("búsqueda");
for (let i = 0; i < N; i++) {
    ht.get(claves[i]);
}
console.timeEnd("búsqueda");