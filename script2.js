const grid = document.getElementById("grid");
let size = 16;
let color = "black";
let drawMode = "color";
let mouseDown = false;
document.body.onmousedown = function () {
  mouseDown = true;
};
document.body.onmouseup = function () {
  mouseDown = false;
};

const colorPicker = document.getElementById("colorPicker");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
colorPicker.oninput = (e) => setColor(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearButton.onclick = (e) => {
  clearGrid();
};
eraserButton.onclick = (e) => {
  if (drawMode === "color") {
    drawMode = "eraser";
    setColor("white");
    eraserButton.style.backgroundColor = "white";
    eraserButton.style.color = "black";
  } else if (drawMode === "eraser") {
    drawMode = "color";
    eraserButton.style.backgroundColor = "black";
    eraserButton.style.color = "white";
    setColor(colorPicker.value);
  }
};

function setColor(newColor) {
  color = newColor;
}

function changeSize(newSize) {
  size = newSize;
  grid.innerHTML = "";
  setupGrid(size);
}

function clearGrid() {
  grid.innerHTML = "";
  setupGrid(size);
}

function updateSizeValue(sizeValueText) {
  sizeValue.innerHTML = `${sizeValueText} x ${sizeValueText}`;
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  else if (drawMode === "color") {
    e.target.style.backgroundColor = color;
  } else if (drawMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    grid.appendChild(square);
  }
}

window.onload = () => {
  setupGrid(16);
  updateSizeValue(16);
};



