function drawRace(indices, length) {
    let pista = "";
    let linea = "~".repeat(length);
    let spaces = "";

    for (let i in indices) {
        spaces = " ".repeat( indices.length  - i -1);
        if (indices[i] === 0) {
            if(parseInt(i) !== indices.length - 1){
                pista += spaces + linea + " /" + (parseInt(i) + 1) + "\n";
            }else{
                pista += spaces + linea + " /" + (parseInt(i) + 1);
            }
            

        } else if (indices[i] > 0) {
            if(parseInt(i) !== indices.length - 1){
                pista += spaces + linea.slice(0, indices[i]) + "r" + linea.slice(indices[i] + 1) + " /" + (parseInt(i) + 1) + "\n";
            }else{
                pista += spaces + linea.slice(0, indices[i]) + "r" + linea.slice(indices[i] + 1) + " /" + (parseInt(i) + 1);
            }

        }else if(indices[i] < 0 ){
            if(parseInt(i) !== indices.length - 1){
                pista += spaces + linea.slice(0, indices[i]) + "r" + linea.slice(length + indices[i], length-1) + " /" + (parseInt(i) + 1) + "\n";
            }else{
                pista += spaces + linea.slice(0, indices[i]) + "r" + linea.slice(length + indices[i], length-1) + " /" + (parseInt(i) + 1);
            }
        }   
 
    }

    return pista;
}

console.log(drawRace([2, -1, 0, 5], 8));

/* 
function drawRace(indices, length) {
    let pista = "";
    const linea = "~".repeat(length);

    for (let i in indices) {
        const index = parseInt(i); // Convertir `i` a número
        const spaces = " ".repeat(indices.length - index - 1);

        // Modificar la línea si corresponde
        let modifiedLine = linea;
        if (indices[i] !== 0) {
            const pos = indices[i] < 0 ? length + indices[i] : indices[i];
            modifiedLine = linea.slice(0, pos) + "r" + linea.slice(pos + 1);
        }

        // Agregar la línea al resultado, con o sin salto de línea
        pista += spaces + modifiedLine + " /" + (index + 1);
        if (index !== indices.length - 1) {
            pista += "\n"; // Solo agregar un salto de línea si no es el último índice
        }
    }

    return pista;
}
*/