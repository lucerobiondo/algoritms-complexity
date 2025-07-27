/* 
Un árbol rojo-negro es un tipo de árbol binario de búsqueda auto-balanceado. Se asegura de mantener el equilibrio del árbol mediante reglas de color en los nodos.

Cada nodo es rojo o negro, y se aplican reglas estrictas para mantener el equilibrio y garantizar operaciones en tiempo logarítmico.

🟥⚫ Reglas del Árbol Rojo-Negro
Cada nodo es rojo o negro.

La raíz es siempre negra.

Las hojas (nodos nulos) son negras.

Si un nodo es rojo, sus hijos deben ser negros (no puede haber dos rojos seguidos).

Todo camino desde un nodo hasta sus hojas descendientes contiene el mismo número de nodos negros.

Un árbol rojo-negro es un tipo de árbol binario de búsqueda auto-balanceado. Se asegura de mantener el equilibrio del árbol mediante reglas de color en los nodos.

Cada nodo es rojo o negro, y se aplican reglas estrictas para mantener el equilibrio y garantizar operaciones en tiempo logarítmico.

🟥⚫ Reglas del Árbol Rojo-Negro
Cada nodo es rojo o negro.

La raíz es siempre negra.

Las hojas (nodos nulos) son negras.

Si un nodo es rojo, sus hijos deben ser negros (no puede haber dos rojos seguidos).

Todo camino desde un nodo hasta sus hojas descendientes contiene el mismo número de nodos negros.


¿Por qué usar Red-Black Trees?
Mantiene el equilibrio automáticamente con rotaciones y recoloreos.

Se usa cuando se requieren operaciones garantizadas en tiempo logarítmico.

Muy usado en:

std::map, std::set de C++

Java TreeMap, TreeSet

Implementaciones internas de compiladores y sistemas de archivos.
*/

const { TreeSet } = require("js-sdsl");

const tree = new TreeSet();

tree.insert(10);
tree.insert(20);
tree.insert(15);
tree.insert(5);

console.log("¿Contiene 15?", tree.has(15)); // true
console.log("¿Contiene 7?", tree.has(7));   // false

console.log("Recorrido ordenado:");
for (const val of tree) {
    console.log(val);
}
// Salida: 5 10 15 20
