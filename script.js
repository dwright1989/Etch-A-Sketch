let dimension = 16; // default grid size to 16x16 #################### TO BE CHANGED ####################

// Global variable (default colour black)
let colourSelected = "black";


/* The event listeners */
const erase = document.getElementById("eraseButton");
erase.addEventListener("click", function() {
    eraseColouredCells();
})

const blackSelected = document.getElementById("black");
blackSelected.addEventListener("click", function(){
    colourSelected = "black";
})

// create the board with the specified dimensions
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

    for(let i=0; i<numOfDivs; i++){
        // create a new row div in the DOM within the grid container
        let gridContainer = document.getElementById("gridContainer");
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("border");
        cellDiv.classList.add("cell");
        console.log("the cell div basis is: " + cellDiv.style.flexBasis)
        cellDiv.style.flexBasis = basis;
        
        // add an ID so each cell is identifiable
        cellDiv.setAttribute("id", i+1);


        cellDiv.addEventListener("mouseenter", (event) => {
            colourCell((i+1), colourSelected);
        });

        gridContainer.appendChild(cellDiv);
        
    }
}

/*
Set the background color of the cell once it has been hovered over
*/
function colourCell(cellID, colour){
    if(colour.toLowerCase() == "rainbow"){
        // get a random colour and assign it to the variable
    }
    let cell = document.getElementById(cellID);
    cell.style.backgroundColor = colour;
}

/*
Erase the background color of all cells to start fresh
*/
function eraseColouredCells(){
    let cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
       
    
}