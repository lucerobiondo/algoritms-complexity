/* 
Un árbol binario de búsqueda es una estructura jerárquica donde:

Cada nodo tiene como máximo dos hijos: izquierdo y derecho.

Los valores del subárbol izquierdo son menores al nodo.

Los valores del subárbol derecho son mayores al nodo.

Esto permite mantener los datos ordenados y realizar búsquedas eficientes.

| Operación | Código                  | Promedio | Peor Caso |
| --------- | ----------------------- | -------- | --------- |
| Insertar  | `insert(valor)`         | O(log n) | O(n)      |
| Buscar    | `search(valor)`         | O(log n) | O(n)      |
| InOrder   | `inOrderTraversal()`    | O(n)     | O(n)      |
| Acceso    | — (recorrido necesario) | O(log n) | O(n)      |

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    inOrderTraversal(node = this.root) {
        if (!node) return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
}

const tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(7)); // true
console.log(tree.search(12)); // false

tree.inOrderTraversal();
// Salida: 3 5 7 10 15 (ordenado)


/* Problema: Crea un BST con los valores [20, 10, 30, 25, 40], luego busca el 25 y haz un recorrido in-order. */

console.log("//Problema resuelto: ");
const bst = new BST();

[20, 10, 30, 25, 40].forEach(num => bst.insert(num));
console.log("¿Contiene 25?", bst.search(25)); // true

bst.inOrderTraversal(); 
// Salida: 10 20 25 30 40
