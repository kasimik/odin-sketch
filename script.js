const board = document.getElementById("board");
let myDivs = [];
let size = 256;
let root = document.querySelector(':root');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
        /*root.style.setProperty('--changedColor', getRandomColor());
        this.classList.add("hover");*/
        this.setAttribute('style', `background-color: ${getRandomColor()}`);
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

    if (numColumns <= 100) {
      size = numColumns * numColumns;

      clearBoard();
      root.style.setProperty('--columnNumber', numColumns);
      createNewDivs();
    } else {
      alert("Max number of columns = 100");
    }
    
  }


createNewDivs();


const button = document.querySelector('button');
button.addEventListener('click', function () {
  resetBoard()
});
