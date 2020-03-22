var playerTurn = true;
var flag = 0;
var computerMoveTimeout = 0;

// Returns an array of 9 <td> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoard() {
    var gameBoardTable = document.getElementById("gameBoard");
    var result = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            result.push(gameBoardTable.rows[i].cells[j]);
        }
    }
    return result;
}

function start() {
    // Setup the click event for the "New game" button
    var newBtn = document.getElementById("newGameButton");
    newBtn.addEventListener("click", newGame);

    // Create click-event listeners for each cell in the game board
    var cells = getGameBoard();
    for (let cell of cells) {
        cell.addEventListener("click", function() { cellClicked(cell); });
    }

    // Call the newGame function to make sure the board is clear
    newGame();
}

function newGame() {
    clearTimeout(computerMoveTimeout);
    computerMoveTimeout = 0;
    var newgamee = getGameBoard();
    newgamee.forEach(function(item, index){
      item.innerHTML = "&nbsp;"
    });

    playerTurn = true;
    document.getElementById("turnInfo").textContent = "Your turn";
    // Your code here
}

function cellClicked(cell) {

if(playerTurn==true){
  if(cell.innerHTML!="X" && cell.innerHTML!="O"){
          cell.innerHTML = "X";
          cell.style.color = "red";
          flag++;
          switchTurn();
          }
      }
}

function switchTurn() {

  playerTurn = !playerTurn;
  if(!playerTurn){
      computerMoveTimeout = setTimeout(makeComputerMove(), 1000);
  }else{
    computerMoveTimeout = 0;
  }

  var getinfo = document.getElementById("turnInfo");
  if(playerTurn){
    getinfo.textContent = "Your turn";
  }else{
    getinfo.textContent = "Computer's turn";
  }

}

function makeComputerMove() {

    var newBoard = getGameBoard();
    var randomGen = (Math.floor(Math.random()*100))%9;
    var newBoard1 =newBoard[randomGen];


if(flag < 9){
        if(newBoard1.innerHTML!="X" || newBoard1.innerHTML!="O"){
          var randomGen = (Math.floor(Math.random()*100))%9;
          var newBoard1 =newBoard[randomGen];
        }

    if(playerTurn){

      newBoard1.innerHTML="X";
      newBoard1.style.color="red";

    }else{

      newBoard1.innerHTML="O";
      newBoard1.style.color="blue";
    }

flag++;
switchTurn();
}
}
//     var newBoard = getGameBoard();
//     for(let space of newBoard) {
//       if(playerTurn == true){
//         if(space.innerHTML!="X" && space.innerHTML!="O"){
//                 space.innerHTML = "O";
//                 space.style.color = "blue";
//                     switchTurn();
//                 }
//
//             }
// }

    // Your code here
