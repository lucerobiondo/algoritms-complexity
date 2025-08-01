const fs = require('fs');
const path = require('path');

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

    exportToFile(rutaRelativa) {
        const rutaAbsoluta = path.resolve(__dirname + rutaRelativa);
        const dir = path.dirname(rutaAbsoluta);

        // Crear el directorio si no existe
        fs.mkdirSync(dir, { recursive: true });

        // Extraer todos los pares clave-valor
        const salida = {};
        for (const bucket of this.table) {
            if (bucket) {
                for (const [k, v] of bucket) {
                    salida[k] = v;
                }
            }
        }

        fs.writeFileSync(rutaAbsoluta, JSON.stringify(salida, null, 2), 'utf-8');
        console.log(`✅ Archivo exportado a: ${rutaAbsoluta}`);
    }
}

// -------------------------------
// Uso
// -------------------------------
const ht = new SimpleHashTable(1000);

const N = 1_000;
const claves = [];
for (let i = 0; i < N; i++) {
    claves.push("clave" + i);
}

console.time("inserción");
for (let i = 0; i < N; i++) {
    ht.set(claves[i], i);
}
console.timeEnd("inserción");

console.time("búsqueda");
for (let i = 0; i < N; i++) {
    ht.get(claves[i]);
}
console.timeEnd("búsqueda");

// Exportar a archivo
ht.exportToFile("/json/hash_table_salida.json");
