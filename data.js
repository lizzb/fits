// -----------------------------------------------------------
// PIECES
// The structures of all pieces in their default orientation
// i.e. "North", no rotation
// (note: variable name matches the appearance in this layout)
// -----------------------------------------------------------

// Empty/default piece ... emptyPiece
var none = [0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0]; 


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

var n5 = [0, 1, 0, 0, 0,  //......................
          0, 1, 1, 0, 0, 
          0, 0, 1, 0, 0,
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
// BOARDS for 4 ROUNDS 
// The grid game board layout for each of the 4 different rounds
// maybe actually use 2d arrays here?
// but initialize only once replace with these data?
// -----------------------------------------------------------  



// board = 72
// 6 columns (abcdef) by 12 rows (1-12)

// fake enums?? can i do enums in JS?
var dot = -1;
var plus1 = 1;
var plus2 = 2;
var plus3 = 3;
var minus5 = -5; // add1 sub1 instead? symbol1 sym1
//var symb1, symb2, symb3, symb4 = 0;

// Variables for the 4th round board
var symb1 = "&#x2736;"; // blue 6pt star
var symb2 = "&#x25B2;"; // orange triangle
var symb3 = "&#x2b24;"; // pink circle
var symb4 = "&#x2b25;"; // green diamond
var symb5 = "&#x2716;"; // purple X

// blue 6pt star = 11a, 8f ... &#x2736;
// orange triangle = 9b, 10e ... &#x25B2; 
// pink circle = 7d, 5a ... &#x2b24;
// green diamond = 4f, 7c ... &#x2b25;
// purple X = e2, c3 ... &#x2716; 



// all normal dots
var board0 = [
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0
];

var board1 = [
//a   b    c    d    e    f
dot, dot, dot, dot, dot, dot,   // 1
dot, dot, dot, dot, dot, dot,   // 2
dot, dot, dot, dot, dot, dot,   // 3
dot, dot, dot, dot, dot, dot,   // 4
dot, dot, dot, dot, dot, dot,   // 5
dot, dot, dot, dot, dot, dot,   // 6
dot, dot, dot, dot, dot, dot,   // 7
dot, dot, dot, dot, dot, dot,   // 8
dot, dot, dot, dot, dot, dot,   // 9
dot, dot, dot, dot, dot, dot,   // 10
dot, dot, dot, dot, dot, dot,   // 11
dot, dot, dot, dot, dot, dot    // 12
];

/*
 a    b    c    d    e    f
*/
var board2 = [
dot, dot, dot, dot, dot, dot,   // 1
dot, dot, dot, dot, dot, dot,   // 2
dot, dot, plus3, dot, dot, dot, // 3
dot, dot, dot, dot, plus1, dot,   // 4
dot, plus2, dot, dot, dot, dot,   // 5
dot, dot, dot, dot, dot, dot,   // 6
dot, dot, dot, dot, dot, plus3,   // 7
plus1, plus1, dot, dot, dot, dot,   // 8
dot, dot, dot, dot, dot, dot,   // 9
dot, dot, dot, plus2, dot, dot,   // 10
dot, dot, dot, dot, dot, dot,   // 11
dot, dot, dot, dot, dot, dot    // 12
];

var board3 = [
//a   b    c    d    e    f
minus5, dot, dot, dot, dot, minus5,   // 1
dot, plus1, dot, dot, dot, dot,   // 2
dot, plus1, dot, dot, dot, dot,   // 3
dot, dot, dot, dot, minus5, dot,   // 4
dot, dot, dot, dot, plus3, minus5,   // 5
dot, plus3, dot, dot, dot, dot,   // 6
dot, minus5, dot, dot, dot, dot,   // 7
minus5, dot, dot, dot, dot, dot,   // 8
dot, dot, dot, dot, plus2, minus5,   // 9
dot, dot, dot, dot, plus2, dot,   // 10
dot, dot, minus5, dot, dot, dot,   // 11
dot, dot, dot, dot, dot, dot    // 12
];


//var board4 = [];

var board4 = [
//a   b    c    d    e    f
dot, dot, dot, dot, dot, dot,   // 1
dot, dot, dot, dot, symb5, dot,   // 2
dot, dot, symb5, dot, dot, dot,   // 3
dot, dot, dot, dot, dot, symb4,   // 4
symb3, dot, dot, dot, dot, dot,   // 5
dot, dot, dot, dot, dot, dot,   // 6
dot, dot, symb4, symb3, dot, dot,   // 7
dot, dot, dot, dot, dot, symb1,   // 8
dot, symb2, dot, dot, dot, dot,   // 9
dot, dot, dot, dot, symb2, dot,   // 10
symb1, dot, dot, dot, dot, dot,   // 11
dot, dot, dot, dot, dot, dot    // 12
];


//var board2 = [];
// c3, 7f = 3
// b5, d10 = 2
// e4, a8, b8 = 1


//var board3 = [];
// -5 = a1, f1, a8, b7, c11, e4, f5, f9
// 3 = 6b, 5e
// 2 = e9, e10
// 1 = b2, b3




/*
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
];*/



