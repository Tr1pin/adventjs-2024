function detectBombs(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Función auxiliar para contar bombas en celdas adyacentes
    const countBombs = (x, y) => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newRow = x + i;
                const newCol = y + j;
                if (
                    newRow >= 0 && newRow < rows && 
                    newCol >= 0 && newCol < cols && 
                    !(i === 0 && j === 0) && 
                    grid[newRow][newCol] === true 
                ) {
                    count++;
                }
            }
        }
        return count;
    };

    
    return grid.map((row, x) =>
        row.map((cell, y) =>
            cell === true ? countBombs(x, y) : countBombs(x, y)
        )
    );
}
