// polyonimos
var pieceNames = [
"i1", "i2", "i3", "i4", "i5", 
"o4", "f5", "n5", "p5", 
"v3", "v5", 
"t4", "t5", 
"z4", "z5", 
"w5", "x5", "y5" ];

/* var pieces = [
i1, i2, "i3", "i4", "i5", "o4", "f5", "n5", "p5", 
"v3", "v5", "t4", "t5", "z4", "z5", "w5", "x5", "y5" ];*/

// o4, f5, p5, y5, x5, w5, n5, v3, v5, z4, z5, t4,t5, l4, l5, i4, i5, i1, i2, i3
// n5, i5, i4, i3, i2, i1

//var defaultOrientations = ["N", "E", "S", "W"];
//var reflectedOrientations = ["rN", "rE", "rS", "rW"];

var orientations = ["N", "E", "S", "W", "rN", "rE", "rS", "rW"];

// can i do enums or something....???
// var orientationLayout = [North, East, South, West, rNorth, rEast, rSouth, rWest];

  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// for each piece
//var currentOrientationIndex = 0; //"N";
//var currentOrientation = orientations[currentOrientationIndex]; 
//var currentPieceName = "v3";  


// -----------------------------------------------------------
// PIECES
// The structures of all pieces in their default orientation
// i.e. "North", no rotation
// (note: variable name matches the appearance in this layout)
// -----------------------------------------------------------
  var i1 = [0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];

  var i2 = [0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var i3 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0];

  var i4 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0];

  var i5 = [0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0];
  

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

  var o4 = [0, 0, 0, 0, 0, 
            0, 0, 1, 1, 0, 
            0, 0, 1, 1, 0,
            0, 0, 0, 0, 0,
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

  var y5 = [0, 0, 0, 0, 0, 
            0, 0, 1, 0, 0, 
            0, 1, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0];

// Empty/default piece
var emptyPiece = [0, 0, 0, 0, 0, 
                  0, 0, 0, 0, 0, 
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0]; 




// -----------------------------------------------------------
// ORIENTATIONS
// Order to read indices of default orientation of piece
// for all possible orientations
// r prefix indicates reflection
// I created a math formula to calculate this
// but calculating the rotation for each piece
// with this size of "2d grid" (actually just 1d array) seems inefficient
// -----------------------------------------------------------

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
  



// -----------------------------------------------------------
// ROUNDS
// The grid game board layout for each of the 4 different rounds
// maybe actually use 2d arrays here?
// but initialize only once replace with these data?
// -----------------------------------------------------------  

var round1 = [
// all normal dots
// 6 columns (abcdef) by 12 rows (1-12)
];


var round2 = [
// c3, 7f = 3
// b5, d10 = 2
// e4, a8, b8 = 1
];

var round3 = [
// -5 = a1, f1, a8, b7, c11, e4, f5, f9
// 3 = 6b, 5e
// 2 = e9, e10
// 1 = b2, b3

];


var round4 = [
// purple X = e2, c3
// blue 6pt star = 11a, 8f
// green diamond = 4f, 7c
// pink circle = 7d, 5a
// orange triangle = 9b, 10e
];
