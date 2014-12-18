
 //
 //
 //
 // 
function Polyonimo(name, structure) {
  this.name = name;
  this.structure = structure;
  this.isPlaced = false;

  // can i use enums somehow....?
  this.orientationIdx = 0; // current orientation index
  

  this.numUnits = 0; // need to count from structure
  for(var i = 0; i<this.structure.length; i++) {
    if(this.structure[i]) this.numUnits++;
  }
/* this.structure.forEach(function(element, index, array) { if(element === 1) this.numUnits++; });*/
  
}

/* 
// Alternate way - make function separately
function displayPieceInfo() {
  return "Name: " + this.name + "\n Num Units: "+this.numUnits+ "\n Current Orientation: " + orientations[this.orientationIdx] + "\n Currently Placed?: " + this.isPlaced + "\n Default Structure: " + this.structure;
}
Pentomino.prototype.displayInfo = displayPieceInfo;
*/

Polyonimo.prototype.displayInfo = function () {
  return "Name: " + this.name + "\n Num Units: "+this.numUnits+ "\n Current Orientation: " + orientations[this.orientationIdx] + "\n Currently Placed?: " + this.isPlaced + "\n Default Structure: " + this.structure;
};


// -----------------------------------------------------------
// ROTATE LEFT
// current heading - 1 (counterclockwise)
// N <-- E <-- S <-- W <-- N ...
// rN <-- rE <-- rS <-- rW <-- rN ...
Polyonimo.prototype.rotateLeft = function () {


  // *** DEBUG *** //
  //var oldstr = this.orientationIdx + " " +  orientations[this.orientationIdx];
  var oldIndex = this.orientationIdx;

  this.orientationIdx--;

  if( (oldIndex < 4 && this.orientationIdx < 0) ||  // N E S W needs to loop around
      (oldIndex >= 4 && this.orientationIdx < 4) )  // rN rE rS rW needs to loop around
    this.orientationIdx+=4;

/*
  // NESW
  if(this.orientationIdx < 4) //<=3
    {
      this.orientationIdx--;
      if (this.orientationIdx < 0) this.orientationIdx = 3; // + 4
    }
      
    
  // rN rE rS rW
  else
    {
      this.orientationIdx--;
      if (this.orientationIdx < 4) this.orientationIdx = 7; // + 4 // orientations.length - 1;
    }
*/
  
  //var newstr = this.orientationIdx + " " +  orientations[this.orientationIdx];
  //var str = "Orientation: " + oldstr + "(old)--> rotate left -->  new: " + newstr;
  //console.log(str);

  var debug = orientations[oldIndex] + "("+ oldIndex + ") --> rotate LEFT --> " + orientations[this.orientationIdx] + "(" + this.orientationIdx + ")";
  console.log(debug);
  
  //............... is this right??
  this.draw();
  //drawPiece();
};

Polyonimo.prototype.rotateRight = function () {
/*
   var str1 = "old orientation index: " + currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  // current heading + 1
  // N --> E --> S --> W --> N ...
  // rN --> rE --> rS --> rW --> rN ...
  
  // NESW
  if(currentOrientationIndex <=3)
      currentOrientationIndex = (currentOrientationIndex + 1) % 4;
    
  // rN rE rS rW
  else
    currentOrientationIndex = 4 + (currentOrientationIndex + 1) % 4;
  
  var str2 = "new orientation index: " + currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  console.log(str1);
  console.log(str2);
  
  //...........
  drawPiece();
  */
};

Polyonimo.prototype.flipVertical = function () {
  
};

Polyonimo.prototype.flipHorizontal = function () {
  
};


// function createPentomino(pieceInfo) {
//function createPentomino() {
////function createPentomino(pieceName) {

//// function createDynamicPentomino(pieceName) {

//function drawPiece(pieceName, pieceOrientation) {
////function drawPiece() {

//
//
//
//
//
Polyonimo.prototype.draw = function() {

  // rowlabels are only specific to the ids for the PIECES not the board!
  // the board is 6 wide (goes to f), not 5
  var rowLabels = ['a', 'b', 'c', 'd', 'e'];

  var pieceName = currentPieceName;
  var pieceOrientation = orientations[currentOrientationIndex]; 
  
  var defaultPieceInfo = emptyPiece;
  var pieceLayout = North; // array of 25 indices, order to read the info
  
  switch (pieceName) {
  case "v3": defaultPieceInfo = v3; break;
  case "v5": defaultPieceInfo = v5; break;
  case "l4": defaultPieceInfo = l4; break;
  case "l5": defaultPieceInfo = l5; break;
  case "z4": defaultPieceInfo = z4; break;
  case "z5": defaultPieceInfo = z5; break;
  case "t4": defaultPieceInfo = t4; break;
  case "t5": defaultPieceInfo = t5; break;
  case "x5": defaultPieceInfo = x5; break;
  case "y5": defaultPieceInfo = y5; break;
  case "w5": defaultPieceInfo = w5; break;
  case "f5": defaultPieceInfo = f5; break;
  case "p5": defaultPieceInfo = p5; break;
  case "o4": defaultPieceInfo = o4; break;
      
  case "n5": defaultPieceInfo = n5; break;
  case "i5": defaultPieceInfo = i5; break;
  case "i4": defaultPieceInfo = i4; break;
  case "i3": defaultPieceInfo = i3; break;
  case "i2": defaultPieceInfo = i2; break;
  case "i1": defaultPieceInfo = i1; break;
  default: break;
}
  
  // little janky, turns index of orientation into number back into actual layout (25 indices rearranged to read in order to match orientation)
    switch (pieceOrientation) {
  case "N": pieceLayout = North; break;
  case "E": pieceLayout = East; break;
  case "S": pieceLayout = South; break;
  case "W": pieceLayout = West; break;
  case "rN": pieceLayout = rNorth; break;
  case "rE": pieceLayout = rEast; break;
  case "rS": pieceLayout = rSouth; break;
  case "rW": pieceLayout = rWest; break;
  default: break;
}


  var pieceDiv = document.createElement("DIV");
  pieceDiv.className = "piece";

  // see "createPentomino" for a for loop that was nested
  // doesnt work for the reading of the 25 reordered indices
  // but could have other implementation perks
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      unit.appendChild(document.createTextNode(unit.id)); //...........

    if(defaultPieceInfo[pieceLayout[i]])
      unit.className = "filled";
    
    pieceDiv.appendChild(unit);

    // i should be able to do this through css alone somehow...
    // There must be a way to do this through CSS alone......... *****
    if ((i+1) % 5 === 0)
      pieceDiv.appendChild(document.createElement("BR"));
  }
  
  
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
  
  
  // there must also be a less janky way to do this..... ********
  pentDiv.appendChild(document.createElement("BR"));
  
  // was adding to Id "dynamic-pentomino" before....
  // can i return this??
  document.getElementById("game-pieces").appendChild(pentDiv);

  // ooh i actually want to replace my former orientation of this piece with new one....
  // since this should only be called from a fx that manipulates appearance format layout whatever
  
}




function isCovered() {
  
}

function isEmpty() {
  
}

function isValidPlacement() {
  
}


/*
// -----------------------------------------------------------
// PIECE MANIPULATION FUNCTIONS
//
// ROTATE L, ROTATE R, FLIP V, FLIP H
//
// -----------------------------------------------------------

function rotateRight() {
  
  var str1 = "old orientation index: " + currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  // current heading + 1
  // N --> E --> S --> W --> N ...
  // rN --> rE --> rS --> rW --> rN ...
  
  // NESW
  if(currentOrientationIndex <=3)
      currentOrientationIndex = (currentOrientationIndex + 1) % 4;
    
  // rN rE rS rW
  else
    currentOrientationIndex = 4 + (currentOrientationIndex + 1) % 4;
  
  var str2 = "new orientation index: " + currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  console.log(str1);
  console.log(str2);
  
  //...........
  drawPiece();
}

//
//
//
//
function rotateLeft() {
  var oldstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  // current heading - 1
  // N <-- E <-- S <-- W <-- N ...
  // rN <-- rE <-- rS <-- rW <-- rN ...
  
  // NESW
  if(currentOrientationIndex <=3)
    {
      currentOrientationIndex--;// = (currentOrientationIndex - 1); // % 4;
      if (currentOrientationIndex < 0) currentOrientationIndex = 3;
    }
      
    
  // rN rE rS rW
  else
    {
      currentOrientationIndex--; // = 4 + (currentOrientationIndex - 1);
      if (currentOrientationIndex < 4) currentOrientationIndex = 7;
    }
    
  
  var newstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  var str = "orientations - old: " + oldstr + "  new: " + newstr;
  console.log(str);
  
  //...........
  drawPiece();
}


//
// 1 --> 7, 7 --> 1, 3 --> 5, 5 --> 3
//
//
function flipVertical() {
   var oldstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  // N <--> rN, S <--> rS
  // E <--> rW, W <--> rE
  //  N  E  S  W
  //  ↕  ↕  ↕  ↕
  // rN rW rS rE
  
  
  // N S rN rS (even indices)
  if(currentOrientationIndex % 2 === 0)
    {
      currentOrientationIndex = (currentOrientationIndex + 4) % 8;
    }
      
    
  // E rW W rE (odd indices)
  else
    {
      currentOrientationIndex = 8 - currentOrientationIndex;
    }
  
  
  
  var newstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  var str = "orientations - old: " + oldstr + "  new: " + newstr;
  console.log(str);
  
  //...........
  drawPiece();
}



//
// 0 --> 6, 6 --> 0, 2 --> 4, 4 --> 2
//
//
function flipHorizontal() {
   var oldstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  
  // N <--> rS, S <--> rN
  // E <--> rE, W <--> rW
  //  N  E  S  W
  //  ↕  ↕  ↕  ↕
  // rS rE rN rW
  
    // N S rN rS (even indices)
  if(currentOrientationIndex % 2 === 0)
    {
      currentOrientationIndex = 6 - currentOrientationIndex;
    }
      
    
  // E rW W rE (odd indices)
  else
    {
      currentOrientationIndex = (currentOrientationIndex + 4) % 8;
    }
  
  
  var newstr = currentOrientationIndex + " " +  orientations[currentOrientationIndex];
  var str = "orientations - old: " + oldstr + "  new: " + newstr;
  console.log(str);
  
  //...........
  drawPiece();
}




Polyonimo.prototype.rotateLeft = rotateLeft();
Polyonimo.prototype.rotateRight = rotateRight();
Polyonimo.prototype.flipVertical = flipVertical();
Polyonimo.prototype.flipHorizontal = flipHorizontal();

*/



/*
function createDynamicPentomino(pieceName) {
  
  var pieceInfo = emptyPiece;
  
  currentPieceName = pieceName; // .......
  
  switch (pieceName) {
  case "v3": pieceInfo = v3; break;
  case "v5": pieceInfo = v5; break;
  case "l4": pieceInfo = l4; break;
  case "l5": pieceInfo = l5; break;
  case "z4": pieceInfo = z4; break;
  case "z5": pieceInfo = z5; break;
  case "t4": pieceInfo = t4; break;
  case "t5": pieceInfo = t5; break;
  case "x5": pieceInfo = x5; break;
  case "y5": pieceInfo = y5; break;
  case "w5": pieceInfo = w5; break;
  case "f5": pieceInfo = f5; break;
  case "p5": pieceInfo = p5; break;
  case "o4": pieceInfo = o4; break;
      
  case "n5": pieceInfo = n5; break;
  case "i5": pieceInfo = i5; break;
  case "i4": pieceInfo = i4; break;
  case "i3": pieceInfo = i3; break;
  case "i2": pieceInfo = i2; break;
  case "i1": pieceInfo = i1; break;
  default: break;
}
  
  var rowLabels = ['a', 'b', 'c', 'd', 'e'];
  
  var pentDiv = document.createElement("DIV");
  pentDiv.className = "piece";
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      unit.appendChild(document.createTextNode(unit.id));
    if(pieceInfo[i]) unit.className = "filled";
    
      pentDiv.appendChild(unit);
    if ((i+1) % 5 === 0)    pentDiv.appendChild(document.createElement("BR"));
  }
  
  
 
  pentDiv.appendChild(document.createElement("BR"));
  
  document.getElementById("dynamic-pentomino").appendChild(pentDiv);
}*/










/*

// function createPentomino(pieceInfo) {
//function createPentomino() {
function createPentomino(pieceName) {
  
  var pieceInfo = [0, 0, 0, 0, 0, 
                   0, 0, 0, 0, 0, 
                   0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0];
  
  if(pieceName == "v3") pieceInfo = v3; // getV3(); //v3;
  if(pieceName == "v5") pieceInfo = v5; // getV5(); //v5;
  if(pieceName == "l4") pieceInfo = l4; // getL4(); //l4;
  if(pieceName == "l5") pieceInfo = l5; // getL5(); //l5;
  if(pieceName == "z4") pieceInfo = z4;
  if(pieceName == "z5") pieceInfo = z5;
  if(pieceName == "t4") pieceInfo = t4;
  if(pieceName == "t5") pieceInfo = t5;
  if(pieceName == "x5") pieceInfo = x5;
  if(pieceName == "y5") pieceInfo = y5;
  if(pieceName == "w5") pieceInfo = w5;
  if(pieceName == "f5") pieceInfo = f5;
  if(pieceName == "p5") pieceInfo = p5;
  if(pieceName == "o4") pieceInfo = o4;
  
  //console.log("pieceInfo: ", pieceInfo);
  
  var rowLabels = ['a', 'b', 'c', 'd', 'e'];
  
  var pentDiv = document.createElement("DIV");
  pentDiv.className = "piece";
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      unit.appendChild(document.createTextNode(unit.id));
    if(pieceInfo[i]) unit.className = "filled";
    
      pentDiv.appendChild(unit);
    // i should be able to do this through css alone somehow...
    if ((i+1) % 5 === 0)    pentDiv.appendChild(document.createElement("BR"));
  }
  
  /*for (var i=1; i<6; i++){
    for (var j=1; j<6; j++) {
     var unit = document.createElement("DIV");
      unit.id = rowLabels[i-1] + j;
      unit.appendChild(document.createTextNode(unit.id));
      
      console.log('(i-1)*(j-1)', (i-1)*(j-1));
      if(pieceInfo[(i-1)*(j-1)]) unit.className = "filled";
      
      pentDiv.appendChild(unit);
    }* /
   // pentDiv.appendChild(document.createElement("BR"));
 // }
 
  pentDiv.appendChild(document.createElement("BR"));
  
  document.getElementById("pentomino").appendChild(pentDiv);
}


function getV3() { return v3;
  //return [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
function getV5() { return v5; }
function getL4() { return l4; }
function getL5() { return l5; }
*/



