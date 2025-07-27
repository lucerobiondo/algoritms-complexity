
/* 
Un árbol cartesiano es un árbol binario derivado de una secuencia de números, que cumple con dos propiedades fundamentales:

Propiedad del Heap:

En un min-cartesian tree, cada nodo es menor que sus hijos (mínimo en la raíz).

En un max-cartesian tree, cada nodo es mayor que sus hijos.

Propiedad del In-Order:

El recorrido in-order del árbol (izquierda → raíz → derecha) produce la secuencia original.

📌 Es útil para encontrar rangos mínimos o máximos rápidamente y es la base de estructuras como Range Minimum Query (RMQ).

| Propiedad                | Descripción                             |
| ------------------------ | --------------------------------------- |
| Heap Property            | Cada nodo es menor/mayor que sus hijos  |
| In-Order Property        | Recorrido in-order = secuencia original |
| Complejidad Construcción | O(n) usando pila                        |
| Aplicaciones             | RMQ, árboles sintácticos, expresiones   |

*/

class CartesianNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function buildMinCartesianTree(arr) {
    const stack = [];

    for (const val of arr) {
        let lastPopped = null;
        const node = new CartesianNode(val);

        // Mantenemos el heap (mínimo) mientras apilamos
        while (stack.length && stack[stack.length - 1].value > val) {
            lastPopped = stack.pop();
        }

        if (stack.length) {
            stack[stack.length - 1].right = node;
        }

        node.left = lastPopped;
        stack.push(node);
    }

    return stack[0]; // raíz del árbol cartesiano
}

function inOrderPrint(node) {
    if (!node) return;
    inOrderPrint(node.left);
    console.log(node.value);
    inOrderPrint(node.right);
}


/* Problema: Dado el array [5, 1, 4, 2], construye el árbol cartesiano y realiza un recorrido in-order para verificar que la secuencia original se conserva. */

console.log("//Problema resuelto: ");

const example = [5, 1, 4, 2];
const tree = buildMinCartesianTree(example);
console.log("In-order traversal:");
inOrderPrint(tree); // 5 1 4 2
