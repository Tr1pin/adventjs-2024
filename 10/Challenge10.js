function compile(instructions) {
    const registers = {}; // Almacena los registros y sus valores
    let cont = 0; // Para saber en qué instrucción nos encontramos
  
    const parsedInstructions = instructions.map(instr => instr.split(' '));
    while (cont < instructions.length) {
      const [command, ...args] = parsedInstructions[cont];// Command va a ser el comando y args van a ser los registros y valores 
                                                                // dependiendo del comando.                           
  
      switch (command) {
        case 'MOV': 
          const value = isNaN(args[0]) ? registers[args[0]] || 0 : parseInt(args[0]);
          registers[args[1]] = value;
          break;
        

        case 'INC': 
          registers[args[0]] = (registers[args[0]] || 0) + 1;
          break;
        

        case 'DEC': 
          registers[args[0]] = (registers[args[0]] || 0) - 1;
          break;
        

        case 'JMP': 
          const conditionRegister = args[0];
          const targetIndex = parseInt(args[1]);
          if ((registers[conditionRegister] || 0) === 0) {
            cont = targetIndex;
            continue; // Salta a la siguiente iteración
          }
          break;
        

        default:
          throw new Error(`Instrucción no reconocida: ${command}`);// Lanza un error si la instrucción no es una de estas
      }
  
      cont++; // Incrementa para ir a la siguiente instrucción
    }
  
    return registers.A !== undefined ? registers.A : undefined;
}
  

  const instructions = [
    'MOV -1 C',
    'INC C',
    'JMP C 1',
    'MOV C A',
    'INC A',
  ];
  
  console.log(compile(instructions)); // -> 2
