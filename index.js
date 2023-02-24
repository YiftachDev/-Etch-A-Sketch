let gridSize = 16;
let color = "black";
let eraserMode = false;
const containerGrid = document.querySelector(".container-grid");
const styles = window.getComputedStyle(containerGrid);
const gridTemplateRows = styles.getPropertyValue('grid-template-rows');
const gridTemplateColumns = styles.getPropertyValue('grid-template-columns');
const colorBtn = document.querySelector("#color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn")


containerGrid.style.gridTemplateRows = `repeat(${gridSize}, 40px)`;
containerGrid.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;

let divs = [];
for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    containerGrid.appendChild(div);
    divs.push(div);
    div.addEventListener("mouseover", () => {
        if (!eraserMode) {
            div.style.backgroundColor = color;
        } else {
            div.style.backgroundColor = "white";
        }
    });
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