// Defining variables such as table and size.
var table = document.getElementById("pixelCanvas");
var size = document.getElementById("sizePicker");

//Adding event listeners to relevant DOM and  
//when size is submitted by the user, call makeGrid() 
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;
    makeGrid(height, width);
})
//the following function is used to draw the grid including rows and cells
function makeGrid(height, width) {
    table.innerHTML = "";
    for(let x = 0; x < height; x++){
        let row = table.insertRow(x); 
        for(let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener("click", function(event) {
                var color = document.getElementById("colorPicker").value;
                cell.style.background = color;
            })
                    
         }
            
    }
}









