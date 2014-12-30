// Each pair of variables and variables name lists MUST be in same order
// using it like a map, 1 index to access both arrays
// and link the information [to create a polyonimo object]

var pieces = [i1, i2, i3, i4, i5, o4, f5, n5, p5, v3, v5, t4, t5, z4, z5, w5, x5, y5];
var pieceNames = ["i1", "i2", "i3", "i4", "i5", "o4", "f5", "n5", "p5", "v3", "v5", "t4", "t5", "z4", "z5", "w5", "x5", "y5" ];

var orientations = [North, East, South, West, rNorth, rEast, rSouth, rWest];
var orientationNames = ["N", "E", "S", "W", "rN", "rE", "rS", "rW"];


  // rowlabels are only specific to the ids for the PIECES not the board!
  // the board is 6 wide (goes to f), not 5
  var rowLabels = ['a', 'b', 'c', 'd', 'e'];


// can i do enums or something....???  

/*
// polyonimos
var pieceNames = [
"i1", "i2", "i3", "i4", "i5", 
"o4", "f5", "n5", "p5", 
"v3", "v5", 
"t4", "t5", 
"z4", "z5", 
"w5", "x5", "y5" ];
*/



function Polyomino(name, structure) {
  this.name = name;

  // square grid of appearance of piece
  this.structure = structure; 
  

  // little janky,
  // turns index of orientation into number back into actual layout
  // (25 indices rearranged to read in order to match orientation)

  //this.orientation = North;
  this.orientationIdx = 0; // north
  
  //this.numUnits = 0; //.......
  
  
  
  this.isPlaced = false; //.... shoudl be placement/loctaion
  this.numUnits = 0; // need to count from structure
  for(var i = 0; i<this.structure.length; i++) {
    if(this.structure[i]) this.numUnits++;
  }
  // orientation name doesnt need to be a propety,
  // only visible to when debugging
}


var rowLabels = ['a', 'b', 'c', 'd', 'e'];

Polyomino.prototype.draw = function() {
  
  // array of 25 indices, order to read the info
  var pieceLayout = orientations[this.orientationIdx];
  var defaultPieceInfo = this.structure;
    //console.log(pieceLayout);
    // console.log(defaultPieceInfo);
  
  
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

//   document.getElementById("game-pieces").appendChild(pieceDiv);
    document.getElementById("polyominos").appendChild(pieceDiv); 
};



Polyomino.prototype.redraw = function() {
  
  // array of 25 indices, order to read the info
  var pieceLayout = orientations[this.orientationIdx];
  var defaultPieceInfo = this.structure;
 
  var pieceDiv = document.createElement("DIV");
pieceDiv.className = "piece";
  
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
    if(defaultPieceInfo[pieceLayout[i]]) unit.className = "filled";
    
      pieceDiv.appendChild(unit);
    if ((i+1) % 5 === 0)            pieceDiv.appendChild(document.createElement("BR"));
  }
  
  pieceDiv.appendChild(document.createElement("BR"));

  document.querySelector("#"+this.name).innerHTML = pieceDiv.innerHTML; 
};






/*
Polyomino.prototype.printStructure = function() {
  
  var prettyStructureStr = ""; 
  for(var i = 0; i<this.structure.length; i++) {
    if(!i%5) prettyStructureStr += "\n";
    if(this.structure[i]) prettyStructureStr += 'X';
    else prettyStructureStr += '.';
  }
  
  return prettyStructureStr;
};*/

Polyomino.prototype.print = function() {
  
  var pieceInfo = "Name: " + this.name + "\n" +
      "Num Units: "+this.numUnits+ "\n"+
      "Current Orientation: " + orientationNames[this.orientationIdx] + "\n" +
      "Currently Placed?: " + this.isPlaced + "\n" +
      "Default Structure: ";
  
  for(var i = 0; i<this.structure.length; i++) {
    if(i%5 === 0) pieceInfo += "\n";
    if(this.structure[i]) pieceInfo += 'X';
    else pieceInfo += '.';
  }
      //"Default Structure: " + this.printStructure();
  /*
   return "Name: " + this.name + "\n Num Units: "+this.numUnits+ "\n Current Orientation: " + orientations[this.orientationIdx] + "\n Currently Placed?: " + this.isPlaced + "\n Default Structure: " + this.structure;
   */
  
  //console.log("Name: ", this.name);
  //console.log("Structure: ", this.structure);
  //console.log("Orientation: ", this.orientation);
  
  console.log(pieceInfo);
};



 // var a = A.parentNode.replaceChild(document.createElement("span"), A);
// a is the replaced A element.
  /*
  var exP, newP; 
newP = document.createElement("p"); 
newP.id = 'new'; exP = document.getElementById('bf'); 
exP.parentNode .replaceChild(newP,exP); 
*/

  //var oldDrawing = document.getElementById("dynamic-pentomino");
  //oldDrawing.parentNode.replaceChild(pentDiv, oldDrawing);


// -----------------------------------------------------------
// ROTATE RIGHT (clockwise)
// -----------------------------------------------------------
//
// Rotate Right
//
Polyomino.prototype.rotateCW = function() {
  var oldOrientationIdx = this.orientationIdx;
  
  this.orientationIdx = (this.orientationIdx + 1) % 4; // NESW

  // rN rE rS rW need adjustment, NESW dont
  if (oldOrientationIdx > 3) this.orientationIdx += 4; // rN rE rS rW

  /*
  var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> rotate RIGHT --> " +
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  */

  // Redraw this piece, replacing image of its old orientation
  this.redraw(); //this.draw();
};

// -----------------------------------------------------------
// ROTATE LEFT (counterclockwise)
// -----------------------------------------------------------
// Rotate Left
Polyomino.prototype.rotateCCW = function() {
  var oldOrientationIdx = this.orientationIdx;
  
  this.orientationIdx--; 
  // NESW   // rN rE rS rW
  if (oldOrientationIdx === 0 || oldOrientationIdx === 4)
    this.orientationIdx += 4; 

  /*
  var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> rotate LEFT --> " + 
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  */
  
  this.redraw(); //this.draw();
};



//
// 1 --> 7, 7 --> 1, 3 --> 5, 5 --> 3
// -----------------------------------------------------------
// FLIP VERTICAL 
// -----------------------------------------------------------
Polyomino.prototype.flipVertical = function() {
  // N <--> rN, S <--> rS
  // E <--> rW, W <--> rE
  //  N  E  S  W
  //  ↕  ↕  ↕  ↕
  // rN rW rS rE
  //var oldOrientationIdx = this.orientationIdx;
  
  // N S rN rS (even indices)
  if(this.orientationIdx % 2 === 0 )
    this.orientationIdx = (this.orientationIdx + 4) % 8;
 
  else // E rW W rE (odd indices)
    this.orientationIdx = 8 - this.orientationIdx;
  // 1 --> 7, 7 --> 1, 3 --> 5, 5 --> 3


  /*
  var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> flip VERTICAL --> " +
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  */
  
  this.redraw(); //this.draw();
};

//
// 0 --> 6, 6 --> 0, 2 --> 4, 4 --> 2
//
// -----------------------------------------------------------
// FLIP HORIZONTAL 
// -----------------------------------------------------------
Polyomino.prototype.flipHorizontal = function() {
  // N <--> rS, S <--> rN
  // E <--> rE, W <--> rW 
  //  N  E  S  W
  //  ↕  ↕  ↕  ↕
  // rS rE rN rW
  //var oldOrientationIdx = this.orientationIdx;
  
  // N S rN rS
  if(this.orientationIdx % 2 === 0 )
    this.orientationIdx = 6 - this.orientationIdx;
  // 0 --> 6, 6 --> 0, 2 --> 4, 4 --> 2
 
  else // E rW W rE (odd indices)
    this.orientationIdx = (this.orientationIdx + 4) % 8;

  /*
    var debug = orientations[oldIndex] + "("+ oldIndex + ")" +
              " --> flip HORIZONTAL --> " +
              orientations[currentOrientationIndex] + "(" + currentOrientationIndex + ")";
  console.log(debug);
  */
    
  this.redraw(); //this.draw(); 
};






/*
// ---------------------------------------------
// STILL USING THIS, NOT YET ON PROTOTYPES

var currentOrientationIndex = 0; //"N";
//var currentOrientation = orientations[currentOrientationIndex]; 
var currentPieceName = "v3"; 

//createPentomino('x5')
/*function createPentomino(pieceName) {
...
document.getElementById("currentPiece").innerHTML = currentPieceName;
...
}*/



