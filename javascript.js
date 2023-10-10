const grid = document.querySelector('#grid');
const sizebutton = document.querySelector(".size");
const resetbutton = document.querySelector(".reset");

function Grid (x){
    for (let rows = 0; rows < x; rows++){
        let column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
        
    for (let columns = 0; columns < x; columns++){  
        let block = document.createElement('div');
        block.classList.add('block');
        column.appendChild(block);

        block.addEventListener ('mouseover', () => {
            block.style.backgroundColor = 'red';  
        });

        resetbutton.addEventListener('click', () => {
            block.style.cssText = 'background-color: rgb(43, 43, 43);';
        });
    }
    }
}

Grid(16);

function resizeGrid (){
    grid.innerHTML = '';
    let x = prompt("Enter the number of squares per side. Cancel button will revert grid back to default value - 16");
    if (isNaN(x)){
        resizeGrid();
    } else if (x < 0){
        alert("Please, use a positive value")
        resizeGrid();
    } else if (x === null){
        Grid(16);
    } else if (x > 64) {
        alert("Max value is 64. Sorry :(")
        resizeGrid();
    } else if (x === ""){
        resizeGrid();
    } else {
        Grid(x);
    }
}

sizebutton.addEventListener('click', () => {
    resizeGrid();
});
