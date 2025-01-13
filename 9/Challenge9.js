function moveTrain(board, mov) {
    const directions = {
      'L': [0, -1],
      'R': [0, 1],
      'U': [-1, 0],
      'D': [1, 0]
    };
  
    const rows = board.length;
    const cols = board[0].length;
  
    // Encuentra la posición de la locomotora (@)
    let headRow, headCol;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === '@') {
          headRow = i;
          headCol = j;
          break;
        }
      }
    }
  
    // Calcula la nueva posición de la cabeza del tren
    const [dRow, dCol] = directions[mov];
    const newRow = headRow + dRow;
    const newCol = headCol + dCol;
  
    // Verificamos si la nueva posición está fuera del board
    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
      return 'crash';
    }
  
    // Verificamos si el tren choca con sus bagones
    if (board[newRow][newCol] === 'o') {
      return 'crash';
    }
  
    // Verificamoa si el tren recoge una fruta mágica
    if (board[newRow][newCol] === '*') {
      return 'eat';
    }
  
    // Si no hay colisión ni fruta, el tren avanza
    return 'none';
  }