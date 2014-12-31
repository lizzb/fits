// OLD CODE NEED TO TURN PROTOTYPE ISH

// 6 columns (abcdef) by 12 rows (1-12)
function createBoard(roundNum) {

var colLabels = ['a', 'b', 'c', 'd', 'e', 'f'];

var boardLayout = board0; 

switch (roundNum) {
  case 1: boardLayout = board1; break;
  case 2: boardLayout = board2; break;
  case 3: boardLayout = board3; break;
  case 4: boardLayout = board4; break;
  default: break;
}
// div .board


var boardDiv = document.createElement("DIV");
  boardDiv.className = "board";
  boardDiv.id = "round"+roundNum;
  for (var i=0; i<72; i++) { 
    var slot = document.createElement("DIV");
      slot.id = colLabels[i%6] + Math.floor(i/6 + 1);
      //slot.appendChild(document.createTextNode(slot.id)); //...........

      var displayIcon = "";
      switch (boardLayout[i]) {
        case dot: displayIcon = "."; break;
        case plus1: displayIcon = "(1)"; break;
        case plus2: displayIcon = "(2)"; break;
        case plus3: displayIcon = "(3)"; break;
        case minus5: displayIcon = "(-5)"; break;
        case symb1: displayIcon = "&#x2736;"; break; // blue 6pt star
        case symb2: displayIcon = "&#x25B2;"; break; // orange triangle
        case symb3: displayIcon = "&#x2b24;"; break; // pink circle
        case symb4: displayIcon = "&#x2b25;"; break; // green diamond
        case symb5: displayIcon = "&#x2716;"; break; // purple X
        default: displayIcon = ""; break; // displayIcon = "O"; break;
      }
      slot.appendChild(document.createTextNode(displayIcon));

    //if(defaultPieceInfo[boardLayout[i]])
    //  unit.className = "filled";
    boardDiv.appendChild(slot);
    if ((i+1) % 6 === 0)
      boardDiv.appendChild(document.createElement("BR"));
  }
  boardDiv.appendChild(document.createElement("BR"));
  document.getElementById("boards").appendChild(boardDiv);
    
}




// -----------------------------------------------------------
//
// Board prototype
//
// -----------------------------------------------------------
function Board(name, layout) {
  this.name = name;

  // 6 column x 12 row grid of board squares (72 slots)
  this.layout = layout;
  
  //for(var i = 0; i<this.structure.length; i++) {
  //  if(this.structure[i]) this.numUnits++;
 // }

}


// -----------------------------------------------------------
//
// Create new board div
//
// -----------------------------------------------------------
Board.prototype.draw = function() {
  /*
  var pieceDiv = document.createElement("DIV");
  pieceDiv.className = "piece";
  pieceDiv.id = this.name;
  
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      //unit.appendChild(document.createTextNode(unit.id));
    if(defaultPieceInfo[pieceLayout[i]])
      unit.className = "filled";
    
    pieceDiv.appendChild(unit);
    if ((i+1) % 5 === 0)
      pieceDiv.appendChild(document.createElement("BR"));
  }
  
  pieceDiv.appendChild(document.createElement("BR"));

//document.getElementById("game-pieces").appendChild(pieceDiv);
  document.getElementById("polyominos").appendChild(pieceDiv); 
  */

};


// -----------------------------------------------------------
//
// Redraw board - update for when a new piece is placed
//
// -----------------------------------------------------------
Board.prototype.redraw = function() {
  
  
};





// -----------------------------------------------------------
//
// 
//
// -----------------------------------------------------------
/*Board.prototype.rotateCW = function() {
  var oldOrientationIdx = this.orientationIdx;
  
  this.orientationIdx = (this.orientationIdx + 1) % 4; // NESW

  // rN rE rS rW need adjustment, NESW dont
  if (oldOrientationIdx > 3) this.orientationIdx += 4; // rN rE rS rW

  /*
  var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> rotate RIGHT --> " +
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  *

  // Redraw this piece, replacing image of its old orientation
  this.redraw(); //this.draw();
};*/



// -----------------------------------------------------------
//
// Score the board in its current state
//
// -----------------------------------------------------------
Board.prototype.scoreBoard = function() {

  // each uncovered dot --> -1, unless it has a diff value 
  // ->


  /*
  var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> flip VERTICAL --> " +
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  */
  
  this.redraw();
};


// -----------------------------------------------------------
// Output board status info to console for debugging
// -----------------------------------------------------------
Board.prototype.print = function() {
  /*
  var boardInfo = "Name: " + this.name + "\n" +
      "Num Units: "+this.numUnits+ "\n"+
      "Current Orientation: " + orientationNames[this.orientationIdx] + "\n" +
      "Currently Placed?: " + this.isPlaced + "\n" +
      "Default Structure: ";
  
  for(var i = 0; i<this.structure.length; i++) {
    if(i%5 === 0) pieceInfo += "\n";
    if(this.structure[i]) pieceInfo += 'X';
    else pieceInfo += '.';
  }
  
  console.log(boardInfo);
  */
};



