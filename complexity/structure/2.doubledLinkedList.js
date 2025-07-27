

/* 
Una lista doblemente enlazada es similar a una lista simplemente enlazada, pero cada nodo tiene dos referencias:

Una al siguiente nodo (next)

Otra al nodo anterior (prev)

🔁 Esto permite recorrerla en ambas direcciones, y facilita operaciones como inserción o eliminación en el medio.

| Operación            | Método                | Complejidad |
| -------------------- | --------------------- | ----------- |
| Insertar al final    | `insertAtTail(value)` | O(1)        |
| Eliminar del final   | `deleteFromTail()`    | O(1)        |
| Buscar               | `search(value)`       | O(n)        |
| Recorrer hacia atrás | `printBackward()`     | O(n)        |

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insertar al final (O(1))
    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Eliminar desde el final (O(1))
    deleteFromTail() {
        if (!this.tail) return;
        if (this.tail === this.head) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    // Buscar un valor (O(n))
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    // Imprimir hacia adelante
    printForward() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " ⇄ ";
            current = current.next;
        }
        console.log(output + "null");
    }

    // Imprimir hacia atrás
    printBackward() {
        let current = this.tail;
        let output = "";
        while (current) {
            output += current.value + " ⇄ ";
            current = current.prev;
        }
        console.log(output + "null");
    }
}


const list = new DoublyLinkedList();

list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);

list.printForward();  // 10 ⇄ 20 ⇄ 30 ⇄ null
list.printBackward(); // 30 ⇄ 20 ⇄ 10 ⇄ null

console.log(list.search(20)); // true

list.deleteFromTail(); // elimina 30
list.printForward();  // 10 ⇄ 20 ⇄ null
