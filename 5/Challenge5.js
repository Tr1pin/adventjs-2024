function organizeShoes(shoes) {
    // Mapa para almacenar la cantidad de botas izquierdas y derechas por tamaño
    const shoeMap = {};
  
    // Contar botas izquierdas y derechas por tamaño
    shoes.forEach(({ type, size }) => {
      if (!shoeMap[size]) {
        shoeMap[size] = { I: 0, R: 0 };
      }
      shoeMap[size][type]++;
    });
  
    // Determinar los pares disponibles por tamaño
    const pairs = [];
    for (const size in shoeMap) {
      const left = shoeMap[size]['I'];
      const right = shoeMap[size]['R'];

      const pairCount = Math.min(left, right); // Número de pares posibles

      // Agregar el tamaño tantas veces como pares se puedan formar
      for (let i = 0; i < pairCount; i++) {
        pairs.push(parseInt(size));
      }
    }
  
    return pairs;
}
  
  // Ejemplo de uso
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  
  console.log(organizeShoes(shoes)); 