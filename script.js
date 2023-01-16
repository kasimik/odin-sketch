const board = document.getElementById("board");
let myDivs = [];
let size = 256;
let root = document.querySelector(':root');

function createDiv() {
  var boardDiv = document.createElement("div");

  boardDiv.className = "cell";

  return boardDiv;
}

function createNewDivs() {

    for (i = 0; i < size; i++) {
      myDivs.push(createDiv());
      board.appendChild(myDivs[i]);
    }
    
    myDivs.forEach((cell) => {
      cell.addEventListener('mouseover', function(e) {
        this.classList.add("hover");
      });
    });
  }

function clearBoard () {
  myDivs.forEach((cell) => {
    board.removeChild(cell);
  })

  myDivs = [];
}

  function resetBoard () {
    let numColumns = prompt("Enter number of columns.");

    size = numColumns * numColumns;

    clearBoard();
    root.style.setProperty('--columnNumber', numColumns);
    createNewDivs();
  }


createNewDivs();


const button = document.querySelector('button');
button.addEventListener('click', function () {
  resetBoard()
});
