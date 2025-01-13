function isRobotBack(moves) {
    let x = 0, y = 0; // Coordenadas iniciales
    let invertNext = false; // Indica si el siguiente movimiento será invertido
    const performedMovements = new Set(); // Almacena los movimientos ya realizados para manejar "?"
  
    for (let i = 0; i < moves.length; i++) {
      let command = moves[i];
  
      // Modificador "*": Duplica el siguiente comando
      if (command === '*') {
        if (i + 1 < moves.length) {
          moves = moves.slice(0, i + 1) + moves[i + 1] + moves.slice(i + 1); // Duplica el comando
        }
        continue;
      }
  
      // Modificador "!": Invierte el siguiente comando
      if (command === '!') {
        invertNext = true;
        continue;
      }
  
      // Modificador "?": Ejecuta el movimiento si no se ha realizado antes
      if (command === '?') {
        if (i + 1 < moves.length) {
          const nextCommand = moves[i + 1];
          if (performedMovements.has(nextCommand)) {
            moves = moves.slice(0, i) + moves.slice(i + 2); // Salta el movimiento
          }
        }
        continue;
      }
  
      // Inversión del comando actual
      if (invertNext) {
        command = command === 'L' ? 'R' :
                  command === 'R' ? 'L' :
                  command === 'U' ? 'D' :
                  command === 'D' ? 'U' : command;
        invertNext = false; // Restablece el indicador de inversión
      }
  
      // Procesa el movimiento
      switch (command) {
        case 'L': x--; break;
        case 'R': x++; break;
        case 'U': y++; break;
        case 'D': y--; break;
        default: return undefined; // Comando desconocido
      }
  
      // Registra el movimiento si no es un modificador
      performedMovements.add(command);
    }
  
    // Retorna true si vuelve al origen, o la posición actual si no
    return x === 0 && y === 0 ? true : [x, y];
}