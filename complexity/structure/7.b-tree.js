/* 
Un B-Tree (árbol B) es una estructura de datos auto-balanceada que generaliza los árboles binarios de búsqueda para permitir más de dos hijos por nodo.

Es ampliamente utilizada en sistemas de bases de datos y archivos, donde se busca minimizar el número de accesos a disco.

✅ Propiedades clave de un B-Tree (grado t):
Cada nodo puede tener entre t - 1 y 2t - 1 claves.

Cada nodo puede tener entre t y 2t hijos.

Las claves están ordenadas dentro del nodo.

El árbol está siempre balanceado (todas las hojas a la misma profundidad).

| Operación | Código                 | Complejidad |
| --------- | ---------------------- | ----------- |
| Insertar  | `insert(valor)`        | O(log n)    |
| Buscar    | `search(valor)`        | O(log n)    |
| Acceso    | Por recorrido ordenado | O(log n)    |

*/

class BTreeNode {
    constructor(isLeaf = true) {
        this.keys = [];
        this.children = [];
        this.isLeaf = isLeaf;
    }

    insert(key) {
        this.keys.push(key);
        this.keys.sort((a, b) => a - b); // mantener orden
    }

    search(key) {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }
        if (i < this.keys.length && this.keys[i] === key) {
            return true;
        }
        if (this.isLeaf) return false;
        return this.children[i].search(key);
    }

    print(indent = "") {
        console.log(indent + this.keys.join(", "));
        for (const child of this.children) {
            child.print(indent + "  ");
        }
    }
}


const root = new BTreeNode();

root.insert(10);
root.insert(20);
root.insert(5);
root.insert(15);

console.log("¿Contiene 15?", root.search(15)); // true
console.log("¿Contiene 8?", root.search(8));   // false

console.log("Contenido:");
root.print();
