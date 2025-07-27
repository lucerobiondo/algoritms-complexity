/* 
Un Splay Tree es un tipo de árbol binario de búsqueda autoajustable. Cada vez que accedes (buscas, insertas o eliminas) un nodo, el árbol realiza una operación llamada splay para mover ese nodo a la raíz.

📌 ¿Por qué?
La idea es que si accedes frecuentemente a un nodo, será más rápido en próximas operaciones, ya que estará cerca de la raíz.

🔁 ¿Qué es el Splaying?
Es una operación que mueve un nodo a la raíz del árbol mediante rotaciones:

Zig: Si el nodo es hijo directo de la raíz.

Zig-Zig: Dos rotaciones en la misma dirección.

Zig-Zag: Dos rotaciones en direcciones opuestas.

| Característica       | Valor                                                        |
| -------------------- | ------------------------------------------------------------ |
| Tipo                 | Árbol binario de búsqueda                                    |
| Autoajustable        | Sí (trae nodos accedidos a la raíz)                          |
| Operaciones          | O(log n) en promedio                                         |
| Aplicaciones comunes | Cachés, editores de texto, estructuras con accesos repetidos |

*/

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class SplayTree {
    constructor() {
        this.root = null;
    }

    // Rotación derecha
    rotateRight(x) {
        const y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }

    // Rotación izquierda
    rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    // Splay (trae el key a la raíz)
    splay(root, key) {
        if (!root || root.key === key) return root;

        if (key < root.key) {
            if (!root.left) return root;
            if (key < root.left.key) {
                root.left.left = this.splay(root.left.left, key);
                root = this.rotateRight(root);
            } else if (key > root.left.key) {
                root.left.right = this.splay(root.left.right, key);
                if (root.left.right)
                    root.left = this.rotateLeft(root.left);
            }
            return root.left ? this.rotateRight(root) : root;
        } else {
            if (!root.right) return root;
            if (key > root.right.key) {
                root.right.right = this.splay(root.right.right, key);
                root = this.rotateLeft(root);
            } else if (key < root.right.key) {
                root.right.left = this.splay(root.right.left, key);
                if (root.right.left)
                    root.right = this.rotateRight(root.right);
            }
            return root.right ? this.rotateLeft(root) : root;
        }
    }

    insert(key) {
        if (!this.root) {
            this.root = new Node(key);
            return;
        }
        this.root = this.splay(this.root, key);
        if (this.root.key === key) return;

        const newNode = new Node(key);
        if (key < this.root.key) {
            newNode.right = this.root;
            newNode.left = this.root.left;
            this.root.left = null;
        } else {
            newNode.left = this.root;
            newNode.right = this.root.right;
            this.root.right = null;
        }
        this.root = newNode;
    }

    printInOrder(node = this.root) {
        if (!node) return;
        this.printInOrder(node.left);
        console.log(node.key);
        this.printInOrder(node.right);
    }
}

const tree = new SplayTree();

tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(15);

console.log("In-order traversal:");
tree.printInOrder(); // 5, 10, 15, 20

// El acceso a 15 mueve el 15 a la raíz
tree.root = tree.splay(tree.root, 15);
console.log("Raíz actual:", tree.root.key); // 15
