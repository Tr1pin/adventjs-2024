function fixPackages(packages) {
    // Mientras haya paréntesis, procesamos el más interno primero
    while (packages.includes('(')) {
      packages = packages.replace(/\(([^()]+)\)/g, (_, inner) => {
        // Invertimos el contenido dentro del paréntesis
        return inner.split('').reverse().join('');
      });
    }
    return packages;
}