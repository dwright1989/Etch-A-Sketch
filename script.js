let dimension = 16; // default grid size to 16x16

createBoard(dimension);

/*
Create the Etch-A-Sketch board using the dimension value chosen by user 
or the fault of 16x16
*/
function createBoard(size){
    for(let i=0; i<size; i++){
        // create a new row div in the DOM within the grid container
        let gridContainer = document.getElementById("gridContainer");
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        rowDiv.classList.add("border");
        
        for(let j=0; j<size; j++){
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("columnDiv");
            columnDiv.classList.add("border");
            let columnWidth = 100/size+"%";
            columnDiv.style.width = columnWidth;
            columnDiv.style.height = columnWidth;
            columnDiv.innerHTML="Column " + (j+1);
            rowDiv.appendChild(columnDiv);
        }

        gridContainer.appendChild(rowDiv);
        
    }
}