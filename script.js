let dimension = 16;// default grid size to 16x16 

// Global variable (default colour black)
let colourSelected = "000000";


/* The event listeners */
// Erase Button
const erase = document.getElementById("eraseButton");
erase.addEventListener("click", function() {
    eraseColouredCells();
})

// Select black as the colour button
const blackSelected = document.getElementById("black");
blackSelected.addEventListener("click", function(){
    colourSelected = "000000";
})
// Select rainbow as the colour button
const rainbowSelected = document.getElementById("rainbow");
rainbowSelected.addEventListener("click", function(){
    console.log("the rainbow event listener has been activated");
    colourSelected = "rainbow";
})

// Select the grid size
const gridSizeSelected = document.getElementById("gridSize");
gridSizeSelected.addEventListener("click", function(){
    console.log("the slider has been activated");
    dimension = gridSizeSelected.value;
    console.log("the dimension is");
    deleteBoard();
    createBoard(dimension);
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
    let basis = 100/(size)+"%";
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
            colourCell((i+1));
        });

        gridContainer.appendChild(cellDiv);
        
    }
}


/*
Delete the board ready for the create of a new one
*/
function deleteBoard(){
    let theContainer = document.getElementById("gridContainer");
    theContainer.innerHTML = "";
}

/*
Set the background color of the cell once it has been hovered over
*/
function colourCell(cellID){
    let colour = colourSelected;
    //console.log("in the colour cell function and the colour selected is : " + colourSelected);
    if(colourSelected.toLowerCase() == "rainbow"){
        // get a random colour and assign it to the variable
        colour = Math.floor(Math.random()*16777215).toString(16);
    }
    let cell = document.getElementById(cellID);
    console.log("in the colour cell function and the colour selected is : " + "#"+colour);
    cell.style.backgroundColor = "#"+colour;
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