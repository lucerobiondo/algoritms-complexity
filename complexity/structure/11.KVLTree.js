/* 
Un KD Tree es una estructura de datos especializada para organizar puntos en un espacio k-dimensional. Es una extensión de un árbol binario de búsqueda (BST) pero útil para datos multidimensionales como:

Coordenadas 2D o 3D

Datos geoespaciales (latitud, longitud)

Vectores (por ejemplo, embeddings)

🧭 Cómo funciona
Cada nivel del árbol compara una dimensión diferente (x, y, z, ...).

En un KD Tree 2D:

Nivel 0 compara x

Nivel 1 compara y

Nivel 2 vuelve a comparar x

Y así sucesivamente...

📌 Cada nodo divide el espacio en dos mitades (hiperplanos).

| Característica | Valor                                       |
| -------------- | ------------------------------------------- |
| Tipo           | Árbol de búsqueda multidimensional          |
| Eficiencia     | Buena en espacios con pocas dimensiones     |
| Limite         | Se degrada si hay muchas dimensiones        |
| Ideal para     | Coordenadas, vectores, puntos en el espacio |

*/

class KDNode {
    constructor(point, depth = 0) {
        this.point = point; // [x, y]
        this.left = null;
        this.right = null;
        this.depth = depth;
    }
}

class KDTree {
    insert(root, point, depth = 0) {
        if (!root) return new KDNode(point, depth);

        const cd = depth % 2; // dimensión: 0=x, 1=y

        if (point[cd] < root.point[cd]) {
            root.left = this.insert(root.left, point, depth + 1);
        } else {
            root.right = this.insert(root.right, point, depth + 1);
        }

        return root;
    }

    search(root, point, depth = 0) {
        if (!root) return false;
        if (root.point[0] === point[0] && root.point[1] === point[1]) return true;

        const cd = depth % 2;
        if (point[cd] < root.point[cd]) {
            return this.search(root.left, point, depth + 1);
        } else {
            return this.search(root.right, point, depth + 1);
        }
    }

    printInOrder(node) {
        if (!node) return;
        this.printInOrder(node.left);
        console.log(node.point);
        this.printInOrder(node.right);
    }
}

// Uso
const tree = new KDTree();
let root = null;

root = tree.insert(root, [3, 6]);
root = tree.insert(root, [17, 15]);
root = tree.insert(root, [13, 15]);
root = tree.insert(root, [6, 12]);
root = tree.insert(root, [9, 1]);
root = tree.insert(root, [2, 7]);
root = tree.insert(root, [10, 19]);

console.log("In-order traversal:");
tree.printInOrder(root);

console.log("¿Contiene [10, 19]? ", tree.search(root, [10, 19])); // true
console.log("¿Contiene [1, 1]? ", tree.search(root, [1, 1]));     // false
