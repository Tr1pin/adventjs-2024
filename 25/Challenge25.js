function execute(code) {
    let value = 0; 
    let i = 0; 
    let stack = []; 

    while (i < code.length) {
        let instruction = code[i];

        switch (instruction) {
            case '+':
                value += 1;
                break;

            case '-':
                value -= 1;
                break;

            case '[':
                if (value === 0) {
                    // Saltar al siguiente ']' correspondiente
                    let depth = 1;
                    while (depth > 0) {
                        i++;
                        if (code[i] === '[') depth++;
                        else if (code[i] === ']') depth--;
                    }
                } else {
                    stack.push(i);
                }
                break;

            case ']':
                if (value !== 0) {
                    i = stack[stack.length - 1]; // Volver al inicio del bucle
                } else {
                    stack.pop(); // Salir del bucle
                }
                break;


            case '{':
                if (value === 0) {
                    // Saltar al siguiente '}' correspondiente
                    let depth = 1;
                    while (depth > 0) {
                        i++;
                        if (code[i] === '{') depth++;
                        else if (code[i] === '}') depth--;
                    }
                } else {
                    stack.push(i);
                }
                break;


            case "}":
                stack.pop();
                break;

            default:
                break;
        }
        i++;
    }

    return value;
}

// Ejemplos
console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
console.log(execute('>>>+{++}')); // 3
console.log(execute('+{[-]+}+')); // 2
console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
console.log(execute('-[++{-}]+{++++}')); // 5
