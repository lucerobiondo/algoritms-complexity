/* 

Una lista simplemente enlazada es una colección de nodos donde cada nodo contiene un valor y una referencia al siguiente nodo.

🔁 No puedes acceder a cualquier posición directamente como en un array: hay que recorrer la lista desde el principio.

| Operación          | Método                   | Complejidad |
| ------------------ | ------------------------ | ----------- |
| Insertar al inicio | `insertAtHead(value)`    | O(1)        |
| Buscar             | `search(value)`          | O(n)        |
| Eliminar el inicio | `deleteHead()`           | O(1)        |
| Acceso directo     | ❌ No existe (se recorre) | O(n)        |

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insertar al inicio (O(1))
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
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

    // Eliminar el primer nodo (O(1))
    deleteHead() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    // Mostrar la lista
    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}


const list = new SinglyLinkedList();

list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);
list.print(); // 10 -> 20 -> 30 -> null

console.log(list.search(20)); // true
list.deleteHead(); // elimina 10
list.print(); // 20 -> 30 -> null


/* 
Ejercicio práctico
Problema: Inserta los números del 1 al 5 en una lista simplemente enlazada y luego verifica si el número 3 está en ella.
*/

/* const myList = new SinglyLinkedList();

for (let i = 5; i >= 1; i--) {
    myList.insertAtHead(i);
}

myList.print(); // 1 -> 2 -> 3 -> 4 -> 5 -> null

console.log("¿Contiene 3?", myList.search(3)); // true
 */
