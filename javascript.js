const grid = document.querySelector('#grid');

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
createGrid (16);