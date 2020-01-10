var board = document.getElementById("board");
var label = document.getElementById("label");

var cols = 15;
var rows = 15;
var mines = 30;

createBoard(cols, rows);

// Board Generation
function createBoard(cols, rows) {
     board.innerHTML="";
     label.innerHTML="Width: "+cols+", Height: "+rows+", Mines: "+mines;

     for (var i=0; i<rows; i++) {
          row = board.insertRow(i);
          for (var j=0; j<cols; j++) {
               cell = row.insertCell(j);
               var mine = document.createAttribute("data-mine");       
               mine.value = "false";             
               cell.setAttributeNode(mine);
          }
     }
     addMines(mines, rows, cols);
     countMines();
};

// Mine Generation
function addMines(mines, rows, cols) {
     for (var i=0; i<mines; i++) {
          var row = Math.floor(Math.random() * rows);
          var col = Math.floor(Math.random() * cols);
          var cell = board.rows[row].cells[col];

          if(cell.getAttribute("data-mine")=="false"){
               cell.setAttribute("data-mine","true");
               cell.innerHTML="X";
          }else{
               while (cell.getAttribute("data-mine")=="true") {
                    var row = Math.floor(Math.random() * rows);
                    var col = Math.floor(Math.random() * cols);
                    cell = board.rows[row].cells[col];

                    if(cell.getAttribute("data-mine")=="false"){
                         cell.setAttribute("data-mine","true");
                         cell.innerHTML="X";
                         break;
                    }  
               }  
          }    
     }
};

// Clue Generation
function countMines() {
     for (var i=0; i<rows; i++) {
          for (var j=0; j<cols; j++) {
               var cell = board.rows[i].cells[j];
               if(cell.getAttribute("data-mine")!=="true"){
                    var mineCount = 0;
                    var cellRow = cell.parentNode.rowIndex;
                    var cellCol = cell.cellIndex;
                    for (var y=Math.max(cellRow-1,0); y<=Math.min(cellRow+1,rows-1); y++) {
                         for(var x=Math.max(cellCol-1,0); x<=Math.min(cellCol+1,cols-1); x++){
                              var neighbour = board.rows[y].cells[x];
                              if(neighbour.getAttribute("data-mine")=="true"){
                                   mineCount = mineCount + 1;
                              }
                         }
                    }
                    if(mineCount > 0){
                         cell.innerHTML=mineCount;
                    }
                    if(cell.innerHTML == 1){
                         cell.classList.add("blue");
                    }else if(cell.innerHTML == 2){
                         cell.classList.add("green");
                    }else if(cell.innerHTML >= 3){
                         cell.classList.add("red");
                    }
               }
          }
     }
};