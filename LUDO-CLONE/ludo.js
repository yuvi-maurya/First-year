let diceResult = document.getElementById("diceResult");
let turnDisplay = document.getElementById("turn");

let positions = [0, 0, 0, 0]; // Player positions
let currentPlayer = 0;

let playerIds = ["player1", "player2", "player3", "player4"];

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = "Dice: " + dice;

  movePlayer(currentPlayer, dice);

  // Next player's turn
  currentPlayer = (currentPlayer + 1) % 4;
  turnDisplay.innerText = Current Turn: Player ,${currentPlayer + 1}; ${getPlayerEmoji(currentPlayer)};
}

function movePlayer(playerIndex, steps) {
  positions[playerIndex] += steps;
  if (positions[playerIndex] > 9) positions[playerIndex] = 9;

  let cell = document.getElementById("cell" + positions[playerIndex]);
  let token = document.getElementById(playerIds[playerIndex]);

  // Set position inside the cell
  cell.appendChild(token);
}

function getPlayerEmoji(index) {
  return ["🔴", "🔵", "🟢", "🟡"][index];
}