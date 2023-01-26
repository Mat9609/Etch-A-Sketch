const grid = document.getElementById('grid');
let size = 16;
let color = "black";
let drawMode = 'draw';
let mouseDown = false;
document.body.onmousedown = function () {mouseDown = true};
document.body.onmouseup = function () {mouseDown = false};
document.getElementById('colorPicker').oninput = (e) => setColor(e.target.value);
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);


function setColor(newColor){
    color = newColor;
}

function changeSize(newSize){
    size = newSize;
    grid.innerHTML = '';
    setupGrid(size);
}

function updateSizeValue(sizeValueText){
    sizeValue.innerHTML = `${sizeValueText} x ${sizeValueText}`;
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    else if (drawMode === 'draw') {
      e.target.style.backgroundColor = color;
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe';
    }
  }


function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        grid.appendChild(square);
    }
};


setupGrid(size);
updateSizeValue(size);



