/* 
Un AVL Tree (por Adelson-Velsky y Landis) es un tipo de árbol binario de búsqueda auto-balanceado.

📌 La clave:
Después de cada inserción o eliminación, el árbol se reajusta automáticamente para mantener el equilibrio, garantizando que la diferencia de altura entre subárboles izquierdo y derecho de cualquier nodo sea máximo 1.

⚖️ Balanceo en AVL
Cada nodo tiene un balance factor = altura(subárbol izquierdo) - altura(subárbol derecho)

Si el factor está en {-1, 0, 1}, el nodo está balanceado.

Si se sale de ese rango, se realizan rotaciones para reequilibrar el árbol.

Tipos de rotaciones:
Rotación simple a la derecha (Right Rotation)

Rotación simple a la izquierda (Left Rotation)

Rotación doble izquierda-derecha (Left-Right Rotation)

Rotación doble derecha-izquierda (Right-Left Rotation)

| Característica       | Valor                              |
| -------------------- | ---------------------------------- |
| Tipo                 | Árbol binario de búsqueda          |
| Auto-balanceado      | Sí (usando rotaciones)             |
| Tiempo operaciones   | O(log n) garantizado               |
| Aplicaciones comunes | Bases de datos, sistemas embebidos |

*/

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    height(node) {
        return node ? node.height : 0;
    }

    getBalance(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));

        return y;
    }

    insert(node, key) {
        if (!node) return new Node(key);

        if (key < node.key) node.left = this.insert(node.left, key);
        else if (key > node.key) node.right = this.insert(node.right, key);
        else return node; // sin duplicados

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        const balance = this.getBalance(node);

        // Rotaciones necesarias
        if (balance > 1 && key < node.left.key) return this.rotateRight(node); // Left Left
        if (balance < -1 && key > node.right.key) return this.rotateLeft(node); // Right Right
        if (balance > 1 && key > node.left.key) { // Left Right
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        if (balance < -1 && key < node.right.key) { // Right Left
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    preOrder(node) {
        if (node) {
            console.log(node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}

// Uso
const tree = new AVLTree();
let root = null;

root = tree.insert(root, 10);
root = tree.insert(root, 20);
root = tree.insert(root, 30); // Desbalancea → rotación izquierda
root = tree.insert(root, 25);
root = tree.insert(root, 5);

console.log("PreOrder del árbol AVL:");
tree.preOrder(root); // Debería imprimir un árbol balanceado
