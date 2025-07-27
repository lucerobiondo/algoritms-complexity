const fs = require('fs');

function generarNumerosAleatorios(cantidad) {
    const numeros = new Set();

    // Generar números únicos (hasta que alcance la cantidad deseada)
    while (numeros.size < cantidad) {
        const numero = Math.floor(Math.random() * cantidad * 10); // rango amplio para evitar duplicados
        numeros.add(numero);
    }

    // Convertir Set a Array y desordenarlo
    const arrayNumeros = Array.from(numeros);
    arrayNumeros.sort(() => Math.random() - 0.5); // desordenar

    return arrayNumeros;
}

function guardarEnJSON(datos, nombreArchivo) {
    fs.writeFile(nombreArchivo, JSON.stringify(datos), 'utf8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
        } else {
            console.log(`Archivo guardado como ${nombreArchivo}`);
        }
    });
}

// Usar la función
const cantidad = 1_000; // puedes cambiar esto a más si quieres
const numeros = generarNumerosAleatorios(cantidad);
guardarEnJSON(numeros, 'numeros.json');
