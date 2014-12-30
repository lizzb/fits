// empty piece
var none = [0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];   

/*  var w5 =  [0, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0];

  var x5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 1, 1, 1, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var y5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0];

  var f5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var p5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 0, 1, 1, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];*/


  
  var v5 = [0, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 1, 0, 0, 0,
            0, 1, 1, 1, 0,
            0, 0, 0, 0, 0];

  var l4 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0];

  var l5 = [0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0];

  var z4 = [0, 0, 0, 0, 0, 
            0, 1, 1, 0, 0, 
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];

  var z5 = [0, 0, 0, 0, 0, 
            0, 1, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0];

  var y5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0];

  var w5 = [0, 0, 0, 0, 0, 
            0, 1, 0, 0, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0];

  var x5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 1, 1, 1, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var t4 = [0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 1, 1, 1, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var t5 = [0, 0, 0, 0, 0, 
            0, 1, 1, 1, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var f5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var p5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 0, 1, 1, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var o4 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];

// n5, i5, i4, i3, i2, i1





var North = [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9,
  10, 11, 12, 13, 14,
  15, 16, 17, 18, 19,
  20, 21, 22, 23, 24
];


var East = [
  20, 15, 10, 5, 0,
  21, 16, 11, 6, 1,
  22, 17, 12, 7, 2,
  23, 18, 13, 8, 3,
  24, 19, 14, 9, 4
];

var South = [
  24, 23, 22, 21, 20,
  19, 18, 17, 16, 15,
  14, 13, 12, 11, 10,
  9, 8, 7, 6, 5,
  4, 3, 2, 1, 0
];
    
var West = [
  4, 9, 14, 19, 24,
  3, 8, 13, 18, 23,
  2, 7, 12, 17, 22,
  1, 6, 11, 16, 21,
  0, 5, 10, 15, 20
];

var rNorth = [
  4, 3, 2, 1, 0,
  9, 8, 7, 6, 5,
  14, 13, 12, 11, 10,
  19, 18, 17, 16, 15,
  24, 23, 22, 21, 20
];

var rEast = [
  0, 5, 10, 15, 20,
  1, 6, 11, 16, 21,
  2, 7, 12, 17, 22,
  3, 8, 13, 18, 23,
  4, 9, 14, 19, 24
];

var rSouth =  [
  20, 21, 22, 23, 24,
  15, 16, 17, 18, 19,
  10, 11, 12, 13, 14,
  5, 6, 7, 8, 9,
  0, 1, 2, 3, 4
];

var rWest = [
  24, 19, 14, 9, 4,
  23, 18, 13, 8, 3,
  22, 17, 12, 7, 2,
  21, 16, 11, 6, 1,
  20, 15, 10, 5, 0
];



var orientations = [North, East, South, West, rNorth, rEast, rSouth, rWest];

var pieces = [/*i1, i2, i3, i4, i5,*/ o4, f5, /*n5,*/ p5, /*v3,*/ v5, t4, t5, z4, z5, w5, x5, y5];

var pieceNames = [/*"i1", "i2", "i3", "i4", "i5",*/ "o4", "f5", /*"n5",*/ "p5", /*"v3",*/ "v5", "t4", "t5", "z4", "z5", "w5", "x5", "y5" ];

var orientationNames = ["N", "E", "S", "W", "rN", "rE", "rS", "rW"];








function Polyomino(name, structure) {
  this.name = name;
  this.structure = structure;
  
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
  //console.log(pieceLayout);
  var defaultPieceInfo = this.structure;
 // console.log(defaultPieceInfo);
  
  
  var pieceDiv = document.createElement("DIV");
  pieceDiv.className = "piece";
  pieceDiv.id = this.name;
  
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      //unit.appendChild(document.createTextNode(unit.id));
    if(defaultPieceInfo[pieceLayout[i]]) unit.className = "filled";
    
      pieceDiv.appendChild(unit);
    if ((i+1) % 5 === 0)            pieceDiv.appendChild(document.createElement("BR"));
  }
  
  pieceDiv.appendChild(document.createElement("BR"));

  
 //document.getElementById("dynamic-pentomino").appendChild(pieceDiv);
  document.getElementById("polyominos").appendChild(pieceDiv); 
 // console.log("4");
  
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


//
// Rotate Right
//
Polyomino.prototype.rotateCW = function() {
  var oldOrientationIdx = this.orientationIdx;
  
  this.orientationIdx = (this.orientationIdx + 1) % 4; // NESW
  if (oldOrientationIdx > 3) this.orientationIdx += 4; // rN rE rS rW

  this.redraw(); //this.draw();
};

// Rotate Left
Polyomino.prototype.rotateCCW = function() {
  var oldOrientationIdx = this.orientationIdx;
  
  this.orientationIdx--; 
  // NESW   // rN rE rS rW
  if (oldOrientationIdx === 0 || oldOrientationIdx === 4)
    this.orientationIdx += 4; 
  
  this.redraw(); //this.draw();
};



Polyomino.prototype.flipVertical = function() {
  //  N  E  S  W
  //  ↕  ↕  ↕  ↕
  // rN rW rS rE
  //var oldOrientationIdx = this.orientationIdx;
  
  // N S rN rS
  if(this.orientationIdx % 2 === 0 )
    this.orientationIdx = (this.orientationIdx + 4) % 8;
 
  else // E rW W rE (odd indices)
    this.orientationIdx = 8 - this.orientationIdx;
  // 1 --> 7, 7 --> 1, 3 --> 5, 5 --> 3
  
  this.redraw(); //this.draw();
};


Polyomino.prototype.flipHorizontal = function() {
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
    
  this.redraw(); //this.draw(); 
};

function makeAllPieces(){
  
  var pieceObjects = [];
  
  for(var i=0; i<pieces.length; i++) {
    pieceObjects[i] = new Polyomino(pieceNames[i], pieces[i]);
    //var piece = document.createElement("DIV");
     // piece.id = pieceNames[i];
    //document.getElementById("polyominos").appendChild(piece);
    
  }
 
  for(var j=0; j<pieceObjects.length; j++) {
    pieceObjects[j].draw();
  }
   
  
   
}


