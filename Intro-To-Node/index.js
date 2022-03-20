// const fs = require("fs");
//
// fs.copyFileSync("file1.txt","file2.txt");

var superheroes = require("superheroes");

var mySuperheroName = superheroes.random()


var supervillains = require("supervillains");

var supervillainName = supervillains.random();

console.log(mySuperheroName+" >> "+supervillainName);
