/* 
Una Skip List es una estructura de datos probabilística que permite búsquedas, inserciones y eliminaciones en tiempo promedio logarítmico O(log n).

🔀 Es como una lista enlazada, pero con múltiples niveles donde algunos nodos "saltan" varios elementos, acelerando la búsqueda.

| Operación | Complejidad Promedio | Complejidad Peor caso | Espacio |
| --------- | -------------------- | --------------------- | ------- |
| Access    | O(log n)             | O(n)                  | O(n)    |
| Search    | O(log n)             | O(n)                  | —       |
| Insertion | O(log n)             | O(n)                  | —       |
| Deletion  | O(log n)             | O(n)                  | —       |

*/

class Node {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel) {
        this.maxLevel = maxLevel;
        this.head = new Node(null, maxLevel);
        this.level = 0;
    }

    randomLevel() {
        let lvl = 0;
        while (Math.random() < 0.5 && lvl < this.maxLevel) {
            lvl++;
        }
        return lvl;
    }

    insert(value) {
        const update = new Array(this.maxLevel + 1);
        let current = this.head;

        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (!current || current.value !== value) {
            let lvl = this.randomLevel();
            if (lvl > this.level) {
                for (let i = this.level + 1; i <= lvl; i++) {
                    update[i] = this.head;
                }
                this.level = lvl;
            }

            const newNode = new Node(value, lvl);
            for (let i = 0; i <= lvl; i++) {
                newNode.next[i] = update[i].next[i];
                update[i].next[i] = newNode;
            }
        }
    }

    search(value) {
        let current = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
        }
        current = current.next[0];
        return current && current.value === value;
    }

    print() {
        let current = this.head.next[0];
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next[0];
        }
        console.log(values.join(" -> "));
    }
}


const skiplist = new SkipList(4);

skiplist.insert(10);
skiplist.insert(20);
skiplist.insert(30);
skiplist.insert(40);
skiplist.print();          // 10 -> 20 -> 30
console.log(skiplist.search(20));  // true
console.log(skiplist.search(40));  // true


//Problema: Inserta los números 5, 10, 7, 12 en una skip list y verifica si el 7 está presente.
const sl = new SkipList(3);

console.log("//Problema resuelto: ");

[5, 10, 7, 12].forEach(num => sl.insert(num));
sl.print();           // 5 -> 7 -> 10 -> 12
console.log(sl.search(7)); // true
