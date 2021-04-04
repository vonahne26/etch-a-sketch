function createGrid(number){
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for(i = 0; i < number; i++){  
        for(j = 0; j< number; j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            container.appendChild(gridBox);
        }
    }
};

function resetGrid() {
    const container = document.querySelector('#container');
    let gridItem = document.querySelectorAll('.grid-box');
    gridItem.forEach((item) =>{
       container.removeChild(item);
    });
};

function addDrawing(){
    gridItem = document.querySelectorAll('.grid-box');
    gridItem.forEach((item) =>{
        item.addEventListener('mouseleave', () => {
            item.classList.toggle('color');
        });
    });
}

createGrid(16);

addDrawing();

const button = document.getElementById('submit');
value = button.form.grid.value;
button.addEventListener('click', () => {
    resetGrid();
    createGrid(value);   
    addDrawing();
});

