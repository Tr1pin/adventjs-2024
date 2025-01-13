function inBox(box) {
    for (let i = 0; i < box.length ; i++) { // Recorremos solo las líneas internas
        const line = box[i];
        const index = line.indexOf('*'); // Buscamos el asterisco
        
        if (index > 0 && index < line.length - 1 && line[0] === '#' && line[line.length - 1] === '#') {
            return true; // Si el '*' está en una posición válida y rodeado por bordes
        }
    }
    return false; // Si no encontramos un '*' válido
}

// Ejemplos:
console.log(inBox([
  "###",
  "#*#",
  "###"
])); // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])); // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])); // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])); // ➞ false
