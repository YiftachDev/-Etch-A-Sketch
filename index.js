let gridSize = 16;
const containerGrid = document.querySelector(".container");
const styles = window.getComputedStyle(containerGrid);
const gridTemplateRows = styles.getPropertyValue('grid-template-rows');
const gridTemplateColumns = styles.getPropertyValue('grid-template-columns');

containerGrid.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;
containerGrid.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;


for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    containerGrid.appendChild(div);
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
}