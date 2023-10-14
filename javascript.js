const grid = document.querySelector('#grid');
const sizebutton = document.querySelector(".size");
const resetbutton = document.querySelector(".reset");
const eraserbutton = document.querySelector('.eraser');
const rainbowbutton = document.querySelector('.rainbow');
const whitebutton = document.querySelector('.whitecolor');
const redbutton = document.querySelector('.redcolor');
const greenbutton = document.querySelector('.greencolor');
const bluebutton = document.querySelector('.bluecolor');
const blackbutton = document.querySelector('.blackcolor')
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
            block.style.backgroundColor = 'black';  
        });

        rainbowbutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;  
            });
        });
        blackbutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#000000";
            })
        })
        eraserbutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#2b2b2b";
            })
        })
        whitebutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#ffffff";
            })
        })
        redbutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#ff0000";
            })
        })
        greenbutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#00ff00";
            })
        })
        bluebutton.addEventListener ('click', () => {
            block.addEventListener ('mouseover', () => {
                block.style.backgroundColor = "#0000ff";
            })
        })

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
