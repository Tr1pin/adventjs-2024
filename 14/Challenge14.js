function minMovesToStables(reindeer, stables) {
    // Ordenar los arrays de renos y establos
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);

    // Calcular la distancia total
    let numMoves = 0;
    for (let i = 0; i < reindeer.length; i++) {
        numMoves += Math.abs(reindeer[i] - stables[i]);
    }

    return numMoves;
}
