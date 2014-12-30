window.addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'fitris';
}, false);

  // orientations = ["N", "E", "S", "W"];
  

var orientations = ["N", "E", "S", "W", "rN", "rE", "rS", "rW"];
//var reflectedOrientations = ["rN", "rE", "rS", "rW"];

var currentOrientationIndex = 0; //"N";
var currentOrientation = orientations[currentOrientationIndex]; 
var currentPieceName = "v3";



  var v3 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];
  
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

// Order to read indices of default orientation of piece
// for all possible orientations
// r = reflection
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
  
  
  
  
var emptyPiece = [0, 0, 0, 0, 0, 
                  0, 0, 0, 0, 0, 
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0]; 







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
}


function drawPiece() {
//function drawPiece(pieceName, pieceOrientation) {
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
  var rowLabels = ['a', 'b', 'c', 'd', 'e'];
  var pentDiv = document.createElement("DIV");
  pentDiv.className = "piece";
  for (var i=0; i<25; i++) { 
    var unit = document.createElement("DIV");
      unit.id = rowLabels[i%5] + Math.floor(i/5 + 1);
      //unit.appendChild(document.createTextNode(unit.id));
    if(defaultPieceInfo[pieceLayout[i]]) unit.className = "filled";
    
      pentDiv.appendChild(unit);
    if ((i+1) % 5 === 0)    pentDiv.appendChild(document.createElement("BR"));
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
  
  
    pentDiv.appendChild(document.createElement("BR"));
  
  document.getElementById("dynamic-pentomino").appendChild(pentDiv);
  
}

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
    }*/
   // pentDiv.appendChild(document.createElement("BR"));
 // }
 
  pentDiv.appendChild(document.createElement("BR"));
  
  document.getElementById("pentomino").appendChild(pentDiv);
}


function getV3() {
  //return v3;
  return [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function getV5() {
  return v5;
}

function getL4() {
  return l4;
}

function getL5() {
  return l5;
}




/*
function makeV5() { 
  createPentomino(getV5());
}

function makeV3() {
  createPentomino(getV3());
}

function makeL5() {
  createPentomino(getL5());
}

function makeL4() {
  createPentomino(getL4());
}*/


function isCovered() {
  
}

function isEmpty() {
  
}

function isValidPlacement() {
  
}

