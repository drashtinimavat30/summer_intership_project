const board = document.getElementById('board');
const statusText = document.getElementById('status');
let cells;
let currentPlayer;
let gameActive;

function startGame() {
  board.innerHTML = '';
  currentPlayer = 'X';
  gameActive = true;
  statusText.textContent = `${currentPlayer}'s turn`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => handleCellClick(cell, i));
    board.appendChild(cell);
  }

  cells = Array.from(board.children);
}

function handleCellClick(cell, index) {
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  if (checkWin()) {
    statusText.textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell.textContent !== '')) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return cells[a].textContent &&
           cells[a].textContent === cells[b].textContent &&
           cells[a].textContent === cells[c].textContent;
  });
}

startGame();
