const grid = document.querySelector('#grid');
const sizebutton = document.querySelector(".size");

function createGrid (x){
    for (let rows = 0; rows < x; rows++){
        let column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
        
    for (let columns = 0; columns < x; columns++){  
        let block = document.createElement('div');
        block.classList.add('block');
        column.appendChild(block)
    }
    }
}

createGrid(16);

function resizeGrid (){
    grid.innerHTML = '';
    let x = prompt("Enter the number of squares per side. Cancel button will revert grid back to default value - 16");
    if (isNaN(x)){
        resizeGrid();
    } else if (x < 0){
        alert("Please, use a positive value")
        resizeGrid();
    } else if (x === null){
        createGrid(16);
    } else if (x > 64) {
        alert("Max value is 64. Sorry :(")
        resizeGrid();
    } else if (x === ""){
        resizeGrid();
    } else {
        createGrid(x);
    }
}

sizebutton.addEventListener('click', () => {
    resizeGrid();
});
