/*
 Method -1-
var Saphiens = require("./saphiens");

var x = new Saphiens("Emre");
console.log("test");
x.walk();
*/

// Method 2 (Common)
/*
var library = require("./baseHuman");

var x = new library.Saphiens("Emre");

var webpack = require("webpack");

x.walk();

// we need to write  ' npm init ' on Terminal to start npm
// after than we need to write ' npm i --save weboack ' to start local webpack.
// node_mudules is add by that code.

*/

var Saphiens =require('./saphiens');


var x = new Saphiens("Emrah Öz");
 
window.x = x;
