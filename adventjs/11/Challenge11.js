function decodeFilename(filename) {
  // Encontramos la posición del primer guion bajo
  const guionIndex = filename.indexOf('_');
  if (guionIndex === -1) return null; // Si no hay guion bajo, no es válido

  // Tomamos la parte después del guion bajo
  const afterUnderscore = filename.slice(guionIndex + 1);

  // Encontramos la posición del primer punto en afterUnderscore
  const firstDotIndex = afterUnderscore.indexOf('.');
  if (firstDotIndex === -1) return null; // Si no hay un punto, no es válido

  // Buscamos la posición del último punto en la cadena completa
  const lastDotIndex = filename.lastIndexOf('.');

  // Extraemos el nombre del archivo y su extensión
  const archive = afterUnderscore.slice(0, lastDotIndex - guionIndex - 1);

  return archive;
}

// Ejemplos:
console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')); // "sleighDesign.png"
console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023')); // "chimney_dimensions.pdf"
console.log(decodeFilename('987654321_elf-roster.csv.tempfile')); // "elf-roster.csv"
  