let xMoves = [];
let oMoves = [];
const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

let playerbutton1 = document.getElementsByClassName("player1")[0];
let playerbutton2 = document.getElementsByClassName("player2")[0];
let resetbutton = document.getElementsByClassName("reset")[0];
let divbox = document.querySelectorAll(".box");
let currentPlayer = "x";

playerbutton1.style.backgroundColor = "transparent";
playerbutton2.style.backgroundColor = "transparent";

playerbutton1.addEventListener('click', selectplayer);
playerbutton2.addEventListener('click', selectplayer);
 resetbutton.addEventListener('click', resetBoard);


function selectplayer(event) {
  event.target.style.backgroundColor = "green";
  if (event.target === playerbutton1) {
    currentPlayer = "x";
    playerbutton2.style.backgroundColor = "white";
  } else {
    currentPlayer = "o";
    playerbutton1.style.backgroundColor = "white";
  }
}

for (let i = 0; i < divbox.length; i++) {
  divbox[i].addEventListener("click", function(event) {
    if (event.target.innerText !== "") return; // prevent duplicate clicks
    boxclick(event, i);
  });
}

function boxclick(event, index) {
  if (currentPlayer === "x") {
    event.target.style.backgroundColor = "green";
    event.target.innerText = "X";
    xMoves.push(index);
    console.log(xMoves);
    checkWin(xMoves, "X");
  } else {
    event.target.style.backgroundColor = "yellow";
    event.target.innerText = "O";
    event.target.style.color = "red";
    oMoves.push(index);
     console.log(oMoves);
    checkWin(oMoves, "O");
  }
}

function checkWin(playerMoves, symbol) {
  for (let combo of winningCombos) {
    if (combo.every(index => playerMoves.includes(index))) {
      alert(symbol + " congrats you won!");
      resetBoard();
      break;
    }
  }
  
  if (xMoves.length + oMoves.length === 9) {
    alert("It's a draw!");
    resetBoard();
  }
}

function resetBoard() {
  xMoves = [];
  oMoves = [];
  currentPlayer = "x";
  playerbutton1.style.backgroundColor = "white";
  playerbutton2.style.backgroundColor = "white";
  
  for (let box of divbox) {
    box.innerText = "";
    box.style.backgroundColor = "white";
  }
}
