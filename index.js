let gridSize = 16;
let color = "black";
let eraserMode = false;
const containerGrid = document.querySelector(".container");
const styles = window.getComputedStyle(containerGrid);
const gridTemplateRows = styles.getPropertyValue('grid-template-rows');
const gridTemplateColumns = styles.getPropertyValue('grid-template-columns');
const colorBtn = document.querySelector("#color-btn");
const eraserBtn = document.querySelector("#eraser-btn");


containerGrid.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;
containerGrid.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;


for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    containerGrid.appendChild(div);
    div.addEventListener("mouseover", () => {
        if (!eraserMode) {
            div.style.backgroundColor = color;
        } else {
            div.style.backgroundColor = "white";
        }
    });
}

colorBtn.addEventListener("click", () => {
    color = prompt("Color:");
});

eraserBtn.addEventListener("click", () => {
    eraserMode = true;
});