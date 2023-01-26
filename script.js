function makeField() {
  var sketchField = document.getElementById("grid");
  let numOfSquares = 30;
  for (let i = 0; i < numOfSquares; i++) {
    let squareRow = document.createElement("div");
    squareRow.classList.add("squareRow");
    for (let j = 0; j < numOfSquares; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      gridElement.addEventListener("mouseover", changeColor);
      gridElement.addEventListener("mousedown", changeColor);
      let size = 960 / numOfSquares;
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      squareRow.appendChild(square);
    }
    sketchField.appendChild(squareRow);
  }
}

function draw() {
  Array.from(document.getElementsByClassName("square")).forEach((square) => {
    square.addEventListener("mouseover", function () {
      if (mouseDown) {
        square.style.backgroundColor = "black";
      }
    });
  });
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
makeField();
draw();
