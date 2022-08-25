let dimension = 16; // default grid size to 16x16

createBoard(dimension);

/*
Create the Etch-A-Sketch board using the dimension value chosen by user 
or the fault of 16x16
*/
function createBoard(size){
    // create each div e.g. if 16x16 = 256
    let numOfDivs = size*size;

    // set the correct flex-basis based on the dimension
    let basis = 100/(size+1)+"%";
    console.log("flexBasis " + basis);
    /*const cells = document.querySelectorAll('.cell');
    console.log("the cells: " + cells);


    cells.forEach(cell => {

        console.log("in the for each.  Cell: " + cell);
        cell.style.flexBasis = basis;
    });*/

    for(let i=0; i<numOfDivs; i++){
        // create a new row div in the DOM within the grid container
        let gridContainer = document.getElementById("gridContainer");
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("border");
        cellDiv.classList.add("cell");
        console.log("the cell div basis is: " + cellDiv.style.flexBasis)
        cellDiv.style.flexBasis = basis;
        //cellDiv.innerHTML = "Cell " + (i+1);
        // add an ID so each cell is identifiable
        gridContainer.appendChild(cellDiv);
        
    }
}