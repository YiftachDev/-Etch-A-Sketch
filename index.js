const defaultSize = 16;
let currentSize = defaultSize;
let color = "rgb(59, 59, 59)";
let eraserMode = false;
let isDragging;
let divs = [];
const containerGrid = document.querySelector(".container-grid");
const styles = window.getComputedStyle(containerGrid);
const gridTemplateRows = styles.getPropertyValue('grid-template-rows');
const gridTemplateColumns = styles.getPropertyValue('grid-template-columns');
const colorBtn = document.querySelector("#color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");
const sizeBtn = document.querySelector("#size-btn");


updateSize(defaultSize);
createGrid();


function onMouseDown() {
    isDragging = true;
}

function onMouseUp() {
    isDragging = false;
}


function createGrid() {
    for (let i = 0; i < currentSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add("item");
        containerGrid.appendChild(div);
        divs.push(div);
        div.addEventListener("mousedown", onMouseDown);
        div.addEventListener("mouseup", onMouseUp);
        div.addEventListener("mousemove", () => {
            if (isDragging) {
                if (!eraserMode) {
                    div.style.backgroundColor = color;
                } else {
                    div.style.backgroundColor = "white";
                }
            }

        });
    }
}

function updateSize(size) {
    containerGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    containerGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

colorBtn.addEventListener("click", () => {
    let temp = prompt("Color:");
    if (temp) color = temp;
    eraserMode = false;
});

eraserBtn.addEventListener("click", () => {
    eraserMode = true;
});

clearBtn.addEventListener("click", () => {
    for (const div of divs) {
        div.style.backgroundColor = "white";
    }
});

sizeBtn.addEventListener("click", () => {
    currentSize = prompt("Size:");
    containerGrid.textContent = "";
    updateSize(currentSize);
    createGrid();
})