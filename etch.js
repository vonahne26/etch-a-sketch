function createGrid(number){
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

const container = document.querySelector('#container');

createGrid(16);

const gridItem = document.querySelectorAll('.grid-box');
gridItem.forEach((item) =>{
    item.addEventListener('mouseleave', () => {
        item.classList.toggle('color');
    });
});


