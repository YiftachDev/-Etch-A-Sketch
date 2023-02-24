let gridSize = 16;
const containerGrid = document.querySelector(".container");
const styles = window.getComputedStyle(containerGrid);
const gridTemplateRows = styles.getPropertyValue('grid-template-rows');
const gridTemplateColumns = styles.getPropertyValue('grid-template-columns');

containerGrid.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;
containerGrid.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;


