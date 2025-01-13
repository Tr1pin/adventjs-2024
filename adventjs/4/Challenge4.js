//Longitud de la ultima fila es igual a las (filas * 2 - 1)
function createXmasTree(height, ornament) {
    let tree = "";

    const maxwidth = height * 2 - 1; // Ancho total del árbol

    // Crear las filas del árbol
    for (let i = 0; i < height; i++) {
        if(!(i+1 === height)){
            const stars = ornament.repeat(2 * i + 1);
            const spaces = '_'.repeat((maxwidth - stars.length) / 2);
            tree+= spaces + stars + spaces + "\n";
        }else{
            const stars = ornament.repeat(2 * i + 1); 
            const spaces = '_'.repeat((maxwidth - stars.length) / 2); 
            tree+= spaces + stars + spaces; 
        }
        
    }

    // Crear el tronco
    const trunk = "\n"+'_'.repeat((maxwidth - 1) / 2) + '#' + '_'.repeat((maxwidth - 1) / 2);
    tree += trunk; // Primera fila del tronco
    tree += trunk; // Segunda fila del tronco
    
    return tree;
}

const tree2 = createXmasTree(6,"@");
console.log(tree2);