const fs = require("fs");
const path = require("path");

// Clase Hash Table (igual que antes)
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

// Crear instancia vacía
const ht = new SimpleHashTable(1000);

// Ruta absoluta al archivo exportado
const rutaRelativa = "/json/hash_table_salida.json";
const rutaAbsoluta = path.resolve(__dirname + rutaRelativa);

// Leer archivo y reconstruir la hash table
fs.readFile(rutaAbsoluta, "utf-8", (err, data) => {
    if (err) {
        console.error("❌ Error al leer el archivo:", err);
        return;
    }

    try {
        const parsed = JSON.parse(data);

        console.time("inserción");
        for (const clave in parsed) {
            ht.set(clave, parsed[clave]);
        }
        console.timeEnd("inserción");

        const clavesBuscadas = ["clave10", "clave999", "clave123456", "clave999999"];

        console.time("búsqueda");
        for (const clave of clavesBuscadas) {
            const resultado = ht.get(clave);
            if (resultado !== undefined) {
                console.log(`✅ ${clave} → ${resultado}`);
            } else {
                console.log(`❌ ${clave} no encontrada.`);
            }
        }
        console.timeEnd("búsqueda");

    } catch (e) {
        console.error("❌ Error al parsear el archivo JSON:", e);
    }
});
